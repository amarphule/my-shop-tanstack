import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCustomer, fetchCustomers } from "../api/api";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    noOfPurchase: "",
    amount: "",
  });
  const { name, noOfPurchase, amount } = newCustomer;

  const queryClient = useQueryClient();

  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
    // Ensure initial data is always an array to avoid undefined issues
    initialData: [],
  });

  const { mutate } = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
  });

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Blank field check
    if (!name) {
      alert("Please Enter Customer name");
      return;
    }
    if (!noOfPurchase || !amount) {
      alert("Please Enter Number");
      return;
    }

    mutate({ id: (customers.length + 1).toString(), ...newCustomer });
    setNewCustomer({ name: "", noOfPurchase: "", amount: "" });
    navigate("/");
  };

  return (
    <>
      <section className="w-full items-center justify-center p-4">
        <h2 className="text-3xl font-semibold py-2">Add Customer</h2>
        <form className="space-y-4" onSubmit={handleSubmitForm}>
          <div className="flex items-center gap-8">
            <label
              htmlFor="customerName"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Cutomer Name:
            </label>
            <input
              type="text"
              placeholder="e.g Amardeep Phule"
              name="name"
              id="customerName"
              value={name}
              onChange={handleChange}
              className="px-3 py-2 text-xl  border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              htmlFor="noOfPurchase"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Number of Purchase Items:
            </label>
            <input
              type="Number"
              placeholder="e.g 10"
              name="noOfPurchase"
              id="noOfPurchase"
              value={noOfPurchase}
              min={0}
              onChange={handleChange}
              className="px-3 py-2 text-xl  border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              htmlFor="amount"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Amount:
            </label>
            <input
              type="Number"
              placeholder="e.g 900"
              name="amount"
              id="amount"
              value={amount}
              min={0}
              onChange={handleChange}
              className="px-3 py-2 text-xl border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex justify-center">
            <button className="text-lg tracking-wide bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md ">
              Add Customer
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddCustomer;
