import React from 'react';
import menuIcon from '../assets/icons/menu_black_24dp.svg';
import addFriendIcon from '../assets/icons/person_add_black_24dp.svg';
import searchIcon from '../assets/icons/search_black_24dp.svg';

const HeaderMobileChatFeed = () => {
  return (
    <div>
      <div>
        <button>
          <img src={menuIcon} />
        </button>
      </div>
      <div>
        <p>All Messages</p>
      </div>
      <div>
        <button>
          <img src={searchIcon} />
        </button>
        <button>
          <img src={addFriendIcon} />
        </button>
      </div>
    </div>
  );
};

export default HeaderMobileChatFeed;
