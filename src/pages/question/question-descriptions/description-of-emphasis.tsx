type Props = {
  emphasisTitle: string;
};

export function DescriptionOfEmphasis({ emphasisTitle }: Props) {
  return <p className="text-l font-bold text-center">{emphasisTitle}</p>;
}
