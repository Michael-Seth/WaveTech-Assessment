import React, { Fragment } from "react";

type IRenderIf = {
  condition?: boolean;
  children: React.ReactNode;
};

function RenderIf({ condition, children }: IRenderIf) {
  if (!condition) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}

export default RenderIf;
