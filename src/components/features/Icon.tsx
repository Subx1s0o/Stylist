interface Icon {
  id: string;
  className?: string;
  width: number;
  height: number;
}

export default function Icon({ id, width, height, className }: Icon) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}
