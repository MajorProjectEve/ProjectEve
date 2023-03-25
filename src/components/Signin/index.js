import React from "react";
import styled from "styled-components";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  Text,
} from "./SigninElements";

function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordInvalid, setPasswordInvalid] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate password and set passwordInvalid state accordingly
    if (password.length < 8) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  };

  const usernameEntered = (e) => {
    setUsername(e.target.value);
    // buttonEnabled(username, password)
  };

  const passwordEntered = (e) => {
    setPassword(e.target.value);
    // buttonEnabled(username, password)
  };

  const buttonEnabled = (username, password) => {
    if (username.length > 0 && password.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">Cervical Cancer Model</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>Username:</StyledLabel>
              <StyledInput
                type="text"
                value={username}
                onChange={(e) => usernameEntered(e)}
              />
              <StyledLabel invalid={passwordInvalid}>Password:</StyledLabel>
              <StyledInput
                type="password"
                value={password}
                onChange={(e) => passwordEntered(e)}
              />
              {passwordInvalid && (
                <StyledAlert>Password is invalid.</StyledAlert>
              )}
              <FormButton type="submit" disabled={!username || !password}>
                Login
              </FormButton>
            </StyledForm>

            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
