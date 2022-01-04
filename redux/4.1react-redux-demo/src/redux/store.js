/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:24:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 13:29:54
 * @Description: file not
 */
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
// import { isChange, dealNumber } from './reducers'
import thunk from 'redux-thunk'

// 生成一个store对象，连接管理员counter
const store = createStore(
  // dealNumber
  reducer
)
// console.log(store)

export default store

