import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageBooking.css";
const ManageBooking = () => {
  const [booking, setBooking] = useState([]);
  const [statuss, setStatuss] = useState(false);

  useEffect(() => {
    fetch("https://mysterious-spire-59402.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure, you want to delete?");
    if (procced) {
      const url = `https://mysterious-spire-59402.herokuapp.com/tours/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Successfully Deleted");
            const remaining = booking.filter((book) => book._id !== id);
            setBooking(remaining);
          }
        });
    }
  };
  const handleStatus = (id) => {
    axios
      .put(`https://mysterious-spire-59402.herokuapp.com/updateStatus`, { id })
      .then((res) => console.log("Your order Approved"))
      .then((data) => setStatuss(true));
  };
  return (
    <div style={{ backgroundColor: "#FAF5EE" }} className="mt-2 ">
      <div className="pt-5 pb-5">
        <h1
          style={{ color: "tomato", fontSize: "40px" }}
          className="mt-1 mb-4 text-center fw-bolder"
        >
          Manage All Booking
        </h1>

        {/* {event?.length} */}
        <div className="table">
          <Table
            striped
            bordered
            hover
            className="border  border-dark container"
          >
            <thead>
              <tr>
                <th className="p-3">SL</th>
                <th className="p-3">Location</th>
                <th className="p-3">Your Name</th>
                <th className="p-3">Your Email</th>
                <th className="p-3">Travel Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            {booking?.map((pd, index) => (
              <tbody>
                <tr>
                  <td className="p-3 fw-bolder">{index}</td>
                  <td className="p-3 fw-bolder">{pd.location}</td>
                  <td className="p-3 fw-bolder">{pd.name}</td>
                  <td className="p-3 fw-bolder">{pd.email}</td>
                  <td className="p-3 fw-bolder">{pd.date}</td>
                  <td className="p-3 fw-bolder">
                    {" "}
                    {/* <button className="btn bg-info p-2 mt-2 fw-bolder">
                      {pd.status}..
                    </button> */}
                    <p>
                      {pd.status === "Approved" ? (
                        <button className="btn bg-info p-2 mt-2 fw-bolder">
                          {pd?.status}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatus(pd._id)}
                          className="btn bg-info p-2 mt-2 fw-bolder"
                        >
                          {pd?.status}..
                        </button>
                      )}
                    </p>
                  </td>
                  <td className="pt-3 fw-bolder">
                    <button
                      className="btn bg-info p-2 mt-2 fw-bolder"
                      onClick={() => handleDelete(pd._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
