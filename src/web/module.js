import layerI from "./layerI.js"
import layerMy from "./layerMy.js"
import layerMe from "./layerMe.js"
let value = false

const btn = document.getElementById("click")
console.log(btn)


// btn.addEventListener("click",function(){
//     value = true
//     return value
//   })




// ? 선택한놈 나머지 

function root1(){
  return (
    <div id="root1">
      this is root1

      <div>
        Boys, Don’t be ambitious <br></br> Let’s Be Lim-Bit-ious!
      </div>
      
        <div>Lim 임소희의 임(Lim)<br>
        </br>Bit 데이터를 나타내는 최소 단위<br>
        </br> ious ~~로 가득 찬</div>
      
      <div>임소희와 함께 데이터로 가득한 세계로</div>
      
    </div>
  )
  
}


function root2(){
  if (value === true){
    return(
<div id="root2">
  this is root2

    <div>어떤 사람을 알아가는 것은 그 사람만의 새로운 언어를 하나 배우는 것이라고 생각합니다 <br></br>
      우리가 보통 언어를 배울 때 가장 먼저 배우는 것중에 하나가 자신을 지칭하는 말이죠<br></br>
      그래서 저는 영어에서 스스로와 관련된 것들을 일컫는 네가지 키워드로 저를 여러분께 알리고자 합니다</div>
  {layerI()}
  {layerMy()}
  {layerMe()}
</div>
)
  } else if(value === false){
    return(
      <div id="root2">
        this is root2
      
          <div>어떤 사람을 알아가는 것은 그 사람만의 새로운 언어를 하나 배우는 것이라고 생각합니다 <br></br>
            우리가 보통 언어를 배울 때 가장 먼저 배우는 것중에 하나가 자신을 지칭하는 말이죠<br></br>
            그래서 저는 영어에서 스스로와 관련된 것들을 일컫는 네가지 키워드로 저를 여러분께 알리고자 합니다</div>
        {layerI()}
        {/* {layerMy()} */}
        {layerMe()}
      </div>
      )   
  }
 
}



export {root1, root2} 