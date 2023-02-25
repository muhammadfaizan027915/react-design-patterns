import React from "react";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  width: "100vw",
});

const Pane = styled.div({
  flex: (props) => props.width,
});

const SplitScreens = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane width={leftWidth}>{left}</Pane>
      <Pane width={rightWidth}>{right}</Pane>
    </Container>
  );
};

export default SplitScreens;
