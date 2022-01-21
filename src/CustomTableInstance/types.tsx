import { FC } from "react";
import { CellProps } from "react-table";

export type User = {
  id: number;
  firstName: string;
  lastName?: string;
};

export type Offer = {
  id: number;
  status: "new" | "sent" | "accepted" | "rejected" | "cancelled";
  assignee?: User;
  requestDate: number;
  price: number;
};

// TODO: The types in this file should probably move to a types files
// While the rest of these declarations or exports belong with their instance
// of the component. For example a User table would have a UserCols.tsx
type CellComponent<T> = FC<CellProps<Offer, T>>;

export const AssigneeCell: CellComponent<Offer["assignee"]> = ({ value }) => {
  return (
    <>
      <div>{value?.firstName}</div>
    </>
  );
};
