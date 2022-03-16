import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { CalculatorSlider } from "./CalculatorSlider";

export const Calculator = (props) => {
  //   const monthsValue = useSelector((state) => state.months.value);
  //   const amountValue = useSelector((state) => state.amount.value);
  //   const dispatch = useDispatch()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "24px 48px",
      }}
    >
      <Typography align="center" variant="h3">
        Get loan approved in under 5 minutes!
      </Typography>
      <CalculatorSlider
        title={"How much do you want:"}
        min={20000}
        max={800000}
        end={"CZK"}
        value={props.amountValue}
        onChange={(newValue) => props.onChangeCalcState("amount", newValue)}
        step={1000}
      />
      <CalculatorSlider
        title={"How long to pay it:"}
        min={24}
        max={96}
        end={"months"}
        value={props.monthsValue}
        onChange={(newValue) => props.onChangeCalcState("months", newValue)}
        step={1}
      />
      <FormControl>
        <Typography variant="h6" fontWeight={"bold"}>
          Do you want insurance in case of financial problems?
        </Typography>
        <RadioGroup
          row
          value={props.insuranceValue}
          onChange={(event) =>
            props.onChangeCalcState("insurance", event.target.value)
          }
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={true}
            control={<Radio />}
            label="With insurance"
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="Without insurance"
          />
        </RadioGroup>
      </FormControl>
      <Typography variant="body1">
        Interest rate is <b>{props.rate * 100}%</b>, insurance{" "}
        <b>{props.insuranceValue === "true" ? 100 : 0} CZK/month </b>, fee for online
        creation is <b>0 CZK</b>, total <b>{props.totalAmount.toLocaleString()} CZK</b>
      </Typography>
    </Box>
  );
};
