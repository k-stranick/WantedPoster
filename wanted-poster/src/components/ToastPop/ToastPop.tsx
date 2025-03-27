import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styles from "./ToastPop.module.css";

interface ToastPopProps {
  show: boolean;
  onClose: () => void;
  message: string;
  variant?: "success" | "danger" | "warning" | "info";
}

export const ToastPop: React.FC<ToastPopProps> = ({
  show,
  onClose,
  message,
  variant,
}) => {
  return (
    <ToastContainer className={`p-3 ${styles.toastFixed}`}>
      <Toast
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
        bg={variant ?? "success"}
      >
        <Toast.Header>
          <strong className="me-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

// export default ToastPop;
