import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    // login user
    await login(email, password);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-maroon mb-10">Login</h2>

      <div className="form-control flex flex-col gap-2 ">
        <label
          htmlFor="email"
          className="cursor-pointer text-dark-green font-bold hover:text-dark-green duration-300"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="abhiramsayani@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          htmlFor="password"
          className="cursor-pointer text-dark-green font-bold hover:text-dark-green duration-300"
        >
          Password
        </label>

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-dark-green text-white py-3 rounded-xl hover:bg-darker-green duration-300 mt-3"
      >
        Log In
      </button>

      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Login;
