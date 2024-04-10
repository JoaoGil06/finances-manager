import React from "react";
import {
  ChevronDown,
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from "./styles/Dropdown.styledcomponent";
import IconChevronDown from "../../assets/icon-arrow-down.svg";
import DropdownProps from "./types/DropdownProps.type";
import { useDropdown } from "./hooks/useDropdown";

export const Dropdown = ({ values, onChange, defaultValue }: DropdownProps) => {
  const {
    isOpened,
    onClickDropdownItem,
    selectedItem,
    onClickDropdownButton,
  } = useDropdown({
    onChange,
    values,
    defaultValue,
  });

  return (
    <DropdownContainer>
      <DropdownButton onClick={onClickDropdownButton} isActive={isOpened}>
        {selectedItem?.label ? selectedItem.label : "Select"}
        <ChevronDown src={IconChevronDown} />
      </DropdownButton>
      {isOpened && (
        <DropdownContent>
          {values.map((value) => (
            <DropdownItem
              key={value.value}
              onClick={() =>
                onClickDropdownItem({ value: value.value, label: value.label })
              }
            >
              {value.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};
