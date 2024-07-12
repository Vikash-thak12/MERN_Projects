import { BsSend } from "react-icons/bs";
const MessageInput = () => {
    return (
        <>
            <form className="px-4 my-3">
                <div className="w-full relative flex">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow focus:outline-none" placeholder="Search" />
                        <button type="submit" className="">
                        <BsSend />
                    </button>
                    </label>
                </div>
            </form>
        </>
    );
};

export default MessageInput;