import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

export const DatepickerContainer = styled.div`
  position: relative;
  min-width: 240px;
`;

type DatepickerButtonProps = {
  isActive: boolean;
};

export const DatepickerButton = styled.div<DatepickerButtonProps>`
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  user-select: none;
  color: var(--ruinedSmores);

  &:hover {
    cursor: pointer;
    border: 1px solid var(--venetianNights);
  }

  border: ${(props) =>
    props.isActive
      ? "1px solid var(--venetianNights)"
      : "1px solid var(--stoicWhite)"};
  border-radius: 0.4rem;

  transition: all 0.2s;
`;

export const CalendarIcon = styled(ReactSVG)``;

export const DatepickerContent = styled.div`
  position: absolute;
  top: 150%;
  left: 0;
  width: 100%;
  transition: all 0.2s;
  border-radius: 0.4rem;

  background-color: var(--white);
  box-shadow: 0 15px 20px rgba(72, 84, 159, 0.25);
`;

export const DatepickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;

  p {
    flex: 1 0 0;
  }
`;

export const ArrowLeft = styled(ReactSVG)`
  cursor: pointer;
`;

export const ArrowRight = styled(ReactSVG)`
  cursor: pointer;
`;

export const DatepickerBody = styled.div`
  margin: 5px;
`;

type DayColGridProps = {
  heading?: boolean;
};

export const DayColGrid = styled.div<DayColGridProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  ${({ heading }) =>
    heading &&
    css`
      font-weight: 700;
    `}

  .active {
    background: red;
  }
`;
