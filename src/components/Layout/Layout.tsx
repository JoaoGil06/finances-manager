import { Outlet } from "react-router-dom";
import Button from "../Button/index";
import { ButtonVariant } from "../Button/types/ButtonVariant.enum";
import IconPlus from "../../assets/icon-plus.svg";

export const Layout = () => {
  return (
    <>
      <Button
        label={"New Invoice"}
        onClick={() => {}}
        variant={ButtonVariant.Primary}
        icon={IconPlus}
      />
      <Outlet />
    </>
  );
};
