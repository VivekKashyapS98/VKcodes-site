import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

export default function ImportantNote(props: Props) {
  return (
    <div className="m-3 alert bg-purple-100 dark:bg-gray-700 dark:text-gray-100">
      <div className="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="max-w-10 max-h-10 min-w-10 min-h-10 mx-2 stroke-current text-purple-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{props.children}</span>
      </div>
    </div>
  );
}
