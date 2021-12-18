/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import NavbarMain from "../components/NavbarMain";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert";
import { io } from "socket.io-client";
import UserList from "../components/UserList";
import { getUserChat, getChat, sendChat, deleteChat, getAllUser } from "../redux/actions/chat";
import { DefaultPic } from "../assets";
import ChatItem from "../components/ChatItem";

const socket = io("http://localhost:8090");

function Chats(props) {
  const { users } = props.chats;
  const [chat, setChat] = useState("");
  const [recp, setRecp] = useState("");
  const [send, setSend] = useState("");
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(false);
  const messageEnd = React.useRef(null);

  const onScroll = () => {
    if (messageEnd && messageEnd.current) {
      messageEnd.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    onScroll();
    props.getUserChat(props.auth.token);
    props.getAllUser(props.auth.token, "");
    console.log("users : ", users);
    console.log("phone: ", props.users.users.phone_number);
    socket.on(props.users.users, (data) => {
      props.getChat(props.auth.token, data.sender);
      props.getUserChat(props.auth.token);
    });

  }, [onScroll()]);

  const chooseChat = (res) => {
    console.log(res);
    setSelected(true);
    setRecp(
      props.users.recipient === res.recipient
        ? res.sender
        : res.recipient
    );
    setSend(res.sender);
    setName(res.name);
    props.getChat(
      props.auth.token,
      props.users.recipient === res.recipient
        ? res.sender
        : res.recipient
    );
  };

  const chooseOtherChat = (res) => {
    console.log(res);
    setSelected(true);
    setRecp(
      res.phone_number
    );
    setSend(props.users.phone_number);
    setName(res.name);
    props.getChat(
      props.auth.token,
      props.users.phone_number !== res.phone_number
      && res.phone_number
    );
  };

  const onDelete = (res) => {
    console.log(res);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("hapus");
        props.deleteChat(props.auth.token, res.id, recp, props.users.users[0].phone_number);
        Swal.fire(
          "Deleted!",
          "chat has been deleted.",
          "success"
        );
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      message: chat,
      recipient: recp,
    };
    props.sendChat(props.auth.token, form);
    setChat("");
  };

  const onEnterSearch = (e) => {
    if (e.key === "Enter") {
      console.log(search);
      props.getAllUser(props.auth.token, search);
    }
  };
  return (
    <div>
      <header className="px-32 sticky top-0 bg-white">
        <NavbarMain
          home="text-gray-500"
          product="text-yellow-900 font-bold"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <main className="bg-chat bg-cover py-20 w-full h-screen justify-center flex">
        <section className="w-105 h-98 flex ">
          <aside className="bg-yellow-900 w-100 h-full rounded-tl-xl rounded-bl-xl py-10 px-10">
            <div className="bg-gray-300 flex space-x-3 p-2 px-5 mx-5 justify-center py-3 w-72 rounded-full">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onEnterSearch}
                placeholder="Searchs"
                className=" w-72 bg-gray-300 text-gray-900 focus:outline-none font-bold text-sm"
              />
            </div>
            <p className="mt-10 text-white text-sm font-bold text-center">Choose a staff you want to talk with</p>
            <div className="py-5">
              <div className="overflow-y-auto h-65 ">
                {
                  search.length <= 0 ?
                    users.message?.map((res) => {
                      const me = props.users.id !== res.id_users;
                      return (
                        <UserList
                          me={me}
                          onClick={() => chooseChat(res)}
                          name={res.name}
                          images={res.images === null ? DefaultPic : res.images}
                          chat={res.message}
                        />
                      );
                    }) :
                    props.chats.allUser.map((res) => {
                      console.log("user: ", props.users.users[0].id);
                      const me = props.users.users[0].id !== res.id_users;
                      return (
                        <UserList
                          me={me}
                          onClick={() => chooseOtherChat(res)}
                          name={res.name}
                          images={res.images === null ? DefaultPic : res.images}
                          chat={res.message}
                        />
                      );
                    })
                }
              </div>
            </div>
          </aside>
          <aside className="bg-white w-full h-full rounded-tr-xl rounded-br-xl py-10">
            {selected ? <div className="flex flex-col space-y-3 flex-1">
              <div className="bg-white px-10 py-5 rounded-xl">
                <h3 className="font-bold text-3xl text-gray-500">
                  {name}
                </h3>
              </div>
              <div className="space-y-3 overflow-y-auto h-32 flex-1">
                {props.chats.chats.message?.map((res) => {
                  const me = props.users.users.phone_number === res.sender;
                  {/* const other = props.users.phone_number === res.recipient;
                  console.log("chat: ", props.chats.chats.message);
                  console.log("IN CHAT: ", props.chats.chats);
                  console.log("IN USERS: ", props.users);
                  console.log("IN RES: ", me);
                  console.log("IN OTHER: ", other); */}
                  return (
                    <ChatItem
                      onClick={() => onDelete(res)}
                      me={!me}
                      chat={res.message}

                      name={
                        me
                          ? props.chats.chats.sender.name
                          : props.chats.chats.recipient.name
                      }
                      img={
                        me
                          ? props.chats.chats.sender.images
                          : props.chats.chats.recipient.images
                      }
                    />
                  );
                })}
                <div ref={messageEnd}>
                  .
                </div>
              </div>
              <form
                onSubmit={onSubmit}
                className="w-full flex-row flex justify-between bg-white px-10 py-4 rounded-xl items-center"
              >
                <input
                  type="text"
                  className="w-full focus:outline-none"
                  placeholder="Type a message..."
                  onChange={(e) => setChat(e.target.value)}
                  value={chat}
                />
                <div className="items-center justify-center flex">
                  <button type='button' className="focus:outline-none">
                    <FontAwesomeIcon icon={faCamera} size={28} />
                  </button>
                </div>
                <div className="items-center rounded-full justify-center flex ml-5">
                  <button type="submit" className="focus:outline-none ">
                    <FontAwesomeIcon icon={faPaperPlane} size={25} color="brown" />
                  </button>
                </div>
              </form>
            </div> : <div className='flex flex-1 bg-white rounded-xl items-center justify-center'>
              <p className='text-2xl font-bold'>Select user to start a chat</p>
            </div>}
          </aside>
        </section>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  chats: state.chats,
});

const mapDispatchToProps = { getUserChat, getChat, sendChat, getAllUser, deleteChat };

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
