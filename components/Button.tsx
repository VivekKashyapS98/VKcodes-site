import { ReactChildren } from "react";

interface Props {
  children: any;
  onClick?: VoidFunction;
}

export default function Button(props: Props) {
  return (
    <button
      className="btn btn-primary border-0 bg-purple-500 text-white hover:bg-purple-400  hover:shadow-xl active:bg-purple-700 active:shadow-md active:text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
