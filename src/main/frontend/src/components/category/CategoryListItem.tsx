import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Category } from '../../model/Category'

interface CategoryProps {
  category: Category,
  onActiveCategory: (category: Category) => void,
  active: boolean | false
}

const CategoryListItem: React.FC<CategoryProps> = ({category, onActiveCategory, active}) => {
  return (
    <ListGroup.Item key={category.id} 
          as='li' 
          active={active} 
          onClick={(e) => onActiveCategory(category) }>{category.name}</ListGroup.Item>
  )
}

export default CategoryListItem