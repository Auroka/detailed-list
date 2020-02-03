import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

// update


// const App: React.FC = () => {
//   state = { lists: ['1'] };
//   function addList(v) {

//   }
//   const { lists } = this.state;
//   return (
//     <div className="App">
//       <ToDoList lists={lists}></ToDoList>
//       <InputContent addList={toAddList}></InputContent>
//     </div>
//   );
// }

class App extends React.Component {
  state = { lists: ['1'] };
  add = (v: string) => {
    const { lists } = this.state;
    lists.push(v);
    this.setState({ lists })
  }
  render() {
    return (
      <div>
        <InputContent toAddList={this.add}></InputContent>
        <ToDoList lists={this.state.lists}></ToDoList>
      </div>
    )
  }
}

interface ToDoListProps {
  lists: string[];
}
class ToDoList extends React.Component<ToDoListProps> {

  render() {
    return (
      <ul>
        {
          this.props.lists.map((item, index) =>
            <li key={index}>{item}</li>
          )
        }
      </ul>
    )
  }
}

interface InputContentProps {
  toAddList: Function;
}
class InputContent extends React.Component<InputContentProps> {
  enterContent(e: any) {
    if (e.keyCode === 13) {
      this.props.toAddList(e.target.value);
      e.target.value = ''
    }
  }
  render() {
    return (
      <input type="text" onKeyUp={(e) => { this.enterContent(e) }} />
    );
  }
}

export default App;
