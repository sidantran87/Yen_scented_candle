import React, { useState } from "react";
import { Input } from "antd";

const InputFormComponent = (props) => {
const [valueInput, setvalueInput] = useState("");
const { placeholder, password, ...rests } = props;

return (
   <div>
      {password ? (
      // Nếu password là true, sử dụng Input.Password
      <Input.Password
         size="large"
         placeholder={placeholder}
         style={{ fontFamily: "Poppins", height: "50px" }}
         value={valueInput}
         onChange={(e) => setvalueInput(e.target.value)}
         {...rests}
      />
      ) : (
      // Ngược lại, sử dụng Input thông thường
      <Input
         size="large"
         placeholder={placeholder}
         style={{ fontFamily: "Poppins", height: "50px" }}
         value={valueInput}
         onChange={(e) => setvalueInput(e.target.value)}
         {...rests}
      />
      )}
   </div>
);
};

export default InputFormComponent;
