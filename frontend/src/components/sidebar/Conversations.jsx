import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    
    return (
        <div className='py-2 flex flex-col overflow-auto h-[calc(100vh-10rem)] md:h-auto'>
            <div className="flex-1 overflow-y-auto px-2 md:px-0">
                {conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={idx === conversations.length - 1}
                    />
                ))}

                {loading && (
                    <div className="flex justify-center p-4">
                        <span className='loading loading-spinner loading-sm md:loading-md'></span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Conversations;
// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;
