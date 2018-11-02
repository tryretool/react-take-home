import React from 'react'
import './Editor.css'

// This is a functional component, which is an alternative to the class based syntax found in the App.js file
const EditorCanvas = props => {
  return (
    <div className='editor-canvas'>
      <h4> Put the drag and drop interface over here! </h4>
    </div>
  )
}

const EditorPicker = props => {
  return (
    <div className='editor-picker'>
      <h4> Clicking these buttons should create new components on the canvas </h4>
      <button> Create a button </button>
      <button> Create a text input </button>
      <button> Create a dropdown </button>
      <button> Create a table </button>
    </div>
  )
}

const Editor = (props) => {
  return (
    <div className='editor'>
      <EditorCanvas />
      <EditorPicker />
    </div>
  )
}

export default Editor
