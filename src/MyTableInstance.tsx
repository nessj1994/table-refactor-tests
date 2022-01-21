import { FC } from "react";
import { Table } from "./Table/Table";
import { columns, data } from "./Table/CustomCols";

// Custom instance employing our table library.
// Should gather data related to the instance and construct a table with the lib

const UserTable: FC<any> = () => {
  return (
    <Table< name="offer-table" columns={columns} data={data} addonHooks={[]} />
  );
};

export default UserTable;
