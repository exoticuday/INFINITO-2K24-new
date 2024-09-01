import React from 'react'
import "./hero.css";
import Card from './Card';
const Hero = () => {
  return (
    <div className='herodiv'>
      <h1 id="heading1" className='heading svelte-1suma1w'><span  className='heading_inside atmos svelte-1suma1w'>INFINITO'24</span> IS SPONSERED BY</h1>
      <div className='heroinnerdiv'>
        <Card top="Title Sponser" img="https://static.wixstatic.com/media/f6b719_a1c914b32e574b5db7c4cb6f017f1f28~mv2.png/v1/fill/w_244,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bharatversity.png" bottom="Company1"/>
        <Card top="Powered By" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDiAWKQe2MZ1yDYLh6fV21YmDTeugjwSDBg&s" bottom="Company2"/>
      </div>
      
      

    </div>
  )
}

export default Hero;
