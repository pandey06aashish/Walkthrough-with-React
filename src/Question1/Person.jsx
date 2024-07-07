import React from 'react'

function Person(props) {
  return (
    <>
    <p>My Name is {props.name}</p>
    <p>My age is {props.age}</p>
    </>
  )
}

export default Person