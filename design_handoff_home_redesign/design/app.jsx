/* global React, ReactDOM, STATES, NEWS, LAST_UPDATED */

const { useState, useMemo, useEffect, useRef } = React;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const flagUrl = (abbr) =>
  abbr === "DC"
    ? "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'><rect width='60' height='40' fill='#fff'/><g fill='#c8102e'><rect y='22' width='60' height='6'/><rect y='32' width='60' height='6'/><circle cx='12' cy='10' r='2.5'/><circle cx='22' cy='10' r='2.5'/><circle cx='32' cy='10' r='2.5'/></g></svg>`
      )
    : `https://flagcdn.com/w40/us-${abbr.toLowerCase()}.png`;

const fmtDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
};

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="site-title">
          US Voting Info<span className="dot">.</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#" className="is-active">Home</a>
          <a href="#">News</a>
          <a href="#">Glossary</a>
          <a href="#">Change Log</a>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  );
}

function Banner() {
  return (
    <div className="site-banner">
      <div className="container">
        <span className="badge-tiny">Notice</span>
        <span>Some state data is being re-verified for the 2026 cycle. Confidence level is shown on each state page.</span>
      </div>
    </div>
  );
}

function Masthead() {
  return (
    <section className="masthead">
      <div className="container">
        <h1>
          Voter registration & voting <em>requirements</em> for all 50 states and Washington, D.C.
        </h1>
        <p className="lede">
          Deadlines, ID rules, mail-in policy, and the latest election-law news — sourced from each state's election office and reviewed by hand.
        </p>
        <div className="meta-row">
          <div><strong>51</strong> jurisdictions</div>
          <span className="dot-sep">·</span>
          <div><strong>{NEWS.length}</strong> news items this week</div>
          <span className="dot-sep">·</span>
          <div>Last verified <strong>{fmtDate(LAST_UPDATED)}</strong></div>
        </div>
      </div>
    </section>
  );
}

