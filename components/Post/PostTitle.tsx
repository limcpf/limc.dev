export default function PostTitle({
  title,
}: {
  title: string;
}) {
  return <span className="text-4xl font-bold my-5">{title}</span>;
}
