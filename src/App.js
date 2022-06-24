import './web/style/webStyle.css';
import {Root1, Root2} from "./web/module.js"
import flowerValue from './practice/test';

function Test(){
  return (
  <div>
    console test
  </div>
  )
}

let I = []

let value = [true,false]
let arr = ["제비꽃","동백꽃","수선화","매화"]
function makeArr(){
  if(value[0]===true&&value[1]===false){
    I.push(<Test/>)
    console.log(arr[0])
    value[0]=false
  }else if(value[0]===false&&value[1]===false){
    console.log(arr[1])
    value[1]=true
  }else if(value[0]===false&&value[1]===true){
    console.log(arr[2])
    value[0]=true
  }else if(value[0]===true&&value[1]===true){
    console.log(arr[3])
    value[1]=false
  }
  console.log(I[0])
}





function App() {
  return (
    <>
    <button onClick={makeArr}>
      그대가 보시기에
    </button>
    {flowerValue()}
    <Root1/>
    <Root2/>
    </>
  );
}

export default App;