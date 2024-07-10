import TableHeadingBtn from '@/common/TableHeadingBtn'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import imageOne from '@/assets/images/logo-circle.svg'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

function page() {
    const headingName = "Units"
    const actionName = "Add New"
    const tableActionLink = ""

    const projectTable = [
        {
            serialNumber: "01.",
            UnitNumber: "Unit 1",
            project: "Luxury Lonavala",
            unitType: "Pentahouse",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "02.",
            UnitNumber: "Unit 1",
            project: "Atmosphere Living	",
            unitType: "Duplex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "03.",
            UnitNumber: "Unit 1",
            project: "Rustomjee Crown",
            unitType: "Triplex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "04.",
            UnitNumber: "Unit 1",
            project: "Lodha Codename Premier",
            unitType: "Fourplex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "05.",
            UnitNumber: "Unit 1",
            project: "Arihant Clan Aalishan",
            unitType: "Complex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "06.",
            UnitNumber: "Unit 1",
            project: "Lodha Woods",
            unitType: "Fourplex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "07.",
            UnitNumber: "Unit 1",
            project: "Shapoorji Pallonji Vicinia",
            unitType: "Triplex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "08.",
            UnitNumber: "Unit 1",
            project: "Dynamix Divum",
            unitType: "Complex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "09.",
            UnitNumber: "Unit 1",
            project: "Delta House",
            unitType: "Fourplex",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
        {
            serialNumber: "10.",
            UnitNumber: "Unit 1",
            project: "Raj White City",
            unitType: "Pentahouse",
            projectPublish: "Publish",
            projectPublishTwo: "Unpublish",
            unitFeatured: "Open",
            unitFeaturedTwo: "John Deo",
            unitAction: <MdModeEditOutline/>,
            unitActionTwo: <FaTrashAlt/>,
            unitActionThree: <MdModeEditOutline/>,
        },
      ]
    

    return (
        <>
            <div className='bg-white rounded-[4px]'>
                <TableHeadingBtn showButton={false} showAnchor={true} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>

                <div className='px-4 py-5'>
                    <div className="mb-5 flex justify-end items-center">
                        <Link href='' className='btn py-2.5 px-7 bg-[#6c757d] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#5a6168]'>Filter</Link>
                        <Link href='' className='mx-3 btn py-2.5 px-7 bg-[#92B893] text-[13px] text-white rounded-0 uppercase mb-0 transition-all duration-500 hover:bg-[#7fa080]'>Export</Link>
                        <div className='search relative'>
                            <form>
                                <input type='text' className="focus:shadow-violet8 inline-flex w-full rounded-[4px] py-2 border border-gray-300 px-[18px] text-[15px] outline-none focus:border-[#316863]" placeholder='Search...' id="role"/>
                                <input type="submit" value="dd" className='absolute right-0 top-0 bottom-0 flex items-center px-4 bg-cover bg-no-repeat bg-[url("/assets/images/search.svg")]' />
                            </form>
                        </div>
                    </div>   
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 first:rounded-tl-[10px]'>Sr. No</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Unit No.</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Project</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Unit Type</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Publish</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Reserve Status</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 last:border-0 last:rounded-tr-[10px]'>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projectTable.map((projectTable) => (
                                <TableRow key={projectTable.invoice}>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{projectTable.serialNumber}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{projectTable.UnitNumber}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]">{projectTable.project}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{projectTable.unitType}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px] w-[155px]">
                                        <Select>
                                            <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                                                <SelectValue placeholder="Publish" />
                                            </SelectTrigger>
                                            <SelectContent className='bg-white'>
                                                <SelectItem value="Publish">{projectTable.projectPublish}</SelectItem>
                                                <SelectItem value="Unpublish">{projectTable.projectPublishTwo}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]  w-[185px]">
                                        <Select>
                                        <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                                            <SelectValue placeholder="Open" />
                                        </SelectTrigger>
                                        <SelectContent className='bg-white'>
                                            <SelectItem value="Open">{projectTable.unitFeatured}</SelectItem>
                                            <SelectItem value="John Deo">{projectTable.unitFeaturedTwo}</SelectItem>
                                        </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="py-[23px] text-[15px] border-r border-b flex items-center !border-t-0 border-[rgba(0,0,0,0.12)] ">
                                        <Link href='' className='btn bg-[#0d6efd] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#0b5ed7]'>{projectTable.unitAction}</Link>
                                        <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'>{projectTable.unitActionTwo}</Link>
                                        <Link href='' className='ms-2 btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>{projectTable.unitActionThree}</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <Pagination className='my-7 justify-end'>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious className='px-3 transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC]' href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink className='transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC] active:bg-[#2d5e59] active:text-white' href="#">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext className='px-3 transition-all duration-500 rounded-[5px] hover:bg-[#ECE1CC]' href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </>
    )
}

export default page
