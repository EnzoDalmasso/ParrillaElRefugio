const EMBERS = [
  { left: "12%", size: 3, delay: "0s", duration: "7s" },
  { left: "22%", size: 2, delay: "1.4s", duration: "6s" },
  { left: "38%", size: 4, delay: "0.6s", duration: "8s" },
  { left: "54%", size: 2, delay: "2.2s", duration: "6.5s" },
  { left: "68%", size: 3, delay: "1s", duration: "7.5s" },
  { left: "79%", size: 2, delay: "2.8s", duration: "6s" },
  { left: "88%", size: 4, delay: "0.2s", duration: "8.5s" },
];

export function EmberParticles() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 overflow-hidden" aria-hidden>
      {EMBERS.map((ember, i) => (
        <span
          key={i}
          className="absolute bottom-0 animate-ember-drift rounded-full bg-ember-400 shadow-[0_0_8px_2px_rgba(238,174,100,0.7)]"
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
            animationDelay: ember.delay,
            animationDuration: ember.duration,
          }}
        />
      ))}
    </div>
  );
}
