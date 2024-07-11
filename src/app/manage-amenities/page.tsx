"use client";

import TableHeadingBtn from '@/common/TableHeadingBtn'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { MdOutlineEdit} from 'react-icons/md'
import uploadIcon from '@/assets/images/upload.svg'
import uploadDrangImage from '@/assets/images/drag.svg'
import AmenityUploadingInput from '@/components/manage-amenity/AmenityUploadingInput'
import { FaPlus } from 'react-icons/fa'
import CollapseAmenities from '@/components/manage-amenity/CollapseAmenities';

function page() {
    const headingName = 'Manage Roles'
    const actionName = 'Add New Section'
    const tableActionLink = '#'

    const collapseData = [
        {
            collapseHeading: 'Section 1' 
        }, 
        {
            collapseHeading: 'Section 2'
        }
    ]

    return (
        <>
            <div className='bg-white rounded-[4px]'>
                <TableHeadingBtn showButton={true} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>
                <div className='px-4 py-5'>
                    <CollapseAmenities collapseData={collapseData} />
                </div>
            </div>
        </>
    )
}

export default page
