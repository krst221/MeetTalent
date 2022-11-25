import React from 'react'
import './KeywordTag.scss'

const KeywordTag = ({tag, index}) => { //Tags de las palabras clave para los filtros
  return (
    <div className={`b-tag ${index % 2 === 0 ? "blue" : "red"}`}>
      <span>{tag}</span>
    </div>
  )
}

export default KeywordTag