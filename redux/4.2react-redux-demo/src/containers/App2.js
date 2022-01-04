/*
 * @Author: TerryMin
 * @Date: 2021-12-30 14:04:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 17:43:10
 * @Description: file not
 */
import { changeNumberAsync } from '../redux/actions'
import { connect } from 'react-redux'
import App1 from '../components/App1'


// connect连接组件和redux
export default connect(
  state => ({ val: state }), // 这里的state是reducer管理的state
  { changeNumberAsync } // 这俩是action函数。这里最好和声明接收的参数保持一致，就更简洁了。
)(App1) //App2是连接的组件

