import React, { useEffect, useState } from 'react';
import { Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  // TouchableHighlight,
  View,
  // Modal,
  PermissionsAndroid,
  ActivityIndicator } from 'react-native';
import DeviceList from '../components/bluetooth/DeviceList';
import BluetoothSerial from 'react-native-bluetooth-serial'

const Button = ({ title, onPress, style, textStyle }) =>
  <TouchableOpacity style={[ styles.button, style ]} onPress={onPress}>
    <Text style={[ styles.buttonText, textStyle ]}>{title.toUpperCase()}</Text>
  </TouchableOpacity>

function BluetoothPageContainer() {
   const [ isEnabled, setEnabled ] = useState(false)
   const [ discovering, setDiscovering ] = useState(false)
   const [ devices, setDevices ] = useState([])
   const [ device, setDevice ] = useState([])
   const [ unpairedDevices, setUnpairedDevices] = useState([])
   const [ connected, setConnected ] = useState(false)
   const [ connecting, setConnecting] = useState(false)
   const [ section, setSection ] = useState(0)

  useEffect( () => {
    requestLocalPermission();
    BluetoothSerial.isEnabled().then(setEnabled);
    BluetoothSerial.list().then(setDevices);

    BluetoothSerial.on('bluetoothEnabled', () => console.tron.log('Bluetooth enabled'))
    BluetoothSerial.on('bluetoothDisabled', () => console.tron.log('Bluetooth disabled'))
    BluetoothSerial.on('error', (err) => console.tron.log(`Error: ${err.message}`))
    BluetoothSerial.on('connectionLost', () => {
      if (device) {
        console.tron.log(`Connection to device ${device.name} has been lost`)
      }
      setConnected(false)
    })
    BluetoothSerial.on('data', (data) => { console.tron.log(data); });
    BluetoothSerial.readFromDevice().then((data) => {console.tron.log(data)});
    BluetoothSerial.on('read', data => {
      console.tron.log(data);
    });

    BluetoothSerial.withDelimiter('\r').then(() => {
    
      BluetoothSerial.on('read', data => {
        console.log(data.data);
     });
    });
    
  }, [])

  async function requestLocalPermission() {
    try {
      const permission = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        console.tron.log('You can use the location');
      } else {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      }
    } catch (err) {
      console.tron.log(err);
    }
  }

  function requestEnable () {
    BluetoothSerial.requestEnable()
    .then(() => setEnabled(true))
    .catch((err) => console.tron.log(err.message))
  }

  function enable () {
    BluetoothSerial.enable()
    .then(() => setEnabled(true))
    .catch((err) => console.tron.log(err.message))
  }

  function disable () {
    BluetoothSerial.disable()
    .then(() => setEnabled(false))
    .catch((err) => console.tron.log(err.message))
  }

  function toggleBluetooth (value) {
    if (value === true) {
      enable()
    } else {
      disable()
    }
  }

  function discoverUnpaired () {
    if (discovering) {
      return false
    } else {
      setDiscovering(true)
      BluetoothSerial.discoverUnpairedDevices().then((unpairedDevices) => {
        console.tron.log(unpairedDevices)
        setUnpairedDevices(unpairedDevices)
        setDiscovering(false)
      })
      .catch((err) => console.tron.log(err.message))
    }
  }

  function cancelDiscovery () {
    if (discovering) {
      BluetoothSerial.cancelDiscovery()
      .then(() => {
        setDiscovering(false)
      })
      .catch((err) => console.tron.log(err.message))
    }
  }

  function onDevicePress (device) {
    if (section === 0) {
      connect(device)
    } else {
      pairDevice(device)
    }
  }

  function pairDevice (device) {
    BluetoothSerial.pairDevice(device.id)
    .then((paired) => {
      if (paired) {
        console.tron.log(`Device ${device.name} paired successfully`)
        setDevices((prevDevices) => {return (prevDevices.push(device))})
        unpairedDevices.filter((d) => d.id !== device.id)
      } else {
        console.tron.log(`Device ${device.name} pairing failed`)
      }
    })
    .catch((err) => console.tron.log(err.message))
  }

  function connect (device) {
    console.tron.log(device)
    setConnecting(true)
    BluetoothSerial.connect(device.id)
    .then((res) => {
      console.tron.log(`Connected to device ${device.name}`)
      setDevice(device)
      setConnected(true)
      setConnecting(false)
    })
    .catch((err) => console.tron.log(err.message))
  }

  function disconnect () {
    BluetoothSerial.disconnect()
    .then(() => setConnected(false))
    .catch((err) => console.tron.log(err.message))
  }
  
  const activeTabStyle = { borderBottomWidth: 6, borderColor: '#009688' }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <Text style={styles.heading}>Bluetooth Serial Example</Text>
        {Platform.OS === 'android'
        ? (
          <View style={styles.enableInfoWrapper}>
            <Text style={{ fontSize: 12, color: '#FFFFFF' }}>
              {isEnabled ? 'disable' : 'enable'}
            </Text>
            <Switch
              onValueChange={toggleBluetooth.bind(this)}
              value={isEnabled} />
          </View>
        ) : null}
      </View>

      {Platform.OS === 'android'
      ? (
        <View style={[styles.topBar, { justifyContent: 'center', paddingHorizontal: 0 }]}>
          <TouchableOpacity style={[styles.tab, section === 0 && activeTabStyle]} onPress={() => setSection(0)}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>PAIRED DEVICES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, section === 1 && activeTabStyle]} onPress={() => setSection(1)}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>UNPAIRED DEVICES</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {discovering && section === 1
      ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator
            style={{ marginBottom: 15 }}
            size={60} />
          <Button
            textStyle={{ color: '#FFFFFF' }}
            style={styles.buttonRaised}
            title='Cancel Discovery'
            onPress={() => cancelDiscovery()} />
        </View>
      ) : (
        <DeviceList
          showConnectedIcon={section === 0}
          connectedId={device && device.id}
          devices={section === 0 ? devices : unpairedDevices}
          onDevicePress={(device) => onDevicePress(device)} />
      )}


      <View style={{ alignSelf: 'flex-end', height: 52 }}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.fixedFooter}>
          {Platform.OS === 'android' && section === 1
          ? (
            <Button title={discovering ? '... Discovering' : 'Discover devices'} onPress={discoverUnpaired.bind(this)} />
          ) : null}
          {Platform.OS === 'android' && !isEnabled
          ? (
            <Button title='Request enable' onPress={() => requestEnable()} />
          ) : null}
        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#F5FCFF'
  },
  topBar: { 
    height: 56, 
    paddingHorizontal: 16,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' ,
    elevation: 6,
    backgroundColor: '#7B1FA2'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    color: '#FFFFFF'
  },
  enableInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tab: { 
    alignItems: 'center', 
    flex: 0.5, 
    height: 56, 
    justifyContent: 'center', 
    borderBottomWidth: 6, 
    borderColor: 'transparent' 
  },
  connectionInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  connectionInfo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#238923'
  },
  listContainer: {
    borderColor: '#ccc',
    borderTopWidth: 0.5
  },
  listItem: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  },
  fixedFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  button: {
    height: 36,
    margin: 5,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#7B1FA2',
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonRaised: {
    backgroundColor: '#7B1FA2',
    borderRadius: 2,
    elevation: 2
  }
})


export default BluetoothPageContainer;
