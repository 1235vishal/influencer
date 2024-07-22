import React from "react";
import ima from "../../assets/ima.png";
import imp from "../../assets/imp.png";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Marketing = () => {
  return (
    <section className="px-28 py-40 bg-[#EFEBEB] w-full min-h-[80vh] flex flex-col gap-16">
      <div className="flex w-full justify-center max-h-[60vh] gap-16">
        <div className="flex-1">
          <img
            src={ima.src}
            alt=""
            className="w-full h-[60vh] object-cover rounded-[20px]"
          />
        </div>
        <div className="flex-1">
          <p className="text-5xl font-semibold mt-7">
            Influencer Marketing Agencies
          </p>
          <p className="text-lg mt-5">
            View a collection of the globe&apos;s leading marketing agencies all
            in one place
          </p>
          <Button className="bg-[#EB3C75] rounded-full py-3 px-7 text-white mt-5 flex items-center gap-3">
            View Agencies
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-center items-center max-h-[60vh] gap-16">
        <div className="flex-1">
          <p className="text-5xl font-semibold mt-7">
            Influencer Marketing Platforms
          </p>
          <p className="text-base mt-5">
            All the leading influencer marketing platforms rated and reviewed
          </p>
          <Button className="bg-[#EB3C75] rounded-full py-3 px-7 text-white mt-5 flex items-center gap-3">
            View Platforms
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1">
          <img
            src={imp.src}
            alt=""
            className="w-full h-[60vh] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Marketing;
