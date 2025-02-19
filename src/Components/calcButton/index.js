const CalcButton = ({ type, children, onClick }) => {
  const className =
    type === "refresh"
      ? "w-1/4 p-3 h-auto text-center font-semibold rounded-2xl focus:outline-none text-white bg-gray-400"
      : "flex-grow p-3 h-auto font-semibold rounded-2xl bg-blue-500 text-white focus:outline-none";

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CalcButton;
