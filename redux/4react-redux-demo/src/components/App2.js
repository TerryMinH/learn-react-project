/*
 * @Author: TerryMin
 * @Date: 2020-11-05 10:38:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-02 10:58:59
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App2 extends Component {
  static propTypes = {
    isColor: PropTypes.bool.isRequired,
    changeColor: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.changeColor()
  }

  render () {
    const { isColor } = this.props;
    return <div>
      <div style={{ backgroundColor: isColor ? 'red' : 'pink', width: '100px', height: '100px' }}></div>
      <button onClick={this.handleClick}>{isColor ? 'Red' : 'Pink'}</button>
    </div>
  }

}
