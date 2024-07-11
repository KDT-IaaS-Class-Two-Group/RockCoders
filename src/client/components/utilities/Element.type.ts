import React from "react";

type TElement = React.HTMLAttributes<HTMLElement> &
  React.HTMLProps<HTMLElement> & {
    tagName: string;
  };

export default TElement;
