import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function ProjectDetails() {
  const [features, setFeatures] = useState([
    "Authentication",
    "User Profile",
    "Discussion forum",
    "Notifications",
  ]);

  const [technologies, setTechnologies] = useState([
    "React",
    "Node",
    "Tailwind",
    "Typescript",
    "Sequelize",
    "Postgres",
  ]);

  return (
    <>
    <Navbar/>
    <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-8">
      <div class="bg-white rounded-xl shadow">
        <div className="relative h-[300px] rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3MlMjBhcHB8ZW58MHx8MHx8fDA%3D"
              alt="Uploaded"
              className="h-[300px] w-full object-cover object-top rounded-t-xl"
            />
          </div>
        </div>

        <div class="pt-0 p-4 sm:pt-0 sm:p-7">
          <div class="space-y-4 sm:space-y-6 pt-4">
            <div class="space-y-2">
              <label
                for="af-submit-app-project-name"
                class=" font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Project title
              </label>

              <p
                id="start-date"
                class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                Students fitness app
              </p>
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-app-description"
                class="font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Description
              </label>

              <p
                id="start-date"
                class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                Empowering users to achieve their fitness goals through
                personalized workouts, nutrition tracking, and motivational
                support in one comprehensive app.
              </p>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="af-submit-app-category"
                className="font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Category
              </label>
              <p
                id="category"
                class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                Fitness
              </p>
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-app-project-name"
                class="font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Implemented features
              </label>
              <ul class="space-y-3 text-sm pt-2">
                {features.map((feature, index) => (
                  <li key={index} class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-500"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="space-y-2">
              <div class="flex space-x-4">
                <div class="flex-1">
                  <label
                    for="start-date"
                    class="font-bold block text-sm text-gray-800 mt-2.5"
                  >
                    Start Date
                  </label>
                  <p
                    id="start-date"
                    class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    January 31, 2024
                  </p>
                </div>

                <div class="flex-1">
                  <label
                    for="end-date"
                    class="font-bold block text-sm text-gray-800 mt-2.5"
                  >
                    End Date
                  </label>
                  <p
                    id="end-date"
                    class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    January 31, 2024
                  </p>
                </div>

                <div class="flex-1">
                  <label
                    for="ongoing"
                    class="font-bold block text-sm text-gray-800 mt-2.5"
                  >
                    Status
                  </label>
                  <p
                    id="end-date"
                    class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Complete
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-project-url"
                class="font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Deployed link
              </label>

              <p
                id="af-submit-project-url"
                class="text-blue-500 underline font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                https://example.so
              </p>
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-project-url"
                class="font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Project demo link
              </label>

              <p
                id="af-submit-project-url"
                class="text-blue-500 underline font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                https://example.so
              </p>
            </div>
            <div class="space-y-2">
              <label
                for="af-submit-app-project-name"
                class="font-bold inline-block text-sm text-gray-800 mt-2.5"
              >
                Technologies used
              </label>
              <ul class="space-y-3 text-sm pt-2">
                {technologies.map((technology, index) => (
                  <li key={index} class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-500"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="text-gray-500 font-medium pe-11 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
