'use client';

import { paytoneOne } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState } from 'react';

const elements = [
    { id: 1, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: true },
    { id: 2, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: true },
    { id: 3, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: true },
    { id: 4, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
    { id: 5, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
    { id: 6, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
    { id: 7, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
    { id: 8, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
    { id: 9, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
    { id: 10, address: "0x3a2...0813", score: 6, soul: "+50,000 SOUL", isCrown: false },
];

export default function LeaderboardPage() {
    const [isWeekly, setIsWeekly] = useState(true);

    return (
        <div className="mt-[68px] px-4 sm:px-6 lg:px-12 flex flex-col items-center">
            {/* Title Section */}
            <div
                className={`${paytoneOne.className} text-transparent text-center bg-clip-text bg-gradient-to-b from-[#214177] to-[#05F292] text-[34px] leading-[40px] md:leading-[40px] fade-in`}
            >
                Leaderboard
            </div>
            <div className="w-full sm:w-[60%] text-[16px] sm:text-[20px] text-center leading-[28px] sm:leading-[38px] text-white mt-[20px] sm:mt-[33px]">
                The top 100 inviters Weekly and top 500 inviters All-time will be shown on the leaderboards.
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 justify-center mt-[10px]">
                <div
                    onClick={() => setIsWeekly(true)}
                    className={`cursor-pointer transition-all ${
                        isWeekly ? 'text-[#05F292]' : 'text-[#FFFFFF80]'
                    } font-bold text-[18px] sm:text-[25px] leading-[25px] sm:leading-[30px] hover:scale-105`}
                >
                    Weekly
                </div>
                <div
                    onClick={() => setIsWeekly(false)}
                    className={`cursor-pointer transition-all ${
                        !isWeekly ? 'text-[#05F292]' : 'text-[#FFFFFF80]'
                    } font-bold text-[18px] sm:text-[25px] leading-[25px] sm:leading-[30px] hover:scale-105`}
                >
                    All Time
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full mt-[20px] sm:mt-[33px] py-[30px] sm:py-[61px] px-[10px] sm:px-[20px] border-x-[3px] border-[#05F292] rounded-[10px] bg-[#05F2920D] flex flex-col items-center shadow-md glow-effect">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full fade-in">
                    {[
                        {
                            title: { full: "My Rank", short: "Rank" },
                            value: "1K+",
                        },
                        {
                            title: { full: "My Smart Wallet Address", short: "Wallet" },
                            value: "0x49e65cd..4c",
                        },
                        {
                            title: { full: "Friends Invited This Week", short: "Friends" },
                            value: "2K+",
                        },
                        {
                            title: { full: "Leaderboard Reward", short: "Reward" },
                            value: "100 SOUL",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center text-center gap-5 transition hover:scale-105"
                        >
                            <div className="text-white font-bold text-[20px] sm:leading-[20px] lg:leading-[30px] h-[10px] sm:h-[20px] lg:h-[40px]">
                                <span className="hidden lg:block">{item.title.full}</span>
                                <span className="lg:hidden">{item.title.short}</span>
                            </div>
                            <div className="text-white font-bold text-[16px] sm:leading-[20px] lg:leading-[30px] bg-[#1E4874] px-[10px] lg:px-[25px] sm:py-[12px] lg:py-[17px] rounded-[10px] mt-2 w-full sm:w-auto cursor-pointer">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-gradient-to-br from-[#064E33] to-[#214177] rounded-[11px] py-[40px] sm:py-[59px] px-[20px] sm:px-[51px] mt-[30px] sm:mt-[45px] w-full">
                <div className="flex justify-between items-center text-center mb-[30px] sm:mb-[43px] fade-in">
                    <div className="text-white text-[16px] sm:text-[20px] font-bold leading-[24px] sm:leading-[30px] w-[5%]">
                        Rank
                    </div>
                    <div className="text-white text-[16px] sm:text-[20px] font-bold leading-[24px] sm:leading-[30px] w-[40%]">
                        <span className="block md:hidden">Wallet</span>
                        <span className="hidden md:block">Smart Wallet Address</span>
                    </div>
                    <div className="text-white text-[16px] sm:text-[20px] font-bold leading-[24px] sm:leading-[30px] w-[20%]">
                        <span className="block md:hidden">Friends</span>
                        <span className="hidden md:block">Friends Invited This Week</span>
                    </div>
                    <div className="text-white text-[16px] sm:text-[20px] font-bold leading-[24px] sm:leading-[30px] w-[30%]">
                        <span className="block md:hidden">Reward</span>
                        <span className="hidden md:block">Leaderboard Reward</span>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#FFFFFF4D]"></div>

                {elements.map((item, index) => (
                    <div
                        key={index}
                        className="fade-in transition hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex justify-between items-center my-[15px] sm:my-[25px] px-[10px] sm:px-[5px]">
                            <div className="w-[5%] text-center">
                                {item.isCrown ? (
                                    <Image src="/crown.png" alt="crown" width={30} height={20} className="sm:w-[43.4px] sm:h-[27px]" />
                                ) : (
                                    <div className="text-[16px] sm:text-[20px] leading-[24px] sm:leading-[38px] text-white">
                                        {String(item.id).padStart(2, "0")}
                                    </div>
                                )}
                            </div>
                            <div className="text-white text-[16px] sm:text-[20px] leading-[24px] sm:leading-[38px] text-center w-[40%]">
                                {item.address}
                            </div>
                            <div className="text-[#FFC917] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[38px] text-center w-[20%]">
                                {item.score}
                            </div>
                            <div className="flex justify-end items-center w-[30%]">
                                <Image
                                    src="/coin.png"
                                    alt="coin"
                                    width={14}
                                    height={14}
                                    className="sm:w-[18px] sm:h-[18px] mr-[5px] hidden md:block"
                                />
                                <div className="text-[16px] sm:text-[20px] text-white leading-[24px] sm:leading-[38px] text-right">
                                    {item.soul}
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[#FFFFFF4D]"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
