import React, { useState } from "react";
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const goToDashboard = () =>{
    console.log('clicked')
    if (localStorage.getItem("role") == 'developer'){
      router.push('/dev-dashboard')
    }else if(localStorage.getItem("role") == 'client'){
      router.push('/client-dashboard')
    }
  }
  return (
    <>
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
              <div class="flex items-center space-x-2">
                <div class="text-4xl font-bold text-blue-500">Sway</div>
              </div>
            </a>
          </div>
          <div class="flex gap-x-12">
            <a
              href="#"
              class="text-sm font-semibold leading-6 text-gray-900 mr-4 cursor-pointer"
            >
              About
            </a>
            <a
              href="#"
              class="text-sm font-semibold leading-6 text-gray-900 mr-4 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="/projects"
              class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              Resources
            </a>
          </div>
          <div class="lg:flex lg:flex-1 lg:justify-end" onClick={goToDashboard}>
            {/* <a
              href="/dev-dashboard"
              class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            > */}
              <img
                class="h-10 w-auto"
                src="https://res.cloudinary.com/dpuyeblqg/image/upload/v1706278352/user-profile-svgrepo-com_jmmx1e.svg"
                alt=""
              />
            {/* </a> */}
          </div>
        </nav>
        <div class="lg:hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 z-50"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                ></img>
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
