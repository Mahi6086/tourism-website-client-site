import React, { useState } from "react";
import AddBooking from "../AddBooking/AddBooking";
import ManageBooking from "../ManageBooking/ManageBooking";
import YourBooking from "../YourBooking/YourBooking";
import "./Admin.css";

const Admin = () => {
  const [control, setControl] = useState("addEvent");
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container ">
            <div className="col-md-2">
              <div className="admin-area pt-5">
                <h2
                  style={{ color: "tomato" }}
                  className="text-center fw-bolder"
                >
                  DashBoard
                </h2>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("yourBooking")}
                    className="admin-menu p-2 text-center fw-bolder fs-5"
                  >
                    Your Booking
                  </li>
                  <li
                    onClick={() => setControl("addBooking")}
                    className="admin-menu p-2 text-center fw-bolder fs-5"
                  >
                    Add Booking
                  </li>
                  <li
                    onClick={() => setControl("manageBooking")}
                    className="admin-menu p-2 text-center fw-bolder fs-5"
                  >
                    Manage All Booking
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-10 text-center  text-center">
              <div className="right-part ">
                {control === "addBooking" && <AddBooking></AddBooking>}
                {control === "manageBooking" && <ManageBooking></ManageBooking>}
                {control === "yourBooking" && <YourBooking></YourBooking>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
