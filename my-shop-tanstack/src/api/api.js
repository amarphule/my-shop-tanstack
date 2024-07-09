const fetchCustomers = async () => {
  const response = await fetch("http://localhost:3000/customers");

  if (!response.ok) {
    throw new Error("Failed to fetch customers");
  }

  return await response.json();
};

const fetchCustomerDetails = async (id) => {
  const response = await fetch(`http://localhost:3000/customers/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch customer");
  }
  return await response.json();
};

const addCustomer = async (customer) => {
  const response = await fetch("http://localhost:3000/customers", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(customer),
  });
  return response.json();
};

export { fetchCustomers, fetchCustomerDetails, addCustomer };
