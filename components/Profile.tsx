import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown2 } from 'iconsax-react';



const Profile = () => {
  return (
    <div className="flex items-center gap-4 px-6 cursor-pointer">
      <Avatar className=" size-12">
        <AvatarImage
          src="/assets/images/bitmoji.png"
          className="object-contain "
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="">
        <div className="flex gap-2">
          <small>@ryan997</small>
          <div
            className="bg-[#2d2d3d] 
                    rounded-lg text-[10px] px-2 py-1"
          >
            PRO
          </div>
        </div>

        <h2>Ryan Crawford</h2>
      </div>

      <ArrowDown2 color="#ffffff" size={12} variant="Bold" />
    </div>
  );
};

export default Profile;
