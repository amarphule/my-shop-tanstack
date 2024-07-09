import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "../api/api";

const CustomerTable = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });

  console.log("tbale ", isPending, data, error);

  return (
    <>
      <h2 className="text-3xl font-semibold py-2">Customer List</h2>
      {/* {customers.length > 0 ? ( */}
      <table className="divide-y divide-slate-900 bg-slate-100 shadow-md">
        <thead>
          <tr className="bg-slate-200">
            <th className="px-7 py-3 font-medium capitalize text-lg">
              Customer Name
            </th>
            <th className="px-7 py-3 font-medium capitalize text-lg">
              No. of Purchase Items
            </th>
            <th className="px-7 py-3 font-medium capitalize text-lg">Amount</th>
            <th className="px-4 py-3 font-medium capitalize text-lg">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-900 text-center">
          {/* {customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td
                    className="md:px-7 py-2 text-lg cursor-pointer hover:bg-slate-200"
                    onClick={() => navigate(`customer/details/${customer.id}`)}
                  >
                    <div>{customer.name}</div>
                  </td>
                  <td className="md:px-7 py-2 text-lg">
                    <div>{customer.noOfPurchase}</div>
                  </td>
                  <td className="md:px-7 py-2 text-lg">
                    <div>{customer.amount}</div>
                  </td>
                  <td className="md:px-7 py-2 text-lg">
                    <button
                      onClick={() => handleUpdate(customer.id)}
                      className="bg-slate-500 hover:bg-slate-700 text-white mr-2 px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })} */}
        </tbody>
      </table>
      {/* ) : (s */}
      <div className="text-2xl font-light text-center">No customer found.</div>
      {/* )} */}
    </>
  );
};

export default CustomerTable;
