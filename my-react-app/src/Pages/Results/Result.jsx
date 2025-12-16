import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
function Result() {
  const [results, setResult] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((res) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>/ategory {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id} 
              renderAdd={true}
              product={product} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Result;
