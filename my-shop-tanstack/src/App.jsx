/* eslint-disable react/no-unescaped-entities */
import { Link, Outlet } from "react-router-dom";
import CustomerTable from "./components/CustomerTable";

function App() {
  return (
    <>
      <h1 className="text-4xl font-semibold underline text-center py-5 mt-3">
        Today's Purchase
      </h1>
      <div className="flex justify-center gap-4 my-5">
        <Link to={"/"} className="px-4 py-1 font-semibold">
          Home
        </Link>
        <Link
          to={"/add-customer"}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
        >
          Add Customer
        </Link>
      </div>
      <section className="md:flex w-full space-y-4 md:space-y-0">
        <aside className="md:w-1/2 w-full p-4 text-center flex flex-col border-r-2 space-y-3">
          <CustomerTable />
        </aside>
        <aside className="md:w-1/2 w-full p-4">
          <Outlet />
        </aside>
      </section>
    </>
  );
}

export default App;
