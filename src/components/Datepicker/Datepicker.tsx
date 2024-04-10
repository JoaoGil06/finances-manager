import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  DatepickerBody,
  DatepickerButton,
  DatepickerContainer,
  DatepickerContent,
  DatepickerHeader,
  DayColGrid,
} from "./styles/Datepicker.styledcomponent";
import IconChevronLeft from "../../assets/icon-arrow-left.svg";
import IconChevronRight from "../../assets/icon-arrow-right.svg";
import IconCalendar from "../../assets/icon-calendar.svg";
import { dayNames, monthNames } from "./utils";
import { useDatepicker } from "./hooks/useDatepicker";
import moment from "moment";

const Datepicker = () => {
  const {
    isOpened,
    onClickButton,
    currentMonth,
    currentYear,
    selectedDate,
    onClickPreviousMonth,
    onClickNextMonth,
    getDaysOfTheMonth,
    getNumberOfDaysInMonth,
    emptyWeekdays,
    onSelectDate,
  } = useDatepicker();

  console.log(new Date());

  const renderDateString = () => {
    const m = moment(selectedDate);
    return m.format("DD MMMM YYYY");
  };

  return (
    <DatepickerContainer>
      <DatepickerButton onClick={onClickButton} isActive={isOpened}>
        {renderDateString()}
        <CalendarIcon src={IconCalendar} />
      </DatepickerButton>
      {isOpened && (
        <DatepickerContent>
          <DatepickerHeader>
            <ArrowLeft src={IconChevronLeft} onClick={onClickPreviousMonth} />
            <p>
              {monthNames[currentMonth]} {currentYear}
            </p>
            <ArrowRight src={IconChevronRight} onClick={onClickNextMonth} />
          </DatepickerHeader>
          <DatepickerBody>
            <DayColGrid heading>
              {dayNames.map((day) => (
                <p key={day}>{day}</p>
              ))}
            </DayColGrid>

            <DayColGrid>
              {emptyWeekdays.map((_, index) => (
                <span key={index} />
              ))}
              {getDaysOfTheMonth(
                1,
                getNumberOfDaysInMonth(currentYear, currentMonth) + 1
              ).map((day) => (
                <p
                  key={day}
                  onClick={() => onSelectDate(day)}
                  className={
                    selectedDate?.getDate() === day &&
                    selectedDate?.getMonth() === currentMonth &&
                    selectedDate?.getFullYear() === currentYear
                      ? "active"
                      : ""
                  }
                >
                  {day}
                </p>
              ))}
            </DayColGrid>
          </DatepickerBody>
        </DatepickerContent>
      )}
    </DatepickerContainer>
  );
};

export default Datepicker;
