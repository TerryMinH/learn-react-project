/*
 * @Author: TerryMin
 * @Date: 2021-12-14 17:26:05
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-14 17:26:06
 * @Description: file not
 */
import React, { Component, createRef } from 'react';

export default class Child1 extends Component {
  handleClick = () => {
    this.txt.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(el) => {this.txt = el;}}
          type='text'
        />
        <button onClick={this.handleClick}>focus</button>
      </div>
    );
  }
}
