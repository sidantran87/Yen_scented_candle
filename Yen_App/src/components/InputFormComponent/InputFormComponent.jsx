import React, { useState } from "react";
import { Input } from "antd";

const InputFormComponent = (props) => {

const { placeholder, password, ...rests } = props;
const handleOnChange = (e) => {
   props.OnChange(e.target.value)
}
return (
   <div>
      {password ? (
      // Nếu password là true, sử dụng Input.Password
      <Input.Password
         size="large"
         placeholder={placeholder}
         style={{ fontFamily: "Poppins", height: "50px" }}
         valueInput={props.input}
         onChange={handleOnChange}
         {...rests}
      />
      ) : (
      // Ngược lại, sử dụng Input thông thường
      <Input
         size="large"
         placeholder={placeholder}
         style={{ fontFamily: "Poppins", height: "50px" }}
         valueInput={props.input}
         onChange={handleOnChange}
         {...rests}
      />
      )}
   </div>
);
};

export default InputFormComponent;
