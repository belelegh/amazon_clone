// import React from 'react'
// import Rating from '@mui/material/Rating'
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// function ProductCard({oroduct}) {
//     const { image, title, id, rating, price } = product;
//   return (
//     <div>
//       <a href="">
//         <img src={image} alt="" />
//       </a>
//       <div>
//         <h3>{title}</h3>
//         <div>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} />
//           {/* count*/}
//           <small>{rating.count}</small>
        
//         </div>
//         <div>
//             {/* pricing */} 
//             <CurrencyFormat amount={price}/> 
//         </div>
//         <button>
//             abb to cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard

import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css'

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* count*/}
          <small>{rating?.count || 0} reviews</small>
        </div>
        <div>
          {/* pricing */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;