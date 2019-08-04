import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Drawer, View, Header, Left, Body, Right, Container } from 'native-base'
import RalewayText from '~/components/layout/RalewayText'

const navItems = [
  { label: 'Home', icon: 'home', onClick: () => {} },
  { label: 'Configurações', icon: 'cogs', onClick: () => {} },
  { label: 'Logout', icon: 'sign-out-alt', onClick: () => {} }
]

const SideBarContent = () => (
  <Container style={[styles.container, { backgroundColor: '#fff' }]}>
    <View style={styles.iranchoContainer}>
      <Icon name="user" size={30} color="#454445" />
      <RalewayText>iRancho App</RalewayText>
    </View>
    <View style={styles.navigationItems}>
      {navItems.map(item => (
        <RalewayText>
          <Icon name={item.icon} size={25} color="#454445" />
          {item.label}
        </RalewayText>
      ))}
    </View>
  </Container>
)

const SideBar = ({ children }) => {
  let drawer = null

  openDrawer = () => drawer._root.open()
  closeDrawer = () => drawer._root.close()

  return (
    <Drawer
      ref={(ref) => drawer = ref}
      content={<SideBarContent />}
      onClose={closeDrawer}
    >
      <Header style={styles.header}>
        <Left>
          <Icon
            onPress={openDrawer}
            name="bars"
            size={30}
            color="#454445"
          />
        </Left>
        <Body>
          <RalewayText style={styles.headerTitle}>
            iRancho App
          </RalewayText>
        </Body>
        <Right />
      </Header>
      <Container>
        {children}
      </Container>
    </Drawer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  iranchoContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#eaeaea',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  navigationItems: {
    padding: 10
  }, 
  header: {
    backgroundColor: '#eaeaea'
  },
  headerTitle: {
    color: '#454445',
    fontSize: 20,
  }
})

export default SideBar;