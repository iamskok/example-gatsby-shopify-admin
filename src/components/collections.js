import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Collections = () => {
  const data = useStaticQuery(
    graphql`
      query {
        shop {
          name
        }
      }
    `
  );

  console.log('data:', JSON.stringify(data));

  return (
    <div className="collections">
      <h2>Collections</h2>
    </div>
  )
}

export default Collections