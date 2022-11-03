import React from "react";
import { sendRequest } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
function SendRequestFriend({ sendId, feedBack }) {
  const dispatch = useDispatch();

  const send = {
    sendBy: sendId,
    feedBackBy: feedBack,
};

const handleSend = () => {
    dispatch(sendRequest(send));
  };
  return (
    <>
      <div onClick={() => handleSend()}>add</div>
    </>
  );
}
export default SendRequestFriend;
