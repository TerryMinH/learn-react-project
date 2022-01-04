/*
 * @Author: TerryMin
 * @Date: 2021-12-01 11:39:34
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 13:53:24
 * @Description: file not
 */
import { connect } from 'react-redux'
import { changeNumber } from '../actions'
import TestUi from '../components/TestUi'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return { amount: state.dealNumber }
}
// const mapStateToProps = (state) => ({
//   amount: state.dealNumber
// })

export default connect(
  mapStateToProps,
  { changeNumber }
)(TestUi)