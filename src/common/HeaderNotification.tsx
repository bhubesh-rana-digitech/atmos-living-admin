import Link from 'next/link'
import React from 'react'
import { MdEmail } from 'react-icons/md'

function HeaderNotification({notificationData}) {
  return (
    <>
        <ul className='notification-list list-unstyled m-0 p-0'>
            {notificationData.map((data, index) => (
                <li className='' key={index}>
                    <div className="notification-wrap py-6 px-6 flex items-start">
                        <div className="notify-icon">
                            <div className="avatar rounded-full w-full flex items-center justify-center">
                                <MdEmail className='text-[30px]' />
                            </div>
                        </div>
                        <div className="notify-text">
                            <div className='mb-0 font-semibold'>
                                <h5><Link href={data.notifyLink} className='text-decoration-none text-dark'>{data.notifyTitle}</Link></h5>
                                <p>{data.notifyDes}</p>
                                <div className="notify-date-time w-full mt-2 text-end text-muted opacity-75">
                                    {data.noficeTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </>
  )
}

export default HeaderNotification