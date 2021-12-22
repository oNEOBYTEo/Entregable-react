import React, {useState} from 'react';
import Quotes from './quotes.json';
import QuoteBox from './QuoteBox'
// import ColorPicker from './index'





const HandleRandom = () => {
    const colors = ["#fcf", "#12f", "#c2f", "#513", "#41c", "#24f"]
    
    const Num = (max) => Math.floor(Math.random() * max);
    
    const color = colors[Num(colors.length)]
    
    document.body.style = `background: ${color}`;

    const [ number, setNumber] = useState(0);
    
    
    const random = () => {
        
        const num = () => Math.floor(Math.random() * Quotes.length);
        setNumber(num)
        
        
    }
    
    const arrEntry = [number, color]

    
    return (

        <>
            <QuoteBox numberQuote={arrEntry}/>
            <button onClick={ random } style={{ background: color }}>{">"}</button>
        </>
         
        
        )   
}
console.log(HandleRandom)



export default HandleRandom
