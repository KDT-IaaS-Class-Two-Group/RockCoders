import React from "react";

type TImg =
  | React.HTMLProps<HTMLImageElement>
  | {
      src: string;
    };

export default TImg;
