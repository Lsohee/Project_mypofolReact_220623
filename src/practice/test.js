const flower = [
  {
    "name": "제비꽃",
    "family": "제비꽃과",
    "scientificName": "Viola mandshurica",
    "flowerLanguage":["겸손","겸양","티없는 소박함","성실과 정절"]
  },
  {
    "name": "동백꽃",
    "family": "차나무 과",
    "scientificName": "Camellia japonica",
    "flowerLanguage":["기다림","애타는 사랑"]
  },
  {
    "name": "수선화",
    "family": "수선화과",
    "scientificName":"Narcissus tazetta var. chinensis",
    "flowerLanguage":["자기 사랑","자존심","고결","신비"]
  },
  {
    "name":"매화",
    "family": "장미과",
    "scientificName":"Prunus mume",
    "flowerLanguage":["깨끗한 마음","결백"]
  }
]


export default function FlowerValue(){
  return(
    <section>
      <h1>flower</h1>
      <ul>
        {flower.map((name)=>(
          <>
          <li>
            {name.name}
          </li>
          <li>
            {name.family}
          </li>
          <li>
            {name.scientificName}
          </li>
          <li>
            {name.flowerLanguage}
          </li>
          <br></br>
          </>
        ))}
      </ul>
    </section>
    
  )
}





