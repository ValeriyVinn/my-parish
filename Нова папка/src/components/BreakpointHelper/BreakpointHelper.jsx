// BreakpointHelper.jsx
import { useEffect, useState } from "react";

export default function BreakpointHelper() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  let label = "mobile";
  if (width >= 768) label = "tablet";
  if (width >= 1024) label = "desktop";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        padding: "4px 8px",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        fontSize: "12px",
        borderRadius: "4px",
        zIndex: 9999,
      }}
    >
      {label} ({width}px)
    </div>
  );
}
