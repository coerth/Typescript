import React from 'react'

type Props = {
    columns: String[]
}

const Headers = ({columns}: Props): JSX.Element => {{
  return (
    <div>  
      <tr>
      {columns.map((head) =>  <th>{head}</th>)}
    </tr>
    </div>
  )
}
}

export default Headers