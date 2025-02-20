const MyInput = ({ type, placeholder, value, onChange, maxlength }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                maxLength={maxlength}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700 placeholder-gray-400 transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default MyInput;
