import React from "react";
import BroInputContainer from "./components/bro-input-container";
import Label from "../label";
import Input from "../input";

const BroInput = ({ label, placeholder }) => (
  <BroInputContainer>
    <Label>{label}</Label>
    <Input type="text" placeholder={placeholder} />
  </BroInputContainer>
);

export default BroInput;
