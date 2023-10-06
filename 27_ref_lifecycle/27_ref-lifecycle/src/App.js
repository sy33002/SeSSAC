import RefSample1 from "./RefSample1";
import RefSample2 from "./RefSample2";
import RefSample3 from "./RefSample3";
import RefSample4 from "./RefSample4";
import LifeCycleFunc from "./LifeCycleFunc";
import LifeCycleClass from "./LifeCycleClass";
import PostList from "../PostList";

function App() {
  return (
    <>
      <h2>RefSample</h2>
      <RefSample1/>
      <hr />
      <RefSample2 />
      <hr />
      <RefSample3 />
      <hr />
      <RefSample4 />
      <hr />
      <LifeCycleFunc />
      <hr />
      <LifeCycleClass />
      <hr />
      <PostList />
    </>
  );
}

export default App;
