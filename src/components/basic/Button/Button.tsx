type Props = {
  className?: string;
  children: React.ReactNode | string;
  url?: string;
};

export default function Button({ children, className, url = "#" }: Props) {
  return (
    <a href={url} className={`mx-auto rounded-lg bg-blue-400 text-white px-6 py-3 text-xl font-bold ${className}`}>
      {children}
    </a>
  );
}
