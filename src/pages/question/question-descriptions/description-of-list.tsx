type Props = {
  items: string[];
};

export function DescriptionOfList({ items }: Props) {
  return (
    <ul className="space-y-1 list-none">
      {items.map((item) => (
        <li key={item} className="items-start flex text-sm">
          <span className="flex-shrink-0 block w-3 h-3 mt-1 mr-1 bg-[#F4B460] rounded-sm" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
