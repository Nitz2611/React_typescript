import React from 'react';

import './App.css';

import MyButton from './components/Button';
import Increment from './components/IncrementButton';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <MyButton text='click me'/> {/*text can be different type given in MyButtonProps*/}
      <MyButton text={123}/>
      <MyButton text= {true}/>
      <MyButton onClick={() => alert("okay")} text="Click me again"/> {/*onClick is optional*/}
        <Increment text="increasing a number" bookButton = "Change the book"/>
        <Forms text="increasing a number" bookButton = "Change the book"/>
    </div>
  );
}

export default App;
