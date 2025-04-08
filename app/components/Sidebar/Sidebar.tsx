import {
  ChevronsUpDown,
  Database,
  Grid2x2Plus,
  Layers,
  Package,
  PanelRight,
  Server,
  SquareActivity,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    text: "Dashboard",
    icon: <PanelRight fill="" />,
  },
  {
    text: "Assets",
    icon: <Layers />,
  },
  {
    text: "Stacking Providers",
    icon: <Server />,
  },
  {
    text: "Stacking Calculator",
    icon: <Grid2x2Plus />,
  },
  {
    text: "Data API",
    icon: <Package />,
  },
  {
    text: "Liquid Stacking",
    icon: <SquareActivity />,
  },
  {
    text: "Active Stacking",
    icon: <Database />,
  },
];

const Sidebar = () => {
  return (
    <div
      className="h-[100vh] fixed top-0 bottom-0 border-r-[0.3px] w-2/12
    border-gray-700"
    >
      <div
        className="flex 
        pl-8
          items-center 
          justify-between
          pr-10
          h-[10vh] 
          border-b-[0.3px] 
          
          border-gray-700"
      >
        <Image
          width={800}
          height={800}
          src={"/assets/images/logo.png"}
          alt="logo"
          className="object-contain w-3/5"
        />

        <ChevronsUpDown size={20} />
      </div>

      <div className="mt-6 pl-8 ">
        <Tabs
          defaultValue="account"
          className="w-[200px] cursor-pointer relative"
        >
          <TabsList
            className="grid w-full grid-cols-2 bg-[#12131A] 
            h-14 rounded-2xl"
          >
            <TabsTrigger
              value="account"
              className="tab-trigger 
              cursor-pointer
              text-lg 
              font-light 
              data-[state=active]:bg-[#292b31] rounded-2xl"
            >
              Stacking
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="tab-trigger
              cursor-pointer 
              text-lg 
              font-light 
              data-[state=active]:bg-[#292b31] 
              rounded-2xl"
            >
              StableCoin
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <h1>Stacking</h1>
          </TabsContent>
          <TabsContent value="password">
            <h1>StableCoin</h1>
          </TabsContent>
        </Tabs>
      </div>

      <ul className="mt-4 flex flex-col gap-1 cursor-pointer pr-6 pl-8 ">
        {data.map((val, ind) => (
          <li
            key={ind}
            className="flex gap-4 
                hover:bg-[#12131A] 
                text-gray-500 
                hover:text-white 
                p-2  
                text-sm
                rounded-lg"
          >
            {val.icon} {val.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
