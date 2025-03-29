import React from "react";
import { Image } from "react-bootstrap";
import { MissingDetailsProps } from "../../lib/types";
import styles from "./MissingDetails.module.css";

/**
 * `MissingDetails` is a reusable component for displaying a missing person or missing pet poster.
 *
 * @component
 * @param {MissingDetailsProps} props - The properties object that includes all the details about the missing subject.
 * @see {@link MissingDetailsProps} for a detailed interface definition.
 *
 * @description
 * Renders a structured layout with the subject’s name, description, reward information, last known sighting,
 * and a contact method. An image is also displayed to help identify the missing individual or pet.
 * By accepting this data as props instead of importing a specific constant, you can reuse this component
 * for different missing subjects.
 *
 * @example
 * // In App.tsx or any parent component:
 * import { MissingDetails } from "./MissingDetails";
 * import { POSTER_INFO } from "../lib/constants";
 *
 * export const App: React.FC = () => {
 *   return (
 *     <MissingDetails
 *       name="Keiko"
 *       description={POSTER_INFO.description}
 *       reward={POSTER_INFO.reward}
 *       lastSeen={POSTER_INFO.lastSeen}
 *       contact={POSTER_INFO.contact}
 *       image="/path/to/keikoImg.jpg"
 *     />
 *   );
 * };
 *
 * @see {@link https://reactjs.org/docs/components-and-props.html} React Components & Props
 * @see {@link https://react-bootstrap.github.io/components/images/} React-Bootstrap Image component
 */

export const MissingDetails: React.FC<MissingDetailsProps> = ({
  name,
  description,
  reward,
  lastSeen,
  contact,
  image,
}) => {
  const { posterImg, posterInfo } = styles; // Destructuring the styles object for easier access to its properties

  return (
    <>
      <h1 className="text-center mb-4">Missing: {name}</h1>
      <div className={`mb-4 text-start sunken-dark ${posterInfo}`}>
        <p>{description}</p>
        <p>
          <strong>REWARD:</strong> ${reward}
        </p>
        <p>
          <strong>LAST SEEN:</strong> {lastSeen}
        </p>
        <p>
          <strong>CONTACT:</strong> {contact}
        </p>
      </div>
      <Image
        src={image}
        alt="Keiko IMG"
        fluid
        rounded
        className={`${posterImg} mb-4`}
      />
    </>
  );
};
