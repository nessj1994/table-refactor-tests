import React, { MouseEventHandler } from "react";
import { Table } from "./Table";
import THead from "./THead";
import TBody from "./TBody";
import Pagination from "./Pagination";
import {
  usePagination,
  useTable,
  TableInstance,
  Hooks,
  useColumnOrder,
  useFilters,
  useGroupBy,
  useSortBy,
  useFlexLayout,
  useExpanded,
  useResizeColumns,
  useRowSelect,
  TableOptions,
  Row
} from "react-table";

import { TableContext } from "./types";

interface TableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
  name: string;
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
  onClick?: (row: Row<T>) => void;
  updateData?: (props: any) => void;
  skipPageReset?: boolean;
  adminView?: boolean;
  addonHooks: ((hooks: Hooks<any>) => void)[] | undefined;
}

export function WrappedTable<T extends Record<string, unknown>>(
  props: React.PropsWithChildren<TableProps<T>>
) {
  const { columns, data, addonHooks } = props;

  // Array containing all the hooks we want the table to use
  const hooks: ((hooks: Hooks<any>) => void)[] = [
    useColumnOrder,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useFlexLayout,
    useResizeColumns,
    usePagination,
    useRowSelect
  ];

  const allHooks = addonHooks !== undefined ? hooks.concat(addonHooks) : hooks;

  const tableInstance: TableInstance<T> = useTable<T>(
    { columns, data, initialState: { pageSize: 1 } },
    ...allHooks
  );

  const { getTableProps } = tableInstance;

  return (
    <TableContext.Provider value={tableInstance}>
      {/* Conditionally add Toolbar */}
      {/* <Toolbar />  */}

      <Table {...getTableProps()}>
        <THead />
        <TBody />
        {/* 
          includeFooter && 
          <TFooter />
         */}
      </Table>
      <Pagination />
    </TableContext.Provider>
  );
}
