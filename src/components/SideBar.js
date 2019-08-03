import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Drawer, Container, Header } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const SideBarContent = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]}>
    <Text>
      <Icon name="rocket" size={30} color="#900" />
      Conteúdo side bar
    </Text>
  </View>
);

const SideBar = ({children}) => {
  const [drawer, setDrawer] = useState(null);

  closeDrawer = () => drawer._root.close();
  openDrawer = () => drawer._root.open();

  return (
    <Drawer
      ref={(ref) => setDrawer(ref)}
      content={<SideBarContent />}
      onClose={() => closeDrawer()}
    >
      <Container>
        <Header>
          <Container style={{ flexDirection: 'row' }}>
            <Icon 
              onPress={() => openDrawer()} 
              name="bars" 
              size={30} 
              color="#fff" 
            />
          </Container>
        </Header>

        <View style={styles.container}>
          {children}
          <Icon 
              onPress={() => openDrawer()} 
              name="bars" 
              size={30} 
              color="#000000" 
            />
        </View>

      </Container>
    </Drawer>
  );
}

export default SideBar;