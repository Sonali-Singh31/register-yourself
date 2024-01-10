import Link from "next/link";

export default function Home() {
  return (
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

          <span className="text-black text-xs">SIGN UP WITH</span>
          <button className="text-black  mb-5">Google</button>
          <div className=" border border-1  w-full border-gray-400 shadow-[0_1px_2px_rgba(57,62,86,0.5)]"></div>
          <p className="text-gray-600 mt-3"> Or sign up with credentials</p>
        </div>

        <form className="mt-6">
          <div className="mb-4 text-left">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              USERNAME
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
              htmlFor="branch"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              BRANCH
            </label>
            <input
              type="text"
              id="branch"
              name="username"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="year"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              YEAR
            </label>
            <input
              type="text"
              id="year"
              name="year"
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
          <div className="mb-4 text-left">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div class="flex flex-wrap mt-6 ">
        <div class="text-left">
          <small class="text-grey-100  cursor-pointer text-sm">
            Already Registered?{" "}
            <span class="bg-cyan-500 text-gray-800 px-2 py-2 rounded ml-1 mr-1 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs">
              {" "}
              <Link href="/components">Login</Link>{" "}
            </span>
          </small>
        </div>
      </div>
    </main>
  );
}
