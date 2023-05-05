import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../gqlOperations/queries";
import { Typography, Box, CircularProgress } from "@mui/material";

const Profile = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
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
      {!data?.user && <h2>No User Data Found</h2>}
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              display: "inline-block",
              border: "3px solid black",
            }}
          >
            <img
              src={`https://robohash.org/${id}.png`}
              alt="pic"
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            />
          </div>
          <Typography variant="h5" component="h5" marginTop="20px">
            {`${data?.user?.firstName} ${data?.user?.lastName}`}
          </Typography>
          <Typography variant="h7" component="h7" marginTop="20px">
            {data?.user?.email}
          </Typography>
          {data?.user?.quotes?.map((quote, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "50%",
                  marginTop: "20px",
                  padding: "10px 10px 10px 10px",
                  borderLeft: "7px solid brown",
                }}
              >
                <div>{quote?.name}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Profile;
