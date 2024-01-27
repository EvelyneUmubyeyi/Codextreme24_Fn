import React, { useState } from "react";

export default function AddProject() {
  const [inputValue, setInputValue] = useState("");
  const [features, setFeatures] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setFeatures([...features, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleOngoingChange = (e) => {
    setIsOngoing(e.target.checked);
  };

  const [inputTech, setInputTech] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const handleTechInputChange = (e) => {
    setInputTech(e.target.value);
  };

  const handleTechInputKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputTech.trim() !== "") {
        setTechnologies([...technologies, inputTech.trim()]);
        setInputTech("");
      }
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
            href="/"
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
              <a
                href="/dev-dashboard/account"
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
              </a>
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
        <p class="pb-6 text-2xl font-semibold text-blue-600">Add project</p>
        <div class="max-w-4xl px-4 sm:px-6 lg:px-8  mx-auto">
          <form>
            <div class="bg-white rounded-xl shadow">
              <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
                <div className="absolute top-0 end-0 p-4">
                  <label
                    // htmlFor="imageUpload"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    Upload cover photo
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                {imagePreview && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <img
                      src={imagePreview}
                      alt="Uploaded"
                      className="h-40 w-full object-cover object-top"
                    />
                  </div>
                )}
              </div>

              <div class="pt-0 p-4 sm:pt-0 sm:p-7">
                <div class="space-y-4 sm:space-y-6">
                  <div class="space-y-2">
                    <label
                      for="af-submit-app-project-name"
                      class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Project title
                    </label>

                    <input
                      id="af-submit-app-project-name"
                      type="text"
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Enter project title"
                    />
                  </div>

                  <div class="space-y-2">
                    <label
                      for="af-submit-app-description"
                      class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Description
                    </label>

                    <textarea
                      id="af-submit-app-description"
                      class="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      rows="6"
                      placeholder="A detailed summary will better explain your project to the audience"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label
                      // htmlFor="af-submit-app-category"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Category
                    </label>

                    <select
                      id="af-submit-app-category"
                      onChange={handleCategoryChange}
                      value={selectedCategory}
                      className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <option value="">Select project category</option>
                      <option value="Ecommerce">Ecommerce</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketplace">Marketplace</option>
                      <option value="Social">Social</option>
                      <option value="Others">Others</option>
                    </select>

                    {selectedCategory === "Others" && (
                      <input
                        type="text"
                        placeholder="Enter other category"
                        className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mt-2"
                      />
                    )}
                  </div>

                  <div class="space-y-2">
                    <label
                      for="af-submit-app-project-name"
                      class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Implemented features
                    </label>
                    <input
                      id="af-submit-app-project-feature"
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyPress={handleInputKeyPress}
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Type feature name and press enter to add it then add the next"
                    />
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
                          <span class="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div class="space-y-2">
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="start-date"
                          class="block text-sm font-medium text-gray-800 mt-2.5"
                        >
                          Start Date
                        </label>
                        <input
                          id="start-date"
                          type="date"
                          value={startDate}
                          onChange={handleStartDateChange}
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>

                      <div class="flex-1">
                        <label
                          for="end-date"
                          class="block text-sm font-medium text-gray-800 mt-2.5"
                        >
                          End Date
                        </label>
                        <input
                          id="end-date"
                          type="date"
                          value={endDate}
                          onChange={handleEndDateChange}
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>

                      <div class="flex-1">
                        <label
                          for="ongoing"
                          class="block text-sm font-medium text-gray-800 mt-2.5"
                        >
                          Status
                        </label>
                        <div class="flex items-center py-2 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm">
                          <input
                            id="ongoing"
                            type="checkbox"
                            checked={isOngoing}
                            onChange={handleOngoingChange}
                            class="ml-3"
                          />
                          <label
                            for="ongoing"
                            class="block text-sm text-gray-800 mt-1 ml-2"
                          >
                            Ongoing
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label
                      for="af-submit-project-url"
                      class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Deployed link
                    </label>

                    <input
                      id="af-submit-project-url"
                      type="text"
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="https://example.so"
                    />
                  </div>

                  <div class="space-y-2">
                    <label
                      for="af-submit-project-url"
                      class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Project demo link
                    </label>

                    <input
                      id="af-submit-project-url"
                      type="text"
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="https://example.so"
                    />
                  </div>
                  <div class="space-y-2">
                    <label
                      for="af-submit-app-project-name"
                      class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Technologies used
                    </label>
                    <input
                      id="af-submit-app-project-feature"
                      type="text"
                      value={inputTech}
                      onChange={handleTechInputChange}
                      onKeyPress={handleTechInputKeyPress}
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Type technology name like a framework and press enter to add it then add the next"
                    />
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
                          <span class="text-gray-800">{technology}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="flex items-center pe-11 w-full rounded-lg text-sm">
                    <input
                      id="ongoing"
                      type="checkbox"
                      checked={isOngoing}
                      onChange={handleOngoingChange}
                      class="ml-3"
                    />
                    <label
                      for="ongoing"
                      class="block text-sm text-gray-800 mt-1 ml-2"
                    >
                      I agree that this is my original work and in case of a
                      group project I have my team mates' consent to sell it.
                    </label>
                  </div>
                </div>
                <div class="mt-8 flex justify-center gap-x-2">
                  <button
                    type="button"
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Submit your project
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
