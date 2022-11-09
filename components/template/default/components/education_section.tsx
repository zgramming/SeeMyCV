import { Card } from "antd";
import Image from "next/image";
import { forwardRef } from "react";
import { Waypoint } from "react-waypoint";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVEducationInterface } from "../../../../interface/cv/cveducation_interface";
import activeNavigationBarStore from "../../../../repository/active_navigationbar";

const EducationSection = forwardRef<
  HTMLDivElement,
  { education: CVEducationInterface[] }
>((props, ref) => {
  return (
    <div ref={ref}>
      <Waypoint
        onEnter={(e) => activeNavigationBarStore.setActiveMenu("education")}
        onLeave={(e) => ""}
        bottomOffset={"50%"}
        topOffset={"20%"}
      >
        <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
          <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
            <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
              EDUCATION
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {props.education.map((val, index) => {
                const startDate = new Date(val.start_date);
                const endDate = val.end_date && new Date(val.end_date);
                return (
                  <Card key={val.id} className="bg-watanasa-scaffold shadow">
                    <div className="flex flex-row items-start space-x-5">
                      <Image
                        src={`${val.image}`}
                        alt="Image Company Experience"
                        className="rounded-lg"
                        width={60}
                        height={60}
                        onError={(e) => {
                          return <div>Error</div>;
                        }}
                      />
                      <div className="flex flex-col space-y-2">
                        <div className="font-bold font-poppins tracking-widest text-xl">
                          {val.name}
                        </div>
                        <div className="text-base">
                          {val.major} - {val.field_of_study}
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                          <FontAwesomeIcon icon={faCalendar} />
                          <div className="text-sm">
                            {startDate.toLocaleDateString("id-ID", {
                              month: "short",
                              year: "numeric",
                            })}
                            {" - "}
                            {endDate
                              ? endDate.toLocaleDateString("id-ID", {
                                  month: "short",
                                  year: "numeric",
                                })
                              : "Sekarang"}
                          </div>
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

EducationSection.displayName = "Education Section";

export default EducationSection;
