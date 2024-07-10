import styled from "styled-components";
import PictureComponent from "../utilities/Picture";

const StyledFrameBreaker = styled(PictureComponent)`
  width: ${(props) => props.width ?? "25rem"};
  height: ${(props) => props.height ?? "12.5rem"};
`;

export default StyledFrameBreaker;
