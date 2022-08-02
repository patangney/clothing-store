import React from 'react'
import { Link } from 'react-router-dom'



const HomePage = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/cvpntL1/jackets.png',
      linkUrl: 'jackets'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/cvpntL1/sneakers.png',
      linkUrl: 'sneakers'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
      linkUrl: 'womens'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'mens'
    },
  ]
  return (
    <div className="categories-container">
      {/* ---- destructure title, id ---- */}
      {categories.map(({title, id}) => (
        <div key={id} className="category-container">
          {/* ---- image ---- */}
          <div className="background-image">

          </div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
          
    </div>
  )
}

export default HomePage