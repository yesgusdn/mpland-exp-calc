const ExpButton = ({ onClick, children }) => {
  const className =
    "w-auto h-auto p-3 font-semibold rounded-2xl border border-gray-200 focus:outline-none text-gray-500 hover:bg-gray-50 ";

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default ExpButton;
