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
} from "./CervicalcElements";

const CervicalC = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [enabled, setEnabled] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const nameEntered = (e) => {
    setName(e.target.value);
    // buttonEnabled(username, password)
  };

  const ageEntered = (e) => {
    setAge(e.target.value);
    // buttonEnabled(username, password)
  };

  const buttonEnabled = (name, age) => {
    if (name.length > 0 && age.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">Cervical Cancer Model</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Enter your details</FormH1>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>Name:</StyledLabel>
              <StyledInput
                type="text"
                value={name}
                onChange={(e) => nameEntered(e)}
              />
              <StyledLabel>Age:</StyledLabel>
              <StyledInput
                type="age"
                value={age}
                onChange={(e) => ageEntered(e)}
              />

              <StyledLabel>Upload Cervical Cancer Scan Image:</StyledLabel>
              <FormButton onClick={handleClick}>Upload a file</FormButton>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </StyledForm>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default CervicalC;
