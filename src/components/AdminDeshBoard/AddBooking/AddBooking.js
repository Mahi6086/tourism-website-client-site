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

      <div className="container mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="text"
            {...register("name")}
            required
            placeholder="Please Type Title"
          />
          <br /> <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="text"
            {...register("location")}
            required
            placeholder="Please Type Location"
          />
          <br /> <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="number"
            {...register("price")}
            required
            placeholder="Please Type Price"
          />
          <br /> <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="number"
            {...register("days", { required: true })}
            required
            placeholder="Please Type Days"
          />
          <br />
          <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="number"
            {...register("person", { required: true })}
            required
            placeholder="Please Type Person"
          />
          <br />
          <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="link"
            {...register("imagelink", { required: true })}
            required
            placeholder="Please Type image Link"
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
  );
};

export default AddBooking;
