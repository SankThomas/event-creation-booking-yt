"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    setEventList(events);
  }, []);

  const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];

  const handleBookEvent = (event) => {
    // Check if the event is already booked
    if (
      bookedEvents.find((e) => e.name === event.name && e.date === event.date)
    ) {
      toast.error("Event already booked!", { autoClose: 2000 });
      return;
    }

    // If the event is not booked, then add it to booked events
    const updateBookedEvents = [...bookedEvents, event];
    localStorage.setItem("bookedEvents", JSON.stringify(updateBookedEvents));
    toast.success("Event booked successfully!", { autoClose: 2000 });
  };

  return (
    <>
      <ToastContainer theme="colored" autoClose={2000} />

      <section className="px-6 max-w-6xl mx-auto py-10">
        <h2 className="font-bold text-4xl text-center mb-8">Events</h2>

        {eventList.length === 0 ? (
          <p className="text-neutral-600">No events found</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {eventList.map((event) => (
              <div
                key={event.id}
                className="p-4 rounded-lg border border-neutral-600 space-y-4"
              >
                <h4 className="font-bold">{event.name}</h4>
                <p className="text-neutral-600 text-sm">{event.date}</p>
                <p className="text-neutral-400 text-sm">{event.description}</p>

                <ul className="flex flex-wrap items-center justify-between gap-4">
                  <li className="text-sm text-neutral-400">
                    <strong>Location:</strong> {event.location}
                  </li>
                  <li className="text-sm text-neutral-400">
                    <strong>Organizer:</strong> {event.organizer}
                  </li>
                </ul>

                <button
                  onClick={() => handleBookEvent(event)}
                  className="py-2 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition text-sm text-neutral-400 font-semibold"
                >
                  Book now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
