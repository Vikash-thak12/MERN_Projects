import Conversations from "./Conversations";
import InputField from "./InputField";
import LogoutButton from "./LogoutButton";


const Sidebar = () => {
    return (
        <>
            <div className="w-1/2 p-2 relative">
                <InputField />
                <div className="divider color-white mb-0"></div>
                <Conversations />
                <LogoutButton />
            </div>
        </>
    );
};

export default Sidebar;