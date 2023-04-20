import React from 'react'

type Props = {
  row: String[]
}

const Row = ({row}: Props): JSX.Element  => {
  return (
    <div>
       <tr>
        {row.map((ro) => <td>{ro}</td>)}
       </tr>
    </div>
  )
}

export default Row