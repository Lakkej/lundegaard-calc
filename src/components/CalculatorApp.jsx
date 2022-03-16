import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { Calculator } from "./Calculator";
import { CalculatorBanner } from "./CalculatorBanner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeTo } from "../store/paymentsSlice";

export const CalculatorApp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [textState, setTextState] = useState({
    totalAmount: 114588,
    rate: 0.069,
  });
  const [calcState, setCalcState] = useState({
    months: 36,
    amount: 100000,
    insurance: true,
  });

  const onChangeCalcState = (name, newValue) => {
    const newState = { ...calcState, [name]: newValue };
    setCalcState(newState);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("api/loan", {
        params: calcState,
      });
      const { payment, rate, totalAmount } = response.data;
      setTextState({ totalAmount, rate });
      dispatch(changeTo(payment));
      setLoading(false);
    };

    fetchData();
  }, [calcState,dispatch]);

  return (
    <Paper sx={{ minWidth: "90%" }} elevation={12}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={7} sx={{ minHeight: "500px" }}>
          <Calculator
            monthsValue={calcState.months}
            amountValue={calcState.amount}
            insuranceValue={calcState.insurance}
            onChangeCalcState={onChangeCalcState}
            totalAmount={textState.totalAmount}
            rate={textState.rate}
          />
        </Grid>
        <Grid item sm={12} md={5} sx={{ minHeight: "500px" }}>
          <CalculatorBanner loading={loading} />
        </Grid>
      </Grid>
    </Paper>
  );
};
