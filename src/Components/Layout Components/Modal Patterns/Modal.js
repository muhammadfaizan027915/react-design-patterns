import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div({
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: "10"
});

const ModalBody = styled.div({
  width: "auto",
  height: "auto",
});

const Modal = ({ children, open, closeOnRequest }) => {
  return (
    open && (
      <ModalBackground onClick={closeOnRequest}>
        <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
      </ModalBackground>
    )
  );
};

export default Modal;
