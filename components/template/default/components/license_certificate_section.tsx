import { Card } from "antd";
import { parse } from "path";
import { Waypoint } from "react-waypoint";

import { FileImageOutlined, FilePdfOutlined } from "@ant-design/icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVLicenseCertificateInterface } from "../../../../interface/cv/cvlicensecertificate_interface";
import activeNavigationBarStore from "../../../../repository/active_navigationbar";

const LicenseAndCertificateSection = (props: {
  licenseCertificate: CVLicenseCertificateInterface[];
}) => {
  return (
    <Waypoint
      onEnter={(e) => activeNavigationBarStore.setActiveMenu("l&c")}
      onLeave={(e) => ""}
      bottomOffset={"50%"}
      topOffset={"20%"}
    >
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
        <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
          <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
            LICENSE & CERTIFICATE
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {props.licenseCertificate.map((val, index) => {
              const { ext } = parse(val.file ?? "");
              const startDate = new Date(val.start_date);
              const endDate = val.end_date && new Date(val.end_date);
              return (
                <Card key={val.id} className="bg-watanasa-scaffold shadow">
                  <div className="flex flex-col space-y-2">
                    <div className="font-bold font-poppins tracking-widest text-xl">
                      {val.name}
                    </div>
                    <div className="text-base">{val.publisher}</div>
                    <div className="flex flex-row items-center space-x-2">
                      <FontAwesomeIcon icon={faCalendar} />
                      <div className="text-sm">
                        {startDate.toLocaleDateString("id-ID", {
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {endDate
                          ? endDate.toLocaleDateString("id-ID", {
                              month: "long",
                              year: "numeric",
                            })
                          : "No Expiration"}
                      </div>
                    </div>
                    <div className="font-light">Kredensial : AXXXX5ABC</div>
                    <div>
                      {ext === ".pdf" && (
                        <FilePdfOutlined
                          className="text-xl text-red-600"
                          onClick={(e) => window.open(val.file)}
                        ></FilePdfOutlined>
                      )}
                      {ext === ".png" && (
                        <FileImageOutlined className="text-xl text-green-600"></FileImageOutlined>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

export default LicenseAndCertificateSection;
