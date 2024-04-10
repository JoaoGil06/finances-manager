import { useState } from "react";

export const useDatepicker = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onClickButton = () => {
    setIsOpened(!isOpened);
  };

  const onClickNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const onClickPreviousMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const onSelectDate = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const emptyWeekdays = new Array(
    new Date(currentYear, currentMonth, 1).getDay()
  ).fill("", 0);

  const getNumberOfDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysOfTheMonth = (start: number, end: number): number[] => {
    const length = Math.abs((end - start) / 1);

    const { result } = Array.from({ length }).reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: [], current: 1 }
    );

    return result;
  };

  return {
    isOpened,
    onClickButton,
    currentMonth,
    currentYear,
    selectedDate,
    onClickNextMonth,
    onClickPreviousMonth,
    onSelectDate,
    emptyWeekdays,
    getNumberOfDaysInMonth,
    getDaysOfTheMonth,
  };
};
