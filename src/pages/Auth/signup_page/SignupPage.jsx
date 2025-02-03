import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation
import appLogo from '../../../assets/images/app_logo.png';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a loading delay of 2 seconds
    setTimeout(() => {
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Signup Form submitted");
      setIsLoading(false); // Reset loading state
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#902584] via-[#d93c61] to-[#f16d29] p-4 flex items-center justify-center">
      <div className="bg-[#8a2387] rounded-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Section - Logo */}
        <div className="p-8 flex flex-col items-center justify-center md:w-1/2">
            <h2 className="text-white text-2xl mb-4 uppercase tracking-widest">
                Cyberify
            </h2>
            <div className="w-48 h-48 flex items-center justify-center">
                <img src={appLogo} alt="Cyberify Logo" className="rounded-md" />
            </div>
        </div>


        {/* Divider Line */}
        <div className="hidden md:block bg-white/20 w-[1px]"></div>

        {/* Right Section - Signup Form */}
        <div className="p-8 md:w-1/2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-white">Create Your Account</h1>
              <p className="text-purple-200">Sign up to get started.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSignupSubmit}>
              <div className="space-y-4">
                {/* First Name and Last Name in one row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-purple-200 mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className="w-full px-3 py-2 bg-purple-400/30 rounded-md text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm text-purple-200 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      className="w-full px-3 py-2 bg-purple-400/30 rounded-md text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm text-purple-200 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full px-3 py-2 bg-purple-400/30 rounded-md text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm text-purple-200 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create Password"
                      className="w-full px-3 py-2 bg-purple-400/30 rounded-md text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-orange-500 py-2 rounded-md hover:bg-orange-50 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>

              {/* Already have an account? Login */}
              <div className="text-center">
                <Link to="/" className="text-sm text-purple-200 hover:text-white">
                  Already have an account? <span className="text-orange-500 underline">Log in</span>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
