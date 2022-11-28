import React from 'react'
import './Search.scss'

const Search = ({setSearch, filter}) => {
  
  const handleChange = (event) => {
    const {value} = event.target;
    setSearch(value, filter)
  } 

  return (
    <input onChange={handleChange} type="text" className='b-component-search' placeholder='Buscar'>

    </input>
  )
}

export default Search