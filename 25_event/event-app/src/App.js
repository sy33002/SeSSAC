// import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import Test1, {Test2} from './ex/practice';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <Handler_ex />
      <hr />
      <Test1 />
      <hr />
      <Test2 />
    </div>
  );
}

export default App;
