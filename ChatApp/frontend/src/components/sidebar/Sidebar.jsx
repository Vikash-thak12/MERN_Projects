import Conversations from "./Conversations";
import InputField from "./InputField";
// import LogoutButton from "./LogoutButton";


const Sidebar = () => {
    return (
        <>
            <div className="w-1/2 p-2 border ">
                <InputField />
                <div className="divider color-white"></div>
                <Conversations />
                {/* <LogoutButton /> */}
            </div>
        </>
    );
};

export default Sidebar;