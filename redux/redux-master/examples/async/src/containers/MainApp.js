/*
 * @Author: TerryMin
 * @Date: 2022-01-02 11:09:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 13:48:18
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