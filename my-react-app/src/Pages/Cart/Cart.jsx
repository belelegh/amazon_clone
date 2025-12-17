import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  return (
    <Layout>
      <section>
        <div>
          <h3>Hello</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Oops No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard key={i} product={item} renderDesc={true} flex={true} />
              );
            })
          )}
        </div>
        <div>cart</div>
      </section>
    </Layout>
  );
}

export default Cart;

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
