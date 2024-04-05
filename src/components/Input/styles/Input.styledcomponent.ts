import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  width: 100%;
`;

export const InputLabel = styled.label`
  margin-bottom: 0.8rem;
  font-weight: 700;
  color: var(--trueLavender);
  text-transform: capitalize;

  align-self: flex-start;
`;

type InputComponentProps = {
  hasErrors: boolean;
};

export const InputComponent = styled.input<InputComponentProps>`
  padding: 0.8rem 1.6rem;
  border: 1px solid var(--stoicWhite);
  border-radius: 4px;
  color: var(--ruinedSmores);
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }

  ${({ hasErrors }) =>
    hasErrors &&
    `
      border: 1px solid var(--fireOpal);
    `}
`;

export const ErrorMessageComponent = styled.span`
  color: var(--fireOpal);
  margin-top: 0.4rem;
  font-size: 1.3rem;
  line-height: 2.3rem;
  font-weight: 700;

  align-self: flex-end;
`;
