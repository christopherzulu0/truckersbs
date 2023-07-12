import type { NextPage } from "next";
import { useState, useCallback } from "react";
import CV from "../components/c-v";
import PortalPopup from "../components/portal-popup";

const DriverProfile: NextPage = () => {
  const [isCVOpen, setCVOpen] = useState(false);

  const onPlayButtonContainerClick = useCallback(() => {
    // Please sync "Driver profile: Edit" to the project
  }, []);

  const openCV = useCallback(() => {
    setCVOpen(true);
  }, []);

  const closeCV = useCallback(() => {
    setCVOpen(false);
  }, []);

  const onImage15Click = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onHomeIconClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onGroupContainer6Click = useCallback(() => {
    // Please sync "Company profile" to the project
  }, []);

  const onConversationChatTextIconClick = useCallback(() => {
    // Please sync "Toolbox Talks" to the project
  }, []);

  const onIconLightLogout1Click = useCallback(() => {
    // Please sync "Pricing 4 Wheeler" to the project
  }, []);

  return (
    <>
      <div className="relative w-full h-[2468px] text-left text-xl text-black font-rubik">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[2468px] text-royalblue font-noto-sans">
          <div className="absolute top-[0px] left-[0px] bg-base-white w-[1440px] h-[2468px] overflow-hidden">
            <div className="absolute top-[37px] left-[1172px] font-semibold text-center">
              Login
            </div>
            <div className="absolute top-[2036px] left-[0px] w-[1440px] h-[432px] text-base text-gray-700 font-text-l-regular">
              <div className="absolute top-[0px] left-[0px] bg-base-white w-[1440px] flex flex-col py-16 px-0 box-border items-center justify-start">
                <div className="w-[1280px] flex flex-col py-0 px-8 box-border items-start justify-start gap-[64px]">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="w-[247px] flex flex-col items-start justify-start text-xl text-gray-50">
                      <div className="flex flex-col items-start justify-start gap-[16px]">
                        <b className="relative tracking-[-0.1px] leading-[24px] inline-block w-[247px]">
                          Socials
                        </b>
                        <div className="flex flex-row items-start justify-start gap-[24px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/social-platforms-logo.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/social-platforms-logo1.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/social-platforms-logo2.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/social-platforms-logo3.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                        <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
                          Resources
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-gray-50">
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Partners
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Community
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Developers
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            App
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Blog
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                        <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
                          Why Choose Us?
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-gray-50">
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Channels
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Scale
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Feeds
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Our Competition
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                        <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
                          Company
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-gray-50">
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            About Us
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Our Sevices
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Location
                          </div>
                        </div>
                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                            Careers
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1280px] flex flex-col items-center justify-start text-center text-gray-50">
                    <div className="self-stretch relative tracking-[-0.1px] leading-[24px]">
                      © 2023 All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[1207px] left-[120px] shadow-[0px_10px_30px_rgba(112,_136,_210,_0.2)] w-[1186px] h-[415px] overflow-hidden text-lg text-darkslategray font-rubik">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white" />
              <div className="absolute top-[16px] left-[16px] tracking-[0.2px] leading-[24px] font-medium">
                Previous Trip
              </div>
              <div className="absolute top-[320px] left-[16px] w-[362px] h-[50px] text-sm text-dodgerblue">
                <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-[363px] h-px border-t-[1px] border-solid border-aliceblue-300" />
                <div className="absolute top-[16px] left-[16px] w-[330px] h-[34px]">
                  <div className="absolute top-[10px] left-[248px] tracking-[0.2px] leading-[14px] font-medium">
                    Total : $500
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[34px] h-[34px]"
                    alt=""
                    src="/group-5.svg"
                  />
                  <div className="absolute top-[9px] left-[44px] font-medium text-darkslategray">
                    Jon doe
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[55px] left-[28px] w-[1130px] h-[338.4px] object-cover"
                alt=""
                src="/map@2x.png"
              />
              <img
                className="absolute h-[39.71%] w-[75.69%] top-[22%] right-[10.22%] bottom-[38.29%] left-[14.09%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/group-7.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[101px] left-[0px] bg-aliceblue-100 w-[1440px] h-[998px]" />
        <div className="absolute top-[856px] left-[349px] text-5xl font-inika text-center inline-block w-[773px] h-[191px]">
          I am a fully experienced safety driver with experience as a dangerous
          driver and Heavy Machinery driver. My experience spans accross a
          couple of years and I also hold a Bachelors Degree is Logistics from
          Quebec institute.
        </div>
        <b className="absolute top-[712px] left-[39px] text-[48px] font-lato text-royalblue">{`About `}</b>
        <div className="absolute top-[75px] left-[0px] [background:linear-gradient(202.03deg,_#f7839a,_#7cdada)] w-[1440px] h-[619px] overflow-hidden">
          <b className="absolute top-[70px] left-[375px] text-[64px] leading-[100%] font-text-l-regular">
            Mike Myers
          </b>
          <div className="absolute top-[36px] left-[129px] w-[189px] h-[189px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl overflow-hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/kapil-ojha1@2x.png"
                />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/suraj-prawal1@2x.png"
                />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/raghu-simon1@2x.png"
                />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/kishore1@2x.png"
                />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/ramesh-sharma1@2x.png"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute top-[70px] left-[1303px] rounded-xl bg-aliceblue-200 h-[37px] overflow-hidden flex flex-row py-2.5 px-[15px] box-border items-center justify-start cursor-pointer text-dodgerblue"
            onClick={onPlayButtonContainerClick}
          >
            <div className="relative tracking-[0.2px] font-medium">Edit</div>
          </div>
          <div className="absolute top-[233px] left-[375px] text-5xl tracking-[0.2px] leading-[14px] capitalize text-steelblue">
            heavy vehicle driving
          </div>
          <div className="absolute top-[202px] left-[343px] shadow-[0px_10px_30px_rgba(112,_136,_210,_0.2)] w-[517px] h-[414px] overflow-hidden text-lg text-darkslategray">
            <div className="absolute top-[106px] left-[26px] w-[193px] h-6">
              <div className="absolute top-[5px] left-[40px] tracking-[0.23px] leading-[14px] inline-block w-[153px]">
                +91 99999 88888
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/phone.svg"
              />
            </div>
            <div className="absolute top-[155px] left-[26px] w-[236px] h-6">
              <div className="absolute top-[5px] left-[40px] tracking-[0.23px] leading-[14px]">
                mikemyers@gmail.com
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/mail.svg"
              />
            </div>
            <div className="absolute top-[204px] left-[26px] w-[308px] h-6">
              <div className="absolute top-[5px] left-[40px] tracking-[0.23px] leading-[14px]">
                81 high street, quebec canada
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/mappin.svg"
              />
            </div>
            <div className="absolute top-[302px] left-[26px] w-[137px] h-6">
              <div className="absolute top-[5px] left-[40px] tracking-[0.23px] leading-[14px]">
                Mastercard
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/creditcard.svg"
              />
            </div>
            <div className="absolute top-[253px] left-[26px] w-[254px] h-6">
              <div className="absolute top-[40px] left-[0px] bg-aliceblue-300 w-[310px] h-px hidden" />
              <div className="absolute top-[5px] left-[40px] tracking-[0.23px] leading-[14px]">
                Canada Express logistics
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/layers.svg"
              />
            </div>
            <div
              className="absolute top-[351px] left-[26px] w-44 h-6 cursor-pointer"
              onClick={openCV}
            >
              <div className="absolute top-[5px] left-[40px] tracking-[0.23px] leading-[14px]">
                Cariculum Vitae
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6"
                alt=""
                src="/-icon-bold--bookclosebookmark.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[317px] left-[860px] w-[302px] h-[299px]"
            alt=""
            src="/group-2.svg"
          />
          <div className="absolute top-[calc(50%_+_247.5px)] left-[1303px] w-[455px] h-[66px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
            <div className="absolute top-[calc(50%_-_33px)] left-[4.91px] bg-gainsboro w-[455px] h-[58.28px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <img
              className="absolute top-[calc(50%_-_138.52px)] left-[0px] w-[66px] h-[91px] object-cover"
              alt=""
              src="/facebook-circled@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_248.88px)] left-[0px] w-[66px] h-[91px] object-cover"
              alt=""
              src="/instagram@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_359.24px)] left-[0px] w-[66px] h-[91px] object-cover"
              alt=""
              src="/linkedin@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_469.61px)] left-[0px] w-[66px] h-[91px] object-cover"
              alt=""
              src="/whatsapp@2x.png"
            />
          </div>
          <img
            className="absolute h-[4.52%] w-[14.24%] top-[42%] right-[61.11%] bottom-[53.47%] left-[24.65%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rating.svg"
          />
          <div className="absolute top-[152px] left-[365px] w-[281px] h-[63px] font-text-l-regular">
            <div className="absolute top-[0px] left-[0px] rounded-[61px] box-border w-[281px] h-[63px] border-[0.5px] border-solid border-royalblue" />
            <img
              className="absolute top-[8px] left-[21px] w-12 h-12 overflow-hidden"
              alt=""
              src="/colored--checked.svg"
            />
            <div className="absolute top-[22px] left-[99px] leading-[22px] inline-block w-[78px] h-5">
              verified
            </div>
          </div>
        </div>
        <div className="absolute top-[1690px] left-[120px] shadow-[0px_10px_30px_rgba(112,_136,_210,_0.2)] w-[1186px] h-[310px] overflow-hidden text-right text-base text-seagreen">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white" />
          <div className="absolute top-[23px] left-[16px] text-lg leading-[24px] font-medium text-darkslategray text-left">
            Completed Trips
          </div>
          <div className="absolute top-[77px] left-[16px] w-[1149px] h-8">
            <div className="absolute top-[31px] left-[2px] bg-aliceblue-300 w-[1147px] h-px" />
            <div className="absolute top-[1px] left-[1057px] tracking-[0.2px] leading-[14px] font-medium inline-block w-[60px]">
              Quebec
            </div>
            <div className="absolute top-[1px] left-[32px] text-sm tracking-[0.23px] leading-[14px] text-darkslategray text-left inline-block w-[160.1px]">
              14/06/2021, 14:24 AM
            </div>
            <div className="absolute top-[0px] left-[0px] rounded bg-dodgerblue w-4 h-4" />
          </div>
          <div className="absolute top-[125px] left-[16px] w-[1148px] h-8">
            <div className="absolute top-[31px] left-[1px] bg-aliceblue-300 w-[1147px] h-px" />
            <div className="absolute top-[1px] left-[1055px] tracking-[0.2px] leading-[14px] font-medium inline-block w-[70px]">
              Montreal
            </div>
            <div className="absolute top-[1px] left-[32px] text-sm tracking-[0.23px] leading-[14px] text-darkslategray text-left inline-block w-[164.46px]">
              24/05/2021, 22:30 AM
            </div>
            <div className="absolute top-[0px] left-[0px] rounded bg-dodgerblue w-4 h-4" />
          </div>
          <div className="absolute top-[173px] left-[16px] w-[1149px] h-[33px]">
            <div className="absolute top-[32px] left-[2px] bg-aliceblue-300 w-[1147px] h-px" />
            <div className="absolute top-[1px] left-[1055px] tracking-[0.2px] leading-[14px] font-medium inline-block w-[62px]">
              Quebec
            </div>
            <div className="absolute top-[1px] left-[32px] text-sm tracking-[0.23px] leading-[14px] text-darkslategray text-left inline-block w-[156.83px]">
              11/04/2021, 16:20 AM
            </div>
            <div className="absolute top-[0px] left-[0px] rounded bg-dodgerblue w-4 h-4" />
          </div>
          <div className="absolute top-[222px] left-[16px] w-[1149px] h-[33px]">
            <div className="absolute top-[32px] left-[2px] bg-aliceblue-300 w-[1147px] h-px" />
            <div className="absolute top-[1px] left-[1055px] tracking-[0.2px] leading-[14px] font-medium inline-block w-[70px]">
              Montreal
            </div>
            <div className="absolute top-[1px] left-[32px] text-sm tracking-[0.23px] leading-[14px] text-darkslategray text-left inline-block w-[156.83px]">
              11/04/2021, 16:20 AM
            </div>
            <div className="absolute top-[0px] left-[0px] rounded bg-dodgerblue w-4 h-4" />
          </div>
          <div className="absolute top-[271px] left-[16px] w-[1117px] h-4">
            <div className="absolute top-[32px] left-[2.18px] bg-aliceblue-300 w-[326.73px] h-px hidden" />
            <div className="absolute top-[1px] left-[1055px] tracking-[0.2px] leading-[14px] font-medium inline-block w-[62px]">
              Quebec
            </div>
            <div className="absolute top-[1px] left-[32px] text-sm tracking-[0.23px] leading-[14px] text-darkslategray text-left inline-block w-[156.83px]">
              11/04/2021, 16:20 AM
            </div>
            <div className="absolute top-[0px] left-[0px] rounded bg-dodgerblue w-4 h-4" />
          </div>
          <div className="absolute top-[16px] left-[1062px] rounded-xl bg-aliceblue-200 h-[37px] overflow-hidden flex flex-row py-2.5 px-[15px] box-border items-center justify-start text-left text-sm text-dodgerblue">
            <div className="relative tracking-[0.2px] font-medium">
              View All
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[77px] text-mini font-text-l-regular">
          <div className="absolute top-[0px] left-[0px] bg-base-white box-border w-[1440px] h-[77px] border-b-[1px] border-solid border-whitesmoke" />
          <div className="absolute top-[20px] left-[48.9px] w-[1361.16px] h-[49px]">
            <div className="absolute top-[0px] left-[0px] w-[1361.16px] h-[49px]">
              <div className="absolute top-[9px] left-[92.81px] rounded-8xs box-border w-[172.64px] h-8 border-[1px] border-solid border-whitesmoke" />
              <img
                className="absolute top-[13px] left-[235.51px] w-[23.95px] h-6 overflow-hidden"
                alt=""
                src="/keyboardarrowbottom.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[50.89px] h-[49px] object-cover cursor-pointer"
                alt=""
                src="/image-15@2x.png"
                onClick={onImage15Click}
              />
              <img
                className="absolute top-[11px] left-[56.88px] w-[29.94px] h-[30px] overflow-hidden cursor-pointer"
                alt=""
                src="/home.svg"
                onClick={onHomeIconClick}
              />
              <div className="absolute top-[15px] left-[142.7px] leading-[22px] font-semibold inline-block w-[46.9px] h-[21px]">
                Home
              </div>
              <div className="absolute top-[11px] left-[291.39px] rounded-8xs box-border w-[447.07px] h-[30px] border-[1px] border-solid border-whitesmoke" />
              <div className="absolute top-[15px] left-[347.28px] leading-[22px] font-light inline-block w-[48.9px]">
                Search
              </div>
              <img
                className="absolute h-[48.98%] w-[1.76%] top-[28.57%] right-[76.17%] bottom-[22.45%] left-[22.07%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/search.svg"
              />
              <div className="absolute top-[9px] left-[844.24px] w-[516.92px] h-[30px] text-5xl">
                <img
                  className="absolute top-[5px] left-[0px] w-[23.95px] h-6"
                  alt=""
                  src="/-icon-light--arrowthickcirclebottomrightcorner1.svg"
                />
                <img
                  className="absolute top-[5px] left-[22.95px] w-[23.95px] h-6"
                  alt=""
                  src="/-icon-light--arrowthickcirclebottomrightcorner11.svg"
                />
                <div className="absolute top-[5px] left-[51.89px] w-[23.95px] h-6">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-[37.52%] w-[62.54%] top-[31.27%] right-[18.73%] bottom-[31.21%] left-[18.73%]">
                      <div className="absolute h-[116.66%] w-[76.68%] top-[-8.33%] right-[28.33%] bottom-[-8.33%] left-[-5.01%] rounded-[3px] box-border border-[1.5px] border-solid border-royalblue" />
                      <img
                        className="absolute h-[87.56%] w-[27.23%] top-[6.22%] right-[-5%] bottom-[6.22%] left-[77.77%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/shape.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[5px] left-[80.83px] leading-[22px] font-light text-darkgray inline-block w-[12.97px] h-6">
                  |
                </div>
                <img
                  className="absolute top-[5px] left-[98.8px] w-[23.95px] h-6"
                  alt=""
                  src="/-icon-regular--messagesbubbletyping1.svg"
                />
                <img
                  className="absolute top-[5px] left-[127.73px] w-[23.95px] h-6"
                  alt=""
                  src="/-icon-regular--alarmbell.svg"
                />
                <img
                  className="absolute top-[5px] left-[156.67px] w-[23.95px] h-6 overflow-hidden"
                  alt=""
                  src="/add.svg"
                />
                <div className="absolute top-[0px] left-[183.62px] rounded-[50%] bg-royalblue w-[29.94px] h-[30px]" />
                <div className="absolute top-[4px] left-[187.61px] leading-[22px] font-light text-base-white inline-block w-[21.95px]">
                  M
                </div>
                <div className="absolute top-[4px] left-[408.15px] text-base leading-[22px] font-light inline-block w-[108.77px]">
                  March 5, 2023
                </div>
                <div
                  className="absolute top-[5px] left-[220.54px] w-[157.67px] h-6 cursor-pointer text-base"
                  onClick={onGroupContainer6Click}
                >
                  <div className="absolute top-[0px] left-[0px] leading-[22px] font-light inline-block w-[138.71px]">
                    Mathews Kandoko
                  </div>
                  <img
                    className="absolute top-[0px] left-[133.72px] w-[23.95px] h-6 overflow-hidden"
                    alt=""
                    src="/keyboardarrowbottom1.svg"
                  />
                </div>
                <img
                  className="absolute top-[0px] left-[378.21px] rounded-[38px] w-[23.95px] h-6 overflow-hidden"
                  alt=""
                  src="/flagca.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute h-[31.17%] w-[6.65%] top-[44.16%] right-[38.25%] bottom-[24.68%] left-[55.09%] text-[12px]">
            <img
              className="absolute h-[102.08%] w-[26.04%] top-[-2.08%] right-[-0.52%] bottom-[0%] left-[74.48%] max-w-full overflow-hidden max-h-full cursor-pointer"
              alt=""
              src="/conversationchattext.svg"
              onClick={onConversationChatTextIconClick}
            />
            <div className="absolute top-[0px] left-[0px] leading-[22px] font-light inline-block w-[67.86px] h-[17px]">
              Toolbox talk
            </div>
          </div>
          <img
            className="absolute top-[32px] left-[1413px] w-6 h-6 cursor-pointer"
            alt=""
            src="/-icon-light--logout1.svg"
            onClick={onIconLightLogout1Click}
          />
        </div>
      </div>
      {isCVOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCV}
        >
          <CV onClose={closeCV} />
        </PortalPopup>
      )}
    </>
  );
};

export default DriverProfile;
