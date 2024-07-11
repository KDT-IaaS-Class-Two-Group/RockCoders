import styled from "styled-components";
import Picture from "../utilities/Picture";

const StyledFrameBreaker = styled(Picture)`
  width: ${(props) => props.width ?? "25rem"};
  height: ${(props) => props.height ?? "12.5rem"};
`;

export default StyledFrameBreaker;
