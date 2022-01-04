/*
 * @Author: TerryMin
 * @Date: 2021-12-31 11:33:28
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 11:36:41
 * @Description: file not
 */
import { CHANGECOLOR, CHANGEDECREASE, CHANGEINCREASE } from '../action-types'

export default function isChange (state = true, action) {
  console.log(state, action)
  switch (action.type) {
    case CHANGECOLOR:
      return !state
    default:
      return state
  }
}