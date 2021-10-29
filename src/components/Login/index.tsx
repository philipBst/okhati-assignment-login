import React from "react";

import { Link } from "react-router-dom";

import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

const Login = () => {
  return (
    <div>
      <div className="form-control">
        <div className="header">
          <img
            src="https://img.jobsnepal.com/big/WaCUSC916hn7vJ5dP23aretB7Y5uNMc16IMhav1N.jpeg"
            alt="okhati"
            className="logo"
          />
          <h2>Okhati</h2>
        </div>
        <form>
          <div className="field">
            <TextField
              id="username"
              label="Username"
              variant="outlined"
            ></TextField>
          </div>
          <div className="field">
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            ></TextField>
          </div>
          <div className="field">
            <FormControlLabel
              control={<Checkbox />}
              label="Keep me logged in"
            />
          </div>
          <div className="field">
            <Button className="btn" variant="contained">
              Login
            </Button>
          </div>
        </form>
        <div className="field">
          <Link to="/signup">No account? Sign up here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
