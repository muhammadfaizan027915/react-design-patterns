import React from "react";

const ComositionComponent = () => {
  return (
    <div style={{margin: "20px"}}>
      <DangerButton
        size="large"
        text="Signup Here"
        borderRadius="5px"
        border="none"
        color="white"
        fontWeight="bold"
        fontFamily="poppins, sans-serif"
        boxShadow="5px 5px 20px lightgray"
      />
      <SuccessButton
        size="large"
        text="Login Account"
        borderRadius="5px"
        border="none"
        color="white"
        fontWeight="bold"
        fontFamily="poppins, sans-serif"
        marginLeft="20px"
        boxShadow="5px 5px 20px lightgray"
      />
    </div>
  );
};

export const Button = ({ size, background, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "12px 32px" : "6px 16px",
        background,
        color,
        ...props,
      }}
    >
      {text}
    </button>
  );
};

const DangerButton = ({ text, size, color, ...props }) => {
  return (
    <Button text={text} size={size} color={color} background="red" {...props} />
  );
};

const SuccessButton = ({ text, size, color, ...props }) => {
  return (
    <Button
      text={text}
      size={size}
      color={color}
      background="green"
      {...props}
    />
  );
};

export default ComositionComponent;
