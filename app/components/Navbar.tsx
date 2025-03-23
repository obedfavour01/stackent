// import { BorderBeam } from '@/components/magicui/border-beam';
import Profile from '@/components/Profile';
import { Button } from '@/components/ui/button';

import { Lock1, Notification, SearchStatus, Setting2 } from 'iconsax-react';
import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="
          flex 
          px-8
          justify-between
           items-center
          h-[10vh] 
          border-b-[0.3px] 
          border-gray-700 border-l-[0.3px] 
          "

    >


      <div className='flex gap-4 items-center'>

        <Profile />

        <Button className='px-2 py-1 mx-4
          flex 
          gap-2 
          rounded-lg
          bg-linear-to-r from-[#C2B9FE] to-[#AB9BFC]'>
          <h3 className='text-black'>Deposit</h3>
          <Lock1 size="16" color="#000" />
        </Button>
      </div>

      <div className='flex gap-6'>

        <div className='size-10 
          rounded-full 
          border 
          border-gray-500  
          flex items-center 
          justify-center 
          relative'
        >
          <Notification size="16" color="#ffffff" />
          <div className='absolute 
            -top-2
            flex
             items-center
             justify-center
            -right-2
            bg-[#AB9BFC] 
            py-[0.5px]  px-1.5
            rounded-md'>
            <small className='text-black font-semibold'>2</small>
          </div>

        </div>

        <div className='flex relative 
        items-center border 
        cursor-pointer
        border-gray-600 
        px-3 py-2 
        rounded-2xl w-[120px] '>
          <input className='
          outline-none 
          border-none 
          w-4/5 
          placeholder:text-base 
          placeholder:text-white 
          placeholder:font-light'
            placeholder='Search...'
          />
          <SearchStatus size="16" color="#ffffff" />
        </div>


        <div className='flex 
        relative 
        items-center 
        justify-between 
        cursor-pointer
        border border-gray-600 
        px-3 py-2 rounded-2xl w-[120px] '>
          <h2 className=''>Settings</h2>
          <Setting2 color="#ffffff" size={14} />
        </div>



      </div>





    </nav>
  );
};

export default Navbar;
