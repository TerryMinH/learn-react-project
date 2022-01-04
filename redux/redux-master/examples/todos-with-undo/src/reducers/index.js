/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 11:44:45
 * @Description: file not
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dealNumber from './dealNumber'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  dealNumber
})

export default todoApp
