import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const textoSegunBool = this.props.boolean ? 'Es cierto!' : 'Falso'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2)

    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <Hello title="Esto es un props" /> 
          <Text 
            arrayOfNumbers={[2,3,10]}
            boolean 
            objectWithInfo={{key:'First Value', key2: 'otherValue'}}
            number={2} 
            text='Texto en string' 
          />         
        </header>
        
      </div>
    );
  }
}


export default App;
