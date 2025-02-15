import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-gray-400 bg-clip-padding p-6 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Login
          <span className="text-blue-500"> Bondr</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="input input-bordered h-10 w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered h-10 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              to="/signup"
              className="mt-2 inline-block text-sm hover:underline hover:text-blue-600"
            >
              Don&apos;t have an account?
            </Link>

            <button className="btn btn-sm mt-2 w-full" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;