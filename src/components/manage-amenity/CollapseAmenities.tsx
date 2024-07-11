import React, { useState, useEffect } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';
import uploadIcon from '@/assets/images/upload.svg';
import uploadDrangImage from '@/assets/images/drag.svg';
import AmenityUploadingInput from '@/components/manage-amenity/AmenityUploadingInput';
import { FaPlus } from 'react-icons/fa';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from 'next/link';

function CollapseAmenities({ collapseData }) {
    // Initialize collapsed states with true to ensure all are closed initially
    const [collapsedStates, setCollapsedStates] = useState(collapseData.map(() => true));

    const amenityData = [
        {
            dragImg: uploadDrangImage,
            uploadHeading: "Upload Icon & Text",
            enterPlaceholderText: "Enter Text",
            uploadImg: uploadIcon
        },
        {
            dragImg: uploadDrangImage,
            uploadHeading: "Upload Icon & Text",
            enterPlaceholderText: "Enter Text",
            uploadImg: uploadIcon
        },
        {
            dragImg: uploadDrangImage,
            uploadHeading: "Upload Icon & Text",
            enterPlaceholderText: "Enter Text",
            uploadImg: uploadIcon
        },
        {
            dragImg: uploadDrangImage,
            uploadHeading: "Upload Icon & Text",
            enterPlaceholderText: "Enter Text",
            uploadImg: uploadIcon
        },
        {
            dragImg: uploadDrangImage,
            uploadHeading: "Upload Icon & Text",
            enterPlaceholderText: "Enter Text",
            uploadImg: uploadIcon
        },
        {
            dragImg: uploadDrangImage,
            uploadHeading: "Upload Icon & Text",
            enterPlaceholderText: "Enter Text",
            uploadImg: uploadIcon
        },
    ];

    // Reset collapsed state to true for all items on component mount
    useEffect(() => {
        setCollapsedStates(collapseData.map(() => true));
    }, [collapseData]);

    const toggleCollapse = (index) => {
        const newCollapsedStates = [...collapsedStates];
        newCollapsedStates[index] = !newCollapsedStates[index];
        setCollapsedStates(newCollapsedStates);
    };

    return (
        <>
            {collapseData.map((item, index) => (
                <Collapsible key={index} open={!collapsedStates[index]} onOpenChange={() => toggleCollapse(index)} className='mb-5'>
                    <CollapsibleTrigger className={`w-full flex items-center text-start px-5 py-4 rounded-t-[8px] justify-between 
                            ${collapsedStates[index] ? 'bg-[#ECE1CC] ' : 'bg-[#2d5e59] text-[#ffffff]'}`}>
                        <span className='flex items-center'>{item.collapseHeading}<MdOutlineEdit className='ml-2 text-[22px]' /></span>
                        <Link href='' className={`${collapsedStates[index] ? 'rotate-0' : 'rotate-180'}`}>
                            <IoChevronDownOutline />
                        </Link>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='px-5 py-6 border-2 border-t-0'>
                        <div className='flex items-end'>
                            <ul className='flex items-center flex-wrap'>
                                <AmenityUploadingInput amenityData={amenityData} />
                            </ul>
                            <div>
                                <Link href='' className='bg-[#32998F] px-4 py-4 block text-white rounded-[4px]'>
                                    <FaPlus />
                                </Link>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            ))}
        </>
    );
}

export default CollapseAmenities;
