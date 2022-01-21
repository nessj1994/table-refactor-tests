import React, { FC } from "react";

import { TableContext } from "./types";

const TBody: FC<any> = (props) => {
  const tableInstance = React.useContext(TableContext);

  const {
    page,
    pageCount,
    getTableBodyProps,
    prepareRow,
    state: { pageIndex, pageSize }
  } = tableInstance;
  return (
    <>
      <tbody style={{ backgroundColor: "red" }} {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TBody;
