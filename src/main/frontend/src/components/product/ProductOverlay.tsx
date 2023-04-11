import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Product } from '../../model/Product'
import ProductCard from './ProductCard'

interface ProductOverlayProps {
    products: Product[]
    onAddToCart: (product: Product) => void
}

const ProductOverlay: React.FC<ProductOverlayProps> = ({products, onAddToCart}) => {

    const chunkProductArray = (arr: Product[], size: number) => {
        return arr.reduce((chunks: Product[][], item: Product, idx: number) => {
            if (idx % size === 0) {
                chunks.push([])
            }
            chunks[chunks.length - 1].push(item)
            return chunks
        }, [])
    }

    const overlayStyle = {
        marginTop: '20px'
    }

  return (
    <Container style={overlayStyle}>
        <h1>Products</h1>
        {
            chunkProductArray(products, 3).map((productRow, idx) => (
                <Row key={idx}>
                    {
                        productRow.map(product => (
                            <Col key={product.id} lg={4}>
                                <ProductCard onAddToCart={onAddToCart} product={product}></ProductCard>
                            </Col>
                        ))
                    }
                </Row>
            ))
        }
    </Container>
  )
}

export default ProductOverlay