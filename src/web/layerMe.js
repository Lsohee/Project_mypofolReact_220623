import contantText from "./contantText.js"


export default function layerMe(){
  return (
    <div>
      <div></div>
      this is layer Me
      <AirBubbles bubbleName={contantText.bubble1}></AirBubbles>
      <AirBubbles bubbleName={contantText.bubble2}></AirBubbles>
      <AirBubbles bubbleName={contantText.bubble3}></AirBubbles>
      <AirBubbles bubbleName={contantText.bubble4}></AirBubbles>
      <AirBubbles bubbleName={contantText.bubble5}></AirBubbles>
    </div>
  )
}


// memo component 개념 --> 내가 직접 생성자 함수를 만든것?
function AirBubbles(props){
  return(
    <div className="bubbles">{props.bubbleName}</div>
  )
}



// memo 배열임