import axios from 'axios';
import React, { useState } from 'react';
import DisplaySimpsonsQuote from './Components/DisplaySimpsons';

import './App.css';

const simpsonsQuote = [
  {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   characterDirection : "Left"
  },
  {
    quote: "Blablabla.",
    character: "John Doe",
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection : "Left"
   }
  ]

function App() {
  const [simpsons, setSimpsons] = useState([simpsonsQuote]);
  const getSimpsons = () => {

    // Send the request
  
    axios
  
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
  
      // Extract the DATA from the received response
  
      .then((response) => response.data)
  
      // Use this data to update the state
  
      .then((data) => {
  
        setSimpsons(data[0]);
      
  
      });
  
  };
  return (
    <div className="App">
      <DisplaySimpsonsQuote simpsons={simpsons} />
      <button type="button" onClick={getSimpsons}>Get Simpsons</button>
    </div>
  );
}

export default App;

