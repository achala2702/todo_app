type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} hover:opacity-50 cursor-pointer flex items-center justify-center gap-2 border-1 p-2 rounded-md border-black text-lg`}
    >
      {children}
    </button>
  );
}
