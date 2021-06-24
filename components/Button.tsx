export default function Button(props: { text: string }) {
  return (
    <button className="m-auto py-2 px-4 bg-purple-500 text-white text-lg text-center shadow-lg rounded-md transition delay-75 duration-75 ease-in cursor-pointer hover:bg-purple-400 active:bg-purple-600">
      {props.text}
    </button>
  );
}
