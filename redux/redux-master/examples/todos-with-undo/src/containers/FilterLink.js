/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 14:19:41
 * @Description: file not
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  console.log(state,ownProps);
  return { active: ownProps.filter === state.visibilityFilter }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onBtnClick: () => {
    console.log(ownProps);
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
