import React from 'react';
import Quotes from './quotes.json'



const QuoteBox = (numbers) => {
    

    console.log(numbers)
    

    return (
        <>
            
            <p style={{ color: numbers.numberQuote[1] }}>{Quotes[numbers.numberQuote[0]].quote}</p>
            <p style={{ color: numbers.numberQuote[1] }}>{`- ${Quotes[numbers.numberQuote[0]].author}`}</p>
            
            
        </>
     )    
}
export default QuoteBox;
