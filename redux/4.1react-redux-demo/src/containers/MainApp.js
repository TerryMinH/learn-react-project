/*
 * @Author: TerryMin
 * @Date: 2021-12-31 10:39:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 13:30:45
 * @Description: file not
 */
import React, { Component } from 'react';
import App from './App'
import TestLogic from './TestLogic'

class MainApp extends Component {

  render () {
    return (
      <div>
        <App />
        <TestLogic />
      </div>
    )
  }
}

export default MainApp