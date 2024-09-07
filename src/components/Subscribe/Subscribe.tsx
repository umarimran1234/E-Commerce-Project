import React from "react";

const Subscribe = () => {
    return (
        <>
            <div className="relative mt-10 overflow-hidden bg-gray-200 py-16 sm:py-24 lg:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-full">
                        <div className="max-w-xl lg:max-w-full mx-auto">
                            <h2 className="text-xl text-center font-semibold sm:text-4xl">
                                Subscribe to our newsletter.
                            </h2>
                            <p className="mt-4 text-[#606060]">
                                Get daily news on upcoming offers from many suppliers all over the world
                            </p>
                            <div className="mt-6 flex mx-auto max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none bg-[#127FFF] text-white rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;