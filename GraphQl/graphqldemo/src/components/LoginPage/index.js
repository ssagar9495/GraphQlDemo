import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log("values==>", values);
    },
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "35%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <br /> <br />
        <br />
        <Typography variant="h4" component="h2">
          Login page
        </Typography>{" "}
        <br />
        <br /> <br />
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
        <br />
        <Button variant="outlined" type="submit">
          Login
        </Button>
        <br />
        <div style={{ display: "flex" }}>
          Don't have an account ?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            {" "}
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
