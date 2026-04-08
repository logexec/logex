const Division = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full h-px bg-muted-foreground/20 rounded shadow-xs ${className || ""}`}
    />
  );
};

export default Division;
