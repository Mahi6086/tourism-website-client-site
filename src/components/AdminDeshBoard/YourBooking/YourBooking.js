import React from "react";
import { Table } from "react-bootstrap";

const YourBooking = () => {
  return (
    <div className="bg-light">
      <div className="pt-5 pb-5">
        <h1
          style={{ color: "tomato", fontSize: "40px" }}
          className="mt-1 mb-4 text-center fw-bolder"
        >
          Your Booking{" "}
        </h1>{" "}
        <Table striped bordered hover className=" border  border-warning">
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
          {/*  {event?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{pd.title}</td>
                <td>{pd.description}</td>
                <td>{pd.image}</td>
                <button className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
          ))} */}
        </Table>
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
