import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styles from "./ToastPop.module.css";
import { ToastPopProps } from "../../lib/types";
import { getToastTitle } from "../../utils/getToastTitle";

/**
 * `ToastPop` is a reusable toast notification component built with React-Bootstrap.
 *
 * @component
 * @param {ToastPopProps} props - Props for configuring the toast.
 * @see {@link ToastPopProps} Defined in core/types.ts
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
  const headerTitle = getToastTitle(variant);

  return (
    <ToastContainer className={`p-3 ${styles.toastFixed}`}>
      <Toast
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
        bg={variant ?? "success"}
        role="alert"
        aria-live="assertive"
      >
        <Toast.Header>
          <strong className="me-auto">{headerTitle}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
