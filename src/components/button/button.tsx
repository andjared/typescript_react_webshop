import React, {FC} from "react";
import styles from "./button.module.scss";

interface buttonProps {
  className: string,
  content: string | React.ReactNode,
  handleClick?: (arg: any) => void
}

const Button: FC<buttonProps> = ({ className, content, handleClick }) => {
  return (
    <button className={styles[className]} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
