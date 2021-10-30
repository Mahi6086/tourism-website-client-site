import React from "react";
import AddBooking from "./AddBooking/AddBooking";
import Admin from "./Admin/Admin";
import ManageBooking from "./ManageBooking/ManageBooking";

const AdminDeshBoard = () => {
  return (
    <div>
      <AddBooking></AddBooking>
      <ManageBooking></ManageBooking>
      <Admin></Admin>
    </div>
  );
};

export default AdminDeshBoard;
