
const Conversation = () => {
    return (
        <>
            <div className="w-full rounded-md px-3 py-2 hover:bg-sky-500 text-white transition cursor-pointer flex  items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <span>Vikash Thakur</span>
                </div>
                <div>
                    <span className="text-2xl">😂</span>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1" />
        </>
    );
};

export default Conversation;