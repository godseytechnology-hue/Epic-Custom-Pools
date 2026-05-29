const ITEMS = [
  'Custom Pools',
  'Outdoor Living Spaces',
  'Fort Worth',
  'Weatherford',
  'Aledo',
  'Possum Kingdom',
  'Granbury',
];

const SET = [...ITEMS, ...ITEMS, ...ITEMS];
const DOUBLED = [...SET, ...SET];

export default function MarqueeTicker() {
  return (
    <div className="marquee-outer" aria-hidden="true">
      <div className="marquee-inner">
        {DOUBLED.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
