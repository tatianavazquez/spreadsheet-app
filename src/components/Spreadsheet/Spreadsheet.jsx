import React, { useState } from "react";
import styles from './Spreadsheet.module.css';

import { letters, numbers, references } from "../../constants";


const Spreadsheet = () => {

  
const [inputValue, setInputValue] = useState({});
const [currentCell, setCurrentCell] = useState({});
const [functContent, setFunctContent] = useState([]);


const handleChange = (event) => {
   
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
    console.log(inputValue);
}

const handleClick = (event) => {
  setCurrentCell({
    [event.target.name]: event.target.value
  })
}

const operation = (numbers, sum) => {
 
   let result = parseInt(numbers[0]);
   for (let i = 1; i < numbers.length; i++) {
    if(sum === true) {
     result += parseInt(numbers[i]);
    }
    if(sum === false) {
      result -= parseInt(numbers[i]);
    }
   }
   console.log(sum)
   return result;
  }


const handleOnKeyDown = (event) => {
  const cellValue = event.target.value;
  setFunctContent(cellValue.substr(5).split(', ')); // erase the function syntax

  //Sacar de lo que ingresa el usuario, si hay una referencia a una celda, cambiar esa referencia
  //por el valor que tiene esa celda, manteniendo el orden en el que los ingresó el usuario

  const validValues = functContent.map((el) => {
    if(references.includes(el)) {
      el = inputValue[el]
      return el
        }
    else return el
  })
  
  if (event.key === 'Enter') {
    if(cellValue.startsWith('=SUM(') || cellValue.startsWith('=SUB(')) {
      if(cellValue.startsWith('=SUM(') && cellValue.endsWith(')')) {
        let add = operation(validValues, true);
        if(isNaN(add)) { alert('Please enter valid parameters')}
        setInputValue({
         ...inputValue,
         [event.target.name]: add, // the input value is now the result of the operation
       });
        console.log(add);
       }
     
       if(cellValue.startsWith('=SUB(') && cellValue.endsWith(')')) {
         let sub = operation(validValues, false);
         if(isNaN(sub)) { alert('Please enter valid parameters')}
         setInputValue({
          ...inputValue,
          [event.target.name]: sub, // the input value is now the result of the operation
        });
         console.log(sub);
        }
    }
    return setCurrentCell({
      [event.target.name]: event.target.value
    })
  }
}

    return (
        <div className="container">
          <table>
            <tbody>
            <tr>
            {letters.map((letter, index) => (
                 <th key={index}> {letter}  </th>
            ))}
             </tr>
            {numbers.map((number, index) => {
                return (
             <tr key={index}>
                <th > {number} </th>
                {letters.map((letter, index) => {
                 let cellId = letter + '' + number;
                 if(index !== 0) {
                    return(
                        <td key={cellId}> <input name={cellId} id={cellId} type="text" value={inputValue[cellId] || ''}  onChange={handleChange} onClick={handleClick} onKeyDown={handleOnKeyDown}/> </td>
                   )
                 }
                 return null;
                })}
             </tr>
            )})
             }
            </tbody>
          </table>
        </div>
    )
}

export default Spreadsheet;