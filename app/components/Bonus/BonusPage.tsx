'use client';

import { useState } from "react";
import { paytoneOne } from '@/app/ui/fonts';
import Image from 'next/image';

export default function BonusPage() {
    const [isSBT, setIsSBT] = useState(false);
    const [isRefer, setIsRefer] = useState(false);
    const [isRedeem, setIsRedeem] = useState(false);
    const [isEarn, setIsEarn] = useState(false);

    const handleSBT = () => setIsSBT(!isSBT);
    const handleRefer = () => setIsRefer(!isRefer);
    const handleRedeem = () => setIsRedeem(!isRedeem);
    const handleEarn = () => setIsEarn(!isEarn);

    return (
        <div className="mt-[100px]">
            {/* Header Section */}
            <h1
                className={`${paytoneOne.className} text-transparent text-center bg-clip-text bg-gradient-to-b from-[#214177] to-[#05F292] text-[34px] leading-[40px] md:leading-[40px] animate-fade-in`}
            >
                Referral Bonus
            </h1>
            <p className="text-[22px] leading-[28px] text-white mt-[33px] text-center animate-fade-in-delay">
                Invite Friends To Earn More $MEMO
            </p>

            {/* Referral Link Section */}
            <div className="w-full bg-[#09231891] px-4 sm:px-[34px] py-4 sm:py-[22px] flex flex-col sm:flex-row justify-between items-center gap-3 rounded-md mt-10 sm:mt-[40px] animate-fade-in">
                <div className="cursor-pointer text-sm sm:text-[15px] lg:text-[18px] text-white bg-gradient-to-br from-[#1E4874] to-[#0EB476] flex justify-center items-center h-[40px] sm:h-[50px] rounded-full px-4 sm:px-[10px] lg:px-[20px] w-full sm:w-auto transform hover:scale-105 transition-transform">
                    133Pue10Vdyi16a
                </div>
                <div className="cursor-pointer text-sm sm:text-[18px] text-white text-center flex justify-center items-center h-[40px] sm:h-[50px] bg-[#0c2c1f91] rounded-full px-4 sm:px-[20px] w-full sm:w-auto transform hover:scale-105 transition-transform">
                    https://memolabs/?referralCode=133Pue1OVdyi16a
                </div>
                <div className="cursor-pointer text-sm sm:text-[18px] font-bold text-center flex justify-center items-center h-[40px] sm:h-[50px] bg-[#05F292] rounded-full px-4 sm:px-[20px] w-full sm:w-auto transform hover:scale-105 transition-transform">
                    Copy Referral Link
                </div>
            </div>

            {/* Dynamic Sections */}
            <div className="mt-10 sm:mt-[80px] flex flex-col gap-10">
                {[
                    {
                        id: "refer",
                        title: "Refer Your Friends",
                        description: "Share the link with your friends over Twitter or any other social platform.",
                        image: "/refer.png",
                        state: isRefer,
                        handleClick: handleRefer,
                    },
                    {
                        id: "sbt",
                        title: "Get SBT When Users Sign Up",
                        description: "When your friend signs up on the app, you will receive Grass points.",
                        image: "/SBT.png",
                        state: isSBT,
                        handleClick: handleSBT,
                    },
                    {
                        id: "redeem",
                        title: "Redeem Past Reward",
                        description: "Verify OAT & NFT. When your friend signs up on the app, you will receive Grass points.",
                        image: "/NFT.png",
                        state: isRedeem,
                        handleClick: handleRedeem,
                    },
                    {
                        id: "earn",
                        title: "Play to Earn",
                        description: "MEMOGAME is Telegram's smartest AI algorithm protocol! Start To Earn and click to earn SBT!",
                        image: "/reward.png",
                        state: isEarn,
                        handleClick: handleEarn,
                    },
                ].map((section) => (
                    <div
                        key={section.id}
                        className={`w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[50px] py-4 sm:py-[37px] border-[1px] 
                            ${section.state ? "bg-gradient-to-r from-[#1E4874] to-[#0EB476]" : "bg-[#021F13] hover:scale-105"}
                            border-[#05F292] rounded-[10px] gap-4 transform transition-transform duration-300`}
                    >
                        <div className="flex flex-col justify-start text-center sm:text-left w-full sm:w-[75%]">
                            <h3 className="text-lg sm:text-[25px] font-bold text-white">{section.title}</h3>
                            {section.state && (
                                <p className="text-sm sm:text-[18px] text-white mt-2">{section.description}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-center w-full gap-6 sm:w-[20%]">
                            {section.state && (
                                <Image
                                    src={section.image}
                                    alt={`${section.title} Image`}
                                    width={72}
                                    height={72}
                                    className="w-[72px] h-[72px] sm:w-[92px] sm:h-[92px] animate-bounce"
                                />
                            )}
                            <Image
                                src={section.state ? "/arrow_below.png" : "/arrow_up.png"}
                                alt="arrow"
                                width={18}
                                height={36}
                                className="w-[36px] h-[18px] cursor-pointer"
                                onClick={section.handleClick}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Horizontal Line Section */}
            <div className="flex justify-center items-center mt-[100px] gap-3 animate-fade-in">
                <div className="w-[40%] md:w-[30%] h-[1px] bg-[#929292] border-[#929292] border-[1px] border-dashed"></div>
                <Image src="/memo_logo.png" width={41} height={41} alt="memo" className="w-[40px] h-[40px]" />
                <div className="w-[40%] md:w-[30%] h-[1px] bg-[#929292] border-[#929292] border-[1px] border-dashed"></div>
            </div>
        </div>
    );
}
