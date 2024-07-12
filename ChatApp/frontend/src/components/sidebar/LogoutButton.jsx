import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout()
  return (
    <div className="absolute bottom-3 left-2 rounded-full hover:bg-gray-800">
      {
        !loading ? (
          <div className="flex items-center gap-2 px-2 p-1 cursor-pointer" onClick={logout}>
            <BiLogOut className="w-6 h-6 text-white" />
            <span>Logout</span>
          </div>
        ) : (
          <span className="loading loading-spinner"></span>
        )
      }
    </div>
  );
};

export default LogoutButton;