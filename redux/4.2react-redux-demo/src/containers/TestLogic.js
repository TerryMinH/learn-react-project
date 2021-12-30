/*
 * @Author: TerryMin
 * @Date: 2021-12-01 11:39:34
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 09:54:26
 * @Description: file not
 */
import { connect } from 'react-redux'
import { changeNumber } from '../redux/actions'
import TestUi from '../components/TestUi'

export default connect(
  state => ({ amount: state }),
  { changeNumber }
)(TestUi)