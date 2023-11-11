import { ReactNode } from "react";
import "./Button.scss";

type ButtonTypes = {
  name?: string;
  children?: ReactNode;
  version?: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({ children, ...props }: ButtonTypes) => (
  <button
    className={
      props.disabled
        ? "button__disabled"
        : props.version
        ? `button${props.version}`
        : "button"
    }
    disabled={props.disabled ?? false}
    {...props}
  >
    <span className="label">{children}</span>{" "}
    <span className={"chevron"}></span>
  </button>
);
