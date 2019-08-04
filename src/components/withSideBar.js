import React from 'react'
import SideBar from '~/components/layout/SideBar'

const withSideBar = (Component) => {
  return (props) => (
    <SideBar>
      <Component {...props} />
    </SideBar>
  )
}

export default withSideBar;