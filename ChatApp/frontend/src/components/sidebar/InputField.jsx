import { IoSearchSharp } from "react-icons/io5";

const InputField = () => {
    return (
        <div className="flex items-center gap-1">
            <input type="text" placeholder="Type here" className="px-3 py-3 rounded-full input-bordered w-full max-w-xs outline-none" />
            <button type="submit" className="btn btn-circle btn-outline bg-sky-500 text-white">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </div>
    );
};

export default InputField;