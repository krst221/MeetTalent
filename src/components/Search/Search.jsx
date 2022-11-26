import React from 'react'
import './Search.scss'

const Search = ({setSearch}) => {
  
  const handleChange = (event) => {
    const {value} = event.target;
    setSearch(value)
  } 

  return (
    <input onChange={handleChange} type="text" className='b-component-search' placeholder='Buscar'>

    </input>
  )
}

export default Search