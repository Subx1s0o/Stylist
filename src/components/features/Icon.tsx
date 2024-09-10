interface Icon {
  id: string;
  className?: string;
  width: number;
  height: number;
}

export default function Icon({ id, width, height, className }: Icon) {
  return (
    <div className={className}>
      <svg width={width} height={height}>
        <use href={`/sprite.svg#${id}`} />
      </svg>
    </div>
  );
}
