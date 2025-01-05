// // const products = [
// //     { id: 1, name: 'Laptop', price: 999 },
// //     { id: 2, name: 'Smartphone', price: 499 },
// //     { id: 3, name: 'Tablet', price: 299 }
// //   ];

//   const ProductList = ({products}) => (
//     <ul>
//       {products.map(product,index => (
//         <li key={index.id}>
//           {product.name} - ${product.price}
//         </li>
//       ))}
//     </ul>
//   );
  
//   export default ProductList;


  // ProductList.js
import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;



// // ProductList.js
// import React from "react";

// function ProductList({ products }) {
//   return (
//     <div>
//       <h2>Product Details</h2>
//       {products.map((product, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <p><strong>Name:</strong> {product.name}</p>
//           <p><strong>Title:</strong> {product.title}</p>
//           <p><strong>Description:</strong> {product.description}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
