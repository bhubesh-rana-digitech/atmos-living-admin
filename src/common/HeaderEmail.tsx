import Link from 'next/link'
import React from 'react'
import { MdEmail } from 'react-icons/md'
import { ScrollArea } from "@/components/ui/scroll-area"
interface EmailData{
    notifyLink:string;
    notifyTitle:string;
    notifyDes:string;
    noficeTime:string;
}
interface HeaderEmailProp{
    emailData?:EmailData[];
}
function HeaderEmail({emailData}:HeaderEmailProp) {
   
  return (
    <>  
        <ScrollArea className="h-[300px]">
            <ul className='notification-list list-unstyled m-0 p-0 w-full max-w-[320px]'>
                {emailData?.map((data, index) => (
                    <li className='' key={index}>
                        <div className="notification-wrap py-4 px-4 flex items-start">
                            <div className="notify-icon w-12 h-12">
                                <div className="avatar rounded-full h-full items-center w-full flex justify-center bg-[#ECE1CC]">
                                    <MdEmail className='text-[23px]' />
                                </div>
                            </div>
                            <div className="notify-text w-[calc(100%_-_48px)] ps-3">
                                <div className='mb-0 font-normal'>
                                    <h6 className='font-semibold text-base'><Link href={data.notifyLink} className='text-decoration-none text-dark'>{data.notifyTitle}</Link></h6>
                                    <p className='text-sm opacity-75'>{data.notifyDes}</p>
                                    <div className="notify-date-time w-full mt-1 text-end text-muted opacity-75">
                                        <small className='text-[14px] opacity-50'>{data.noficeTime}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </ScrollArea>
        <div className="view-all-notify border-top py-4 px-3 border-t">
            <Link href='' className='uppercase text-[14px] font-medium flex w-full justify-center bg-[#2d5e59] text-white rounded-[3px] px-2 py-2.5 transition-all duration-500 hover:bg-[#D2AE5F] focus:bg-[#D2AE5F]'>View All</Link>
        </div>
    </>
  )
}

export default HeaderEmail