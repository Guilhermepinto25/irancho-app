import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  openDrawer: [],
  closeDrawer: []
})

const INITIAL_STATE = {
  isDrawerOpen: false
}

const open = () => ({
  isDrawerOpen: true
})

const close = () => ({
  isDrawerOpen: false
})

export default createReducer(INITIAL_STATE, {
  [Types.OPEN_DRAWER]: open,
  [Types.CLOSE_DRAWER]: close
})