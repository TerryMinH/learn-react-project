/*
 * @Author: TerryMin
 * @Date: 2020-11-05 10:38:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 14:13:02
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App2 extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    incrementAction: PropTypes.func.isRequired,
    decrementAction: PropTypes.func.isRequired,
    delayAddAction: PropTypes.func.isRequired
  }

  increment = () => {
    const number = this.select.value * 1;
    this.props.incrementAction(number);
  }

  decrement = () => {
    const number = this.select.value * 1;
    this.props.decrementAction(number);
  }

  delayAdd = () => {
    const number = this.select.value * 1;
    this.props.delayAddAction(number);
  }

  render () {
    const { count } = this.props;
    return <div>
      <p>click {count} time{count >= 2 ? <span>s</span> : null} </p>
      <div>
        <select ref={select => this.select = select} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
                    <button onClick={this.increment} >+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.delayAdd} >异步延时增加</button>
      </div>
    </div>
  }

}
