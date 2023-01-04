import React from "react";
import ContainerX from "./ContainerX";

const Search = ({ searchTerm }) => {
  return (
//    <div>
//      <h2>{searchTerm} Images</h2>
//      <Container searchTerm={searchTerm} />
//    </div>
    <div>
        <h2>Tenant Id</h2>
        <ContainerX searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
