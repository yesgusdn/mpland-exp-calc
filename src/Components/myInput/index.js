const MyInput = ({ label, id, type, placeholder, value, onChange }) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 text-gray-700 placeholder-gray-400 transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default MyInput;
