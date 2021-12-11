/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:24:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-02 11:23:12
 * @Description: file not
 */
import {createStore, applyMiddleware} from 'redux'
import {isChange} from './reducers'
import thunk from 'redux-thunk'

// 生成一个store对象，连接管理员counter
const store = createStore(
	isChange
)
// console.log(store)

export default store 

