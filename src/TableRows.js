import "./styles.css"
import React from "react"
import TableRow from "./TableRow"


const TableRows = ({data}) => {

  if (!data.length) {
    return <div>...Loading</div>
  }

  return data.map((order) => <TableRow key={order.id} data={order} /> )
}

export default TableRows