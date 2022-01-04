/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 10:34:35
 * @Description: file not
 */
import { combineReducers } from 'redux'
import {
  postsBySubreddit,
  selectedSubreddit
} from './subreddit'
import { dealNumber } from './dealNumber'

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  dealNumber
})

export default rootReducer
