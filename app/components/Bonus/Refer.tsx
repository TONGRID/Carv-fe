'use client';

import Image from 'next/image';
import { paytoneOne } from '@/app/ui/fonts';

export default function Refer() {

    return (
        <div className="mt-[90px]">
            <h1 className={`${paytoneOne.className} text-transparent bg-clip-text bg-gradient-to-b from-[#214177] to-[#05F292] text-[34px] md:text-[48px] font-bold animate-fade-in`}>
                 Referral Bonus
            </h1>
            <div className='text-[20px] text-white mt-[20px]'>Invite friends to earn more $MEMO </div>
            <div className="w-full rounded-[10px] bg-gradient-to-b from-[#064E33] to-[#214177] mt-[20px] px-[25px] py-[30px] flex gap-10">
                <div>
                    <div className='text-[34px] text-white font-bold'>Invites Friends</div>
                    <div className="flex items-center gap-5 mt-[15px]">
                        <Image src="/refer.png" alt="alt" width={69} height={87} />
                        <div>
                            <div className='text-[25px] text-white font-bold text-left'>Refer Your Friends</div>
                            <div className='text-[18px] text-white text-left'>Share the link with your friends over twitter or any other social platform.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mt-[15px]">
                        <Image src="/SBT.png" alt="alt" width={69} height={87} />
                        <div>
                            <div className='text-[25px] text-white font-bold text-left'>GET SBT When Users Sign Up</div>
                            <div className='text-[18px] text-white text-left'>When your friend signs up on the app, you will receive Grass points.</div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0A5C67] rounded-[10px] py-[20px] flex flex-col gap-6">
                    <div className="self-center rounded-[10px] bg-[#096A62] px-[40px] py-[25px] text-white text-center cursor-pointer">
                        133Pue10Vdyi16a
                    </div>
                    <div className="self-center text-[14px] text-white text-center cursor-pointer">
                        https://memolabs/?referralCode=133Pue1OVdyi16a
                    </div>
                    <div className="self-center bg-[#05F292] text-dark text-[18px] font-bold px-[25px] py-[15px] text-center rounded-md cursor-pointer">
                        Copy Referral Link
                    </div>
                </div>
            </div>
        </div>
        
    );
}
