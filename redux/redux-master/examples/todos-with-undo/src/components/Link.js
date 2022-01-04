import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onBtnClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={e => { // eslint-disable jsx-a11y/anchor-is-valid
      e.preventDefault()
      onBtnClick()
    }}>
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onBtnClick: PropTypes.func.isRequired
}

export default Link
