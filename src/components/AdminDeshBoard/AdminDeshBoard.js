import React from "react";
// import useAuth from "../../Hook/useAuth";
import AddBooking from "./AddBooking/AddBooking";
import Admin from "./Admin/Admin";
import ManageBooking from "./ManageBooking/ManageBooking";
import YourBooking from "./YourBooking/YourBooking";

const AdminDeshBoard = () => {
  // const { user } = useAuth();

  return (
    <div>
      <AddBooking></AddBooking>
      <ManageBooking></ManageBooking>
      <Admin></Admin>
      <YourBooking></YourBooking>
    </div>
  );
};

export default AdminDeshBoard;
