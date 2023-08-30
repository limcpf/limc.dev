import TabBtn from "@/components/Util/TabBtn";

export default function Tab({
  buttons,
  curMode,
}: {
  buttons: {
    text: string;
    mode: string;
  }[];
  curMode: string;
}) {
  return (
    <div className="w-full border-b overflow-x-auto whitespace-nowrap mt-2 flex">
      {buttons.map((b) => (
        <TabBtn
          key={b.mode + b.text}
          text={b.text}
          isActive={curMode === b.mode}
          mode={b.mode}
        />
      ))}
    </div>
  );
}
