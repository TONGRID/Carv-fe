'use client';

import Image from 'next/image';
import { paytoneOne } from '@/app/ui/fonts';

export default function Reward() {
    return (
        <div>
            <h1 className={`${paytoneOne.className} text-transparent bg-clip-text bg-gradient-to-b from-[#214177] to-[#05F292] text-[34px] md:text-[48px] font-bold animate-fade-in mt-[50px]`}>
                 Redeem Past Reward
            </h1>
            <div className='w-full rounded-[10px] bg-gradient-to-br from-[#064E33] to-[#214177] mt-[25px] px-[25px] py-[30px]'>
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center gap-7'>
                        <Image src="/Redeem.png" alt="alt" width={126} height={112} />
                        <div>
                            <div className='text-[23px] text-white font-bold'>Verify OAT & NFT</div>
                            <div className='text-[18px] text-white'>
                                Verify past OAT & NFT and redeem corresponding points rewards.Please make sure that the current wallet address is consistent with the address for receiving OAT and NFT
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#05F292] rounded-[10px] text-[18px] font-bold text-center px-[25px] py-[20px] cursor-pointer'>Verify</div>
                </div>
            </div>
        </div>
    )
}