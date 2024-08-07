
const Message = () => {
    return (
        <div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    Vikash Thakur
                </div>
                <div className="chat-bubble">Hi, How are you ?</div>
                    <time className="text-xs chat-footer opacity-50">12:45</time>
                {/* <div className="chat-footer opacity-50">Delivered</div> */}
            </div>
        </div>
    );
};

export default Message;