/*
 * @Author: TerryMin
 * @Date: 2021-12-31 11:34:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 11:34:04
 * @Description: file not
 */
import { combineReducers } from 'redux'
import isChange from './isChange'
import dealNumber from './dealNumber'

const rootReducer = combineReducers({
  isChange,
  dealNumber
})

export default rootReducer