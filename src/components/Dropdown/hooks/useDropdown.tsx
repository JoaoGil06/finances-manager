import { useState, useEffect } from "react";
import { DropdownItem as DropdownItemType } from "../types/DropdownItem.type";

interface UseDropdownProps {
  values: DropdownItemType[];
  onChange: (item: DropdownItemType) => void;
  defaultValue?: string;
}

export const useDropdown = ({
  defaultValue,
  onChange,
  values,
}: UseDropdownProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<
    DropdownItemType | undefined
  >({} as DropdownItemType);

  useEffect(() => {
    if (defaultValue) {
      const findedDefaultValue = values.find(
        (value) => value.value === defaultValue
      );
      if (findedDefaultValue) {
        setSelectedItem(findedDefaultValue);
      }
    }
  }, [defaultValue, values]);

  const onClickDropdownItem = (item: DropdownItemType) => {
    onChange(item);
    setSelectedItem(item);
    setIsOpened(false);
  };

  const onClickDropdownButton = () => {
    setIsOpened(!isOpened);
  };

  return {
    isOpened,
    selectedItem,
    onClickDropdownItem,
    onClickDropdownButton,
  };
};
