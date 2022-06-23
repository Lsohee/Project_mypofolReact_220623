import './web/style/webStyle.css';
import {root1, root2} from "./web/module.js"

function App() {
  return (
    <>
    {/* <button id="click">
      click
    </button> */}
    {root1()}
    {root2()}
    </>
  );
}

export default App;
