type Props = {
  id: string;
  name: string;
};

export default function Community({ id, name }: Props) {
  return (
    <div className="flex rounded-lg overflow-hidden relative min-h-[150px] bg-red-500">
      <img src={`/images/community/${id}.png`} className="object-cover" />
      <span className="flex items-center absolute bottom-2 right-1/2 translate-x-1/2 text-white bg-project-primary rounded-full px-2">{name}</span>
    </div>
  );
}
