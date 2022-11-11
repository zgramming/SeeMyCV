import { Card, Tag } from "antd";
import Image from "next/image";
import { forwardRef } from "react";
import { Waypoint } from "react-waypoint";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVExperienceInterface } from "../../../../interface/cv/cvexperience_interface";
import activeNavigationBarStore from "../../../../repository/active_navigationbar";
import { calculatingExperience, dateToyMd } from "../../../../utils/function";

const ExperienceSection = forwardRef<
  HTMLDivElement,
  { experience: CVExperienceInterface[] }
>((props, ref) => {
  return (
    <div ref={ref}>
      <Waypoint
        onEnter={(e) => activeNavigationBarStore.setActiveMenu("experience")}
        onLeave={(e) => ""}
        bottomOffset={"50%"}
        topOffset={"20%"}
      >
        <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
          <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
            <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
              EXPERIENCE
            </div>
            <div className="grid grid-cols-1 gap-10">
              {props.experience.map((val, index) => {
                const startDate = new Date(val.start_date);
                const endDate = val.end_date && new Date(val.end_date);
                const calculating = calculatingExperience(
                  startDate,
                  endDate ?? new Date()
                );
                const tags = val.tags && (JSON.parse(val.tags) as string[]);
                return (
                  <Card key={val.id} className="bg-default-scaffold shadow">
                    <div className="flex flex-row items-start space-x-5">
                      <div className="hidden md:block">
                        <Image
                          src={`${val.image_company}`}
                          alt="Image Company Experience"
                          className="rounded-lg"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="font-bold font-poppins tracking-widest text-2xl">
                          {val.company}
                        </div>
                        <div className="font-semibold text-xl">{val.job}</div>
                        <div className="flex flex-row items-center space-x-2 pb-5">
                          <FontAwesomeIcon icon={faCalendar} />
                          <div className="text-sm">
                            {dateToyMd(startDate)} -{" "}
                            {endDate ? dateToyMd(endDate) : "Sekarang"}{" "}
                            {calculating}
                          </div>
                        </div>
                        <div
                          className="text-justify font-light"
                          dangerouslySetInnerHTML={{ __html: val.description }}
                        ></div>
                        <div className="flex flex-row flex-wrap gap-2">
                          {tags &&
                            tags.map((val, index) => {
                              return (
                                <Tag key={`${val}_${index}`} color="green">
                                  {val}
                                </Tag>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Waypoint>
    </div>
  );
});

ExperienceSection.displayName = "Experience Section";
export default ExperienceSection;
