/*
 * @Author: TerryMin
 * @Date: 2020-11-05 10:38:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 18:06:56
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App2 extends Component {
  static propTypes = {
    val: PropTypes.array.isRequired,
    changeNumberAsync: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    console.log(this.props);
    const { val } = this.props;
    let targetValue = e.target.value;
    this.props.changeNumberAsync([...val, targetValue])
  }

  render () {
    const { val } = this.props;
    return <div>
      <div>
        {
          val && val.map((item, index) => <div key={index}>
            {item}
          </div>)
        }
      </div>
      <input type="text" onChange={this.handleChange} />
    </div>
  }

}
