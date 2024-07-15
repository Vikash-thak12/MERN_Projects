import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const {conversations} = useGetConversations();
  console.log("Conversations: ", conversations);
  return (
    <div className="overflow-auto h-[400px]">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  );
};

export default Conversations;