/*
 * @Author: TerryMin
 * @Date: 2020-11-05 10:38:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 11:08:12
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TestUi extends Component {
  static propTypes = {
    amount: PropTypes.any.isRequired,
    changeNumber: PropTypes.func.isRequired
  }

  changeBtn = (type) => () => {
    console.log(type);
    this.props.changeNumber && this.props.changeNumber(type);
  }

  render () {
    const { amount } = this.props;
    console.log(this.props)
    return <div>
      <div>操作的数量：{amount}</div>
      <button onClick={this.changeBtn('changeDecrease')}>增加</button>
      <button onClick={this.changeBtn('changeIncrease')}>减少</button>
    </div>
  }

}