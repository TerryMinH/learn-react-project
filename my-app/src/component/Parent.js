/*
 * @Author: TerryMin
 * @Date: 2021-04-06 21:23:13
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-04-06 21:49:17
 * @Description: file not
 */
import React, { Component } from "react";
import { Child } from './Child'
import './Parent.css';

export class Parent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      data: {
        name: 'TerryMin',
        age: '28',
      }
    }
  }

  change = () => {
    this.setState({
      data: {
        name: 'ZhangSan',
        age: '20',
      },
      className:'deer'
    })
  }

  render () {
    const { data,className } = this.state;
    return (
      <div className="parent">
        <div>我是父组件容器</div>
        <div onClick={this.change}>修改子元素内容</div>
        <Child data={data} className={className}></Child>
      </div>
    )
  }
}
