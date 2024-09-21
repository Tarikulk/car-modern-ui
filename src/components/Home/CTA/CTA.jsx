import React from "react";

export const CallToAction = () => {
  return (
    <div className="container mt-24 relative">
      <div className="py-20 md:py-24 relative border border-black rounded-lg">
        {/* Background Layer */}
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto right-0 top-0 h-[500px] w-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>

        <div className="border border-white/15 py-4 rounded-xl overflow-hidden relative">
          <div className="relative">
            <h2 className="text-5xl mx-auto md:text-6xl font-medium text-center tracking-tighter text-black">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-black/80 text-lg md:text-xl max-w-sm mx-auto tracking-tight text-center px-4 mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-5">
              <button className="bg-primary text-white px-6 py-2 rounded-md">
                Subscribe to our newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
