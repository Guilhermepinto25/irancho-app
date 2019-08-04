import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Drawer, View, Text, Header, Left, Body, Right, Title, Container } from 'native-base'

const navItems = [
  { label: 'Home', icon: 'home', onClick: () => {} },
  { label: 'Configurações', icon: 'cogs', onClick: () => {} },
  { label: 'Logout', icon: 'sign-out-alt', onClick: () => {} }
]

const SideBarContent = () => (
  <Container style={[styles.container, { backgroundColor: '#fff' }]}>
    <View style={styles.iranchoContainer}>
      <Icon name="user" size={30} color="#454445" />
      <Text>iRancho</Text>
    </View>
    <View style={styles.navigationItems}>
      {navItems.map(item => (
        <Text>
          <Icon name={item.icon} size={25} color="#454445" />
          {item.label}
        </Text>
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
          <Title style={styles.headerTitle}>
            iRancho App
          </Title>
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
    color: '#454445'
  }
})

export default SideBar;