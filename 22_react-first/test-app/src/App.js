// import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'jihyung';
  const student = 'sessac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };

  return (
    <div className="App">
      {/* 아래 주석처럼 자동 생성된 코드를 유지하거나 필요에 따라 삭제할 수 있습니다. */}
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

      {/* JSX 문법 */}
      {/* JSX 요소들은 하나의 부모 요소로 감싸져야 합니다. */}
      <>
        {/* 
          JavaScript 표현식 사용
          - 중괄호 {}를 사용하여 JavaScript 표현식을 삽입할 수 있습니다.
          - 중괄호 내에서 삼항 연산자 등을 사용할 수 있습니다.
        */}
        <div>{name} 안녕?</div>
        <div>
          {student === 'sessac' ? (
            <span>새싹인</span>
          ) : (
            <span>새싹이 뭐지</span>
          )}
        </div>

        {/* 3. style 속성 - 객체로 스타일 지정 */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'blue',
            fontSize: '48px',
          }}
        >
          스타일 적용2
        </div>
      </>

      {/* 4. className 사용 - class 속성 대신 className 속성을 사용하세요. */}
      {/* 예: <div className="App"> */}
      {/* 5. 종료 태그가 없는 태그 사용
          - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야함
          - <input /> or <input></input>

          6. 주석
          - // : js 외부 주석
      */}
    </div>
  );
}

export const Larval = () => {
  return (
    <div>
      <div class="header">
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'relative',
            top: '30px',
            left: '30px',
            zIndex: '10',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'black',
              borderRadius: '50%',
              position: 'relative',
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(30, 144, 188)',
          borderRadius: '50%',
          position: 'relative',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(58, 124, 224)',
          borderRadius: '50%',
          position: 'relative',
          bottom: '50px',
          left: '60px',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(33, 60, 182)',
          borderRadius: '50%',
          position: 'relative',
          bottom: '120px',
          left: '120px',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(157, 170, 228)',
          borderRadius: '50%',
          position: 'relative',
          bottom: '200px',
          left: '180px',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(14, 151, 185)',
          borderRadius: '50%',
          bottom: '300px',
          left: '250px',
          position: 'relative',
        }}
      ></div>
    </div>
  );
};

export const Test5 = () => {
  return (
    <div className='test5'>
      <h4 className="Hello" id="Hello">Hello World!</h4>
      <form>
        <label htmlFor="username">아이디:</label>
        <input type="text" /><br/>

        <label htmlFor="password">비밀번호:</label>
        <input type="password" /><br/>
      </form>
    </div>
  )
};

export const Test = () => {
  const name = "로이";
  const animal = "갱얼쥐";
  const a = 9;
  const b = 5;
  return (
  <>
    {/*test 1 */}
    <div>이것은 div입니다.
      <h3>이것은 div 안에 있는 h3태그 입니다.</h3>
    </div>
    {/* test2 */}
    <h2>제 반려 동물의 이름은 {name}입니다.<br />
        {name}는 {animal}입니다.
    </h2>
    {/* test3 */}
    <div>{3 + 5 === 8? <span>정답입니다!</span> : <span>오답입니다!</span>}</div>
    {/* test4 */}
    <div>{a > b && <p>a가 b보다 큽니다.</p>}</div>
    {/* test5 */}
    <Test5 /><br />
    {/* test6 */}
    <div class="rainbow">
      <div id="red">red</div>
      <div id="orange"></div>
      <div id="yellow"></div>
      <div id="green"></div>
      <div id="blue"></div>
      <div id="navy"></div>
      <div id="purple"></div>
    </div>
  </>
  );
};

export default App;
