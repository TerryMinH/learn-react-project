/*
 * @Author: TerryMin
 * @Date: 2021-12-01 11:39:34
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 10:39:05
 * @Description: file not
 */
import {connect} from 'react-redux'
import {changeColor} from '../redux/actions'
import App2 from '../components/App2'

export default connect(
  state=>({isColor:state}),
  {changeColor}
)(App2)