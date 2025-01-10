import { ReactNode } from "react";

type Props = {
  title: ReactNode;
};

export function QuestionTitle({ title }: Props) {
  return <h2 className="text-xl font-bold text-center">{title}</h2>;
}
