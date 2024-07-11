import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  return (
    <div className="absolute bottom-5 left-2 p-1 rounded-full hover:bg-gray-800">
            <div className="">
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
    </div>
    </div>
  );
};

export default LogoutButton;