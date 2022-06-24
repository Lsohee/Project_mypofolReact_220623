import './web/style/webStyle.css';
import {Root1, Root2} from "./web/module.js"
import switchFunc from './web/switch';



function App() {
  return (
    <>
    <button onClick={switchFunc}>
      그대가 보시기에
    </button>
    <Root1/>
    <Root2/>
    </>
  );
}

export default App;