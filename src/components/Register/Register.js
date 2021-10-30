import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hook/useAuth";

const Register = () => {
  const { handleGoogleLogin, user, handleUserRegister, handleUserLogin } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const signInUsinGoogleLogin = () => {
    handleGoogleLogin().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div style={{ marginTop: "300px" }} className="container text-center">
      <h1 style={{ color: "tomato", fontSize: "50px" }} className="fw-bolder">
        Welcome To Our Website
      </h1>
      <h4 className="text-black-50">Please Login For Continue..</h4>
      <hr className="fw-bold" />
      <div
        style={{
          backgroundColor: "tomato",
          border: "none",
          borderRadius: "10px",
        }}
        class="d-grid gap-2 col-6 mx-auto mt-4"
      >
        <button
          onClick={signInUsinGoogleLogin}
          className="btn p-3 text-light fs-3"
          type="button"
        >
          <i class="fab fa-google me-4"></i>
          Log In Using Google
        </button>
      </div>
    </div>
  );
};

export default Register;
