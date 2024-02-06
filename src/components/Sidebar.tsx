import { IconLayoutDashboard, IconX } from "@tabler/icons-react";
import IconCalendarItem from "./icons/IconCalendarItem";
import IconDashboradItem from "./icons/IconDashboradItem";
import IconMapItem from "./icons/IconMapItem";
import IconMessageItem from "./icons/IconMessageItem";
import { Card } from "./ui/card";

const Sidebar = ({ className, toggleCardVisibility }: { className: string, toggleCardVisibility: () => void }) => {
  return (
    <Card className={`p-7  sm:pt-10 pr-2 sm:pb-[5vh] sm:ps-10 flex-col justify-between hidden lg:flex h-full lg:h-[90%] fixed w-72 sm:w-[344px] shadow-header lg:top-[5vh] lg:left-auto z-40 rounded-none lg:rounded-3xl top-0 left-0  ${className}`}>
      <div className="overflow-auto flex flex-col justify-between h-full pr-3 lg:pr-6">
        <IconX onClick={toggleCardVisibility} className="absolute right-2 top-2 text-black-100 lg:hidden cursor-pointer" />
        <div>
          <h2 className="text-black-main text-18 md:text-22 font-800 pl-[18px]">
            Good x (Morning,
            Afternoon,
            Evening, User</h2>

          <div className="mt-5 md:mt-7">
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center rounded-full px-5 py-[7px] text-black-100 hover:text-white hover:bg-orange-100 cursor-pointer group">
                  <IconDashboradItem className="h-4 w-4 text-gray-200 group-hover:text-white fill-current" />
                  <span className=" font-500 text-14 md:text-16">Dashboard</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center rounded-full px-5 py-[7px] text-black-100 hover:text-white hover:bg-orange-100 cursor-pointer group">
                  <IconLayoutDashboard className="h-4 w-4 text-gray-200 group-hover:text-white fill-current" />
                  <span className=" font-500 text-14 md:text-16">Tasks</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center rounded-full px-5 py-[7px] text-black-100 hover:text-white hover:bg-orange-100 cursor-pointer group">
                  <IconMapItem className="opacity-75 group-hover:opacity-100 h-4 w-4 text-gray-200 group-hover:text-white fill-current" />
                  <span className=" font-500 text-14 md:text-16">Map</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center rounded-full px-5 py-[7px] text-black-100 hover:text-white hover:bg-orange-100 cursor-pointer group">
                  <IconMessageItem className="opacity-75 group-hover:opacity-100 h-4 w-4 text-gray-200 group-hover:text-white fill-current" />
                  <span className=" font-500 text-14 md:text-16">Message</span>
                </div>
                <div>
                  <div className="text-red-100 h-8 min-w-[32px] rounded-full px-1.5 flex items-center justify-center text-16 font-500 bg-red-100/10">3</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center rounded-full px-5 py-[7px] text-black-100 hover:text-white hover:bg-orange-100 cursor-pointer group">
                  <IconCalendarItem className="opacity-75 group-hover:opacity-100 h-4 w-4 text-gray-200 group-hover:text-white fill-current" />
                  <span className=" font-500 text-14 md:text-16">Calendar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-200 p-4 md:p-5 flex justify-between rounded-2xl mt-5">
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full">
              <img className="rounded-full" src="../images/svg/user-image.svg" alt="image" />
            </div>
            <div>
              <h2 className="text-white-100/[0.95] text-12 md:text-14 font-700">Team Echo</h2>
              <h3 className="text-white/50 text-10 font-500">5 people</h3>
              <h3 className="text-yellow-100 text-10 font-700 mt-4">See Update -</h3>
            </div>
          </div>
          <div className="cursor-pointer">
            <img src="../images/svg/direction-arrow.svg" alt="image" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
