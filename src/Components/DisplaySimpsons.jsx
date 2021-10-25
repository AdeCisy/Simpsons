import React from 'react';

function DisplaySimpsonsQuote ({ simpsons }) {

    return (
  
      simpsons && (
  
        <div className='DisplaySimpsonsQuote'>
  

        <img src={simpsons.image} />

  
          <ul>
  
            <li>Quote: {simpsons.quote}</li>
  
            <li>
  
              Character: {simpsons.character} {' '}
  
  
            </li>
  
          </ul>
  
        </div>
  
      )
  
    );
  
  }
  
  // test test
  
  export default DisplaySimpsonsQuote;