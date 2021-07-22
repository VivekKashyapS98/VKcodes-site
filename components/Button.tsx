import { ReactChild, ReactChildren } from "react";

interface Props {
  children: ReactChild;
  onClick: VoidFunction;
}

export default function Button(props: Props) {
  return (
    <button
      className=" my-auto py-2 px-4 bg-purple-500 text-white text-lg font-medium text-center shadow-lg rounded-lg transition duration-100 ease-in cursor-pointer hover:bg-purple-400  hover:shadow-xl active:bg-purple-700 active:shadow-md active:text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
