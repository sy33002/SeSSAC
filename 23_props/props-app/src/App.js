// import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import { ClassTest1 } from './Test1';
import ClassTest2 from './Test2';
import MyFood from './IntroFood';
import { BestBook } from './Test1';
import { TextProps } from './Test1';

function App() {
  return (
    <div className="App">
      <FunctionComponent name="새싹 영등포 5기" />
      <FunctionComponent />

      <hr />
      <ClassComponent name='asdf' />

      <hr />
      <Button link='https://www.google.com'>Google</Button>

      <hr />
      <ClassTest1 />

      <hr />
      <ClassTest2 />

      <hr />
      <MyFood food='딸기'/>

      <hr />
      <BestBook title='나의 하루는 어쩌고' author='김유진' price={13500} type='자기계발서'/>
    
      <hr />
      <TextProps text='App컴포넌트에서 넘겨준 text props입니다.' valid={() => console.log("콘솔 띄우기 성공!")}/>

    </div>
  );
}

export default App;
