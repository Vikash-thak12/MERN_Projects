import { TiMessages } from "react-icons/ti";
const Default = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">Welcome 👋 <span className="text-blue-500">Vikash Thakur</span></h1>
        <h1 className="text-2xl">Select a chat to start Messaging</h1>
        <TiMessages className="w-10 h-10" />
    </div>
  );
};

export default Default;