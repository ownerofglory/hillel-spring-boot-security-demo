import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Product } from '../../model/Product'

interface ProductProps {
    product: Product
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={product.imageUrl} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Card.Text>
                <p>{product.price} $</p>
            </Card.Text>
            <Button variant={product.quantity === 0 ? 'secondary' : 'success'} disabled={product.quantity === 0}>
                <span>Add to cart</span>
                <FontAwesomeIcon icon={ faCartShopping } style={{marginRight: 10}} />
            </Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard