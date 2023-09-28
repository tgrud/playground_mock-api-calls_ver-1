import TableRows from "./TableRows"
import React, { useState } from "react"

const mockDataInit = {
  orderNumber: 1,
  orderItems: [
    {
      id: "123456",
      name: "door",
      quantity: "3",
      price: 400
    },
    {
      id: "423566",
      name: "hood",
      quantity: "1",
      price: 500
    }
  ]
}


const getMockData = () => {
  return new Promise((res) => setTimeout(() => res(mockDataInit), 1000))
}

const totalFunc = data => data.orderItems.reduce((acc, cur) => acc + cur.price,0)

function App() {
  const [orderNumber, setOrderNumber] = useState(0)
  const [rows, setRows] = useState([])
  const [total, setTotal] = useState(0)

  React.useEffect(() =>{
    const fetchData = async () => {

      const data = await getMockData()
      const total = totalFunc(data)

      setOrderNumber(data.orderNumber)
      setRows(data.orderItems)
      setTotal(total)
    }

    fetchData()
      .catch(console.error)

  }, [])


  return (
    <div className="App">
      <div>Order: {orderNumber}</div>
      <div className="table">
        <div className="table-row">
          <div>Name</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        <TableRows data={rows} />
      </div>
      <div className="total-section">
        <div className="total-price">Total: {total}</div>
      </div>
    </div>
  )
}

export default App