import React, { useEffect, useMemo, useState, useCallback } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

// const URL = "https://fakestoreapi.com/products"

// const tableColumn = [
//   {
//     Header: "ID",
//     accessor: "id",
//   },
//   {
//     Header: "Name",
//     accessor: "title",
//   },
//   {
//     Header: "Data Type",
//     accessor: "category",
//   },

//   {
//     Header: "Tags",
//     accessor: "price",
//     Cell: ({ row }) => `$${row.values.price}`,
//   },
//   // {
//   //   Header: "Sensitivity",
//   //   accessor: "price",
//   //   // Cell: ({ row }) => <Image src={row.values.image} height={100} />,
//   // },
//   // {
//   //   Header: "Profilers",
//   //   accessor: "price",
//   // },
//   // {
//   //   Header: "Validation",
//   //   accessor: "price",
//   // },
// ]

const Table = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 9,
  })

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const { data } = await axios.get(URL)
  //       setProducts(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchProducts()
  // }, [])

  // if (products.length === 0) {
  //   return (
  //     <Box sx={{ width: "100%", height: "95%", padding: "20px", m: 0 }}>
  //       <Skeleton animation="wave" />
  //       <Skeleton variant="rectangular" width="100%" height="100%" />
  //     </Box>
  //   )
  // }

  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 6,
  //   maxColumns: 8,
  // })

  return (
    <div style={{ height: "55vh", width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1, padding: "25px 20px" }}>
          <DataGrid {...data} sx={{ backgroundColor: "#f1f1f1" }} />
        </div>
      </div>
    </div>
  )
}

export default Table
