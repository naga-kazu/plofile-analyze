type Props = {
  title: string;
};

export function DescriptionOfList({ title }: Props) {
  return (
    <li className="flex items-start gap-2">
      <span className="block w-2 h-2 mt-2 bg-[#F4B460] rounded-sm" />
      <span>{title}</span>
    </li>
  );
}
