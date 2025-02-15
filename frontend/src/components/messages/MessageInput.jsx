import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<div className="sticky bottom-0 bg-gray-800 border-t border-gray-700 md:border-none z-10">
			<form className="px-2 md:px-4 py-4 md:my-6" onSubmit={handleSubmit}>
				<div className="w-full relative">
					<input
						type='text'
						className='border text-sm md:text-base rounded-full pl-4 pr-12 py-3 md:py-4 w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-900 transition-all duration-200'
						placeholder='Type your message here...'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						aria-label='Type your message'
						disabled={loading}
					/>
					<button 
						type='submit' 
						className={`absolute top-0 bottom-0 right-2 flex items-center justify-center w-10 h-10 my-auto rounded-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 ${!message && 'opacity-50 cursor-not-allowed'}`}
						disabled={!message || loading}
						aria-label='Send message'
					>
						{loading ? (
							<div className='loading loading-spinner text-white'></div>
						) : (
							<BsSend className='text-white text-lg md:text-xl' />
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default MessageInput;
