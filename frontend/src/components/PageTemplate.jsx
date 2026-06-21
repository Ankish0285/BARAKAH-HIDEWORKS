export default function PageTemplate({ title, subtitle, children, className = "" }) {
  return (
    <main className={`page ${className}`}>
      <div className="page-header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </main>
  );
}
