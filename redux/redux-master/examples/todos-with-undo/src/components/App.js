/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 11:05:55
 * @Description: file not
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import TestLogic from '../containers/TestLogic'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
    <TestLogic/>
  </div>
)

export default App
