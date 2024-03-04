import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import "./app.css"

export function Component() {
  return (
    <>
      <Navbar />
      <video src={BgVideo} autoPlay muted loop class="video-bg" />
      <div className="py-12 lg:py-16 bg-black">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Marine Fish Classification
            </h1>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore the fascinating world of marine fish. Let's dive in!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px] md:flex-row justify-center">
            <Link href="/Pages/auto-fis-explore">
              <Button className="bg-white text-black inline-flex items-center justify-center h-10 px-8 rounded-md border border-gray-200 shadow-sm gap-2 transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-black text-white w-full py-12 flex items-center justify-center md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Species Diversity
              </h2>
              <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the incredible variety of marine fish species, from
                colorful reef dwellers to majestic pelagic swimmers.
              </p>
              <Link href="/Pages/find-fish">
              <Button className="bg-white text-black inline-flex items-center justify-center h-10 px-8 rounded-md border border-gray-200 shadow-sm gap-2 transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                Get Started
              </Button>
            </Link>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 md:p-8">
            <img
              alt="Species Diversity"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="250"
              src="/placeholder.svg"
              width="500"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white w-full py-12 flex items-center justify-center md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:gap-12  xl:gap-16">
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl ">
                Habitats
              </h2>
              <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the diverse habitats that marine fish call home,
                including coral reefs, kelp forests, and the open ocean.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full  items-center justify-center p-4 md:p-8">
            <img
              alt="Habitats"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="250"
              src="/placeholder.svg"
              width="500"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white w-full py-12 flex items-center justify-center md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:gap-12 xl:max-w-6xl xl:gap-16">
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Behavior and Adaptations
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn about the fascinating behavior and unique adaptations of
                marine fish, including camouflage, bioluminescence, and
                schooling.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full  items-center justify-center p-4 md:p-8">
            <img
              alt="Behavior and Adaptations"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="250"
              src="/placeholder.svg"
              width="500"
            />
          </div>
        </div>
      </section>

      <div className="bg-black border-t flex  items-center justify-center border-gray-200 dark:border-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:gap-10 xl:gap-12">
          <div className="space-y-4">
            <h2 className="text-white py-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Dive In?
            </h2>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Sign up to access exclusive content and join the marine fish
              community.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <label className="sr-only" htmlFor="homepage-email">
                Email
              </label>
              <Input
                className="w-full flex items-center justify-center border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
                id="homepage-email"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="bg-black border-white text-white w-20 h-29" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center py-6 text-center md:py-12 lg:py-16">
        <div className="container flex items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
          <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
            © 2023 Auto-fis. All rights reserved.
          </p>
          <div className=" grid gap-4 sm:grid-flow-col auto-rows-fr-auto">
            <Link
              className="text-white text-sm font-medium  transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
