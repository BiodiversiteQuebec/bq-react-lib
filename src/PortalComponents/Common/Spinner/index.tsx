import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

/**
 * Spinner Props
 */
interface Props {
  /**
   * isLoading
   */
  isLoading?: boolean;
}

/**
 * Spinner
 * @param props Props
 * @returns Spinner
 */
export const Spinner = (props: Props) => (
  <>
    {props.isLoading && (
      <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-1x" />
    )}
  </>
);
