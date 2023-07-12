import type { NextPage } from "next";

type CVType = {
  onClose?: () => void;
};

const CV: NextPage<CVType> = ({ onClose }) => {
  return (
    <div className="relative bg-base-white w-[665px] h-[732px] overflow-hidden max-w-full max-h-full text-left text-2xs text-slategray font-arial">
      <div className="absolute w-[23.53%] top-[calc(50%_-_217px)] left-[68.57%] leading-[18px] inline-block">
        <p className="m-0">MikeMyers@gmail.com</p>
        <p className="m-0">+99999999999</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <b>Industry Knowledge</b>
        </p>
        <p className="m-0">Dangerous Goods Driving</p>
        <p className="m-0">Abnormal lodes</p>
        <p className="m-0">First aide</p>
        <p className="m-0">Fire Fighting</p>
        <p className="m-0">Survival Skills</p>
        <p className="m-0">Navigation</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <b>{`Tools & Technologies`}</b>
        </p>
        <p className="m-0">First Aid box</p>
        <p className="m-0">{`18 Ton `}</p>
        <p className="m-0">Truck and Trailer</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <b>Other Skills</b>
        </p>
        <p className="m-0">Communication skills</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <b>Languages</b>
        </p>
        <p className="m-0">Canadian (native)</p>
        <p className="m-0">English (professionnal)</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute w-[56.3%] top-[calc(50%_-_217px)] left-[8.07%] leading-[18px] inline-block text-6xs">
        <p className="m-0 tracking-[2px] uppercase">experience</p>
        <p className="m-0">
          <span className="text-2xs text-gray">
            <b className="font-arial">Senior Driver</b>
          </span>
        </p>
        <p className="m-0">
          <span className="font-arial">
            <span className="text-2xs text-gray">Canada Express Logistics</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-arial">
            <span className="text-4xs text-slategray">
              Aug 2020 - Present - 1 year, Montreal station
            </span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-arial">
            <span className="text-2xs text-gray">
              Worked as a senior driver of abnormal lodes and dangerous goods
              over
            </span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-arial">
            <span className="text-2xs text-gray">long distances.</span>
          </span>
        </p>
        <p className="m-0">
          <span className="text-2xs text-gray">
            <b className="font-arial">&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span className="text-2xs text-gray">
            <b className="font-arial">Junior Driver</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="text-2xs text-gray">Montreal Logistics</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="text-4xs text-slategray">
              Aug 2015 - Aug 2020 - 5 years, Montreal
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="text-2xs text-gray">
              Assisted the senior driver and COO plan routes and delivered
              abnormal lodes and dangerous goods to local sites.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="text-2xs text-gray">&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="tracking-[2px] uppercase">education</span>
          </span>
        </p>
        <p className="m-0">
          <span className="text-2xs text-gray">
            <b className="font-arial">Bachelors in Logistics</b>
          </span>
        </p>
        <p className="m-0">
          <span className="text-2xs text-gray">
            <span className="font-arial">Quebec Logistics institute</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-arial">
            <span className="text-4xs text-slategray">2016 - 2019, Quebec</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-arial">
            <span className="text-4xs text-slategray">&nbsp;</span>
          </span>
        </p>
      </div>
      <div className="absolute w-[56.24%] top-[calc(50%_-_321px)] left-[8.12%] leading-[28px] text-gray inline-block h-[60px] text-5xl">
        <p className="m-0">
          <b>Mike Myers</b>
        </p>
        <p className="m-0 text-lg">Heavy Equipment and Dangerous Driving</p>
      </div>
      <div className="absolute top-[33px] left-[462px] w-[72px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/kapil-ojha@2x.png"
            />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/suraj-prawal@2x.png"
            />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/raghu-simon@2x.png"
            />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/kishore@2x.png"
            />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/ramesh-sharma@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-royalblue w-[665px] h-1" />
      <div className="absolute top-[636px] left-[271px] rounded-xl bg-aliceblue-200 h-[37px] overflow-hidden flex flex-row py-2.5 px-[15px] box-border items-center justify-start text-xl text-dodgerblue font-rubik">
        <div className="relative tracking-[0.2px]">Download</div>
      </div>
    </div>
  );
};

export default CV;
