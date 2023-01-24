import { FC } from "react";
import styles from "./MessageBox.module.scss";

type MessageBoxProps = {
  message: string;
  variant: "warning";
}

export const MessageBox: FC<MessageBoxProps> = (props) => {
  const { message, variant } = props;

  return (
    <div className={styles.box}>
      {
        variant === "warning" && (
          <>
            <h3>⚠️ Warning</h3>
            <p>{message}</p>
          </>
        )
      }
    </div>
  );
};
