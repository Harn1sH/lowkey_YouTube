import React from "react";
import { useSelector } from "react-redux";
import OpenBar from "./openBar";
import CloseBar from "./closeBar";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //px-3 w-[12rem] shadow-lg flex flex-col gap-y-2
  //flex justify-end
  return (
    <div className="transition-all duration-200 h-screen">
      <div
        className={
          "px-3 w-[9rem] shadow-lg flex flex-col gap-y-2 transition-all duration-200 h-screen"
        }
      >
        <OpenBar ismenuOpen={isMenuOpen} />
        <CloseBar />
      </div>
    </div>
  );
}

export default Sidebar;

//<div className="transition-all duration-200 h-screen">
//       {isMenuOpen ? (
//         <div
//           className={
//             "px-3 w-[12rem] shadow-lg flex flex-col gap-y-2 transition-all duration-200 h-screen"
//           }
//         >
//           <OpenBar />
//         </div>
//       ) : (
//         <div
//           className={
//             "px-3 w-[12rem] shadow-lg flex flex-col gap-y-2 ml-[-85px] transition-all duration-200 h-screen"
//           }
//         >
//           <CloseBar />
//         </div>
//       )}
//     </div>
