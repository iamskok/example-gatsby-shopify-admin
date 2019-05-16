// import React from 'react'
// import { useStaticQuery, graphql, Link } from 'gatsby'
// import Image from 'gatsby-image';

// const Products = () => {
//   const data = useStaticQuery(
//     graphql`
//       query {
//         allShopifyProduct(
//           sort: {
//             fields: [createdAt]
//             order: DESC
//           }
//         ) {
//           edges {
//             node {
//               id
//               title
//               descriptionHtml
//               handle
//               createdAt
//               images {
//                 id
//                 originalSrc
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 910) {
//                       ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                     }
//                   }
//                 }
//               }
//               variants {
//                 id
//                 availableForSale
//                 image {
//                   originalSrc
//                 }
//                 price
//                 selectedOptions {
//                   name
//                   value
//                 }
//                 sku
//                 title
//               }
//               title
//             }
//           }
//         }
//       }
//     `
//   )

//   return (
//     <div className="products">
//       {data.allShopifyProduct.edges.map(x => (
//         <div className="product">
//           { !!x.node.handle !== false &&
//             <Link to={`/product/${x.node.handle}/`}>
//               { !!x.node.images[0] !== false && 
//                 <Image
//                   fluid={x.node.images[0].localFile.childImageSharp.fluid}
//                   className="product__img"
//                   alt={x.node.handle}
//                 />
//               }
//             </Link> 
//           }
//           <p>title: {x.node.title}</p>
//           <p>descriptionHtml: {x.node.descriptionHtml}</p>
//           <p>handle: {x.node.handle}</p>
//           <p>createdAt: {x.node.createdAt}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Products
