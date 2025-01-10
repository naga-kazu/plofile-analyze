import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function QuestionDescription({ title, children }: Props) {
  return (
    <div className="relative">
      <p className="absolute -top-7 -left-6 px-2 py-1 text-sm font-bold bg-gray-700 text-white inline-block rounded-sm">
        {title}
      </p>
      <div className="pt-2">{children}</div>
    </div>
  );
}
