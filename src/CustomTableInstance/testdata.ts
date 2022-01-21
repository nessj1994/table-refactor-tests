import { Offer, AssigneeCell } from "./types";
import { Column } from "react-table";
const data: Offer[] = [
  {
    id: 1,
    status: "new",
    requestDate: Date.now(),
    price: 19.99
  },
  {
    id: 2,
    status: "sent",
    assignee: { id: 1, firstName: "Luca", lastName: "Barone" },
    requestDate: Date.now(),
    price: 19.99
  },

  {
    id: 3,
    status: "accepted",
    assignee: { id: 1, firstName: "Luca", lastName: "Barone" },
    requestDate: Date.now(),
    price: 19.99
  }
];

const columns: Column<Offer>[] = [
  { Header: "ID", accessor: "id" },
  {
    Header: "Status",
    accessor: "status"
  },
  { Header: "Assignee", accessor: "assignee", Cell: AssigneeCell }
];

export { columns, data };
