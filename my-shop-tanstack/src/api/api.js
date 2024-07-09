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
  console.log(" det ", response);
  return await response.json();
};

export { fetchCustomers, fetchCustomerDetails };
