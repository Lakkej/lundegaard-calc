import React, { useState } from "react";
import {
  Box,
  Grid,
  Slider,  
  Typography,
  TextField,
} from "@mui/material";

export const CalculatorSlider = (props) => {
  const [error, setError] = useState(null);
  const [state, setState] = useState(props.value);
  return (
    <>
      <Typography fontWeight={"bold"} variant="h5">
        {props.title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs paddingX={2}>
          <Slider
            onChange={(event) => setState(event.target.value)}
            onChangeCommitted={() => {                
              setError(null);
              props.onChange(state);
            }}
            aria-labelledby="input-slider"
            step={props.step}
            value={state}
            min={props.min}
            max={props.max}
          />

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ flexGrow: "1" }}>
              {`${props.min.toLocaleString()} ${props.end}`}
            </Typography>
            <Typography>
              {`${props.max.toLocaleString()} ${props.end}`}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: 130 }}
            type={"number"}
            error={error}
            helperText={error}
            value={state}
            size="small"
            onChange={(event) => {
              setError(null);
              let newValue = event.target.value;
              if ((newValue % props.step !== 0) | (newValue < props.min)) {
                setError("Wrong value!");
                return;
              }
              setState(newValue)
              props.onChange(newValue);
            }}
            inputProps={{
              step: props.step,
              min: props.min,
              max: props.max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
