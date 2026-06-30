"use client";

export type StateDiagramData = {
  title: string;
  nodes: { id: string; label: string }[];
};

const NW  = 88;  // node width
const NH  = 36;  // node height
const GAP = 40;  // gap between nodes
const PAD = 16;  // horizontal padding
const TOP = 16;  // top padding
const LOOP = 34; // how far the return arrow drops below nodes

export default function StateDiagram({ data }: { data: StateDiagramData }) {
  const n = data.nodes.length;
  const viewW = PAD * 2 + n * NW + (n - 1) * GAP;
  const viewH = TOP + NH + LOOP + 14;

  const left  = (i: number) => PAD + i * (NW + GAP);
  const cx    = (i: number) => left(i) + NW / 2;
  const midY  = TOP + NH / 2;
  const botY  = TOP + NH;

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="font-mono text-xs text-[var(--green)] uppercase tracking-widest mb-4">
        {data.title}
      </p>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${viewW} ${viewH}`} width={viewW} height={viewH}>
          {/* Forward arrows */}
          {data.nodes.map((_, i) => {
            if (i === n - 1) return null;
            const x1 = left(i) + NW;
            const x2 = left(i + 1);
            return (
              <g key={`fwd-${i}`}>
                <line
                  x1={x1 + 1} y1={midY}
                  x2={x2 - 7}  y2={midY}
                  stroke="var(--border)" strokeWidth="1.5"
                />
                <polygon
                  points={`${x2},${midY} ${x2 - 8},${midY - 4} ${x2 - 8},${midY + 4}`}
                  fill="var(--border)"
                />
              </g>
            );
          })}

          {/* Loop-back: last → first (dashed path below nodes) */}
          <path
            d={`M ${cx(n - 1)} ${botY} L ${cx(n - 1)} ${botY + LOOP} L ${cx(0)} ${botY + LOOP} L ${cx(0)} ${botY + 8}`}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          {/* Arrowhead pointing up into first node */}
          <polygon
            points={`${cx(0)},${botY} ${cx(0) - 4},${botY + 10} ${cx(0) + 4},${botY + 10}`}
            fill="var(--border)"
          />

          {/* Nodes */}
          {data.nodes.map((node, i) => (
            <g key={node.id}>
              <rect
                x={left(i)} y={TOP}
                width={NW} height={NH}
                rx="5"
                fill="var(--tag-bg)"
                stroke="var(--green)"
                strokeWidth="1.5"
              />
              <text
                x={cx(i)} y={midY + 5}
                textAnchor="middle"
                fill="var(--text)"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                fontWeight="600"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
