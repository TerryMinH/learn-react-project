/*
 * @Author: TerryMin
 * @Date: 2021-12-30 13:58:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 18:08:42
 * @Description: file not
 */
import { CHANGENUMBER } from './action-types'

export function isNumber (state = '', action) {
  console.log(state, action);
  switch (action.type) {
    case CHANGENUMBER:
      return action.data
    default:
      return state
  }
}

