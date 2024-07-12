import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  return (
    <div className="absolute bottom-3 left-2 rounded-full hover:bg-gray-800">
      <div className="flex items-center gap-2 px-2 p-1 cursor-pointer">
        <BiLogOut className="w-6 h-6 text-white" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default LogoutButton;