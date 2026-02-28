/**
 * Organic wave dividers between sections.
 * Each variant is a unique hand-crafted SVG curve.
 *
 * - `bgColor`   = background of the section ABOVE (fills behind the wave)
 * - `fillColor` = background of the section BELOW  (fills the wave shape)
 * - `flip`      = mirrors the wave horizontally for extra variation
 */

type WaveVariant = 1 | 2 | 3 | 4 | 5 | 6;

interface WaveDividerProps {
  bgColor: string;
  fillColor: string;
  variant?: WaveVariant;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  bgColor,
  fillColor,
  variant = 1,
  flip = false,
  className = "",
}: WaveDividerProps) {
  const transform = flip ? "scale(-1, 1)" : undefined;

  const waves: Record<WaveVariant, React.ReactNode> = {
    /* ── 1  Gentle double hill ─────────────────────────── */
    1: (
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    ),

    /* ── 2  Layered double — depth effect ──────────────── */
    2: (
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <path
          d="M0,80 C180,140 360,20 540,70 C720,120 900,30 1080,80 C1260,130 1350,50 1440,80 L1440,140 L0,140 Z"
          fill={fillColor}
          opacity="0.45"
        />
        <path
          d="M0,100 C320,50 480,130 720,90 C960,50 1120,130 1440,100 L1440,140 L0,140 Z"
          fill={fillColor}
        />
      </svg>
    ),

    /* ── 3  Asymmetric swoop — dramatic ────────────────── */
    3: (
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <path
          d="M0,20 C200,100 600,100 900,50 C1100,20 1300,60 1440,30 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    ),

    /* ── 4  Soft triple ripple — organic pillow ────────── */
    4: (
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <path
          d="M0,65 C160,130 320,0 480,65 C640,130 800,20 960,65 C1120,110 1280,30 1440,65 L1440,130 L0,130 Z"
          fill={fillColor}
        />
      </svg>
    ),

    /* ── 5  Triple layered — richest depth ─────────────── */
    5: (
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <path
          d="M0,60 C360,130 720,10 1080,80 C1260,110 1380,60 1440,70 L1440,150 L0,150 Z"
          fill={fillColor}
          opacity="0.3"
        />
        <path
          d="M0,90 C240,40 480,120 720,80 C960,40 1200,110 1440,90 L1440,150 L0,150 Z"
          fill={fillColor}
          opacity="0.55"
        />
        <path
          d="M0,110 C360,80 600,140 900,110 C1100,90 1300,130 1440,110 L1440,150 L0,150 Z"
          fill={fillColor}
        />
      </svg>
    ),

    /* ── 6  Wide single arc — elegant minimal ──────────── */
    6: (
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <path
          d="M0,50 Q360,0 720,40 Q1080,80 1440,30 L1440,80 L0,80 Z"
          fill={fillColor}
        />
      </svg>
    ),
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
      style={{ backgroundColor: bgColor }}
    >
      {waves[variant]}
    </div>
  );
}
