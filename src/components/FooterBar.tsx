import { Link } from "react-router-dom";
import { ChatIcon, CommunityIcon, HomeIcon, MypageIcon } from "../assets/icons";

const FooterBar = () => {
  return (
    <div className="fixed z-40 bottom-0 w-[480px] sm:w-full h-[70px] bg-white border-2">
      <div className="grid grid-cols-4 gap-x-4 justify-items-center mt-2">
        <Link to={`#`}>
          <div>
            <HomeIcon />
          </div>
        </Link>
        <Link to={`#`}>
          <div>
            <ChatIcon />
          </div>
        </Link>
        <Link to={`#`}>
          <div>
            <CommunityIcon />
          </div>
        </Link>
        <Link to={`#`}>
          <div>
            <MypageIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
