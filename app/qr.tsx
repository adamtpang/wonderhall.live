import QRCode from "qrcode";

// Server-rendered QR code, inlined as SVG so it ships with zero client JS and
// stays crisp at any size. Transparent light modules let the card behind show
// through; keep it on a paper/field surface for scannability.
export default async function Qr({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const svg = await QRCode.toString(value, {
    type: "svg",
    errorCorrectionLevel: "M",
    // Quiet zone baked into the SVG so scanners get the spec 4 modules even
    // when the wrapper's padding is tight.
    margin: 2,
    color: { dark: "#0f0f0d", light: "#0000" },
  });
  return (
    <div
      role="img"
      aria-label={label}
      className={`wh-qr ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
