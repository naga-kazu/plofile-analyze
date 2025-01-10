import { Button } from "@/components/ui/button";
import classNames from "classnames";

type AnswerButtonProps = {
  isSelected: boolean;
  key: string;
  title: string;
  setSelectedOption: (key: string) => void;
};

export function AnswerButton({
  isSelected,
  title,
  setSelectedOption,
}: AnswerButtonProps) {
  return (
    <Button
      className={classNames("w-full py-6 text-lg", {
        "bg-accent": isSelected,
        "bg-gray-200": !isSelected,
      })}
      onClick={() => setSelectedOption(title)}
      variant="secondary"
    >
      {title}
    </Button>
  );
}
