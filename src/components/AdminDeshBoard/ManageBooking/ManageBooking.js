import React from "react";
import { Table } from "react-bootstrap";
const ManageBooking = () => {
  return (
    <div className="bg-light">
      <div className="pt-5 pb-5">
        <h1
          style={{ color: "tomato", fontSize: "40px" }}
          className="mt-1 mb-4 text-center fw-bolder"
        >
          Manage All Booking{" "}
        </h1>{" "}
        {/* {event?.length} */}
        <Table striped bordered hover className="border  border-info">
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
    </div>
  );
};

export default ManageBooking;
