type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} hover:scale-105 cursor-pointer flex items-center justify-center gap-1 lg:gap-2 border p-1 lg:p-2 rounded-md border-black text-sm lg:text-lg`}
    >
      {children}
    </button>
  );
}
