import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

export default function ImportantNote(props: Props) {
  return (
    <div className="m-2 p-2 md:p-4 md:m-4 flex flex-nowrap items-center rounded-md border-l-4 border-purple-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p>{props.children}</p>
    </div>
  );
}
