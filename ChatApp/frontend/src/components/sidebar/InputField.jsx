import { IoSearchSharp } from "react-icons/io5";

const InputField = () => {
    return (
        <div className="flex items-center gap-2">
            <input type="text" placeholder="Type here" className="bg-gray-700 px-3 py-3 rounded-full input-bordered w-full max-w-xs outline-none" />
            <button type="submit" className="btn btn-circle btn-outline bg-sky-500 text-white">
                <IoSearchSharp className="w-5 h-5 outline-none" />
            </button>
        </div>
    );
};

export default InputField;