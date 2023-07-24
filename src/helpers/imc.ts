export type Level ={
    title:string
    color:string
    icon:string
    imc:number[]
    yourImc?:number

}

export const levels: Level[] = [
    { title: 'Magreza', color:'#78a4ca', icon: 'joinhadown', imc:[0, 18.5] },
    { title: 'Normal', color:'#0EAD69', icon: 'joinha', imc:[18.6, 24.9] },
    { title:'Sobrepeso', color:'#E2B039', icon: 'joinhadown', imc:[25, 30] },
    { title: 'Obesidade', color:'#C3423F', icon:'joinhadown', imc:[30.1,99] }
]

export const calcImc =(height:number, weight: number)=>{

    const imc = weight / (height * height)

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelCopy: Level = {...levels[i]}

            levelCopy.yourImc = parseFloat(imc.toFixed(2))
            return levelCopy
        }
    }

    return null

}