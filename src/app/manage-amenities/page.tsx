import TableHeadingBtn from '@/common/TableHeadingBtn'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import React from 'react'

function page() {
    const headingName = 'Manage Roles'
    const actionName = 'Add New Section'
    const tableActionLink = '#'
    return (
        <>
            <div className='bg-white rounded-[4px]'>
                <TableHeadingBtn showButton={false} showAnchor={true} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>
                <div className='px-4 py-5'>
                    <Collapsible>
                        <CollapsibleTrigger  className='bg-[#ECE1CC] w-full text-start px-5 py-4'>Can I use this in my project?</CollapsibleTrigger>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </>
    )
}

export default page
