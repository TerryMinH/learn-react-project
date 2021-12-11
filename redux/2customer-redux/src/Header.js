/*
 * @Author: TerryMin
 * @Date: 2020-01-30 11:33:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-11-08 14:30:05
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.theme }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    theme: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)
export default Header