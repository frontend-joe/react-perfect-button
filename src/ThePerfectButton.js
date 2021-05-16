import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";

const defaultButton = css`
  background: #5d2fdf;
`;

const hoveredButton = css`
  background: #5526c5;
`;

const focusedButton = css`
  box-shadow: 0 0 0 3px #8659e9;
`;

const disabledButton = css`
  color: #555455;
  background: #302e30;
  cursor: not-allowed;
`;

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const loadingButton = css`
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: #5d2fdf
      repeating-linear-gradient(
        60deg,
        transparent,
        transparent 10px,
        #5526c5 10px,
        #5526c5 20px
      );

    animation: ${loadingKeyframes} 1s infinite linear;
  }

  & > span {
    opacity: 0.5;
  }

  cursor: wait;
`;

const completedButton = css`
  padding: 0 2.5rem;
  color: #0a5b3e;
  background: #57aa8e;
  cursor: default;
`;

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  padding: 0 3rem;
  font-family: inherit;
  font-size: 20px;
  background: transparent;
  border: 0;
  border-radius: 0.5rem;
  color: #f7f7f7;
  cursor: pointer;
  outline: none;
  transition-property: background, box-shadow;
  transition-duration: 0.35s;

  & > span {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  ${(p) => !p.isLoading && defaultButton};

  &:hover {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton};
  }

  &:focus {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && focusedButton};
  }

  &:disabled {
    ${disabledButton};
  }

  ${(p) => p.isLoading && loadingButton};
  ${(p) => p.isCompleted && completedButton};
`;

const Wrapper = ({ children, isLoading, isCompleted, ...rest }) => {
  return (
    <StyledButton isLoading={isLoading} isCompleted={isCompleted} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Wrapper;
