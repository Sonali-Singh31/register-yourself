import React from 'react'

const SignIn = () => {
  return (
    <>
    <main className="flex text-center px-20 mt-10 flex-col  items-center justify-center ">
      <div className="w-4/12 mx-auto mt-8 p-8 bg-gray-100 rounded-md">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://www.osmoze.in/images/Osmoze.svg"
            className="w-40 h-40"
          />
          <h2 className="text-2xl font-bold mb--1 text-black">
            Osmoze'<span className="text-sky-600">24</span>
          </h2>

          <span className="text-black text-xs">SIGN IN WITH</span>
          <button className="text-black  mb-5">Google</button>
          <div className=" border border-1  w-full border-gray-400 shadow-[0_1px_2px_rgba(57,62,86,0.5)]"></div>
          <p className="text-gray-600 mt-3"> Or sign in with credentials</p>
        </div>

        <form className="mt-6">
          
          <div className="mb-4 text-left">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              EMAIL
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          
          <div className="mb-4 text-left">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </main>
    </>
  )
}

export default SignIn
