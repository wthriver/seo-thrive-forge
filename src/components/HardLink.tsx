interface HardLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const HardLink = ({ to, children, className }: HardLinkProps) => {
  const handleClick = () => {
    window.location.href = to;
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default HardLink;