// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction'
import CounterFunction from './CounterFunction';
import { Test1, Test2 } from './Test';

function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value='Plus 1'/>
      <hr />
      <Test1 />
      <hr/ >
      <Test2 />
    </div>
  );
}

export default App;
