import React, { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import AddBooking from "../AddBooking/AddBooking";
import ManageBooking from "../ManageBooking/ManageBooking";
import YourBooking from "../YourBooking/YourBooking";
import "./Admin.css";

const Admin = () => {
  const { user } = useAuth();
  const [control, setControl] = useState("addEvent");
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container ">
            <div className="col 12 col-md-2">
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
                    <i class="fas fa-user-alt me-1"></i> Your Booking
                  </li>
                  <li
                    onClick={() => setControl("addBooking")}
                    className="admin-menu p-2 text-center fw-bolder fs-5"
                  >
                    <i class="fas fa-user-plus me-1"></i> Add Booking
                  </li>
                  <li
                    onClick={() => setControl("manageBooking")}
                    className="admin-menu p-2 text-center fw-bolder fs-5"
                  >
                    <i class="fas fa-users me-1"></i> Manage All Booking
                  </li>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 text-center  text-center">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="1500"
                data-aos-delay="300"
                data-aos-offset="0"
                className="mt-5 mb-5  W-50"
              >
                Welcome!!
                <span
                  style={{ color: "tomato" }}
                  className=" text-decoration-none P-3 rounded rounded-3 ms-2 me-2"
                >
                  {user.displayName}.
                </span>
                Have a Nice Day.
              </h1>
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
