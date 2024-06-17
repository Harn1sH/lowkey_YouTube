import React, { useEffect } from "react";
import LiveChatTile from "./LiveChatTile";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/Store/slice/chatSlice";
import generateName from "../../utils/nameGen";
import generateString from "../../utils/stringGen";
function LiveChatContainer(props) {
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({ name: generateName(), comment: generateString(20) }),
      );
    }, 3000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className={"w-full h-full overflow-y-scroll flex flex-col-reverse"}>
      {chat.map((c, i) => {
        return <LiveChatTile name={c.name} comment={c.comment} key={i} />;
      })}
    </div>
  );
}

export default LiveChatContainer;
