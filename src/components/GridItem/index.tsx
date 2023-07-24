import { Level } from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImg from '../../assets/joinha.png'
import downImg from '../../assets/joinhadown.png'


type Props ={
    item:Level
}


export const GridItem =({ item }:Props)=>{

    return(
        <div className={styles.main} style={{backgroundColor:item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'joinha' && <img src={upImg} width='70'/>}
                {item.icon === 'joinhadown' && <img src={downImg} width='50'/>}
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourImc &&
                <div className={styles.yourImc}>*Seu IMC {item.yourImc}*</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}