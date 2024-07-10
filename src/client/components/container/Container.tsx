import TContainer from "./Container.type";
import React from "react";
import { StyledFlex, StyledGrid } from "./Container.style";

const BasicContainer: React.FC<TContainer> = ({ children }) => {
  return <div>{children}</div>;
};

const FlexContainer: React.FC<TContainer> = ({ children }) => {
  return <StyledFlex>{children}</StyledFlex>;
};

const GridContainer: React.FC<TContainer> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export { BasicContainer, FlexContainer, GridContainer };
