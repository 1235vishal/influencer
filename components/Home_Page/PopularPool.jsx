import React from "react";
import hashtags from "../../assets/hashtags.png";
import instaCost from "../../assets/post_cost.png";
import youtube from "../../assets/youtube.png";
import ticktok from "../../assets/tiktok.png";

const PopularPool = () => {
  return (
    <section className="px-28 py-32 bg-[#EFEBEB] w-full min-h-[80vh] flex flex-col gap-16">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold">Popular Pool</p>
        <div className="text-[#EB3C75] underline">
          See All Tools
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <Card image={hashtags} title="Instagram Hashtag Generator" />
        <Card image={instaCost} title="Instagram Sponsored Post Calculator" />
        <Card
          image={youtube}
          title="YouTube Money Calculator (earnings estimator)"
        />
        <Card image={ticktok} title="TikTok Money Calculator" />
      </div>
    </section>
  );
};

export default PopularPool;

const Card = ({ image, title }) => {
  return (
    <div className="col-span-1 bg-white rounded-[20px] flex min-h-[20vh]">
      <div className="w-1/4">
        <img
          src={image.src}
          alt=""
          className="w-full h-full object-cover rounded-ss-[20px] rounded-es-[20px]"
        />
      </div>
      <div className="p-10 flex items-center w-3/4">
        <p className="text-lg font-semibold mt-3">{title}</p>
      </div>
    </div>
  );
};
