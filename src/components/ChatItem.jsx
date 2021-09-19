import React from "react";
import Me from "./UserChat/Me";
import Other from "./UserChat/Other";

function ChatItem({me, img, name, chat, onClick}) {
  if(me){
    return(
      <Me img={img} name={name} chat={chat} />
    );
  }else{
    return (
      <Other  img={img} name={name} chat={chat} onClick={onClick}/>
    );
  }
}

export default ChatItem;
