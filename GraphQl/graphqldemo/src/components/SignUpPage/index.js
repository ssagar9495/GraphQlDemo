import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../../gqlOperations/mutations";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [createUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      createUser({ variables: { userNew: values } });
    },
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      {loading && <h1>Loading...</h1>}
      {error && <h2>{error?.message}</h2>}
      {data && (
        <h2>
          {data?.signUpUserDummy?.firstName} is signed Up,know you can login
        </h2>
      )}
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "35%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2">
          Sign Up Page
        </Typography>{" "}
        <br /> <br /> <br />
        <TextField
          placeholder="Enter Firstname"
          variant="outlined"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <br />
        <TextField
          placeholder="Enter Lastname"
          variant="outlined"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <br />
        <TextField
          placeholder="Enter Email"
          variant="outlined"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <TextField
          placeholder="Enter Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          variant="outlined"
        />
        <br />
        <Button variant="outlined" type="submit">
          Sign Up
        </Button>
        <Link to="/login">Back to Login</Link>
      </form>
    </div>
  );
};

export default SignUpPage;
