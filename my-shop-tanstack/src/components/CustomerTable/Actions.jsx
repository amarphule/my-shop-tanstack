/* eslint-disable react/prop-types */
import { MdOutlineModeEdit, MdOutlineDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCustomer } from "../../api/api";

const Actions = ({ customerId }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleDelete = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["customers"]);
    },
  });

  const id = parseInt(customerId);

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      handleDelete.mutate(id);
    }
  };

  return (
    <div className="flex gap-5 justify-center">
      <button onClick={() => navigate(`/customers/edit/${id}`)}>
        <MdOutlineModeEdit className="text-orange-300" />
      </button>
      <button onClick={handleDeleteClick}>
        <MdOutlineDeleteForever className="text-red-500" />
      </button>
    </div>
  );
};

export default Actions;
