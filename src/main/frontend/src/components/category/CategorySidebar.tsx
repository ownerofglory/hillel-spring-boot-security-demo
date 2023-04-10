import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryList from './CategoryList'
import { Category } from '../../model/Category'

interface CategorySidebarProps {
    categories: Category[],
    onActiveCategory: (category: Category) => void
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({categories, onActiveCategory}) => {
    const sidebarStyle = {
        marginTop: '20px'
    }

  return (
    <Container style={sidebarStyle}>
        <h2>Categories</h2>
        <CategoryList onActiveCategory={onActiveCategory} 
                categories={categories}></CategoryList>
    </Container>
  )
}

export default CategorySidebar