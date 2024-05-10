import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

export const TextRingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 8s linear infinite;
`;

export const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%);
  font-size: 28px;
  color: white;
`;

export const Character = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}deg)
    translateY(-${(props) => props.radius}px);
`;
