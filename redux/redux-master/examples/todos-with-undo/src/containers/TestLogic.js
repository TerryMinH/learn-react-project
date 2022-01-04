/*
 * @Author: TerryMin
 * @Date: 2021-12-01 11:39:34
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 11:41:16
 * @Description: file not
 */
import { connect } from 'react-redux'
import { changeNumber } from '../actions'
import TestUi from '../components/TestUi'

const mapStateToProps = (state) => ({
  amount: state.dealNumber
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     console.log(ownProps);
//     dispatch(changeNumber)
//   }
// })

const TestLogic = connect(
  mapStateToProps,
  { changeNumber }
)(TestUi)

// const TestLogic = connect(
//   state => ({ amount: state }),
//   { changeNumber }
// )(TestUi)

export default TestLogic