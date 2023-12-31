import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [batchYear, setBatchYear] = useState("");
  const [department, setDepartment] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // signup user
    await signup(email, password, fullName, phoneNumber, batchYear, department, rollNo);
  };
  

  return (
    <form
      onSubmit={handleSignup}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-maroon mb-10">Sign Up</h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="fullName"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="email"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
          
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="abhiramsayani@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="phoneNumber"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="123-456-7890"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="batchYear"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Batch Year
        </label>
        <input
          type="text"
          id="batchYear"
          placeholder="2022"
          value={batchYear}
          onChange={(e) => setBatchYear(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="department"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Department
        </label>
        <input
          type="text"
          id="department"
          placeholder="Computer Science"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="rollNo"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Roll Number
        </label>
        <input
          type="text"
          id="rollNo"
          placeholder="123456"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="password"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"style={{ color: 'black' }}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-dark-green text-white py-3 rounded-xl hover-bg-sky-500 duration-300 mt-3"
      >
        Sign Up
      </button>

      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;
