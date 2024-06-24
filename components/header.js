"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Booked Events",
    url: "/booked-events",
  },
  {
    title: "New Event",
    url: "/new-event",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="flex items-center justify-between p-6 flex-wrap gap-4">
        <div className="font-bold hidden md:block">
          Event Booking and Creation
        </div>

        <nav>
          {/* <ul className="flex items-center justify-center gap-4 flex-wrap">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/booked-events" className={`${pathname === url ? "font-bold opacity-100" : "font-normal opacity-50" } transition`}>Booked Events</Link>
            </li>
            <li>
              <Link href="/new-event">New Event</Link>
            </li>
          </ul> */}

          <ul className="flex items-center justify-center gap-4 flex-wrap">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={`${
                    pathname === link.url
                      ? "font-bold opacity-100"
                      : "font-normal opacity-75"
                  } transition`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="font-bold hidden md:block">Welcome</div>
      </header>
    </>
  );
}
