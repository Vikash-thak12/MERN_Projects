import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-1/2 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden flex  backdrop-blur-3xl">
        <Sidebar />
        <MessageContainer />
    </div>
  );
};

export default Home;