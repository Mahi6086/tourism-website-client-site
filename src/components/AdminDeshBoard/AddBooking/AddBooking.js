import React from "react";
import { useForm } from "react-hook-form";

const AddBooking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{ marginTop: "100px", backgroundColor: "#FAF5EE" }}
      className="shadow p-5 rounded rounded-4"
    >
      <h1
        style={{ color: "tomato", fontSize: "45px" }}
        className="mt-1 mb-4 text-center fw-bolder"
      >
        Please Add Booking
      </h1>
      <hr className="container fw-bolder" />
      <div className="w-100 m-auto mt-5">
        <div className="border border-3 container d-flex justify-content-center align-items-center">
          <div className="login-form p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title")}
                placeholder="Name"
                className="w-100 p-3 m-2 border-0 rounded rounded-3"
              />

              <br />

              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-3 m-2 w-100 border-0 rounded rounded-3"
              />
              <br />
              <br />
              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-3 m-2 w-100 border-0 rounded rounded-3"
              />
              <br />

              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="Submit"
                value="Submit"
                style={{ backgroundColor: "tomato" }}
                className="btn text-dark w-100 fw-bolder ms-2 p-2 fs-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
