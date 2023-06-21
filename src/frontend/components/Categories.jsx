import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { tabletSmall } from "../responsive" // import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${tabletSmall({ flexDirection: "column", padding: 0 })} // Apply the specified styles when the screen size is below the "tabletSmall" breakpoint
`

const Categories = () => {
  return (
    <Container>
      {/* Iterate over the categories array and render a CategoryItem component for each category */}
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
