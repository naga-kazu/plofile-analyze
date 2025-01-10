import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function QuestionDescription({ title, children }: Props) {
  return (
    <div className="relative">
      <h3 className="absolute -top-8 -left-6 px-3 py-1 font-bold bg-gray-700 text-white inline-block rounded-sm">
        {title}
      </h3>
      <div className="pt-2 space-y-1">{children}</div>
    </div>
  );
}
