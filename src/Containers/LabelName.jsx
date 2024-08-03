
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Util } from "../Utils/Util";

const LabelName = React.forwardRef((props, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={Util(
      "text-sm text-start font-medium text-orange-50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      props.className
    )}
    {...props}
  />
));

LabelName.displayName = LabelPrimitive.Root.displayName;

export { LabelName };