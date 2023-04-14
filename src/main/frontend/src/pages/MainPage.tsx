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
import { PageProps } from '../model/props/PageProps'
import productService from '../service/productService'
import { useNavigate } from 'react-router-dom'
import shoppingCartService from '../service/shoppingCartService'

const MainPage: React.FC<PageProps> = ({auth}) => {
    const [categories, setCategories] = useState<Category[]>()
    const [products, setProducts] = useState<Product[]>()
    const navigate = useNavigate()

    useEffect(() => {
        const jwt = auth?.token ?? ''
        productService.getCategories(jwt).then(cat => setCategories(cat))
        productService.getProducts(jwt, 0, 9).then(prods => setProducts(prods))
    
      return () => {}
    }, [])
    

    const onActiveCategoryChange = (category: Category) => {
        productService.getProducts(auth?.token!, 0, 9, category.id).then(prods => setProducts(prods))
    }

    const onAddToCart = (product: Product) => {
        if (!auth) {
            navigate('/login')
        }
        shoppingCartService.addToCart(auth?.userId!, product, auth?.token!)
    }

  return (
    <div>
        <NavBar auth={auth}></NavBar>
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