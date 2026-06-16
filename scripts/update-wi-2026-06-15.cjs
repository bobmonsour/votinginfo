'use strict';
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', '_data');
const stateNewsPath = path.join(dataDir, 'stateNews.json');
const statesPath = path.join(dataDir, 'states.json');
const TODAY = '2026-06-15';

const wiItems = [
  {
    title: "Wisconsin election officials warn Trump directive could allow USPS to deny mail-in ballots",
    source: "WTAQ News Talk",
    url: "https://wtaq.com/2026/06/11/wisconsin-election-officials-warn-trump-directive-could-allow-usps-to-deny-mail-in-ballots/",
    date: "2026-06-11",
    summary: "Wisconsin Elections Commission officials warned that a Trump executive order directing USPS to control mail-in ballot delivery could effectively give the federal government veto power over absentee voting, which is widely used in Wisconsin. Officials noted that only Milwaukee and Minneapolis can currently read the barcodes required under the proposed rule."
  },
  {
    title: "USPS ballot rule could affect state absentee voting",
    source: "Wisconsin Law Journal",
    url: "https://wislawjournal.com/2026/06/11/usps-ballot-rule-could-affect-state-absentee-voting/",
    date: "2026-06-11",
    summary: "A proposed USPS rule published in the Federal Register on June 2 would restrict mail-in ballot delivery to voters on state-provided lists, raising concerns among Wisconsin election officials about delays in rural communities and the state's ability to comply with the barcode requirements."
  },
  {
    title: "Wisconsin Supreme Court takes up appeal seeking redraw of congressional map",
    source: "Wisconsin Public Radio",
    url: "https://www.wpr.org/news/wisconsin-supreme-court-appeal-seeking-redraw-of-congressional-map",
    date: "2026-06-13",
    summary: "The Wisconsin Supreme Court accepted a second appeal contesting the dismissal of a congressional redistricting lawsuit claiming Wisconsin's maps are gerrymandered to ensure Republican dominance. Analysts note the typical briefing timeline makes a court-ordered redraw before November 2026 unlikely."
  },
  {
    title: "Elections commission hears challenges to candidates' ballot access",
    source: "Wausau Pilot & Review",
    url: "https://wausaupilotandreview.com/2026/06/10/elections-commission-hears-challenges-to-candidates-ballot-access/",
    date: "2026-06-10",
    summary: "The Wisconsin Elections Commission met for more than three hours to adjudicate over a dozen challenges to nominating signatures for candidates running in legislative, congressional, and Secretary of State races, largely rejecting the challenges and approving candidates for the August 11 primary ballot."
  },
  {
    title: "Will new postmark rule affect voter registration, absentee ballots in Wisconsin?",
    source: "Wisconsin Public Radio",
    url: "https://www.wpr.org/news/new-postmark-rule-voter-registration-absentee-ballots-wisconsin",
    date: "2026-06-11",
    summary: "WPR examines how a new USPS postmark rule change and ongoing mail delivery delays could affect Wisconsin voters' ability to register by mail and return absentee ballots in time, noting Wisconsin law requires ballots to be received by 8pm on Election Day."
  }
];

// Add WI to the latest run in stateNews.json
const stateNews = JSON.parse(fs.readFileSync(stateNewsPath, 'utf8'));
const latestRun = stateNews.runs[stateNews.runs.length - 1];
if (latestRun.date !== TODAY) {
  console.error('ERROR: Latest run date is', latestRun.date, '— expected', TODAY);
  process.exit(1);
}
latestRun.states['WI'] = wiItems;
fs.writeFileSync(stateNewsPath, JSON.stringify(stateNews, null, 2));
console.log('✓ stateNews.json: added WI to run', TODAY, '(', wiItems.length, 'items)');

// Add changelog entry for WI in states.json
const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
const wi = states.find(s => s.abbreviation === 'WI');
if (!wi) { console.error('ERROR: WI not found in states.json'); process.exit(1); }
wi.changes = wi.changes || [];
wi.changes.push({ date: TODAY, field: 'Recent News', description: 'Added recent news items' });
fs.writeFileSync(statesPath, JSON.stringify(states, null, 2));
console.log('✓ states.json: WI changelog updated');

// Verify totals
const finalRun = stateNews.runs[stateNews.runs.length - 1];
const total = Object.values(finalRun.states).reduce((s, a) => s + a.length, 0);
console.log('Final run:', Object.keys(finalRun.states).length, 'states,', total, 'total items');
