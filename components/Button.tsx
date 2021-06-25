export default function Button(props: { text: string }) {
  return (
    <button className=" my-auto py-2 px-4 bg-purple-500 text-white text-lg font-medium text-center shadow-xl rounded-lg transition duration-200 ease-in cursor-pointer hover:bg-purple-400  hover:shadow-2xl active:bg-purple-700 active:text-white">
      {props.text}
    </button>
  );
}
