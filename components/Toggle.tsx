/* eslint-disable react-hooks/exhaustive-deps */
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function Toggle({ toggle }: any) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      toggle("dark");
    } else toggle("light");
  }, [enabled]);

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-gray-500" : "bg-gray-200"
          } relative mx-2 md:mx-4 inline-flex items-center h-7 w-10 md:h-9 md:w-14 rounded-full transition-colors focus:outline-none `}
        >
          <span
            className={`${
              enabled
                ? "translate-x-4 md:translate-x-6 bg-gray-800"
                : "translate-x-1 bg-white"
            } flex justify-center items-center h-5 w-5 md:w-7 md:h-7 transform  rounded-full transition-transform`}
          >
            {enabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  color="white"
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  color="orange"
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </Switch>
      </div>
    </Switch.Group>
  );
}
