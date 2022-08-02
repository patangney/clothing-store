import React from 'react'
import { CategoryItem } from '../ComponentIndex'

const DirectoryComponent = ({categories}) => {
  return (
    <div className='container'>
      {/* ---- destructure title, id ---- */}
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoryComponent