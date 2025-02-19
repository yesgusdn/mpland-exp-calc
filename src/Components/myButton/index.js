import clsx from "clsx";
const MyButton = ({ onClick, active, children }) => {
  const className = clsx(
    "w-auto h-auto p-3 font-semibold rounded-2xl focus:outline-none",
    {
      "text-white  bg-blue-500": active,
      "text-gray-500 bg-gray-100 hover:bg-blue-500 hover:text-white": !active,
    }
  );
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
export default MyButton;
