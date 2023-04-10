import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import CategoryListItem from './CategoryListItem'
import { Category } from '../../model/Category'

interface CategoryListProps {
    categories: Category[]
    onActiveCategory: (category: Category) => void
}

const CategoryList: React.FC<CategoryListProps> = ({categories, onActiveCategory}) => {
    const [activeId, setActiveId] = useState<number>(-1)

    const changeActive = (category: Category) => {
        setActiveId(category.id ?? -1)
        onActiveCategory(category)
    }

  return (
    <ListGroup as='ul'>
        {
            categories.map(cat => (
                <CategoryListItem category={cat} 
                        onActiveCategory={changeActive}
                        active={cat.id === activeId}></CategoryListItem>
            ))
        }
        
    </ListGroup>
  )
}

export default CategoryList