import React from "react";

export const FooterTwo = (): JSX.Element => {
  return (
    <div className="w-[1440px] h-[568px]">
      <div className="relative h-[510px] top-[40px] bg-[url(/group.png)] bg-[100%_100%]">
        <div className="absolute w-[1298px] h-[56px] top-[396px] left-[72px]">
          <img className="absolute w-[1296px] h-px -top-px left-0 object-cover" alt="Line" src="line.svg" />
          <p className="absolute top-[36px] left-[470px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
            © Copyright 2024, All Rights Reserved by Game Kade
          </p>
        </div>
        <div className="absolute w-[308px] h-[173px] top-[90px] left-[1050px]">
          <div className="w-[306px] h-[55px] items-start top-[56px] bg-white rounded-[5px] border border-solid border-zinc-200 flex flex-col justify-center gap-[10px] absolute left-0">
            <div className="flex gap-[13px] pl-[20px] pr-[16px] py-[17px] self-stretch w-full mt-[-2.50px] mb-[-2.50px] items-center relative flex-[0_0_auto]">
              <div className="relative w-[227px] mt-[-1.00px] font-regular-16px font-[number:var(--regular-16px-font-weight)] text-zinc-500 text-[length:var(--regular-16px-font-size)] tracking-[var(--regular-16px-letter-spacing)] leading-[var(--regular-16px-line-height)] [font-style:var(--regular-16px-font-style)]">
                Enter your email
              </div>
            </div>
          </div>
          <div className="w-[136px] h-[50px] items-center p-[16px] top-[123px] bg-[#45d253] rounded-[50px] flex flex-col justify-center gap-[10px] absolute left-0">
            <div className="inline-flex justify-center gap-[9px] mt-[-5.00px] mb-[-5.00px] items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold-16px font-[number:var(--bold-16px-font-weight)] text-white text-[length:var(--bold-16px-font-size)] text-right tracking-[var(--bold-16px-letter-spacing)] leading-[var(--bold-16px-line-height)] whitespace-nowrap [font-style:var(--bold-16px-font-style)]">
                Subscribe
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-zinc-400 text-[13px] tracking-[3.00px] leading-[22px] whitespace-nowrap">
            SUBSCRIBE TO NEWSLETTER
          </div>
        </div>
        <div className="absolute w-[151px] h-[225px] top-[90px] left-[793px]">
          <p className="absolute top-[49px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[44px]">
            Customer Support
            <br />
            Delivery Details
            <br />
            Terms &amp; Conditions
            <br />
            Privacy Policy
          </p>
          <div className="absolute top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-zinc-400 text-[13px] tracking-[3.00px] leading-[22px] whitespace-nowrap">
            HELP
          </div>
        </div>
        <div className="absolute w-[115px] h-[225px] top-[90px] left-[579px]">
          <div className="absolute top-[49px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] 
tracking-[0] leading-[44px]">
            Menu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            Contact
          </div>
          <div className="absolute top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-zinc-400 text-[13px] tracking-[3.00px] leading-[22px] whitespace-nowrap">
            COMPANY
          </div>
        </div>
        <div className="absolute w-[354px] h-[214px] top-[81px] left-[75px]">
          <p className="absolute w-[341px] top-[72px] left-[9px] font-regular-16px font-[number:var(--regular-16px-font-weight)] text-zinc-400 text-[length:var(--regular-16px-font-size)] tracking-[var(--regular-16px-letter-spacing)] leading-[var(--regular-16px-line-height)] [font-style:var(--regular-16px-font-style)]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
          <div className="absolute w-[148px] h-[28px] top-[186px] left-[9px]">
            <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#191d23] rounded-[14px]">
              <img className="absolute w-[11px] h-[9px] top-[10px] left-[9px]" alt="Vector" src="vector.svg" />
            </div>
            <div className="absolute w-[28px] h-[28px] top-0 left-[40px] bg-[#45d253] rounded-[14px]">
              <img className="absolute w-[6px] h-[12px] top-[8px] left-[11px]" alt="Vector" src="image.svg" />
            </div>
            <div className="absolute w-[28px] h-[28px] top-0 left-[80px] bg-[#191d23] rounded-[14px]">
              <img className="absolute w-[14px] h-[14px] top-[7px] left-[7px]" alt="Group" src="image.png" />
            </div>
            <div className="absolute w-[28px] h-[28px] top-0 left-[120px] bg-[#191d23] rounded-[14px]">
              <img className="absolute w-[13px] h-[13px] top-[7px] left-[8px]" alt="Vector" src="vector-2.svg" />
            </div>
          </div>
          <div className="absolute w-[96px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[34.4px] tracking-[0] leading-[normal]">
            Logo
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;