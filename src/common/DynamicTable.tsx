// components/GenericTable.tsx
import React from 'react';
import { cn } from "@/lib/utils"
import { useTable, Column, TableOptions  } from 'react-table';
interface GenericTableProps<T extends object> { // Add extends object
  columns: Column<T>[];
  data: T[];
  className?: string;
}
function DynamicTable<T extends object>({ columns, data, className }: GenericTableProps<T>) { // Add extends object
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<T>({
    columns,
    data
  },
  );

  return (
    <>
     <div className="relative w-full overflow-auto">
    <table {...getTableProps()}  className={cn("w-full caption-bottom text-sm", className)}>
        <thead className={cn("[&_tr]:border-b ", className)}>
          {headerGroups.map(headerGroup => (
            <tr  {...headerGroup.getHeaderGroupProps()} className={cn(
              "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
              className
            )}>
              {headerGroup.headers.map((column, columnIndex) => (
        <th
          className={cn(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 bg-[#D2AE5F] font-bold text-white text-[15px] border-r border-[rgba(255,255,255,0.2)] py-5",
            {
              "first:rounded-tl-[10px]": columnIndex === 0,
              "last:border-0 last:rounded-tr-[10px]": columnIndex === headerGroup.headers.length - 1
            },
            className
          )}
          {...column.getHeaderProps()}
        >
          {column.render('Header')}
        </th>
      ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}  className={cn("[&_tr:last-child]:border-0", className)}>
  {rows.map((row, rowIndex) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        {row.cells.map((cell, cellIndex) => (
          <td
          className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-[15px] border-r border-b border-[rgba(0,0,0,0.12)]",
                {
                "first:border-l-[2px]": rowIndex === 0 && cellIndex === 0,
                }
            )}
            {...cell.getCellProps()}
          >
            {cell.render('Cell')}
          </td>
        ))}
      </tr>
    );
  })}
</tbody>

      </table>
 </div>
    </>
  );
}

export default DynamicTable;
