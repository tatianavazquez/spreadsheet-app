import React from 'react'


export const Header= () => {
  
  return (
    <div> 
        <h1> Excel Clone </h1>
        <h3> Welcome to your spreadsheet. Here you can store useful numeric information, and make  addition and substraction operations as well.</h3>
        <p> Addition function: <strong> =SUM(param, param)</strong> </p>
        <p> Substraction function: <strong> =SUB(param, param)</strong> </p>
        <p> Both functions accept numbers and cell references (example: A2, F11) as parameters, and as many as you need. </p>
        </div>
  )
}
