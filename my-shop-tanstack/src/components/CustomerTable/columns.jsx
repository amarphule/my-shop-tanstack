import { Link } from "react-router-dom";

import Actions from "./Actions";

export const columns = [
  {
    accessorKey: "id",
    header: "Sr. No",
  },
  {
    accessorKey: "name",
    header: "Customer Name",
    cell: ({ row: { original } }) => {
      return (
        <Link to={`/customers/${original.id}`}>
          <span>{original.name}</span>
        </Link>
      );
    },
  },
  {
    accessorKey: "noOfPurchase",
    header: "Number Of Purchase Item",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({
      row: {
        original: { id },
      },
    }) => {
      return <Actions customerId={id} />;
    },
  },
];
