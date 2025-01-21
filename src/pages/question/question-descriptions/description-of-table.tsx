import './arrow.css';

export type Row = {
  title: string;
  detail: string;
};

export type Props = {
  header: Row;
  rows: Row[];
  options?: string[];
};
export function DescriptionOfTable({ header, rows,options }: Props) {
  return (
    <div className='space-y-1 font-bold'>
      <div className="flex items-center gap-2 text-white text-center">
        <div className="w-1/2 bg-gray-400">{header.title}</div>
        <div className="w-1/2 bg-gray-400">{header.detail}</div>
      </div>
      {rows.map((row) => (
        <div key={row.title}className="relative">
            <div className="absolute inset-x-1/2 transform -translate-x-1/2 arrow mb-1 z-10"></div>
          <div className='absolute top-0 w-full'>
            <div className="flex items-center text-center gap-2 text-sm font-bold">
              <div className="w-1/2 bg-secondary text-secondary-foreground">{row.title}</div>
              <div className="w-1/2 bg-secondary text-secondary-foreground">{row.detail}</div>
            </div>
          </div>
      </div>
      ))}
      {options && (
        <div className="text-sm font-normal text-gray-500">
          {options.map((option) => (
            <div key={option}>※{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}
