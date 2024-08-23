// Merchandise.js
import React from 'react';
import '../stylesheets/merchandise.css'; // Import your CSS file
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpeg";


import { BiLogOut } from 'react-icons/bi';

const merchandiseItems = [
  { id: 1, src: {img2}, priceOld: '$19.99', priceNew: '$9.99' },
  { id: 2, src: '../images/1.jpeg', priceOld: '$26.99', priceNew: '$11.99' },
  { id: 3, src: '../images/1.jpeg', priceOld: '$49.99', priceNew: '$14.99' },
  { id: 4, src: '../images/1.jpeg', priceOld: '$20.99', priceNew: '$18.99' }
];

const Merchandise = () => (
  <div className='merchandise'>
  <div className="merch">
    <div className="merch_overlay">
      <h1>Our Merchandise</h1>
      <p>Discover our latest collection</p>
      <div className="merch_items">
        {merchandiseItems.map(item => (
          <div className="merch_item" key={item.id}>
              <img src={img2} alt="GAME FORGE" />
            <div className="merch_price">
              <span>{item.priceOld}</span> {item.priceNew}
            </div>
            <a href="#" className="buy_now">Buy Now</a>
          </div>

        ))}
      </div>
    </div>
  </div>
  </div>
);

export default Merchandise;
