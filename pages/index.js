import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <div class="bg-white">
        <div class="relative isolate px-6 py-14 lg:px-8">
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div class="mx-auto max-w-2xl py-24">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative rounded-full px-3 py-1 mb-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Ready to buy or elevate a project?{" "}
                <a href="/Projects" class="font-semibold text-indigo-600">
                  <span class="absolute inset-0" aria-hidden="true"></span>Find
                  your next project
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div class="text-center">
              <div class="mt-5 max-w-2xl text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-800">
                  Discover.
                  <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent mx-4">
                    Sell.
                  </span>
                  Revitalize.
                </h1>
              </div>
              <div class="mt-5 max-w-3xl text-center mx-auto ">
                <p class="text-lg text-gray-800 dark:text-gray-400">
                  Sway is where developers transform their passion into value.
                  Whether you're looking to sell a groundbreaking project or
                  revive a dormant one, this is your platform.
                </p>
              </div>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/login"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#benefits"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>

        <div class="bg-white pb-24 pt-2 sm:pb-32" id="benefits">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">
                Benefits
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why use Sway
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Join Sway and take control of your creations. This is where
                innovation finds value, and dormant projects discover a new
                life!
              </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                    <div class="absolute left-0 top-0 flex h-10 w-10 text-white items-center justify-center rounded-lg bg-indigo-600">
                      1
                    </div>
                    Monetize Your Genius
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Showcase your projects to a large audience. From innovative
                    masterpieces to dormant gems, every creation has value.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                    <div class="absolute left-0 top-0 flex h-10 w-10 text-white items-center justify-center rounded-lg bg-indigo-600">
                      2
                    </div>
                    Revive Dormant Projects
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Breathe new life into your forgotten projects. Let others
                    takeover and contribute to your work, turning potential into
                    reality.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                    <div class="absolute left-0 top-0 flex h-10 w-10 text-white items-center justify-center rounded-lg bg-indigo-600">
                      3
                    </div>
                    Connect with Buyers
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Our platform connects you with potential buyers, fostering a
                    marketplace where developers and projects find their perfect
                    match.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                    <div class="absolute left-0 top-0 flex h-10 w-10 text-white items-center justify-center rounded-lg bg-indigo-600">
                      4
                    </div>
                    Secure Transactions
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Built-in security measures to ensure safe transactions,
                    protecting both sellers and buyers.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
