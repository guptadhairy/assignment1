import React from "react";
import google from "../logos/google.png";
import facebook from "../logos/facebook.png";
import pling from "../logos/gr.png";
const Card = () => {
  return (
    <div>
      <div className="w-96 p-10 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <div className="flex flex-col items-center justify-center">
            <img src={pling} alt="Pling" height={"60px"} width={"60px"} />
            <h5 className="text-xl font-medium text-sky-800">Pling</h5>
            <h5 className="text-xs font-medium text-teal-400">
              Connect . Play . Thrive
            </h5>
            <h5 className="text-xl mt-4 font-medium text-gray-900">Login</h5>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-teal-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email/username"
            />
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-5 h-5 text-teal-400 "
                viewBox="0 0 26 24"
                fill="currentColor"
              >
                <path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 01.567-3.677A2.001 2.001 0 0114 16a1.99 1.99 0 01-1 1.723z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm  text-gray-400">
                Stay signed in
              </label>
            </div>
            <button
              className="ms-auto text-sm text-teal-400 hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-800 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
          <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-200 dark:after:border-neutral-200">
            <p class="mx-4 mb-0 text-center">Or</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={google} alt="Google" height={"35px"} width={"35px"} />
            <img src={facebook} alt="Facebook" height={"35px"} width={"35px"} />
          </div>
          <div className="text-sm font-medium text-gray-500 flex justify-center items-center">
            Don't have an account?{" "}
            <button
              className="text-purple-700 hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Sign up here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
