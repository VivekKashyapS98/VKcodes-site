import Button from "./Button";

export default function Layout({ theme, children }: any) {
  let mode = theme === "dark" ? theme : " ";
  let mainBg = theme === "dark" ? "bg-white" : "";

  return (
    <div className={`${mode} w-full ${mainBg}`}>
      <div className="container m-auto">
        <div className="h-20 flex flex-row px-4 justify-between items-center">
          <h1 className="text-3xl font-bold">VKcodes</h1>
          <Button text="Blog" />
        </div>
        {children}
      </div>
    </div>
  );
}
