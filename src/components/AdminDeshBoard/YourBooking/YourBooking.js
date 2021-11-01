import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hook/useAuth";
import "./YourBooking.css";

const YourBooking = () => {
  const { user } = useAuth();

  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-spire-59402.herokuapp.com/myBooking")
      .then((res) => res.json())
      .then((data) => {
        const myOrder = data.filter((dp) => dp.email == user.email);
        setBooking(myOrder);
      });
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

  return (
    <div style={{ backgroundColor: "#FAF5EE" }} className="mt-2">
      <div className="pt-5 pb-5">
        <h1
          style={{ color: "tomato", fontSize: "40px" }}
          className="mt-1 mb-4 text-center fw-bolder"
        >
          Your Booking{" "}
        </h1>{" "}
        <div className="table">
          <Table
            striped
            bordered
            hover
            className=" border  border-dark container"
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
                    <button className="btn bg-info p-2 mt-2 fw-bolder">
                      {pd.status}..
                    </button>
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
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Location</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  );
};

export default YourBooking;
