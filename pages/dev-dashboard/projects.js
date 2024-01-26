import React, { useState } from "react";

export default function DashboardProjects() {
  return (
    <div class="flex h-full items-center">
      <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
        <div class="flex items-center py-4">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg
              class="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <ol
            class="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li class="flex items-center text-sm text-gray-800 ">
              Application Layout
              <svg
                class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li
              class="text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      <div
        id="application-sidebar"
        class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 "
      >
        <div class="px-6">
          <a
            class="flex-none text-xl font-semibold"
            href="#"
            aria-label="Brand"
          >
            <div class="flex items-center space-x-2">
              <div class="text-4xl font-bold text-blue-500">Sway</div>
            </div>
          </a>
        </div>

        <nav
          class="hs-accordion-group p-6 w-full flex flex-col flex-wrap space-y-48"
          data-hs-accordion-always-open
        >
          <ul class="space-y-1.5">
            <li>
              <a
                class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 "
                href="/dev-dashboard"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
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
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </a>
            </li>

            <li class="hs-accordion" id="account-accordion">
              <a
                href="/dev-dashboard/projects"
                class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100"
              >
                <svg
                  class="flex-shrink-0 mt-0.5 w-4 h-4"
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
                  <circle cx="18" cy="15" r="3" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                  <path d="m21.7 16.4-.9-.3" />
                  <path d="m15.2 13.9-.9-.3" />
                  <path d="m16.6 18.7.3-.9" />
                  <path d="m19.1 12.2.3-.9" />
                  <path d="m19.6 18.7-.4-1" />
                  <path d="m16.8 12.3-.4-1" />
                  <path d="m14.3 16.6 1-.4" />
                  <path d="m20.7 13.8 1-.4" />
                </svg>
                Projects
              </a>
            </li>

            <li class="hs-accordion" id="projects-accordion">
              <a
                href="/dev-dashboard/transactions"
                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 "
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
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
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Transactions
              </a>
            </li>

            <li>
              <a
                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 "
                href="/dev-dashboard/demo-requests"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
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
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                Demo Requests
              </a>
            </li>

            <li class="hs-accordion" id="users-accordion">
              <button
                type="button"
                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Account
              </button>
            </li>
          </ul>{" "}
          <a
            href="/"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Log out
          </a>
        </nav>
        <div class="w-full flex flex-col flex-wrap"></div>
      </div>
      <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <p class="pb-6 text-2xl font-semibold text-blue-600">My projects</p>

        <div class="w-full flex flex-row flex-wrap justify-center m-auto gap-6 mb-10">
          <div class="bg-white flex flex-wrap w-[45%] border rounded-xl shadow-sm px-6 py-4 flex-col h-full sm:px-6">
            <div class="sm:col-span-9 mb-2 flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-800">Fitness app</h3>
              <p className="font-medium text-green-500 text-lg">$45</p>
            </div>

            <p class="mt-1 text-gray-500 mb-4 text-sm ">
              Empowering users to achieve their fitness goals through
              personalized workouts, nutrition tracking, and motivational
              support in one comprehensive app.
            </p>
            <div class="w-full mb-3">
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                React
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mr-2">
                Node
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                Tailwind
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                Typescript
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-red-100 text-red-800 mr-2">
                Sequelize
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                Postgres
              </span>
            </div>
            <a
              class="mt-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              View
              <svg
                class="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          <div class="bg-white flex flex-wrap w-[45%] border rounded-xl shadow-sm px-6 py-4 flex-col h-full sm:px-6">
            <div class="sm:col-span-9 mb-2 flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-800">Fitness app</h3>
              <p className="font-medium text-green-500 text-lg">$45</p>
            </div>

            <p class="mt-1 text-gray-500 mb-4 text-sm ">
              Empowering users to achieve their fitness goals through
              personalized workouts, nutrition tracking, and motivational
              support in one comprehensive app.
            </p>
            <div class="w-full mb-3">
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                React
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5  rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mr-2">
                Node
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                Tailwind
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                Typescript
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-red-100 text-red-800 mr-2">
                Sequelize
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                Postgres
              </span>
            </div>
            <a
              class="mt-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              View
              <svg
                class="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          <div class="bg-white flex flex-wrap w-[45%] border rounded-xl shadow-sm px-6 py-4 flex-col h-full sm:px-6">
            <div class="sm:col-span-9 mb-2 flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-800">Fitness app</h3>
              <p className="font-medium text-green-500 text-lg">$45</p>
            </div>

            <p class="mt-1 text-gray-500 mb-4 text-sm ">
              Empowering users to achieve their fitness goals through
              personalized workouts, nutrition tracking, and motivational
              support in one comprehensive app.
            </p>
            <div class="w-full mb-3">
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                React
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mr-2">
                Node
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                Tailwind
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                Typescript
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-red-100 text-red-800 mr-2">
                Sequelize
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                Postgres
              </span>
            </div>
            <a
              class="mt-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              View
              <svg
                class="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          <div class="bg-white flex flex-wrap w-[45%] border rounded-xl shadow-sm px-6 py-4 flex-col h-full sm:px-6">
            <div class="sm:col-span-9 mb-2 flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-800">Fitness app</h3>
              <p className="font-medium text-green-500 text-lg">$45</p>
            </div>

            <p class="mt-1 text-gray-500 mb-4 text-sm ">
              Empowering users to achieve their fitness goals through
              personalized workouts, nutrition tracking, and motivational
              support in one comprehensive app.
            </p>
            <div class="w-full mb-3">
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                React
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5  rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mr-2">
                Node
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                Tailwind
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                Typescript
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-red-100 text-red-800 mr-2">
                Sequelize
              </span>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-1.5 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                Postgres
              </span>
            </div>
            <a
              class="mt-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              View
              <svg
                class="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
