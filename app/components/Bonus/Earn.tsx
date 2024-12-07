'use client';

import Image from 'next/image';
import { paytoneOne } from '@/app/ui/fonts';

export default function Earn() {
    return (
        <div className=''>
            <h1 className={`${paytoneOne.className} text-transparent bg-clip-text bg-gradient-to-b from-[#214177] to-[#05F292] text-[34px] md:text-[48px] font-bold animate-fade-in mt-[50px]`}>
                 Play to Earn
            </h1>
            <div className='text-[20px] text-white mt-[20px]'>Experience the mini-games in TG and get more SBT!</div>
            <div className='w-full rounded-[10px] bg-gradient-to-br from-[#064E33] to-[#214177] mt-[25px] px-[25px] py-[30px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-7'>
                        <Image src="/Earn.png" alt="alt" width={126} height={112} />
                        <div>
                            <div className='text-[23px] text-white font-bold'>MEMOGAME is Telegram smartest Al algorithm protocol!</div>
                            <div className='text-[20px] text-white'>Click to earn SBT!</div>
                            <div className='text-[15px] text-white'>@MsmoGame hot</div>
                        </div>
                    </div>
                    <div className='bg-[#05F292] rounded-[10px] text-[18px] font-bold text-center px-[25px] py-[20px] cursor-pointer'>Start To Earn</div>
                </div>
            </div>
        </div>
    );
}