import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../../gqlOperations/queries";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  let navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        marginTop: "60px",
      }}
    >
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {data?.quotes?.length === 0 && <h2>No Quotes Found</h2>}

      {error && (
        <div
          style={{
            padding: "20px 100px 20px 100px",
            backgroundColor: "#FFCCC3",
            borderRadius: "10px",
            color: "red",
          }}
        >
          {error?.message}
        </div>
      )}

      {data?.quotes?.map((quote) => {
        return (
          <div
            key={quote.by}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "85%",
              marginTop: "20px",
              padding: "20px 10px 20px 10px",
              borderLeft: "7px solid brown",
            }}
          >
            <div>{quote.name}</div>
            <div
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate(`/profile/${quote.by}`)}
            >
              ~{quote.firstName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
