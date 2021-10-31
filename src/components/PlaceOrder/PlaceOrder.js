import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  /* const [tours, setTours] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/tours")
        .then((res) => res.json())
        .then((data) => setTours(data));
    }, []); */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "Pending";
    data.status = user?.email;

    axios.post("http://localhost:5000/addBooking", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });

    console.log(data);
  };
  return (
    <div>
      <div style={{ backgroundColor: "#FAF5EE" }}>
        <div className=" container mt-5 mb-5 rounded rounded-3">
          <h1
            style={{ color: "tomato", fontSize: "40px" }}
            className="fw-bolder text-center pt-5 pb-5"
          >
            Please Booking Your Travel Form
          </h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="text"
                {...register("location")}
                required
                placeholder="Location"
              />
              <br /> <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="text"
                {...register("name")}
                required
                placeholder="Please Type Your Name"
              />
              <br /> <br />
              <input
                //   defaultValue={data.status}
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="email"
                {...register("email")}
                required
                placeholder="Please Type Your E-mail"
              />
              <br /> <br />
              {/* include validation with required or other standard HTML validation rules */}
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="number"
                {...register("phone", { required: true })}
                required
                placeholder="Please Type Your Number"
              />
              <br />
              <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="date"
                {...register("date", { required: true })}
                required
                placeholder="dd/mm/yy"
              />
              <br />
              <br />
              <textarea
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="textarea"
                {...register("message", { required: true })}
                required
                placeholder="Please Type Your Message"
              />
              <br />
              <br />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                style={{ backgroundColor: "tomato" }}
                className="p-2 mb-5  btn  text-center w-100 fw-bolder fs-4"
                type="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
