import React from 'react'
import Image from 'next/image'

function AmenityUploadingInput({ amenityData }: {amenityData:any}) {
  return (
    <>
      {amenityData.map((item:any, index:any) => (
        <li key={index} className="amenity-box bg-[rgba(0,0,0,0.035)] py-3 px-5 mr-[20px] mb-[20px] nth-child(3):bg-slate-800 flex items-center">
            <div className="drag-option mt-4 pt-1">
                <span className="mr-3 block">
                    <Image src={item.dragImg} alt="Drag & Drop" title="Drag & Drop" />
                </span>
            </div>
            <div className="icon-group">
                <label className="form-label mb-2 inline-block">{item.uploadHeading}</label>
                <div className="create-amenity-now">
                        <div className="input-group flex flex-wrap items-stretch w-full relative">
                            <div className="upload-icon-now w-[50px] bg-white relative border-2 border-[#dee2e6] rounded-tl-[8px] rounded-bl-[8px]">
                                <label className="flex items-center justify-center h-full w-full" htmlFor={`UploadAmen${index}`}>
                                    <input type="file" id={`UploadAmen${index}`} className="absolute left-[-9999px] top-0 " />
                                    <div className="upload-icon flex justify-center items-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.08)]">
                                        <Image src={item.uploadImg} alt="Upload" title="" className="w-4 h-4" />
                                    </div>
                                </label>
                            </div>
                            <input type="text" placeholder={item.enterPlaceholderText} className="form-control rounded-1 h-auto shadow-none rounded-tr-[8px] rounded-br-[8px] p-3" />
                        </div>
                </div>
            </div>
        </li>
      ))}
    </>
  )
}

export default AmenityUploadingInput
