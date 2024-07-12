// import { useState } from "react";
import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import Default from "./Default";



const MessageContainer = () => {
  const isMessage = false
  return (
    <div className="md:min-w-[450px] flex flex-col border-l border-black">
      {
        isMessage ? (
          <Default />
        ) : (
          <>
            <Header />
            <Messages />
            <MessageInput /></>
        )
      }
    </div>
  );
};

export default MessageContainer;