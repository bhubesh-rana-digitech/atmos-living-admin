import Link from 'next/link'
import React from 'react'

function TableHeadingBtn({showButton,headingName='',tableActionLink='',actionName=''}) {
  return (
    <>
        <div className='border-b border-[#e9ebec] border-solid px-4 py-5'>
          <div className="flex items-center justify-between">
            <h4 className='text-[17px] font-medium opacity-85'>{headingName}</h4>
            <div className="right-card-header">
                {showButton?(
                    <div className='flex'>
                        <Link href={tableActionLink} className='btn py-2.5 px-7 bg-[#D2AE5F] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#E7C16D]'>{actionName}</Link>
                    </div>
                ):("")}
            </div>
          </div>
        </div>
    </>
  )
}

export default TableHeadingBtn