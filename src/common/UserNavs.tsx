import Link from 'next/link'
import React from 'react'

function UserNavs({userNavData=[],userName='',userPosition=''}) {
  return (
    <>
        <div className='rounded-[10px] bg-[#32998F] min-w-[220px] pb-4'>
            <div className="welcome-user px-5 py-4 mb-2 border-b border-solid border-[#4ba59d]">
                <div className='welcome-user'>
                  <span className='block w-full text-white leading-tight'>{userName}</span>
                  <small className='text-white opacity-75 text-[14px]'>{userPosition}</small>
                </div>
            </div>
            <ul className='dropdown-nav list-unstyled m-0 p-0 w-full'>
              {userNavData.map((data, index)=>(
                <li key={index}>
                  <Link className='flex items-center text-white px-5 py-3 text-[15px] hover:bg-[rgba(255,255,255,0.05)]' href={data.userNavLink}>
                    <div className="demo-icon icon-user text-lg">
                      {data.navIcon}
                    </div>
                    <div className='nav-name ps-3 capitalize'>{data.navName}</div>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default UserNavs