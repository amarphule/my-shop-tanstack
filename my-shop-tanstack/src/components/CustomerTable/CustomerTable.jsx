import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "../../api/api";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns } from "./columns.jsx";
import { useMemo } from "react";

const CustomerTable = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });

  const customerTableColumn = useMemo(() => columns, []);
  const customerData = useMemo(() => data, [data]);

  const tableInstance = useReactTable({
    columns: customerTableColumn,
    data: customerData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h2 className="text-3xl font-semibold py-2">Customer List</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Data not shown</h2>}
      {!isLoading && !error && (
        <table className="divide-y divide-slate-900 bg-slate-100 shadow-md">
          <thead>
            {tableInstance.getHeaderGroups().map((headerGrp) => {
              return (
                <tr key={headerGrp.id} className="bg-slate-200">
                  {headerGrp?.headers?.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className="px-7 py-3 font-medium capitalize text-lg"
                        colSpan={header.colSpan}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody className="divide-y divide-slate-900 text-center">
            {tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="md:px-7 py-2 text-lg">
                        <div>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CustomerTable;
