import './App.css';
import Event_ex from './ex/Event_ex';
import {useState} from 'react'

function App() {
  const [data, setData] = useState({
    name: '',
    email: '@gmail.com'
  })
  return (
    <div className="App">
      <Event_ex />
    </div>
  );
}

export default App;
