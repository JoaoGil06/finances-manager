import React from 'react';
import { Outlet } from "react-router-dom";
import Button from "../Button/index";
import { ButtonVariant } from "../Button/types/ButtonVariant.enum";
import IconPlus from "../../assets/icon-plus.svg";
import { Input } from "../Input/Input";
import Dropdown from "../Dropdown/index";
import Datepicker from '../Datepicker/Datepicker';

export const Layout = () => {
  const dropdownValues = [
    {
      value: "1",
      label: "Label de teste 01",
    },
    {
      value: "2",
      label: "Label de teste 02",
    },
    {
      value: "3",
      label: "Label de teste 03",
    },
    {
      value: "4",
      label: "Label de teste 04",
    },
    {
      value: "5",
      label: "Label de teste 05",
    },
  ];

  return (
    <>
      {/* <Button
        label={"New Invoice"}
        onClick={() => {}}
        variant={ButtonVariant.Primary}
        icon={IconPlus}
      />
      <Input
        type="text"
        name="teste"
        onChange={() => {}}
        value={""}
        showLabel
        placeholder={"Placeholder de teste"}
      />
      <Dropdown values={dropdownValues} onChange={() => {}} /> */}
      <Datepicker />  
      <Outlet />
    </>
  );
};
