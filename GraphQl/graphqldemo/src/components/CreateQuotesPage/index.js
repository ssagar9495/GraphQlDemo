import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";

const CreateQuotesPage = () => {
  const formik = useFormik({
    initialValues: {
      quotes: "",
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
          Create Quotes
        </Typography>{" "}
        <br />
        <br /> <br />
        <TextField
          placeholder="Write ....."
          variant="outlined"
          id="quotes"
          name="quotes"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.quotes}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default CreateQuotesPage;
