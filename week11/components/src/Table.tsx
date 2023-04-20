import React, { useState } from 'react'
import Headers from './Headers'
import Row from './Row'

type Props = {
  headers: JSX.Element,
  rows: JSX.Element[] 
}

const Table = ({headers, rows}: Props) => {

  return (
    <table>
      {headers}
      <tbody>
      {rows}
      </tbody>
    </table>
  )
}

export default Table