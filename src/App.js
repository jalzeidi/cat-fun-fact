import React from 'react';
import './App.css';

import TextDisplay from './TextDisplay';

const catUrl = "https://www.scotsman.com/webimg/b25lY21zOjJiN2Q1NjhlLWI5ZDMtNGM2ZS1iOTFjLTNkYjcwOTE3OGI0NzoyNzUwOTliNy1jNjUxLTRiOTAtOWY5Zi1hNWM0YzU5ZjEwZmE=.jpg?width=640&quality=65&smart&enable=upscale";

function App() {
  const [fact, setFact] = React.useState('CLICK THE BUTTON ABOVE TO GENERATE FUN FACT');

  let fetchCatFact = () => {
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then((response) => response.json())
    .then((data) => setFact(data.text));
  }

  return (
    <div className='App'>
      <h1>Cat API test.</h1>
      <img src={catUrl} alt="cat"/>
      <button onClick={fetchCatFact}>Fetch</button>

      <h3>Fun Fact</h3>
      <TextDisplay text={fact}/>
    </div>
  );
}

export default App;
