export type Props = {
  emphasisTitle: string;
};

export function DescriptionOfEmphasis({ emphasisTitle }: Props) {
  return <p className="font-bold text-center">{emphasisTitle}</p>;
}
