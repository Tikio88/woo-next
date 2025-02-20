import * as React from "react";

function SvgCross(props, fill) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16pt"
      height="16pt"
      viewBox="0 0 16 16"
      {...props}
    >
      <g fill={fill || "#7e7e7e"} >
        <path d="M8 0C3.578 0 0 3.578 0 8c0 4.422 3.578 8 8 8 4.422 0 8-3.578 8-8 0-4.422-3.578-8-8-8zm0 14.75c-3.73 0-6.75-3.02-6.75-6.75S4.27 1.25 8 1.25 14.75 4.27 14.75 8 11.73 14.75 8 14.75zm0 0" />
        <path d="M10.738 9.852L8.883 8l1.855-1.852a.632.632 0 000-.886.632.632 0 00-.886 0L8 7.117 6.148 5.262a.632.632 0 00-.886 0 .632.632 0 000 .886L7.117 8 5.262 9.852a.632.632 0 000 .886c.246.242.64.242.886 0L8 8.883l1.852 1.855c.246.242.64.242.886 0a.632.632 0 000-.886zm0 0" />
      </g>
    </svg>
  );
}

export default SvgCross;
