import { useState, useMemo, useCallback } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	// Memoize normalized conversations
	const normalizedConversations = useMemo(() => 
		conversations.map(c => ({
			...c,
			searchName: c.fullName.toLowerCase()
		})),
		[conversations]
	);

	// Optimized search handler
	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		const searchTerm = search.trim().toLowerCase();
		
		if (!searchTerm) return;
		if (searchTerm.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = normalizedConversations.find(c => 
			c.searchName.includes(searchTerm)
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("No such user found!");
		}
	}, [search, normalizedConversations, setSelectedConversation]);

	return (
		<form onSubmit={handleSubmit} className="w-full flex items-center	  ">
			<div className="flex items-center gap-0 sm:gap-10">
				<input
					type="text"
					placeholder="Search…"
					className="input flex-1 input-bordered rounded-full 
						max-sm:text-sm 
						max-sm:px-4 
						max-sm:h-10
						sm:h-12
						focus:outline-none focus:border-sky-500"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					aria-label="Search conversations"
				/>
				<button 
					type="submit" 
					className="btn btn-circle bg-sky-500 text-white
						max-sm:w-10 max-sm:h-10 max-sm:min-h-0
						sm:w-12 sm:h-12
						hover:bg-sky-600 active:scale-95 transition-transform"
					aria-label="Submit search"
				>
					<IoSearchSharp className="w-4 h-4 sm:w-5 sm:h-5" />
				</button>
			</div>
		</form>
	);
};

export default SearchInput;