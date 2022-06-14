/*
 * @Author: TerryMin
 * @Date: 2022-04-15 15:37:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-16 09:51:11
 * @Description: file not
 */
import React, { Component } from 'react';

function ProfilePage (props) {
  console.log(props);
  
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>函数Follow</button>
  );
}

class ProfilePageClass extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render () {
    return <button onClick={this.handleClick}>类Follow</button>;
  }
}

// class CycleChild extends Component {
//   constructor() {
//     super();
//     console.log(this);
//     this.state = {
//       currentId: 0,
//       list: []
//     }
//   }

//   static getDerivedStateFromProps (nextProps, prevState) {
//     console.log(nextProps, prevState);

//     if (prevState.currentId !== nextProps.itemId) {
//       return {
//         currentId: nextProps.itemId
//       };
//     }
//     return null;
//   }

//   getSnapshotBeforeUpdate (prevProps, prevState) {
//     console.log(prevProps, prevState);

//     // Are we adding new items to the list?
//     // Capture the scroll position so we can adjust scroll later.
//     if (prevProps.list.length < this.props.list.length) {
//       return (
//         this.listRef.scrollHeight - this.listRef.scrollTop
//       );
//     }
//     return null;
//   }

//   componentDidUpdate (prevProps, prevState, snapshot) {
//     console.log(prevProps, prevState, snapshot);

//     // If we have a snapshot value, we've just added new items.
//     // Adjust scroll so these new items don't push the old ones out of view.
//     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//     if (snapshot !== null) {
//       this.listRef.scrollTop =
//         this.listRef.scrollHeight - snapshot;
//     }
//   }

//   render () {
//     const { currentId } = this.state;
//     return (
//       <div>
//         <div>我是子组件{currentId}</div>
//       </div>
//     )
//   }
// }

export {
  ProfilePage,
  ProfilePageClass
  // CycleChild
}