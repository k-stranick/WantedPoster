/**
 * @file getToastTitle.ts
 * @fileoverview This file contains a utility function to determine the title of a toast notification based on its variant.
 * The function is used in the `ToastPop` component to provide a consistent title for different types of notifications.
 */

/**
 * getToastTitle is a utility function that returns the title for a toast notification based on its variant.
 * 
 * @param variant - The variant of the toast, which determines its style and title.
 *                 Possible values are "success", "danger", "warning", and "info".
 * @returns string - The title of the toast based on the variant.
 *                  Defaults to "Success" if no variant is provided or if the variant is not recognized.
 */
export function getToastTitle(variant?: string): string {
    switch (variant) {
        case "danger":
            return "Error";
        case "warning":
            return "Warning";
        case "info":
            return "Info";
        default:
            return "Success";
    }
}

//older code more traditional function opted for cleaner that is more readable and maintainable
// export function getToastTitle(variant?: string): string {
//   let headerTitle: string;

//   switch (variant) {
//     case "danger":
//       headerTitle = "Error";
//       break;
//     case "warning":
//       headerTitle = "Warning";
//       break;
//     case "info":
//       headerTitle = "Info";
//       break;
//     default:
//       headerTitle = "Success";
//   }

//   return headerTitle;
// }