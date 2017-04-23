import React from 'react'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types'

const Header = (props) => (
  <AppBar
    title={props.title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
