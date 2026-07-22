export default function HomePage() {
  return (
    <main className="foundation-shell">
      <header className="foundation-header" aria-label="SB Page">
        <span className="wordmark">SB Page</span>
        <span className="phase-label">Foundation</span>
      </header>

      <section className="foundation-content" aria-labelledby="page-title">
        <p className="eyebrow">A guided business-page workspace</p>
        <h1 id="page-title">A credible business page, live before setup feels like work.</h1>
        <p className="lede">SB Page is being prepared for its first focused product build.</p>
      </section>

      <footer className="foundation-footer">
        <span>SB Page</span>
        <span>Initial project foundation</span>
      </footer>
    </main>
  );
}
