import React from "react";
import ai from "../../assets/ai.png";
import inflation from "../../assets/inflation.png";
import digital_marketing from "../../assets/digital_marketing.png";

const GuidsReports = () => {
  return (
    <section className="px-28 py-32 bg-[#EFEBEB] w-full min-h-[80vh] flex flex-col gap-16">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold">Guids & Reports</p>
        <div className="text-[#EB3C75] underline">See All</div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <Card
          image={ai}
          title="Artificial Intelligence (AI) Marketing Benchmark Report: 2023"
          desc="The AI Marketing Benchmark Report 2023 is our inaugural overview of the use of AI by the marketing…"
          tag="AI Marketing"
        />
        <Card
          image={inflation}
          title="May 2024 Influencer Marketing Report"
          desc="The Influencer Marketing Report May 2024 provides an in-depth look at the current state of the influencer marketing…"
          tag="Influencer Marketing"
        />
        <Card
          image={digital_marketing}
          title="Digital Marketing Benchmark Report 2024"
          desc="The Digital Marketing Benchmark Report 2024 offers an extensive analysis of the digital marketing landscape, gathering insights from…"
          tag="Digital Marketing"
        />
      </div>
    </section>
  );
};

export default GuidsReports;

const Card = ({ image, title, desc, tag }) => {
  return (
    <div className="col-span-1 bg-white rounded-[20px] pb-6">
      <img src={image.src} alt="" className="w-full max-h-52 object-cover rounded-ss-[20px] rounded-se-[20px]" />
      <div className="p-5">
        <p className="bg-[#00000020] w-fit px-2 rounded-md">{tag}</p>
        <p className="text-base font-semibold mt-3">{title}</p>
        <p className="text-sm mt-3">{desc}</p>
      </div>
    </div>
  );
};
