import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../../utils/Store/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";
import { Comments } from "../../utils/constants";
import LiveChatContainer from "../live chat/LiveChatContainer";
import { addMessage } from "../../utils/Store/slice/chatSlice";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [liveChat, setLiveChat] = useState("");
  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  });
  return (
    <div className={"w-screen over  h-full"}>
      <div className={"w-screen flex my-2 mb-2 gap-x-7 h-full"}>
        <div className={"w-7/12 h-[500px] col-span-8"}>
          <iframe
            // width="800"
            // height="400"
            className={"rounded-xl my-4 ml-[-100px]  w-full h-full "}
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow={"autoplay"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div
          className={
            "mt-4 border-2 border-black ml-[-100px] col-span-8 w-4/12 rounded-lg py-2 px-2 h-[500px] "
          }
        >
          <LiveChatContainer />
          <div className={"w-full border-black border mt-5 p-2"}>
            <form
              className={"h-full flex items-center gap-x-5"}
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({ name: "YOU", comment: liveChat }));
                setLiveChat("");
              }}
            >
              <input
                type="text"
                className={"border-2 border-black py-1 rounded-lg px-2"}
                name=""
                id=""
                value={liveChat}
                onChange={(e) => setLiveChat(e.target.value)}
              />
              <button
                className={
                  "bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 text-center py-1 px-2"
                }
                type={"submit"}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={"ml-[-100px] mt-10"}>
        <span className={"font-bold text-2xl"}>Comments</span>
        <CommentsContainer comments={Comments} />
      </div>
    </div>
  );
}

export default WatchPage;
