import React from 'react'
import ReactDOM from 'react-dom/client'
import Person from './Question1/Person.jsx'
import Button from './Question2/Button.jsx'
import Header from './Question3/Header.jsx'
import List from './Question4/List.jsx'

const handlebutton=()=>{
  alert('Button clicked!');
}

const items = ['Item 1', 'Item 2', 'Item 3'];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person name="Aashish" age="18" />
    <Button text="Click Me" onClick={handlebutton}/>
    <Header title="I am Title"/>
    <List items={items} />
  </React.StrictMode>,
)
