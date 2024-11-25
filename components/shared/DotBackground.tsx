export default function DotBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-background [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:none]" />
    </div>
  );
}
