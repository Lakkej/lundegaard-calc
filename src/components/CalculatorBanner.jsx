import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const CalculatorBanner = ({ loading }) => {
  const paymentsAmount = useSelector((state) => state.payments.value);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE5F55",
        height: "100%",
      }}
    >
      <Typography variant="h5" component="p">How much you will be paying: </Typography>
      {loading ? (
        <CircularProgress size={100} />
      ) : (
        <Typography variant="h1" component="p">
          {`${paymentsAmount} CZK`}
        </Typography>
      )}
      <Button
        variant="contained"
        sx={{ width: "60%", fontSize: 36, marginTop: "16px" }}
      >
        Continue!
      </Button>
    </Box>
  );
};
