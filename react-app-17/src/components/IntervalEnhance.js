/*
 * @Author: TerryMin
 * @Date: 2022-04-17 17:53:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-17 18:16:26
 * @Description: file not
 */
import React from 'react';

export const IntervalEnhance = ComposeComponent => class extends ComposeComponent {
  static displayName = 'ComponentEnhancedWithIntervalHOC';
  constructor (props) {
    super(props);
    this.state = {
      seconds: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  tick () {
    this.setState({
      seconds: this.state.seconds + 1000
    })
  }
  render(){
    return (
      <ComposeComponent {...this.props} {...this.state}/>
    )
  }
}
