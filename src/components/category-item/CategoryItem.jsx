import React from 'react'
import {Link} from 'react-router-dom'
import './CategoryItem.scss'

const CategoryItem = ({category}) => {
  const {title, imageUrl, linkUrl} = category
  return (
    <div className='container__category'>
      {/* ---- image ---- */}
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='container__body'>
        <h2>{title}</h2>
        <p>
        <Link to={`/shop/${linkUrl}`}>Shop Now</Link>
        </p>
      </div>
    </div>
  )
}

export default CategoryItem
