import "./styles.css"
import React from "react"

const TableRow = ({data}) => {

  const {name, quantity, price } = data

  return (
        <div className="table-row">
          <div>{name}</div>
          <div>{quantity}</div>
          <div>{price}</div>
        </div>
  )
}

export default TableRow
