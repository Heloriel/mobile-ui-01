type Props = {
  id: string;
  name: string;
};

export default function Community({ id, name }: Props) {
  return (
    <div className="rounded-lg overflow-hidden relative">
      <img src={`/images/community/${id}.png`} className="object-cover" />
      <span className="absolute bottom-2 right-1/2 translate-x-1/2">{name}</span>
    </div>
  );
}
