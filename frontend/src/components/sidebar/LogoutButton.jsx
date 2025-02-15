import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = ({ mobileVersion = false }) => {
  const { loading, logout } = useLogout();

  return (
    <button
      onClick={logout}
      disabled={loading}
      className={`flex items-center gap-2 w-full group ${
        mobileVersion 
          ? "p-2 justify-center hover:bg-white/10 rounded-lg transition-colors" 
          : "p-4 hover:bg-white/10 transition-all duration-300 rounded-xl"
      }`}
      aria-label={loading ? "Logging out..." : "Logout"}
    >
      {loading ? (
        <span className="loading loading-spinner text-white"></span>
      ) : (
        <>
          <div className="relative">
            <BiLogOut 
              className={`text-white ${
                mobileVersion 
                  ? "w-6 h-6" 
                  : "w-5 h-5 group-hover:w-6 group-hover:h-6 transition-all"
              }`}
              aria-hidden="true"
            />
            {!mobileVersion && (
              <span className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            )}
          </div>
          
          {!mobileVersion && (
            <span className="text-white font-medium hidden md:block text-sm tracking-wide">
              Logout
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-white mt-0.5"></span>
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default LogoutButton;