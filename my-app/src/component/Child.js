/*
 * @Author: TerryMin
 * @Date: 2021-04-06 21:23:13
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-04-06 21:56:45
 * @Description: file not
 */
import React, { Component } from "react";
import './Child.css';
export class Child extends Component {
  static defaultProps = {
    data: {},
    isMultiEquity: false,
    className: '',
  }

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state={
      name:'xiaoming'
    }
  }
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log(nextProps, prevState);
    
    return null;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log(prevProps, prevState);
    return 11;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
  }

  render () {
    return (
      <div className="child">
        <div>子组件内容</div>
      </div>
    )
  }
}
