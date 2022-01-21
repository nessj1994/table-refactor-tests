import React, { FC } from "react";
import { TableContext } from "./types";

const THead: FC<any> = (props) => {
  const tableInstance = React.useContext(TableContext);

  const { headerGroups } = tableInstance;

  return (
    <thead>
      {!tableInstance &&
        console.log(
          "There appears to be an error with the table context supplied to THead"
        )}
      {headerGroups?.map((headerGroup, index) => {
        // {console.log(headerGroup)}
        return (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={`header-group-${index}`}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        );
      })}
    </thead>
  );
};

export default THead;
