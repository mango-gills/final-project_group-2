import React from 'react';
import GoBackIcon from '../assets/icons/arrow_back_black_24dp.svg';
import PhoneCallIcon from '../assets/icons/call_black_24dp.svg';
import VideoCallIcon from '../assets/icons/video_call_black_24dp.svg';
import MenuIcon from '../assets/icons/menu_black_24dp.svg';
import InfoIcon from '../assets/icons/info_black_24dp.svg';
import SearchIcon from '../assets/icons/search_black_24dp.svg';

export default HeaderMobileChat = () => {
  return (
    <div>
      <div>
        <button>
          <img src={GoBackIcon} />
        </button>
      </div>
      <div>
        <p>friendName</p>
      </div>
      <div>
        <button>
          <img src={SearchIcon} />
        </button>
        <button>
          <img src={PhoneCallIcon} />
        </button>
        <button>
          <img src={VideoCallIcon} />
        </button>
        <button>
          <img src={InfoIcon} />
        </button>
      </div>
    </div>
  );
};
