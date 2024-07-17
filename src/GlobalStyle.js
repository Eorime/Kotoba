import { PuffLoader } from "react-spinners";
import styled from "styled-components";

export const Spinner = styled(PuffLoader)`
  position: absolute;
  margin-top: 20%;
  left: 50.5%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1700px) {
    margin-top: 10%;
  }
`;
