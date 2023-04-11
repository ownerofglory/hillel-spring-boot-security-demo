import React, { useState, useEffect } from 'react'
import NavBar from '../components/navbar/NavBar'
import ProductCard from '../components/product/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryList from '../components/category/CategoryList'
import ProductOverlay from '../components/product/ProductOverlay'
import CategorySidebar from '../components/category/CategorySidebar'
import ProductPagination from '../components/pagination/ProductPagination'
import { Category } from '../model/Category'
import { Product } from '../model/Product'

const MainPage = () => {
    const [categories, setCategories] = useState<Category[]>()
    const [products, setProducts] = useState<Product[]>()

    useEffect(() => {
        getCategories().then(cat => setCategories(cat))
        getProducts(0, 9).then(prods => setProducts(prods))
    
      return () => {}
    }, [])
    

    const getCategories = () => {
        return fetch('http://localhost:8080/api/category').then(resp => {
            if (resp.ok) {
                return resp.json()
            }
        })
    }

    const getProducts = (num: number | 0, count: number | 50, categoryId?: number) => {
        return fetch(`http://localhost:8080/api/products?num=${num}&count=${count}&categoryId=${categoryId ?? ''}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
        })
    }

    const onActiveCategoryChange = (category: Category) => {
        getProducts(0, 9, category.id).then(prods => setProducts(prods))
    }

    const onAddToCart = (product: Product) => {
        fetch('http://localhost:8080/api/cart', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'userId': '1',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            if (resp.ok) {}
        })
    }

  return (
    <div>
        <NavBar></NavBar>
        <Container>
            <Row>
                <Col md={3}>
                    <CategorySidebar onActiveCategory={onActiveCategoryChange} categories={categories ?? []}></CategorySidebar>
                </Col>
                <Col md={9}>
                    <ProductOverlay onAddToCart={onAddToCart} products={products ?? []}></ProductOverlay>
                    <br></br>
                    <ProductPagination></ProductPagination>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MainPage