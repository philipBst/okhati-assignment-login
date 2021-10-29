import React from "react";

import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const SignUp = () => {
  return (
    <div>
      <div className="form-control signup">
        <div className="header">
          <img
            src="https://img.jobsnepal.com/big/WaCUSC916hn7vJ5dP23aretB7Y5uNMc16IMhav1N.jpeg"
            alt="okhati"
            className="logo"
          />
          <h2>Okhati</h2>
        </div>
        <form>
          <div className="field names">
            <TextField
              id="firstname"
              label="First name"
              variant="outlined"
            ></TextField>
            <TextField
              id="lastname"
              label="Last name"
              variant="outlined"
            ></TextField>
          </div>
          <div className="flex">
            <TextField id="email" label="Email" variant="outlined"></TextField>
            <TextField
              id="pass"
              label="Password"
              type="password"
              variant="outlined"
            ></TextField>
            <TextField
              id="cpass"
              label="Confirm Password"
              type="password"
              variant="outlined"
            ></TextField>
            <div className="field">
              <Button className="btn" variant="contained">
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
