"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Cookies() {
  const [cookie, setCookie] = useState(1);
  return (
    <div
      className={`${cookie == 0 ? "hidden" : "initial"}
    z-50 fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8`}
    >
      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        This website uses cookies to supplement a balanced diet and provide a
        much deserved reward to the senses after consuming bland but nutritious
        meals. Accepting our cookies is optional but recommended, as they are
        delicious. See our{" "}
        <Link href="#" className="font-semibold text-indigo-600">
          cookie policy
        </Link>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          onClick={() => {
            setCookie(0);
            console.log("first");
          }}
          type="button"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button
          onClick={() => setCookie(0)}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Reject all
        </button>
      </div>
    </div>
  );
}
