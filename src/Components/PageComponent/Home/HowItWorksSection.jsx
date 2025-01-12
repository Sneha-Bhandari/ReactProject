import React from "react";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { GrSchedulePlay } from "react-icons/gr";
import { SiApachedolphinscheduler } from "react-icons/si";

function HowItWorksSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white ">
      <div className=" flex flex-col gap-12   py-6">
        <div className="flex justify-center text-[#589168] font-semibold text-sm ">
          SERVICES
        </div>

        <h1 className="font-extrabold text-4xl  text-amber-950 flex justify-center ">
          How It Works
        </h1>

        <div className="flex flex-row gap-16  justify-center items-center">
          <div className=" h-80 w-80 flex flex-col  justify-center items-center gap-3">
            <div className="text-9xl">
              <RiCalendarScheduleFill />
            </div>
            <h1 className="font-bold text-2xl">Make Schedule</h1>
            <p className="p-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          <div className=" h-80 w-80 flex flex-col justify-center items-center gap-3">
            <div className="text-9xl">
              <GrSchedulePlay />
            </div>

            <h1 className="font-bold text-2xl">Start Discussion</h1>
            <p className="p-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className=" h-80 w-80 flex flex-col justify-center items-center gap-3">
            <div className="text-9xl">
              <SiApachedolphinscheduler />
            </div>
            <h1 className="font-bold text-2xl">Enjoy Plan</h1>
            <p className="p-3 ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
