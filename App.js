import React, { useState } from 'react';
import './App.css';
import TextEditor from './components/TextEditor';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <TextEditor text={text} onTextChange={handleTextChange} />
      <p>Word Count: {text.split(/\s+/).filter(Boolean).length}</p>
    </div>
  );
}

export default App;
