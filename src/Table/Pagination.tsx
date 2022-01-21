import React, { FC } from "react";
import { TableContext } from "./types";

const Pagination = () => {
  const tableInstance = React.useContext(TableContext);

  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, pageSize }
  } = tableInstance;

  return (
    <div id="pagination">
      <span>
        {/* Previous page  */}
        <button
          onClick={() => {
            console.log("prev");
            previousPage();
          }}
        >
          {"<-"}
        </button>

        {/* Next Page */}
        <button
          onClick={() => {
            console.log("next");
            nextPage();
          }}
        >
          {"->"}
        </button>
      </span>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize
              // pageCount
            },
            null,
            2
          )}
        </code>
      </pre>
    </div>
  );
};

export default Pagination;
