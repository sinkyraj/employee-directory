

import React from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

const Table = (props) => {

  return (
    <ReactTable
      data={props.data}
      columns={props.columns}
    />
  )
}

export default Table