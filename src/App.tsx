import { useState } from 'react'
import styles from './App.module.css'
import { levels, calcImc, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'
import seta from './assets/seta.png'



function App() {
    const [height, setHeight] = useState <number>(0)
    const [weight, setWeight] = useState <number>(0)
    const [item, setItem] = useState <Level | null>(null)


    const handleCalc =()=>{
      if(height && weight){
          setItem(calcImc(height,weight))

      } else{
        alert('Digite todos os campos!')
      }
    }

    const handleBack =()=>{
        setItem(null)
        setHeight(0)
        setWeight(0)  
    }
  
  return (
      <div className={styles.main}>
          <header>
              <div className={styles.containerHeader}>
                  CALCULADORA IMC
              </div>
          </header>
          <div className={styles.container}>
              <div className={styles.leftSide}>
                    <h1>Calcule seu IMC</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident, perferendis soluta, natus unde rem ipsam blanditiis assumenda atque similique obcaecati eveniet explicabo, expedita dolorem ullam esse architecto corporis rerum.</p>

                    <input type="number"  value={height > 0 ? height : ''} onChange={e => setHeight(parseFloat(e.target.value))} placeholder='Digite sua altura. Ex: 1.70' disabled={item ? true : false}/>

                    <input type="number" value={weight > 0 ? weight : ''} onChange={e => setWeight(parseFloat(e.target.value))} placeholder='Digite seu peso. Ex: 65kg' disabled={item ? true : false}/>

                    <button onClick={handleCalc} disabled={item ? true : false}>Calcular</button>

              </div>

              <div className={styles.rightSide}>
                {!item &&
                  <div className={styles.grid}>
                    {levels.map((item,key)=>(
                        <GridItem key={key} item={item}/>
                    ))} 
                  </div>
                }
                {
                  item &&
                  <div className={styles.rightBig}>
                     <GridItem item={item}/>
                        <div className={styles.Arrow} onClick={handleBack}>
                          <img src={seta} width={70}/>
                        </div>
                       
                  </div>
                }
              </div>
          </div>
      </div>
  )
}

export default App
