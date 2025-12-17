import React, { useContext, useState } from "react";
import classes from "../Header/header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  // Correct way to use useContext with DataContext
  const { state } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate total items in cart
  const getCartCount = () => {
    if (!state || !state.basket) return 0;
    return state.basket.reduce((total, item) => {
      return total + (item.quantity || 1);
    }, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      // You can add search navigation here
      // navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <section className={classes.fixed}>
      <section className={classes.header_section}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* Use Link for SPA navigation */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>USA</span>
              </div>
            </div>
          </div>

          <form className={classes.search} onSubmit={handleSearch}>
            <select
              name="category"
              id="category-select"
              defaultValue=""
              aria-label="Select search category"
            >
              <option value="">All Departments</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
            </select>
            <input
              type="text"
              name="search"
              id="search-input"
              placeholder="Search Amazon"
              aria-label="Search Amazon products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className={classes.search_button}
              aria-label="Search"
            >
              <BsSearch size={20} />
            </button>
          </form>

          <div className={classes.order_container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="USA flag"
              />
              <select aria-label="Select language" defaultValue="en">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>

            <Link to="/signin" className={classes.account_link}>
              <div>
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            <Link to="/orders" className={classes.orders_link}>
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <div className={classes.cart_container}>
                <BiCart size={35} />
                <span className={classes.cart_count}>{getCartCount()}</span>
              </div>
              <span className={classes.cart_label}>Cart</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;

// import React, { useContext } from "react";
// import classes from "../Header/header.module.css";
// import { Link } from "react-router-dom"; // Use Link for SPA navigation
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

// const Header = () => {
//   const [state, dispatch]=(useContext)
//   const [searchTerm, setSearchTerm] = React.useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       // Navigate to search results or perform search
//       console.log("Searching for:", searchTerm);
//       // Example: navigate(`/search?q=${searchTerm}`);
//     }
//   };

//   return (
//     <>
//       <section className={classes.header_section}>
//         <div className={classes.header_container}>
//           <div className={classes.logo_container}>
//             {/* Use Link instead of anchor for SPA navigation */}
//             <a href ="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </a>
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>USA</span>
//               </div>
//             </div>
//           </div>

//           {/* Make search into a form for better accessibility */}
//           <form className={classes.search} onSubmit={handleSearch}>
//             <select
//               name="category"
//               id="category-select"
//               defaultValue=""
//               aria-label="Select search category"
//             >
//               <option value="">All Departments</option>
//               <option value="electronics">Electronics</option>
//               <option value="clothing">Clothing</option>
//               <option value="home">Home & Kitchen</option>
//               <option value="books">Books</option>
//             </select>
//             <input
//               type="text"
//               name="search"
//               id="search-input"
//               placeholder="Search Amazon"
//               aria-label="Search Amazon products"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               type="submit"
//               className={classes.search_button}
//               aria-label="Search"
//             >
//               <BsSearch size={20} />
//             </button>
//           </form>

//           <div className={classes.order_container}>
//             {/* Language selector - doesn't need to be a link unless it navigates */}
//             <div className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select aria-label="Select language" defaultValue="en">
//                 <option value="en">EN</option>
//                 <option value="es">ES</option>
//                 <option value="fr">FR</option>
//               </select>
//             </div>

//             <a href="/signin" className={classes.account_link}>
//               <div>
//                 <p>Hello, sign in</p>
//                 <span>Account & Lists</span>
//               </div>
//             </a>

//             <a href="/orders" className={classes.orders_link}>
//               <div>
//                 <p>Returns</p>
//                 <span>& Orders</span>
//               </div>
//             </a>

//             <a href="/cart" className={classes.cart}>
//               <div className={classes.cart_container}>
//                 <BiCart size={35} />
//                 <span className={classes.cart_count}>{BiBasket.length}</span>
//               </div>
//               <span className={classes.cart_label}>Cart</span>
//             </a>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;

// import React from "react";
// import classes from "../Header/header.module.css"; // Fixed: removed duplicate "Header/" in path
// // import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";

// const Header = () => {
//   return (
//     <>
//       <section className={classes.header_section}>
//         <div className={classes.header_container}>
//           <div className={classes.logo_container}>
//             <a href="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </a>
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Deliverd to</p>
//                 <span> USA</span>
//               </div>
//             </div>
//           </div>

//           <div className={classes.search}>
//             <select name="category" id="category-select">
//               {" "}
//               {/* Added proper attributes */}
//               <option value="">All</option>
//             </select>
//             <input
//               type="text"
//               name="search"
//               id="search-input"
//               placeholder="search product"
//               aria-label="Search products" // Added for accessibility
//             />
//             <button
//               type="button"
//               className={classes.search_button}
//               aria-label="Search" // Added for accessibility
//             >
//               <BsSearch size={20} />
//             </button>
//           </div>

//           <div className={classes.order_container}>
//             <a href="/" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select aria-label="Select language">
//                 <option value="en">EN</option>
//               </select>
//             </a>

//             <a href="/Signup">
//               <div>
//                 <p>Sign In</p>
//                 <span> Account & Lists</span>
//               </div>
//             </a>

//             <a href="/Orders">
//               <div>
//                 {" "}
//                 {/* Added wrapper div for better structure */}
//                 <p>returns</p>
//                 <span>& Orders</span>
//               </div>
//             </a>

//             <a href="/cart" className={classes.cart}>
//               {" "}
//               {/* Added proper route */}
//               <BiCart size={35} />
//               <span>0</span>
//             </a>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;

// import React from "react";
// import classes from "../Header/header.module.css";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
// const Header = () => {
//   return (
//     <>
//       <section>
//         <div className={classes.header_container}>
//           <div className={classes.logo_container}>
//             <a href="/">
//               {/* {" logo"} */}
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </a>
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />{" "}
//               </span>
//               <div>
//                 <p>Deliverd to</p>
//                 <span> USA</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={classes.search}>
//           <select name="" id="">
//             <option value="">All</option>
//           </select>
//           <input type="text" name="" id="" placeholder="search product" />
//           <BsSearch />
//         </div>
//         {/* right side link */}
//         <div className={classes.order_container}>
//           <a href="" className={classes.language}>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//               alt=""
//             />
//             <select>
//               <option value="">EN</option>
//             </select>
//           </a>

//           <a href="">
//             <div>
//               <p>Sign In</p>
//               <span> Account & Lists</span>
//             </div>
//           </a>
//           {/* orders */}
//           <a href="">
//             <p>returns</p>
//             <span>& Orders</span>
//           </a>
//           {/* cart */}
//           <a href="" className={classes.cart}>
//             {/* icon */}
//             <BiCart size={35} />
//             <span>0</span>
//           </a>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;

// import React from "react";
// import classes from "../Header/header.module.css";
// import { Link } from "react-router-dom";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";

// const Header = () => {
//   return (
//     <>
//       <section className={classes.header_section}>
//         <div className={classes.header_container}>
//           <div className={classes.logo_container}>
//             <a href="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </a>
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />{" "}
//               </span>
//               <div>
//                 <p>Deliverd to</p>
//                 <span> USA</span>
//               </div>
//             </div>
//           </div>

//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" name="" id="" placeholder="search product" />
//             <BsSearch size={20} />
//           </div>

//           <div className={classes.order_container}>
//             <a href="/" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select>
//                 <option value="">EN</option>
//               </select>
//             </a>

//             <a href="/SignIn">
//               <div>
//                 <p>Sign In</p>
//                 <span> Account & Lists</span>
//               </div>
//             </a>

//             <a href="/Orders">
//               <p>returns</p>
//               <span>& Orders</span>
//             </a>

//             <a href="" className={classes.cart}>
//               <BiCart size={35} />
//               <span>0</span>
//             </a>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };
// export default Header;
