import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomerDetails } from "../api/api";

const CustomerDetails = () => {
  const { id } = useParams();
  const {
    isPending,
    data: customer,
    error,
  } = useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomerDetails(id),
  });

  if (isPending) return <h2>Loading.....</h2>;
  if (error) return <h2>Data not shown</h2>;
  const { name, noOfPurchase, amount } = customer;
  return (
    <>
      <section className="p-4 max-w-lg mx-auto items-center">
        <h2 className="text-3xl font-semibold py-2">Customer Details</h2>
        <div className="shadow-md bg-slate-100 w-full px-8 py-9 space-y-4">
          <p className="text-2xl font-medium mr-2">
            Cutomer name :
            <span className="text-2xl font-normal ml-3 tracking-wider">
              {name}
            </span>
          </p>
          <p className="text-2xl font-medium mr-2">
            Number of Purchase Items :
            <span className="text-2xl font-normal ml-3 tracking-wider">
              {noOfPurchase}
            </span>
          </p>
          <p className="text-2xl font-medium mr-2">
            Amount :
            <span className="text-2xl font-normal ml-3 tracking-wider">
              {amount}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default CustomerDetails;
