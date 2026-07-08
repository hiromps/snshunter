const GRADIENTS = [
  "linear-gradient(135deg,#f6a5c0,#f9748f)",
  "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
  "linear-gradient(135deg,#fbc2eb,#a18cd1)",
  "linear-gradient(135deg,#ffecd2,#fcb69f)",
  "linear-gradient(135deg,#84fab0,#8fd3f4)",
  "linear-gradient(135deg,#fddb92,#d1fdff)",
  "linear-gradient(135deg,#c471f5,#fa71cd)",
  "linear-gradient(135deg,#5ee7df,#b490ca)",
];

export function Avatar({
  seed = 0,
  size = 28,
  className = "",
}: {
  seed?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 rounded-full ring-2 ring-white ${className}`}
      style={{
        width: size,
        height: size,
        background: GRADIENTS[seed % GRADIENTS.length],
      }}
      aria-hidden
    />
  );
}

export function AvatarStack({
  count = 3,
  size = 28,
  start = 0,
}: {
  count?: number;
  size?: number;
  start?: number;
}) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <Avatar
          key={i}
          seed={start + i}
          size={size}
          className={i === 0 ? "" : "-ml-2"}
        />
      ))}
    </div>
  );
}
