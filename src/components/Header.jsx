import React from 'react'

const Header = () => {
    return (
      <header className="p-10 justify-between items-center flex">
        <div className='flex gap-8'>
            <h2 className='text-xl text-gray-400 hover:text-blue-900 cursor-pointer hover:border-b-4  border-blue-900'>Properties</h2>
            <h2 className='text-lg text-gray-400 hover:text-blue-900 cursor-pointer hover:border-blue-900 hover:border-b-4 '>Clients</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <img src="/setting-2.webp" alt="Settings" className="h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <img src="/ic_round-notifications.webp" alt="Notifications" className="h-6" />
          </button>
          <img src="/Avatar.webp" alt="Profile" className="h-6" />
        </div>

      </header>
    );
  };
  
  export default Header;
  
