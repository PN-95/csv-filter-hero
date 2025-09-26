import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

interface DataTableProps {
  data: string[][];
  filteredData: string[][];
}

export const DataTable = ({ data, filteredData }: DataTableProps) => {
  if (data.length === 0) {
    return (
      <Card className="upload-area">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">No Data</h3>
            <p className="text-muted-foreground">Upload a CSV file to view your data</p>
          </div>
        </div>
      </Card>
    );
  }

  const headers = data[0];
  const rows = filteredData.slice(1);

  return (
    <Card className="table-container">
      <Table>
        <TableHeader>
          <TableRow className="table-header border-b-2">
            {headers.map((header, index) => (
              <TableHead key={index} className="font-semibold text-secondary-foreground py-4">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="table-row">
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="py-3">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {rows.length === 0 && (
        <div className="p-8 text-center text-muted-foreground">
          No data matches the current filter range
        </div>
      )}
    </Card>
  );
};