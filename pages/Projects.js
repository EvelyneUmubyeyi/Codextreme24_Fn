import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();

  const [popupVisible, setPopupVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [status, setStatus] = useState('');
  const [buttonText, setButtonText] = useState('Request a Demo');

  const setStatusFn = () =>{
    let status = localStorage.getItem('status')
    setStatus(status);
    if (status === 'Demo booked') {
      setButtonText('View Status')
    }
  }

  useEffect(() => {
    setStatusFn();
  }, []); 

  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    // setPopupVisible(!popupVisible);
    console.log(popupVisible);
  };

  const handleDropdown = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleViewProject = () => {
    router.push('/projectDetails');
  };

  return (
    <div class="w-full h-full m-auto">
      <Navbar/>
      <div class="flex w-full h-full justify-center py-4 mb-8 mt-24">
        <p class="block text-2xl font-bold text-gray-800 sm:text-3xl">
          Get any <span className="text-blue-600">project</span> from our rich{" "}
          <span className="text-blue-600">pool</span>
        </p>
      </div>
      <div class="w-[80%] flex justify-end m-auto mb-3">
        <div class="hidden sm:block mr-4">
          <label for="icon" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg
                class="flex-shrink-0 h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              id="icon"
              name="icon"
              class="py-2 px-4 ps-11 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div class="hs-dropdown relative sm:inline-flex z-20 [--auto-close:inside] flex flex-col">
          <button
            id="hs-as-table-table-filter-dropdown"
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            onClick={handleDropdown}
          >
            <svg
              class="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
            Filter
          </button>
          {optionsVisible && <div
            class="hs-dropdown-menu absolute top-full transition-[opacity,margin] duration hs-dropdown-open:opacity-100 mt-2 bg-white shadow-md rounded-lg p-2 mt-2"
            aria-labelledby="hs-dropdown-auto-close-inside"
          >
            <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
              <div class="flex items-center h-5 mt-1">
                <input
                  id="hs-dropdown-item-checkbox-delete"
                  name="hs-dropdown-item-checkbox-delete"
                  type="checkbox"
                  class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  checked
                />
              </div>
              <label for="hs-dropdown-item-checkbox-delete" class="ms-3.5">
                <span class="mt-1 block text-sm font-semibold text-gray-800">
                  Node
                </span>
              </label>
            </div>
            <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
              <div class="flex items-center h-5 mt-1">
                <input
                  id="hs-dropdown-item-checkbox-archive"
                  name="hs-dropdown-item-checkbox-archive"
                  type="checkbox"
                  class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <label for="hs-dropdown-item-checkbox-archive" class="ms-3.5">
                <span class="mt-1 block text-sm font-semibold text-gray-800">
                  React
                </span>
              </label>
            </div>
            <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
              <div class="flex items-center h-5 mt-1">
                <input
                  id="hs-dropdown-item-checkbox-archive"
                  name="hs-dropdown-item-checkbox-archive"
                  type="checkbox"
                  class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <label for="hs-dropdown-item-checkbox-archive" class="ms-3.5">
                <span class="mt-1 block text-sm font-semibold text-gray-800">
                  Python
                </span>
              </label>
            </div>
          </div>}
        </div>
      </div>


      <div class="w-[80%] flex justify-center m-auto cursor-pointer mb-8">
        <div class="bg-white border rounded-xl shadow-sm sm:flex w-full h-[280px]">
          <div class=" relative w-[40%] rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl md:rounded-se-none">
            <img
              class="w-full h-[278px] absolute top-0 start-0 object-cover object-top rounded-l-xl"
              src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3MlMjBhcHB8ZW58MHx8MHx8fDA%3D"
              alt="Image Description"
            />
          </div>
          <div class="flex flex-wrap w-[60%]">
            <div class="p-4 flex flex-col h-full sm:p-5 w-full">
              <div class="sm:col-span-9 mb-2 flex justify-between items-center">
                <div class="flex items-center gap-5">
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover object-top"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    alt="Image Description"
                  />
                  <div class="flex gap-x-2">
                    <p class="py-2 inline-flex items-center gap-x-2 text-md font-semibold text-gray-500 text-sm">
                      Jane Doe
                    </p>
                  </div>
                </div>
                <p className="font-medium text-green-500 text-lg">$45</p>
              </div>
              <h3 class="text-lg font-bold text-gray-800" onClick={handleViewProject}>Fitness App</h3>
              <p class="mt-1 text-gray-500 mb-4 text-sm ">
                Empowering users to achieve their fitness goals through
                personalized workouts, nutrition tracking, and motivational
                support in one comprehensive app.
              </p>
              <div class="w-full mb-3">
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                  React
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mr-2">
                  Node
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                  Tailwind
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                  Typescript
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-red-100 text-red-800 mr-2">
                  Sequelize
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                  Postgres
                </span>
              </div>
              <a
                class="w-fit mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="/bookdemo"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="w-[80%] flex justify-center m-auto cursor-pointer" onClick={handleViewProject}>
        <div class="bg-white border rounded-xl shadow-sm sm:flex w-full h-[280px]">
          <div class=" relative w-[40%] rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl md:rounded-se-none">
            <img
              class="w-full h-[278px] absolute top-0 start-0 object-cover object-top rounded-l-xl"
              src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGRlbGl2ZXJ5JTIwYXBwfGVufDB8fDB8fHww"
              alt="Image Description"
            />
          </div>
          <div class="flex flex-wrap w-[60%]">
            <div class="p-4 flex flex-col h-full sm:p-5 w-full">
              <div class="sm:col-span-9 mb-2 flex justify-between items-center">
                <div class="flex items-center gap-5">
                  <img
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover object-top"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    alt="Image Description"
                  />
                  <div class="flex gap-x-2">
                    <p class="py-2 inline-flex items-center gap-x-2 text-md font-semibold text-gray-500 text-sm">
                      Jane Doe
                    </p>
                  </div>
                </div>
                <p className="font-medium text-green-500 text-lg">$45</p>
              </div>
              <h3 class="text-lg font-bold text-gray-800" onClick={handleViewProject}>Food Delivery App</h3>
              <p class="mt-1 text-gray-500 mb-4 text-sm ">
              The food delivery app is a user-friendly platform that enables customers to browse, order, and receive a diverse range of cuisines from local restaurants.
              </p>
              <div class="w-full mb-3">
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                  React
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mr-2">
                  Node
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                  Tailwind
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                  Typescript
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-red-100 text-red-800 mr-2">
                  Sequelize
                </span>
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                  Postgres
                </span>
              </div>
              <a
                class="w-fit mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="/bookdemo"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
