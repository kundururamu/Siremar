/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
const InputField = ({
  onChange,
  isError,
  name,
  type,
  id,
  placeholder,
  value,
}) => {
  return (
    <input
      name={name}
      className={`shadow appearance-none border ${
        isError && " border-red-500 "
      } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-sm mb-4`}
      id={id}
      type={!type ? "text" : type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
