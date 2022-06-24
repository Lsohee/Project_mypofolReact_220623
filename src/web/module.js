import LayerI from "./layerI.js"
import LayerMy from "./layerMy.js"
import LayerMe from "./layerMe.js"
import LayerMyself from "./layerMyself.js"
import contantText from "./contantText.js"



function Root1(props){
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


function Root2(){
    return(
      <div id="root2">
        {/* this is root2 */}
        {/* // memo this is div:nth-child(1) */}
          <div> 
            <div>
            {contantText.intro}
            </div>
          </div>
          
      {/* // memo this is div:nth-child(2)  */}
        <LayerI id="layer1" />
        
        
        
      {/* // memo this is div:nth-child(3)  */}
      <LayerMy/>

        
        
      {/* // memo this is div:nth-child(4)  */}
      <LayerMe/>


      {/* // memo this is div:nth-child(5)  */}
      <LayerMyself/>
      </div>
      )   
  }
 
export {Root1, Root2} 