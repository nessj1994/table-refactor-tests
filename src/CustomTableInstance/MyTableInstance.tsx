import { FC } from "react";
import { WrappedTable } from "../Table/WrappedTable";
import { Offer } from "./types";
import { columns, data } from "./testdata";

// Custom instance employing our table library.
// Should gather data related to the instance and construct a table with the lib

const UserTable: FC<any> = () => {
  return (
    <WrappedTable<Offer>
      name="offer-table"
      columns={columns}
      data={data}
      addonHooks={[]}
    />
  );
};

export default UserTable;