function RecentNews({ items }) {
  return (
    <section className="section" id="news">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Election News</span>
          <h2 className="section-title">
            Recent <em>across all states</em>
          </h2>
          <p className="section-sub">
            The latest stories tracked in our weekly research run. Click a state tag to jump to that state's full news page.
          </p>
          <div className="section-actions">
            <a href="#">All news →</a>
            <a href="#">RSS</a>
          </div>
        </div>

        <ol className="news-grid">
          {items.map((n, i) => (
            <li key={i} className="news-item">
              <a className="news-state-tag" href={`#states-${n.state.toLowerCase()}-news`} aria-label={`${n.state} news`}>
                {n.state}
              </a>
              <div className="news-body">
                <a href={n.url} className="news-title" target="_blank" rel="noopener">
                  {n.title}
                </a>
                <div className="news-meta">
                  <span className="news-source">{n.source}</span>
                  <span className="dot-sep">·</span>
                  <span>{fmtDate(n.date)}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AbbrRail({ eyebrow, title, sub, hrefBuilder, highlightStates }) {
  const highlight = new Set(highlightStates || []);
  return (
    <section className="section" style={{ paddingTop: "2.25rem", paddingBottom: "2.25rem" }}>
      <div className="container">
        <div className="abbr-rail-label">
          <span>{eyebrow}</span>
          {highlightStates ? (
            <span className="legend"><span className="dot" /> has recent news</span>
          ) : null}
        </div>
        <nav className="abbr-rail" aria-label={title}>
          {STATES.map((s) => (
            <a
              key={s.abbr}
              href={hrefBuilder(s)}
              title={s.state}
              className={highlight.has(s.abbr) ? "has-news" : ""}
            >
              {s.abbr}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

const FILTERS = [
  { key: "same-day", label: "Same-day reg.", test: (s) => s.sameDay },
  { key: "online", label: "Online reg.", test: (s) => s.online },
  { key: "early", label: "Early voting", test: (s) => s.early },
  { key: "no-excuse", label: "No-excuse mail-in", test: (s) => s.noExcuseMail },
  { key: "excuse", label: "Excuse-req. mail-in", test: (s) => s.anyMail && !s.noExcuseMail },
  { key: "all-mail", label: "All-mail", test: (s) => /all-mail/i.test(s.mailDetails) },
];

function StateGrid() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(new Set());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STATES.filter((s) => {
      if (q && !(s.state.toLowerCase().includes(q) || s.abbr.toLowerCase().includes(q))) return false;
      for (const k of active) {
        const f = FILTERS.find((x) => x.key === k);
        if (f && !f.test(s)) return false;
      }
      return true;
    });
  }, [query, active]);

  const toggle = (key) => {
    setActive((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <section className="section" id="states">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">By state</span>
          <h2 className="section-title">
            Registration & voting <em>requirements</em>
          </h2>
          <p className="section-sub">
            Compare deadlines, ID rules, early voting, and mail-in policy across all 51 jurisdictions. Filters combine with AND.
          </p>
        </div>

        <div className="controls">
          <div className="search-wrap">
            <input
              type="search"
              id="state-search"
              placeholder="Search state name or abbreviation…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="filter-buttons" role="group" aria-label="Filter states">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className="filter-btn"
                aria-pressed={active.has(f.key)}
                onClick={() => toggle(f.key)}
              >
                {f.label}
                <span className="x">×</span>
              </button>
            ))}
          </div>
        </div>

        <div className="result-row" aria-live="polite">
          <span>
            Showing <strong>{filtered.length}</strong> of <strong>{STATES.length}</strong> jurisdictions
          </span>
          <span>
            Last updated <strong>{fmtDate(LAST_UPDATED)}</strong>
          </span>
        </div>

        <div className="inline-rail">
          <div className="abbr-rail-label">
            <span>Jump to a state</span>
          </div>
          <nav className="abbr-rail" aria-label="Jump to state cards">
            {STATES.map((s) => (
              <a key={s.abbr} href={`#states-${s.abbr.toLowerCase()}`} title={s.state}>
                {s.abbr}
              </a>
            ))}
          </nav>
        </div>

        <div className="card-grid">
          {filtered.map((s) => (
            <StateCard key={s.abbr} s={s} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ padding: "3rem 0", textAlign: "center", color: "var(--ink-3)", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
            No states match your filters. <button className="filter-btn" style={{marginLeft: "0.5rem"}} onClick={() => { setActive(new Set()); setQuery(""); }}>Clear all</button>
          </div>
        )}
      </div>
    </section>
  );
}

function StateCard({ s }) {
  return (
    <article className="state-card" id={`states-${s.abbr.toLowerCase()}`}>
      <div className="card-head">
        <img className="flag" src={flagUrl(s.abbr)} alt={`${s.state} flag`} loading="lazy" width="36" height="24" />
        <div className="title-stack">
          <h3><a href={`#${slugify(s.state)}`}>{s.state}</a></h3>
          <span className="abbr">{s.abbr}</span>
        </div>
      </div>

      <div className="badges">
        <Badge yes={s.sameDay} label="Same-day" />
        <Badge yes={s.online} label="Online" />
        <Badge yes={s.early} label="Early" />
        {s.noExcuseMail ? (
          <Badge yes={true} label="No-excuse mail-in" />
        ) : s.anyMail ? (
          <Badge warn label="Excuse req. mail-in" />
        ) : (
          <Badge no label="No mail-in" />
        )}
      </div>

      <div className="deadline">
        <span className="label">Registration deadline</span>
        <span className="value">{s.deadline}</span>
      </div>

      <dl>
        <div>
          <dt>ID to vote</dt>
          <dd>{s.idToVote}</dd>
        </div>
        <div>
          <dt>Early voting</dt>
          <dd>{s.earlyDetails}</dd>
        </div>
        <div>
          <dt>Mail-in voting</dt>
          <dd>{s.mailDetails}</dd>
        </div>
      </dl>

      <div className="footer">
        <a href={`#${slugify(s.state)}`}>
          Details<span className="arrow">→</span>
        </a>
        <a href={`#states-${s.abbr.toLowerCase()}-news`}>
          News<span className="arrow">→</span>
        </a>
      </div>
    </article>
  );
}

function Badge({ yes, no, warn, label }) {
  const cls = yes ? "yes" : warn ? "warn" : "no";
  const glyph = yes ? "✓" : warn ? "!" : "✕";
  return (
    <span className={`badge ${cls}`}>
      <span className="glyph">{glyph}</span> {label}
    </span>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="colophon">
          <span className="brand">US Voting Info</span>
          An independent reference for voter registration and voting requirements in the 50 states and Washington, D.C. Not affiliated with any state, party, or campaign.
        </div>
        <div>
          <h4>Site</h4>
          <a href="#">Home</a>
          <a href="#">All news</a>
          <a href="#">Glossary</a>
          <a href="#">Change log</a>
          <a href="#">About</a>
        </div>
        <div>
          <h4>Sources</h4>
          <a href="#">State election offices</a>
          <a href="#">NCSL</a>
          <a href="#">Brennan Center</a>
          <a href="#">Ballotpedia</a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "comfortable",
  "cardVariant": "default",
  "accent": "#c2410c",
  "newsCount": 8
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to <html> as data-attrs / CSS vars
  useEffect(() => {
    document.documentElement.dataset.density = t.density;
    document.documentElement.dataset.cardVariant = t.cardVariant;
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.density, t.cardVariant, t.accent]);

  const newsToShow = NEWS.slice(0, t.newsCount);
  const newsStates = newsToShow.map((n) => n.state);

  return (
    <React.Fragment>
      <a className="skip-link sr-only" href="#states">Skip to states</a>
      <SiteHeader />
      <Banner />
      <Masthead />
      <RecentNews items={newsToShow} />
      <AbbrRail
        eyebrow="Browse news by state"
        title="News by state"
        hrefBuilder={(s) => `#states-${s.abbr.toLowerCase()}-news`}
        highlightStates={newsStates}
      />
      <StateGrid />
      <SiteFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "compact", label: "Compact" },
            { value: "comfortable", label: "Normal" },
            { value: "spacious", label: "Roomy" },
          ]}
        />
        <TweakRadio
          label="Card style"
          value={t.cardVariant}
          onChange={(v) => setTweak("cardVariant", v)}
          options={[
            { value: "default", label: "Boxed" },
            { value: "editorial", label: "Editorial" },
            { value: "minimal", label: "Minimal" },
          ]}
        />
        <TweakSection label="Look" />
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#c2410c", "#1b3a5c", "#2e7d32", "#7c3aed"]}
        />
        <TweakSection label="Content" />
        <TweakSlider
          label="News items shown"
          value={t.newsCount}
          onChange={(v) => setTweak("newsCount", v)}
          min={4} max={12} step={2}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
