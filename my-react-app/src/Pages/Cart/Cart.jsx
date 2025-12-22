import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";
import classes from "./cart.module.css"; // Import CSS module

function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  // Calculate subtotal
  const subtotal = basket
    ?.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          {/* Cart Items */}
          <div className={classes.cart_items}>
            <h3 className={classes.greeting}>
              Hello, {user?.email?.split("@")[0] || "Guest"}
            </h3>
            <h2 className={classes.title}>Your Shopping Cart</h2>
            <hr className={classes.divider} />

            {basket?.length === 0 ? (
              <div className={classes.empty_cart}>
                <p className={classes.empty_message}>
                  Oops! No items in your cart
                </p>
                <Link to="/" className={classes.continue_shopping}>
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div>
                {basket?.map((item, i) => (
                  <ProductCard
                    key={item.id || i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                    isCartItem={true}
                    dispatch={dispatch}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {basket?.length > 0 && (
            <div className={classes.order_summary}>
              <h3 className={classes.summary_title}>Order Summary</h3>
              <div className={classes.subtotal}>
                <span>
                  Subtotal ({basket.length}{" "}
                  {basket.length === 1 ? "item" : "items"}):
                </span>
                <span className={classes.subtotal_amount}>${subtotal}</span>
              </div>

              <button className={classes.checkout_button}>
                Proceed to Checkout
              </button>

              <p className={classes.shipping_note}>
                Shipping and taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Cart;

// import React, { useContext } from "react";
// import Layout from "../../components/Layout/Layout";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import ProductCard from "../../components/Product/ProductCard";
// import { Link } from "react-router-dom";

// function Cart() {
//   // ✅ Correct destructuring for your DataContext structure
//   const { state, dispatch } = useContext(DataContext);
//   const { basket, user } = state;

//   // Calculate subtotal
//   const subtotal = basket
//     ?.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
//     .toFixed(2);

//   return (
//     <Layout>
//       <section
//         className={classes.container}
//         // style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
//       >
//         <div className={classes.cart_container} /*/style={{ display: "flex", gap: "20px" }}*/>
//           {/* Cart Items */}
//           <div
//             style={{
//               flex: 1,
//               background: "white",
//               padding: "20px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Hello, {user?.email?.split("@")[0] || "Guest"}</h3>
//             <h2 style={{ margin: "15px 0" }}>Your Shopping Cart</h2>
//             <hr />

//             {basket?.length === 0 ? (
//               <div style={{ textAlign: "center", padding: "40px" }}>
//                 <p
//                   style={{
//                     fontSize: "18px",
//                     color: "#555",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   Oops! No items in your cart
//                 </p>
//                 <Link
//                   to="/"
//                   style={{
//                     color: "#007185",
//                     textDecoration: "none",
//                     border: "1px solid #007185",
//                     padding: "10px 20px",
//                     borderRadius: "4px",
//                     display: "inline-block",
//                   }}
//                 >
//                   Continue Shopping
//                 </Link>
//               </div>
//             ) : (
//               <div>
//                 {basket?.map((item, i) => (
//                   <ProductCard
//                     key={item.id || i}
//                     product={item}
//                     renderDesc={true}
//                     renderAdd={false}
//                     flex={true}
//                     isCartItem={true}
//                     dispatch={dispatch} // Pass dispatch to ProductCard
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Order Summary */}
//           {basket?.length > 0 && (
//             <div
//               style={{
//                 width: "350px",
//                 background: "white",
//                 padding: "20px",
//                 borderRadius: "8px",
//                 height: "fit-content",
//               }}
//             >
//               <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>
//               <p style={{ marginBottom: "15px" }}>
//                 Subtotal ({basket.length}{" "}
//                 {basket.length === 1 ? "item" : "items"}):
//                 <strong style={{ marginLeft: "5px" }}>${subtotal}</strong>
//               </p>

//               <button
//                 style={{
//                   width: "100%",
//                   background: "#FFD814",
//                   border: "none",
//                   padding: "12px",
//                   borderRadius: "8px",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   marginBottom: "15px",
//                 }}
//               >
//                 Proceed to Checkout
//               </button>

//               <p
//                 style={{ fontSize: "14px", color: "#666", textAlign: "center" }}
//               >
//                 Shipping and taxes calculated at checkout
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Cart;

// import React, { useContext } from "react";
// import Layout from "../../components/Layout/Layout";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import ProductCard from "../../components/Product/ProductCard";
// import { Link } from "react-router-dom";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);

//   return (
//     <Layout>
//       <section style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ display: "flex", gap: "20px" }}>
//           <div style={{ flex: 1, background: "white", padding: "20px", borderRadius: "8px" }}>
//             <h3>Hello, {user?.email?.split('@')[0] || "Guest"}</h3>
//             <h2 style={{ margin: "15px 0" }}>Your Shopping Cart</h2>
//             <hr />

//             {basket?.length === 0 ? (  // Fixed: Changed == to ===
//               <div style={{ textAlign: "center", padding: "40px" }}>
//                 <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
//                   Oops! No items in your cart
//                 </p>
//                 <Link
//                   to="/"
//                   style={{
//                     color: "#007185",
//                     textDecoration: "none",
//                     border: "1px solid #007185",
//                     padding: "10px 20px",
//                     borderRadius: "4px",
//                     display: "inline-block"
//                   }}
//                 >
//                   Continue Shopping
//                 </Link>
//               </div>
//             ) : (
//               <div>
//                 {basket?.map((item, i) => (
//                   <ProductCard
//                     key={item.id || i}
//                     product={item}
//                     renderDesc={true}
//                     renderAdd={false}
//                     flex={true}
//                     isCartItem={true}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Order Summary - Only show when basket has items */}
//           {basket?.length > 0 && (
//             <div style={{
//               width: "350px",
//               background: "white",
//               padding: "20px",
//               borderRadius: "8px",
//               height: "fit-content"
//             }}>
//               <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>
//               <p style={{ marginBottom: "15px" }}>
//                 Subtotal ({basket.length} {basket.length === 1 ? 'item' : 'items'}):
//                 <strong style={{ marginLeft: "5px" }}>
//                   ${basket.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}
//                 </strong>
//               </p>
//               <button
//                 style={{
//                   width: "100%",
//                   background: "#FFD814",
//                   border: "none",
//                   padding: "12px",
//                   borderRadius: "8px",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   marginBottom: "15px"
//                 }}
//               >
//                 Proceed to Checkout
//               </button>
//               <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
//                 Shipping and taxes calculated at checkout
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Cart;

// import React, { useContext } from "react";
// import Layout from "../../components/Layout/Layout";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import ProductCard from "../../components/Product/ProductCard";
// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);
//   return (
//     <Layout>
//       <section>
//         <div>
//           <h3>Hello</h3>
//           <hr />
//           {basket?.length == 0?(
//             <p>Oops No item in your cart</p>
//           ) : (
//             basket?.map((item, i) => {
//               return
//                 <ProductCard key={i} product={item} renderDesc={true}
//                 renderAdd={false} flex={true} />
//               ;
//             })
//           )}
//         </div>
//         <div>cart</div>
//       </section>
//     </Layout>
//  );
//}

// export default Cart;

// import React, { useContext } from "react";
// import Layout from "../../components/Layout/Layout";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import ProductCard from "../../components/Product/ProductCard";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);

//   return (
//     <Layout>
//       <section
//         style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 350px",
//             gap: "20px",
//           }}
//         >
//           <div
//             style={{
//               background: "white",
//               padding: "20px",
//               borderRadius: "4px",
//             }}
//           >
//             <h3>Hello, {user?.email || "Guest"}</h3>
//             <h2 style={{ margin: "15px 0" }}>Your Shopping Cart</h2>
//             <hr />

//             {basket?.length === 0 ? (
//               <div style={{ textAlign: "center", padding: "40px" }}>
//                 <p style={{ fontSize: "18px", color: "#555" }}>
//                   Your Amazon Cart is empty
//                 </p>
//                 <Link
//                   to="/"
//                   style={{ color: "#007185", textDecoration: "none" }}
//                 >
//                   <p>Continue shopping</p>
//                 </Link>
//               </div>
//             ) : (
//               <div>
//                 {basket?.map((item, i) => (
//                   <ProductCard
//                     key={i}
//                     product={item}
//                     renderDesc={true}
//                     flex={true}
//                     isCartItem={true}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Subtotal Section */}
//           {basket?.length > 0 && (
//             <div
//               style={{
//                 background: "white",
//                 padding: "20px",
//                 borderRadius: "4px",
//                 height: "fit-content",
//               }}
//             >
//               <h3>Order Summary</h3>
//               <p style={{ margin: "15px 0" }}>
//                 Subtotal ({basket.length} items):
//                 <strong>
//                   {" "}
//                   $
//                   {basket
//                     .reduce(
//                       (total, item) =>
//                         total + item.price * (item.quantity || 1),
//                       0
//                     )
//                     .toFixed(2)}
//                 </strong>
//               </p>
//               <button
//                 style={{
//                   width: "100%",
//                   background: "#FFD814",
//                   border: "none",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   fontSize: "16px",
//                   cursor: "pointer",
//                   marginTop: "10px",
//                 }}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Cart;
