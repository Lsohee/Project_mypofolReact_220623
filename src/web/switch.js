let value = [true,false]
let arr = ["제비꽃","동백꽃","수선화","매화"]

// ? 뭔가 실현됐을 때 기존의 것들을 지우는 
// pseudo 뭔가 일어 났을 때 함수를 지우고 다시 만듬


export default function switchFunc(){
  if(value[0]===true&&value[1]===false){
    console.log(arr)
    value[0]=false
  }else if(value[0]===false&&value[1]===false){
    console.log(arr)
    value[1]=true
  }else if(value[0]===false&&value[1]===true){
    console.log(arr)
    value[0]=true
  }else if(value[0]===true&&value[1]===true){
    console.log(arr)
    value[1]=false
  }
}