import React from 'react';
import { Text, View, ScrollView, Image, TouchableHighlight, StyleSheet } from 'react-native';

const DeviceList = ({ devices, connectedId, showConnectedIcon, onDevicePress }) => (
	<ScrollView style={styles.container}>
    <View style={styles.listContainer}>
      {devices.map((device, i) => {
        return (
          <TouchableHighlight
            underlayColor='#DDDDDD'
            key={`${device.id}_${i}`}
            style={styles.listItem} onPress={() => onDevicePress(device)}>
            <View style={styles.itemList}>
							<View style={styles.deviceImageContainer}>
								<Image style={styles.deviceImage} source={require('~/images/devices.png')} />
							</View>
              <View style={styles.deviceInfo}>
                <Text style={styles.deviceTextInfo}>{device.name ? device.name : 'Unknown device'}</Text>
                <Text>{device.id}</Text>
              </View>
							{showConnectedIcon ? (
                <View style={styles.connectedImageContainer}>
                  {connectedId === device.id ? (
                    <Image style={styles.connectedImage} source={require('~/images/bluetooth-connected.png')} />
                  ) : null}
                </View>
              ) : null}
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
	container: {
    flex: 0.9,
    backgroundColor: '#F5FCFF'
	},
	listContainer: {
    borderColor: '#ccc',
    borderTopWidth: 0.5
  },
	listItem: {
    flex: 1,
    height: 48,
		paddingHorizontal: 16,
		paddingVertical: 8,
    borderColor: '#ccc',
		borderBottomWidth: 0.5,
		flexDirection: 'row',
    justifyContent: 'space-between'
	},
	itemList: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	deviceImageContainer: {
		width: 48, 
		height: 48, 
		opacity: 0.4
	},
	deviceImage: {
		resizeMode: 'contain', 
		width: 24, 
		height: 24, 
		flex: 1
	},
	deviceInfo: {
		justifyContent: 'space-around', 
		flexDirection: 'column', 
		alignItems: 'center'
	},
	deviceTextInfo: {
		fontWeight: 'bold'
	},
	connectedImageContainer: {
		width: 48, 
		height: 48, 
		opacity: 0.4, 
		justifyContent: 'flex-end', 
		alignItems: 'flex-end'
	},
	connectedImage: {
		resizeMode: 'contain', 
		width: 24, 
		height: 24, 
		flex: 1
	}

})

export default DeviceList;
