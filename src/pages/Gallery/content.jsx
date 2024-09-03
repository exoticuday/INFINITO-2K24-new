import React from 'react'
import "./content.css";
import Card from './Card.jsx';
import img1 from '../assets/1.png'
const content = () => {
  return (
    <div id="all" className='contentdiv svelte-1suma1w'>
      <Card img= {img1} className="img"/>
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s"  />

    </div>
  )
}

export default content;
