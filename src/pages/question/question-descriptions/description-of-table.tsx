export type Row = {
  title: string;
  detail: string;
};

export type Props = {
  header: Row;
  rows: Row[];
};
export function DescriptionOfTable() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-1/2 bg-gray-300 border-2">フォロワー数</div>
        <div className="w-1/2 bg-gray-300 border-2">リーチ数</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1/2 bg border-2">100</div>
        <div className="w-1/2 bg-gray-300 border-2">1000</div>
      </div>
    </div>
  );
}
