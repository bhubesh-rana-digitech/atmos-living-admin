import React from 'react'

function PageTitle({pageHeading=''}) {
  return (
    <>
        <div className="page-title mb-7">
            <h4 className='font-bold mb-4 text-2xl leading-tight'>
                {pageHeading}
            </h4>
        </div>
    </>
  )
}

export default PageTitle