'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Item {
  src: string;
  alt: string;
  reward: string;
}

const items: Item[] = [
    { src: "/SBT1.png", alt: "SBT1", reward: "+500 SBT/DAY" },
    { src: "/SBT2.png", alt: "SBT2", reward: "+300 SBT/DAY" },
    { src: "/SBT3.png", alt: "SBT3", reward: "+100 SBT/DAY" },
    { src: "/SBT4.png", alt: "SBT4", reward: "+400 SBT/DAY" },
    { src: "/SBT5.png", alt: "SBT5", reward: "+200 SBT/DAY" },
    { src: "/SBT6.png", alt: "SBT6", reward: "+500 SBT/DAY" },
    { src: "/SBT7.png", alt: "SBT7", reward: "+300 SBT/DAY" },
    { src: "/SBT8.png", alt: "SBT8", reward: "+500 SBT/DAY" },
];

export default function BindingPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="mt-[105px]">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3">
                <div>
                    <div className="text-[34px] text-center sm:text-left font-bold bg-gradient-to-r from-[#05F292] to-[#214177] text-transparent bg-clip-text">
                        Account Binding
                    </div>
                    <div className="text-[14px] md:text-[24px] text-white bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-transparent bg-clip-text">
                        The More Accounts You Bind, The More SBT You Get Daily
                    </div>
                </div>
            </div>
            <div className="mt-[55px] flex flex-wrap justify-around gap-5">
                {items.map((item: Item, index: number) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`w-full sm:w-[40%] lg:w-[30%] xl:w-[20%] transform transition-transform duration-300 ${
                            selectedIndex === index
                                ? 'bg-gradient-to-r from-[#214177] to-[#064E33] scale-105 shadow-lg'
                                : 'bg-[#0663412B] hover:scale-105'
                        } pt-[35px] pb-[25px] px-[10px] flex items-center justify-around rounded-[10px] cursor-pointer`}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={75}
                            height={75}
                            className="w-[75px] h-[75px] transform hover:rotate-3 transition-transform duration-300"
                        />
                        <div className="flex flex-col items-center justify-center">
                            <div className="font-bold text-white text-[20px] leading-[30px] text-center">
                                {item.reward}
                            </div>
                            <div
                                className={`${
                                    selectedIndex === index ? 'bg-gray-500' : 'bg-[#05F292]'
                                } flex justify-center items-center rounded-full px-[10px] py-[5px] mt-[5px] shadow-md transform hover:scale-110 transition-transform duration-300`}
                            >
                                <p className="font-bold text-[16px] text-white">
                                    {selectedIndex === index ? 'Bound' : 'Bind'}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-[45px] cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image
                    src="/arrow_bellow.png"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="mr-[8px] animate-bounce"
                />
                <p className="text-white text-[14px] text-center">
                    Show More
                </p>
            </div>
        </div>
    );
}
