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

import React from "react";
import classes from "../Header/header.module.css";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section className={classes.header_section}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />{" "}
              </span>
              <div>
                <p>Deliverd to</p>
                <span> USA</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={20} />
          </div>

          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="USA flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <div>
                <p>Sign In</p>
                <span> Account & Lists</span>
              </div>
            </a>

            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};
export default Header;