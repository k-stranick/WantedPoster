/**
 * @file types.ts
 * @fileoverview This file contains TypeScript interfaces and types used in the application.
 * These interfaces define the structure of props for various components, ensuring type safety and better code maintainability.
 */


/**
 * Props for the `ToastPop` component.
 *
 * @property {boolean} show - Whether the toast is visible.
 * @property {() => void} onClose - Function to close the toast.
 * @property {string} message - Message displayed in the toast body.
 * @property {"success" | "danger" | "warning" | "info"} [variant] - Bootstrap variant for toast background.
 */

export interface ToastPopProps {
  show: boolean;
  onClose: () => void;
  message: string;
  variant?: "success" | "danger" | "warning" | "info";
}


/**
* Props for the `MissingForm` component.
*
* @property {(message: string) => void} onToast - A callback function triggered on form submission,
* used to display a toast message with the given text.
*/
export interface MissingFormProps {
  onToast: (message: string) => void;
}
