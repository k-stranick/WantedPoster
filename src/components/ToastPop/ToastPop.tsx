import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styles from "./ToastPop.module.css";

/**
 * Props for the `ToastPop` component.
 *
 * @property {boolean} show - Whether the toast is visible.
 * @property {() => void} onClose - Function to close the toast.
 * @property {string} message - Message displayed in the toast body.
 * @property {"success" | "danger" | "warning" | "info"} [variant] - Bootstrap variant for toast background.
 */

interface ToastPopProps {
  show: boolean;
  onClose: () => void;
  message: string;
  variant?: "success" | "danger" | "warning" | "info";
}

/**
 * `ToastPop` is a reusable toast notification component built with React-Bootstrap.
 *
 * @component
 * @param {ToastPopProps} props - Props for configuring the toast.
 *
 * @description
 * This component renders a toast popup that can display messages for success, error, info, or warnings.
 * It supports autohide and can be closed manually via the close button.
 * Styling includes a fixed position provided by `ToastPop.module.css` and Bootstrap toast variants.
 *
 * Props:
 * - `show` (boolean): Controls whether the toast is visible.
 * - `onClose` (function): Callback to hide the toast.
 * - `message` (string): Text content displayed in the toast body.
 * - `variant` (optional string): Controls the background color. Accepts "success", "danger", "warning", or "info".
 *
 * @example
 * <ToastPop
 *   show={showToast}
 *   onClose={() => setShowToast(false)}
 *   message="Your form was submitted!"
 *   variant="success"
 * />
 *
 * @see {@link https://react-bootstrap.github.io/components/toasts/} React-Bootstrap Toast Documentation
 */

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
