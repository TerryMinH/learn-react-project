/*
 * @Author: TerryMin
 * @Date: 2021-12-31 11:33:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 11:33:38
 * @Description: file not
 */
import { CHANGECOLOR, CHANGEDECREASE, CHANGEINCREASE } from '../action-types'

export default function dealNumber (state = 0, action) {
  console.log(state, action)
  switch (action.type) {
    case CHANGEDECREASE:
      return state + 1;
    case CHANGEINCREASE:
      return state - 1;
    default:
      return state
  }
}