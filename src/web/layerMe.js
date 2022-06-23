export default function layerMe(){
  return (
    <div>
      this is layer Me
      <AirBubbles bubbleName="1"></AirBubbles>
      <AirBubbles bubbleName="2"></AirBubbles>
      <AirBubbles bubbleName="3"></AirBubbles>
      <AirBubbles bubbleName="4"></AirBubbles>
    </div>
  )
}


// memo component 개념 --> 내가 직접 생성자 함수를 만든것?
function AirBubbles(props){
  return(
    <div>bubbles {props.bubbleName}</div>
  )
}



// memo 배열임