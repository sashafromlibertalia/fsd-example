import { FC } from "react";
import styles from "./MessageBox.module.scss";

type MessageBoxProps = {
  message: string;
  variant: "warning" | "error";
}

export const MessageBox: FC<MessageBoxProps> = (props) => {
  const { message, variant } = props;

  return (
    <div className={styles.box}>
      <h3>
        {
          variant === "warning" && "⚠️ Warning"
        }
        {
          variant === "error" && "❌ Error"
        }
      </h3>
      <p>{message}</p>
    </div>
  );
};
