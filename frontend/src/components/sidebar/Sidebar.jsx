import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 p-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Bondr
        </h1>
        <div className="flex items-center gap-4">
          <LogoutButton mobileVersion={true} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-gray-700 rounded-lg"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Container */}
      <div className={`fixed left-0 z-40 w-64 transform bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-out md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } top-16 h-[calc(100vh-4rem)] md:top-0 md:h-screen`}>
        
        <div className="flex flex-col h-full p-4 space-y-4 overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bondr
            </h1>
          </div>

          {/* Search Input */}
          <div className="pl-0 pr-0 overflow-auto">
            <SearchInput />
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 text-sm text-gray-400 bg-gray-900">Conversations</span>
              </div>
            </div>
            <Conversations />
          </div>

          {/* Desktop Logout */}
          <div className="hidden md:block border-t border-gray-700 pt-4 mt-auto">
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-25 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
        />
      )}
    </>
  );
};

export default Sidebar;
