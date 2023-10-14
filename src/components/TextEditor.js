import React from 'react';

function TextEditor({ text, onTextChange }) {
  return (
    <textarea
      className="custom-textarea"
      placeholder="Enter your text here..."
      value={text}
      onChange={onTextChange}
    />
  );
}

export default TextEditor;
