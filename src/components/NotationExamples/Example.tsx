import React from "react";

const Example = ({
  setInputValue,
  example,
  index,
}: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  example: string;
  index: number;
}) => {
  return (
    <span
      onClick={() => setInputValue(example)}
      className="border-[6px] border-zinc-700 w-[calc(25%-0.75rem)] p-2 text-center bg-zinc-400 cursor-pointer transition-all hover:bg-[#7f5329]"
    >
      Partia {index}
    </span>
  );
};

export default Example;
