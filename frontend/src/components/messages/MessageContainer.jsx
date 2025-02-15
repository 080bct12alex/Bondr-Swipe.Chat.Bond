import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-1 flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Mobile header spacer */}
          <div className="block h-16 md:hidden" aria-hidden="true" />
          
          {/* Conversation header */}
          <div className="bg-slate-500 px-4 py-2 md:py-3">
            <span className="label-text">To:</span>{" "}
            <span className="font-bold text-gray-900">
              {selectedConversation.fullName}
            </span>
          </div>

          {/* Messages container with padding adjustment */}
          <div className="flex-1 overflow-y-auto pt-4 md:pt-0 pb-4">
            <Messages />
          </div>
          
          {/* Sticky message input */}
          <div className="sticky bottom-0 z-10">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="flex flex-col items-center gap-2 px-4 text-center text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-center text-3xl md:text-6xl" />
      </div>
    </div>
  );
};

export default MessageContainer;
