// import React from "react"
// import { CategoryInfos } from "./categoryFullinfos"
// import CategoryCard from "./CategoryCard"
// import classes from "./Category.module.css"
// // 
// function Category() {
//   return (
//     <section className={classes.category_container}>
//       {CategoryInfos.map((infos) => {
//         return <CategoryCard key={infos.id} data={infos} />;
//       })}
//     </section>
//   );
// }

// export default Category
import React from "react";
import { CategoryInfos } from "./categoryFullinfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
    </section>
  );
}

export default Category;