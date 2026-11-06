import { useEffect, useRef, useState } from 'react';

export default function CompanionCat({ hidden, onToggleHidden }) {
  const [petted, setPetted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const pet = () => {
    window.clearTimeout(timer.current);
    setPetted(true);
    timer.current = window.setTimeout(() => setPetted(false), 1300);
  };

  if (hidden) return <button className="show-cat-button" type="button" onClick={onToggleHidden}>Show cat</button>;

  return (
    <div className="companion-widget">
      <button
        className={`cat-button ${hovered ? 'is-hovered' : ''} ${petted ? 'is-petted' : ''}`}
        type="button"
        aria-label="Pet the CollectFlow cat"
        aria-pressed={petted}
        onPointerEnter={(event) => setHovered(event.pointerType !== 'touch')}
        onPointerLeave={() => setHovered(false)}
        onClick={pet}
      >
        <svg viewBox="0 0 90 72" aria-hidden="true">
          <ellipse className="cat-shadow" cx="45" cy="66" rx="29" ry="4" />
          <path className="cat-tail" d="M66 54c14-2 16-14 9-19-6-4-12 1-10 6" />
          <path className="cat-body" d="M20 61c1-16 9-24 25-24s24 8 25 24H20Z" />
          <path className="cat-ear" d="m23 28 4-21 17 17M50 24 67 7l3 22" />
          <path className="cat-head" d="M19 34c0-14 11-24 26-24s26 10 26 24-11 24-26 24S19 48 19 34Z" />
          <path className="cat-stripe" d="m31 15 6 9m16-9-6 9" />
          <ellipse className="cat-eye" cx="35" cy="34" rx="2.2" ry="3.3" />
          <ellipse className="cat-eye" cx="55" cy="34" rx="2.2" ry="3.3" />
          <path className="cat-nose" d="m42 39 3-2 3 2-3 3-3-3Z" />
          <path className="cat-smile" d="M45 42v2m0 0c-3 4-7 2-8 0m8 0c3 4 7 2 8 0" />
          <path className="cat-whiskers" d="m22 38-8-2m8 6-8 1m56-5 8-2m-8 6 8 1" />
          <path className="cat-paw" d="M34 59c0-5 4-8 8-7s5 5 4 9m7-2c0-5 4-8 8-7s5 5 4 9" />
        </svg>
        {petted && <span className="pet-hearts" aria-hidden="true">♥ <i>♥</i> ♥</span>}
      </button>
      <span className={`cat-caption ${petted ? 'is-petted' : ''}`} aria-live="polite">{petted ? 'purr… thank you!' : <>Small steps,<br />big recoveries!</>}</span>
      <button className="hide-cat-button" type="button" onClick={onToggleHidden} aria-label="Hide the cat companion">×</button>
    </div>
  );
}
