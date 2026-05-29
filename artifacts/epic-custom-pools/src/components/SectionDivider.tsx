interface Props {
  fill: string;
  bg?: string;
  variant?: 'wave' | 'tilt' | 'curve';
  flipX?: boolean;
  height?: number;
}

export default function SectionDivider({
  fill,
  bg = 'transparent',
  variant = 'wave',
  flipX = false,
  height = 72,
}: Props) {
  const svgStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: `${height}px`,
  };

  return (
    <div
      style={{
        background: bg,
        lineHeight: 0,
        overflow: 'hidden',
        transform: flipX ? 'scaleX(-1)' : undefined,
        marginTop: '-1px',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {variant === 'wave' && (
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={svgStyle}
        >
          <path
            d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z"
            fill={fill}
          />
        </svg>
      )}
      {variant === 'tilt' && (
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ ...svgStyle, height: `${height}px` }}
        >
          <path d="M0,60 L1440,0 L1440,60 Z" fill={fill} />
        </svg>
      )}
      {variant === 'curve' && (
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={svgStyle}
        >
          <path
            d="M0,72 Q720,0 1440,72 L1440,72 L0,72 Z"
            fill={fill}
          />
        </svg>
      )}
    </div>
  );
}
