import TableHeadingBtn from '@/common/TableHeadingBtn'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'
import { FaEye} from 'react-icons/fa'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

function page() {
    const showNewButton=false
    const headingName = "Bookings"
    const actionName = "Add New"
    const tableActionLink = ""

    const bookingTable = [
        {
            serialNumber: "01.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "02.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "03.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "04.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "05.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "06.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "07.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "08.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "09.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
        {
            serialNumber: "10.",
            project: "Atmosphere Living",
            UnitNumber: "Unit 1",
            bookingCustomer: "John Smith",
            bookingPhone: "+91 79734-96364",
            bookingAmount: "$25850",
            bookingTable: "New",
            bookingTableTwo: "Reject",
            bookingTableThree: "Refund Initiated",
            bookingTableFour: "Refund Complete",
            unitAction: <FaEye />,
            unitActionTwo: <FaCheck />,
            unitActionThree: <RxCross2 />,
        },
      ]
    

    return (
        <>
            <div className='bg-white rounded-[4px]'>
                <TableHeadingBtn showButton={false} showAnchor={false} headingName={headingName} tableActionLink={tableActionLink} actionName={actionName}/>

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
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Project</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Unit</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Customer</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Phone</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Amount</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5'>Status</TableHead>
                                <TableHead className='bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5 last:border-0 last:rounded-tr-[10px]'>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bookingTable.map((bookingTable) => (
                                <TableRow key={bookingTable.bookingTable}>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{bookingTable.serialNumber}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{bookingTable.UnitNumber}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]">{bookingTable.project}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{bookingTable.bookingCustomer}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{bookingTable.bookingPhone}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]">{bookingTable.bookingAmount}</TableCell>
                                    <TableCell className="py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)] first:border-l-[2px]  w-[185px]">
                                        <Select>
                                        <SelectTrigger className="py-1 text-[13px] h-auto border-gray-300 rounded-[3px]">
                                            <SelectValue placeholder="New" />
                                        </SelectTrigger>
                                        <SelectContent className='bg-white'>
                                            <SelectItem value="Open">{bookingTable.bookingTable}</SelectItem>
                                            <SelectItem value="John Deo">{bookingTable.bookingTableTwo}</SelectItem>
                                            <SelectItem value="John Deo">{bookingTable.bookingTableThree}</SelectItem>
                                            <SelectItem value="John Deo">{bookingTable.bookingTableFour}</SelectItem>
                                        </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="py-[23px] text-[15px] border-r border-b flex items-center !border-t-0 border-[rgba(0,0,0,0.12)] ">
                                        <Link href='' className='btn bg-[#0dcaf0] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#01a7c8]'>{bookingTable.unitAction}</Link>
                                        {showNewButton ? (<Link href='' className='ms-2 btn bg-[#316863] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#2d5e59]'></Link>):(<Link href='' className='ms-2 btn bg-[#316863] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#2d5e59]'>{bookingTable.unitActionTwo}</Link>)}
                                        <Link href='' className='ms-2 btn bg-[#dc3545] text-white rounded-[4px] py-1.5 px-2 inline-block justify-center items-center duration-500 transition-all hover:bg-[#bb2d3b]'>{bookingTable.unitActionThree}</Link>
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
