import React from 'react'
import { Pagination } from 'react-bootstrap'

const ProductPagination = () => {
  return (
    <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>
  )
}

export default ProductPagination