
import * as XLSX from 'xlsx';

import {ArrowDownToLine} from "lucide-react"

export const ExportExcelSheet = ({ UpdatedList }) => {

    const handleExport = () => {
        console.log(UpdatedList)
        // 1. Map directly to your exact object schema
        const rows = UpdatedList?.map((item, index) => {
            // Format ISO date strings (e.g. "2026-09-27T00:00:00.000Z" -> "2026-09-27")
            const formattedDate = item.date ? item.date.slice(0, 10) : '';
            const formattedCreatedAt = item.createdAt
                ? item.createdAt.replace('T', ' ').slice(0, 19)
                : '';
            // return {"Sl No.":index+1,...item,"date":formattedDate,"createdAt":formattedCreatedAt}
            return {
                'Sl No.': index + 1,
                'ID': item.id ?? '',
                'Date': formattedDate,
                'Category': item.category ?? '',
                'Subcategory': item.subcategory ?? '',
                'Amount (₹)': Number(item.amount) || 0,
                'Notes': item.notes ?? '',
                'Created At': formattedCreatedAt,
                'User ID': item.userId ?? '',
            };
        })
            try {
                // generate
                const worksheet = XLSX.utils.json_to_sheet(rows);
                // create workbook
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Expenses');

                const dateSuffix = new Date().toISOString().slice(0, 10);
                XLSX.writeFile(workbook, `Expenses_${dateSuffix}.xlsx`);
            } catch (error) {
                console.error('Failed to generate Excel file:', error);
            }

        }

    return (
        <div className='flex items-center  hover:bg-purple-500   text-gray-700 hover:text-white rounded-md px-0.5 " onClick={handleExport}'>
            <div className="text-md md:text-md font-semibold  ml-0 cursor-pointer pl-2 py-1 ">Export
                
            </div>
            <ArrowDownToLine size={16} />
            </div>
        )
    }
