import React from "react";
import { Table } from "react-bootstrap";
const ManageBooking = () => {
  return (
    <div className="bg-light">
      <div className="container pt-5 pb-5">
        <h1
          style={{ color: "tomato", fontSize: "40px" }}
          className="mt-1 mb-4 text-center fw-bolder"
        >
          Manage All Booking{" "}
        </h1>{" "}
        {/* {event?.length} */}
        <Table striped bordered hover>
          <thead style={{ border: "2px solid tomato" }}>
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Tour Name</th>
              <th className="p-3">Tour Description</th>
              <th className="p-3">Image Link</th>
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
