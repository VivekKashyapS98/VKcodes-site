export default function Button(props: { text: string }) {
  return (
    <button className="my-auto py-2 px-4 bg-purple-500 text-white text-lg text-center shadow-lg rounded-md transition duration-200 ease-in cursor-pointer  hover:shadow-xl active:bg-purple-700">
      {props.text}
    </button>
  );
}
