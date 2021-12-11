import { ReactChildren } from "react";

interface Props {
  children: any;
  onClick?: VoidFunction;
}

export default function Button(props: Props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
