import React, { Component, createRef } from 'react';

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus () {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  handleChild = () => {
    console.log('父组件调用子组件方法')
  }

  render () {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        {/* //此时input参数就是表示该DOM本身 */}
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}

export default class Test extends Component {
  componentDidMount () {
    console.log(this.textInput);
    //父组件自动调用子组件CustomTextInput实例的focus方法
    this.textInput.focus();
  }

  handleClick = () => {
    this.textInput.handleChild();
  }

  render () {
    return (
      <div>
        <CustomTextInput
          ref={(input) => { this.textInput = input; }} />
        <button onClick={this.handleClick}>父组件按钮</button>
      </div>
    );
  }
}