import React from "react";
import { ViewerContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const Mediaviewer = (props: any) => {
  const onCLick = () => {};
  return (
    <ViewerContainer>
      <div className="viewer-play">
        <FontAwesomeIcon
          icon={faCaretRight}
          className="fa-regular fa-4x"
          style={{ opacity: 0.7 }}
          onClick={onCLick}
        />
      </div>
    </ViewerContainer>
  );
};
