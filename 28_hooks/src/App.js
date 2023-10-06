import UseMemoEx from "./components/UseMeomoEx";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseReducer from "./components/UseReducerEx";
import useTitle from "./components/hooks/useTitle";
import Faq from "./components/Faq";

function App() {
  useTitle('React Hooks 연습 중 입니당')
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={7}/>
      <hr />
      <UseReducer/>
      <hr />
      <Faq />
    </div>
  );
}

export default App;
