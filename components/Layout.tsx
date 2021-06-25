import Button from "./Button";
import Toggle from "./Toggle";

export default function Layout({ toggle, theme, children }: any) {
  let mode = theme === "dark" ? theme : " ";
  let mainBg = theme === "dark" ? "bg-gray-800" : "";

  return (
    <div className={`${mode} w-full ${mainBg}`}>
      <div className="container m-auto">
        <div className="h-20 flex flex-row px-4 justify-between items-center">
          <h1 className="text-3xl font-bold dark:text-white">VKcodes</h1>
          <div className="flex flex-row flex-nowrap">
            <Toggle toggle={toggle} />
            <Button text="Blog" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
