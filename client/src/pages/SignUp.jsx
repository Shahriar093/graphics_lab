import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 bg-[#f0f7ff]">
      <div className="p-8 max-w-lg w-full bg-white/60 backdrop-blur-lg rounded-[2.5rem] shadow-xl shadow-blue-100/50 border border-white/80">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-light text-blue-900 mb-2">
            Create Your Sanctuary
          </h1>
          <p className="text-blue-500/70 text-sm italic">
            Begin your journey to mental clarity.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="w-full bg-blue-50/50 border border-blue-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-blue-300"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              className="w-full bg-blue-50/50 border border-blue-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-blue-300"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Choose a Password"
              id="password"
              className="w-full bg-blue-50/50 border border-blue-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-blue-300"
              onChange={handleChange}
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white p-4 rounded-2xl font-medium hover:bg-blue-700 disabled:bg-blue-300 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest text-sm"
          >
            {loading ? "Preparing your space..." : "Join SereneFlow"}
          </button>

          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-blue-100"></div>
            <span className="px-3 text-xs text-blue-300 uppercase tracking-tighter">
              or start with
            </span>
            <div className="flex-1 h-px bg-blue-100"></div>
          </div>

          <OAuth />
        </form>

        <div className="flex justify-center gap-2 mt-8 text-sm">
          <p className="text-blue-800/60">Already have a sanctuary?</p>
          <Link to="/sign-in">
            <span className="text-blue-600 font-semibold hover:underline decoration-blue-200 underline-offset-4">
              Sign in
            </span>
          </Link>
        </div>

        {error && (
          <div className="mt-6 p-3 bg-rose-50 border border-rose-100 rounded-xl text-center">
            <p className="text-rose-400 text-xs font-medium italic">
              Something went wrong. Please check your details and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
