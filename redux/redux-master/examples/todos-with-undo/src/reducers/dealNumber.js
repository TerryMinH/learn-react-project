/*
 * @Author: TerryMin
 * @Date: 2021-12-31 11:33:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-02 10:41:38
 * @Description: file not
 */
import { CHANGEDECREASE, CHANGEINCREASE } from '../actions'

const dealNumber = (state = 0, action) => {
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
export default dealNumber
