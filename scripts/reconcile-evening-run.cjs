'use strict';
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', '_data');
const stateNewsPath = path.join(dataDir, 'stateNews.json');
const statesPath = path.join(dataDir, 'states.json');
const summaryPath = path.join(dataDir, 'latestRunSummary.json');

const TODAY = '2026-06-15';

// All items our evening run gathered, with their dates
const eveningItems = {
  AK: [
    { title: "Senate candidate with same name as incumbent Dan Sullivan ineligible for ballot, official rules", source: "PBS NewsHour", url: "https://www.pbs.org/newshour/politics/senate-candidate-with-same-name-as-incumbent-dan-sullivan-ineligible-for-ballot-official-rules", date: "2026-06-15", summary: "Alaska's Division of Elections director ruled that a U.S. Senate candidate named Dan Sullivan cannot appear on the August 18 primary ballot, finding his candidacy was filed to confuse voters and not in good faith as a genuine bid for office." },
    { title: "Alaska candidate with same name as Sen. Dan Sullivan disqualified by election official", source: "NBC News", url: "https://www.nbcnews.com/politics/2026-election/alaska-senate-candidate-named-dan-sullivan-disqualified-election-rcna350182", date: "2026-06-15", summary: "Alaska's election director formally disqualified a Republican Senate candidate sharing the name Dan Sullivan with the incumbent senator, citing his attempt to register using the senator's middle initial as evidence of intent to mislead voters." },
    { title: "Alaska election official threatens to disqualify Republican who shares name with Sen. Dan Sullivan", source: "NBC News", url: "https://www.nbcnews.com/politics/2026-election/disqualify-republican-dan-sullivan-2026-primary-alaska-senate-rcna349761", date: "2026-06-12", summary: "Alaska's Division of Elections issued a preliminary decision to disqualify a U.S. Senate candidate who shares the incumbent's name, with ballots set to be printed June 28 for the August 18 primary and a 30-day appeal window available." }
  ],
  AZ: [
    { title: "Arizona ballot measure to change voting rules will be decided in 2026 election", source: "Votebeat", url: "https://www.votebeat.org/arizona/2026/06/13/2026-ballot-measure-voting-changes-republican-voter-id-fast-election-results/", date: "2026-06-13", summary: "Arizona Republican legislators placed the FAST/Secure Elections Act (HCR 2001) on the November ballot in a party-line vote, which would require all voters including mail voters to present government-issued photo ID and ban foreign campaign contributions, taking effect in 2028 if approved." },
    { title: "Here are the 10 measures lawmakers sent to the Arizona ballot in November", source: "KJZZ", url: "https://www.kjzz.org/politics/2026-06-13/here-are-the-10-measures-lawmakers-sent-to-the-arizona-ballot-in-november", date: "2026-06-13", summary: "Arizona lawmakers referred 10 measures to the November ballot, including election-related proposals on voter ID requirements for mail ballots, restrictions on voting center use, and changes to how early ballots are tabulated." },
    { title: "Key dates and essential information for Arizona's Primary Election", source: "AZPM", url: "https://news.azpm.org/p/azpmnews/2026/6/11/230121-key-dates-and-essential-information-for-arizonas-primary-election/", date: "2026-06-11", summary: "Arizona's primary election is July 21, 2026, with voter registration deadline June 22 and early voting beginning June 24. The primary was moved earlier from August to allow more preparation time for the general election." },
    { title: "Republican legislators put measure to change voting procedures on November ballot", source: "Tucson Sentinel", url: "https://www.tucsonsentinel.com/local/report/061526_voting_ballot/republican-legislators-put-measure-change-voting-procedures-november-ballot", date: "2026-06-15", summary: "Arizona Republicans approved a ballot referral requiring mail-ballot voter ID, restricting voting centers, and requiring citizenship-only voting, sending it directly to November voters and bypassing Governor Hobbs's veto authority." }
  ],
  CA: [
    { title: "California Secretary of State Announces Certification of Congressional District 1 Special Primary Election Results", source: "California Secretary of State", url: "https://www.sos.ca.gov/administration/news-releases-and-advisories/2026-news-releases-and-advisories/california-secretary-state-shirley-n-weber-phd-announces-certification-congressional-district-1-special-primary-election-results", date: "2026-06-11", summary: "California Secretary of State Shirley Weber certified the June 2 Congressional District 1 Special Primary Election results on June 11, with the winner advancing to a special general election to fill the remainder of the congressional term." },
    { title: "Vote counting winding down in LA and OC", source: "LAist", url: "https://laist.com/news/politics/voter-guides/2026-election-california-primary-voter-turnout-los-angeles-county-orange-county", date: "2026-06-12", summary: "As of June 12, Los Angeles County reported approximately 37.7% voter turnout in the June 2 primary with outstanding ballots still under signature verification, while Orange County estimated 43% and statewide turnout reached 40.3%." }
  ],
  DC: [
    { title: "AP Decision Notes: What to expect in the Washington, DC, primary", source: "Associated Press", url: "https://www.usnews.com/news/politics/articles/2026-06-15/ap-decision-notes-what-to-expect-in-the-washington-dc-primary", date: "2026-06-15", summary: "AP overview of DC's unprecedented June 16 primary, the first to use ranked-choice voting, with voters choosing among competitive Democratic fields for mayor, House delegate, and four council seats amid federal intervention in the district." }
  ],
  FL: [
    { title: "Candidates across the state swarm ballot as qualifying period ends; some win by default", source: "WUSF", url: "https://www.wusf.org/politics-issues/2026-06-13/candidates-across-the-state-swarm-ballot-as-qualifying-period-ends-some-win-by-default", date: "2026-06-13", summary: "After Florida's candidate qualifying closed June 12, Rep. Byron Donalds leads the Republican field for governor with Trump's endorsement, while David Jolly is the Democratic frontrunner; hundreds of candidates qualified for legislative and congressional seats under a new Republican-leaning map." }
  ],
  GA: [
    { title: "Lawsuits over Georgia's maps are still pending. Lawmakers are redistricting anyway.", source: "Georgia Recorder", url: "https://georgiarecorder.com/2026/06/12/georgia-lawmakers-plan-to-redraw-district-lines-even-as-dispute-over-current-maps-remains-unsettled/", date: "2026-06-12", summary: "Georgia lawmakers plan to redraw congressional and legislative district maps in a June 17 special session even as previous redistricting lawsuits remain unresolved; critics warn the process could dilute minority voting power in metro Atlanta and southwest Georgia." },
    { title: "Georgia runoff election: More than 100,000 ballots cast as early voting begins", source: "FOX 5 Atlanta", url: "https://www.fox5atlanta.com/news/georgia-runoff-election-more-than-100000-ballots-cast-early-voting-begins", date: "2026-06-09", summary: "More than 100,000 Georgians cast ballots in the opening days of early voting for the June 16 primary runoff, with Republicans outpacing Democrats; state officials reported smooth operations and short wait times at polling locations statewide." },
    { title: "AP Decision Notes: What to expect in Georgia's state primary runoff", source: "Associated Press", url: "https://www.northwestgeorgianews.com/state/ap-decision-notes-what-to-expect-in-georgia-s-state-primary-runoff/article_c04d1b6a-2c0c-5e90-89a9-bd13230276c6.html", date: "2026-06-15", summary: "AP previews Georgia's June 16 primary runoff, with competitive Republican primaries for governor between Lt. Gov. Burt Jones and Rick Jackson, and for U.S. Senate between Rep. Mike Collins and Derek Dooley, plus Democratic runoffs for several statewide offices." },
    { title: "Early voting tops 482,000 statewide ahead of Tuesday runoff election", source: "Now Georgia", url: "https://nowgeorgia.com/early-voting-tops-482000-statewide-ahead-of-tuesday-runoff-election", date: "2026-06-14", summary: "Over 482,000 Georgians cast early ballots ahead of the June 16 primary runoff, with Republican turnout significantly outpacing Democratic early voting, setting up high-stakes GOP nominations for governor and U.S. Senate." }
  ],
  HI: [
    { title: "The Elections Commission Is Struggling To Elect A New Leader", source: "Honolulu Civil Beat", url: "https://civilbeat.org/2026/06/the-elections-commission-is-struggling-to-elect-a-new-leader/", date: "2026-06-15", summary: "Hawaii's Elections Commission is deadlocked over choosing a new chair before current chair Mike Curtis's term expires June 30, raising concerns about election oversight and continuity heading into the August 8 primary election." }
  ],
  IA: [
    { title: "All Iowa counties certify primary election results today", source: "KWWL", url: "https://www.kwwl.com/news/all-iowa-counties-certify-primary-election-results-today/article_2388f3b3-4bd7-49ef-bfb1-6e67c1dc91a1.html", date: "2026-06-09", summary: "All 99 Iowa counties held their official canvass on June 9 to certify results from the June 2 primary election, with bipartisan teams reviewing unofficial results; Black Hawk County confirmed a perfect match between hand counts and election night tallies." }
  ],
  ID: [
    { title: "State of Idaho certifies May 2026 primary election results", source: "Idaho Capital Sun", url: "https://idahocapitalsun.com/2026/06/09/state-of-idaho-certifies-may-2026-primary-election-results/", date: "2026-06-09", summary: "The Idaho State Board of Canvassers officially certified the May 19 primary election results on June 9, confirming 30.1% voter turnout; no statewide race fell within the 0.1% margin for a free recount, though two local races ended in coin-flip ties." },
    { title: "Idaho primary election results certified", source: "Boise State Public Radio", url: "https://www.boisestatepublicradio.org/politics-government/2026-06-10/idaho-primary-election-results-certified", date: "2026-06-10", summary: "Idaho's State Board of Canvassers certified primary election results on June 9, officially opening the window for candidates to request recounts; 11,087 Idahoans registered and voted on Election Day following county-level audits across all 44 counties." }
  ],
  IN: [
    { title: "Indiana rejects, cancels voter registration for more than half of flagged immigrant Hoosiers", source: "Indiana Capital Chronicle", url: "https://indianacapitalchronicle.com/2026/06/09/indiana-rejects-cancels-voter-registration-for-more-than-half-of-flagged-immigrant-hoosiers/", date: "2026-06-09", summary: "Indiana has rejected or canceled the voter registrations of more than 60% of immigrant Hoosiers flagged under House Enrolled Act 1680. Voting rights advocates submitted the data to federal court as part of a request to pause enforcement of the law." },
    { title: "Beau Bayh defeats Blythe Potter for Democratic secretary of state nomination", source: "Indiana Capital Chronicle", url: "https://indianacapitalchronicle.com/2026/06/06/beau-bayh-defeats-blythe-potter-for-democratic-secretary-of-state-nomination/", date: "2026-06-06", summary: "At Indiana's Democratic state convention on June 6, Beau Bayh won the party's nomination for secretary of state with 61% of delegate votes. Democrats see this as their best opportunity for a statewide seat in over a decade." }
  ],
  KS: [
    { title: "5 Republicans are leaving Kansas Board of Education, setting up election fight for political control", source: "KCUR", url: "https://www.kcur.org/education/2026-06-09/5-republicans-are-leaving-kansas-board-of-education-setting-up-election-fight-for-political-control", date: "2026-06-09", summary: "Five Republican members of the Kansas State Board of Education did not file for re-election by the June 1 deadline, opening up competitive races in the August 4 primary. Fourteen candidates have filed for the open seats." }
  ],
  LA: [
    { title: "Early voting starts for June 27 party runoffs", source: "Louisiana Illuminator", url: "https://lailluminator.com/2026/06/11/early-voting-party-runoffs/", date: "2026-06-11", summary: "Early voting began June 12 for Louisiana's June 27 party runoffs, including the Republican and Democratic U.S. Senate primaries. Only registered party members and no-party voters who participated in the May primaries may cast ballots." },
    { title: "No-party voters still have access to Louisiana's closed primaries, for now", source: "Louisiana Illuminator", url: "https://lailluminator.com/2026/06/15/louisiana-primary-elections/", date: "2026-06-15", summary: "In Louisiana's first year of closed party primaries, unaffiliated voters who chose a party in May's primary can vote in the June 27 runoffs, but the long-term status of no-party voter access to the closed primary system remains legally uncertain." },
    { title: "Early voting underway: Louisiana voters head to polls for first closed primary runoff", source: "KNOE", url: "https://www.knoe.com/2026/06/12/early-voting-underway-louisiana-voters-head-polls-first-closed-primary-runoff/", date: "2026-06-12", summary: "Early voting is underway in Louisiana for the June 27 runoffs, marking the state's first closed primary runoff. Voters are heading to polls for the U.S. Senate Republican runoff between Julia Letlow and John Fleming." }
  ],
  MD: [
    { title: "Md. election leaders hold emergency meeting in effort to stem mail-in ballot error confusion", source: "WTOP News", url: "https://wtop.com/maryland/2026/06/maryland-election-leaders-hold-emergency-meeting-in-effort-to-stem-mail-in-ballot-error-confusion/", date: "2026-06-09", summary: "Maryland's State Board of Elections held an emergency meeting to address a vendor printing error that sent some voters the wrong party's mail-in ballot. The board approved a canvassing protocol voiding original ballots for voters who received replacements." },
    { title: "Maryland begins in-person early voting June 11 for Gubernatorial Primary Election", source: "Fox Baltimore", url: "https://foxbaltimore.com/news/local/maryland-in-person-early-voting-gubernatorial-primary-election", date: "2026-06-11", summary: "In-person early voting for Maryland's June 23 Gubernatorial Primary Election opened June 11 at all early voting centers, running 7 a.m. to 8 p.m. daily through June 18. Maryland offers same-day voter registration at early voting centers." },
    { title: "MD elections board approves canvassing protocol following mail-in ballot error", source: "The Daily Record", url: "https://thedailyrecord.com/2026/06/09/maryland-elections-board-approves-canvassing-protocol-mail-in-ballot-error/", date: "2026-06-09", summary: "The Maryland State Board of Elections unanimously approved a canvassing protocol at its emergency meeting to address a vendor printing error that sent incorrect party ballots to some voters." },
    { title: "Maryland voter guide: What you need to know about the 2026 primary election", source: "WTOP News", url: "https://wtop.com/maryland-election/2026/06/maryland-voter-guide-what-you-need-to-know-about-the-2026-primary-election/", date: "2026-06-10", summary: "WTOP's voter guide for Maryland's June 23 primary covers early voting (June 11-18), mail-in ballot deadlines, same-day voter registration available at all early voting centers and polling places, and key races including the governor's race." }
  ],
  ME: [
    { title: "Three Maine races are headed to ranked-choice voting. Here's what happens next", source: "Maine Public", url: "https://www.mainepublic.org/politics/2026-06-10/three-maine-races-are-headed-to-ranked-choice-voting-heres-what-happens-next", date: "2026-06-10", summary: "Following Maine's June 9 primary, three races will proceed to ranked-choice voting tabulation after no candidate secured a majority. The tabulation process began June 12 in Augusta with results expected before Juneteenth." },
    { title: "Where Maine's elections stand going into a ranked-choice count", source: "Bangor Daily News", url: "https://www.bangordailynews.com/2026/06/12/politics/elections/maine-2026-primaries-ranked-choice-voting-tabulation/", date: "2026-06-12", summary: "The Bangor Daily News breaks down standings in Maine's three races headed to ranked-choice tabulation: Nirav Shah leads the Democratic governor's race with 27%, Bobby Charles leads the Republican race with 38%." },
    { title: "Ranked-choice voting counting continues in key Maine races", source: "WGME", url: "https://wgme.com/news/local/ranked-choice-voting-counting-continues-in-key-maine-races-voters-voting-governor-2nd-congressional-district-republican-democratic-primary", date: "2026-06-13", summary: "Ranked-choice vote tabulation continues in Maine's gubernatorial primaries and Congressional District 2 Democratic primary, with state police securing ballots in Augusta. Officials expect results before June 19." },
    { title: "With ranked-choice tabulations underway, here's what you need to know", source: "Maine Morning Star", url: "https://mainemorningstar.com/2026/06/15/with-ranked-choice-tabulations-underway-heres-what-you-need-to-know/", date: "2026-06-15", summary: "As Maine's ranked-choice tabulation continues at the Secretary of State's office, this explainer details how ballots are processed as lower-vote candidates are progressively eliminated until one candidate reaches majority." }
  ],
  MN: [
    { title: "Candidates Certified for 2026 Primary Election", source: "Minnesota Secretary of State", url: "https://www.sos.mn.gov/about-the-office/news-room/candidates-certified-for-2026-primary-election/", date: "2026-06-08", summary: "The Minnesota Secretary of State certified candidates for all federal and state offices for the August 11, 2026 State Primary Election. Absentee mail ballot requests open June 26, and minor party petitions will be finalized by June 16." },
    { title: "Candidates are certified for 2026 Primary Election", source: "Brainerd Dispatch", url: "https://www.brainerddispatch.com/news/local/candidates-are-certified-for-2026-primary-election", date: "2026-06-08", summary: "Local coverage of the Minnesota Secretary of State's June 8 announcement certifying the candidate field for the August 11 primary, with early in-person voting available at local election offices from June 26 through August 10." }
  ],
  MO: [
    { title: "Missouri courts keep rewriting 'unfair' ballot language as fights over direct democracy intensify", source: "KCUR", url: "https://www.kcur.org/politics-elections-and-government/2026-06-14/missouri-courts-unfair-ballot-language-secretary-of-state-denny-hoskins", date: "2026-06-14", summary: "Missouri courts have overturned Secretary of State Denny Hoskins' ballot summaries five times on redistricting, abortion, education and income tax measures, creating election administration chaos as the June 19 overseas military ballot mailing deadline and August 4 primary approach." }
  ],
  MT: [
    { title: "Montana begins post-election audit to review 2026 primary votes", source: "KULR-TV", url: "https://www.kulr8.com/helena/montana-begins-post-election-audit-to-review-2026-primary-votes/article_7507cbf5-d410-5c15-b523-071b72ca0e1f.html", date: "2026-06-09", summary: "The Montana State Board of Canvassers convened June 9 to randomly select races and precincts for the mandatory post-primary audit of the June 2 primary election, with county audits beginning by June 16 and the state canvass set for June 29." },
    { title: "State Board of Canvassers selects primary races to audit", source: "NBC Montana", url: "https://www.nbcmontana.com/news/local/state-board-of-canvassers-selects-primary-races-to-audit", date: "2026-06-09", summary: "Montana's State Board of Canvassers used a random dice-rolling process to select which June 2 primary races and precincts will receive mandatory hand-count audits under Montana's Post-Election Audit Act." }
  ],
  NC: [
    { title: "State Board holds hearing on proposed photo ID election rule changes", source: "NC Political News", url: "https://www.ncpoliticalnews.com/news/state-board-holds-hearing-on-proposed-photo-id-election-rule-changes", date: "2026-06-09", summary: "The North Carolina State Board of Elections held a public hearing on proposed amendments to photo ID verification rules that would lower the vote threshold for approving exception affidavits from unanimous/supermajority to simple majority." },
    { title: "NC Board of Elections discusses updating 2 photo ID rules", source: "Carolina Journal", url: "https://www.carolinajournal.com/nc-board-of-elections-discusses-updating-2-photo-id-rules/", date: "2026-06-09", summary: "The North Carolina Board of Elections discussed proposed changes to two voter photo ID rules at a June 9 hearing; public comments are accepted through July 14, 2026." }
  ],
  ND: [
    { title: "2026 North Dakota primary election results in statewide and legislative races", source: "North Dakota Monitor", url: "https://northdakotamonitor.com/2026/06/09/2026-north-dakota-primary-election-results-in-statewide-and-legislative-races/", date: "2026-06-09", summary: "North Dakota held its June 9 partisan primary; Julie Fedorchak won the Republican U.S. House nomination and Levi Bachmeier won the GOP gubernatorial primary, with unofficial results pending certification." },
    { title: "6 incumbent North Dakota lawmakers ousted in GOP primary", source: "North Dakota Monitor", url: "https://northdakotamonitor.com/2026/06/10/6-incumbent-north-dakota-lawmakers-ousted-in-gop-primary/", date: "2026-06-10", summary: "Six sitting North Dakota Republican legislators lost re-election bids in the June 9 primary, reflecting significant intra-party dissatisfaction among voters." },
    { title: "Voter turnout in North Dakota at about 21% for primary", source: "KFGO", url: "https://kfgo.com/2026/06/10/voter-turnout-in-north-dakota-at-about-21-for-primary/", date: "2026-06-10", summary: "About 125,101 ballots were cast in North Dakota's June 9 primary, representing 21% of eligible voters, with 41% cast before Election Day via absentee or early voting." },
    { title: "North Dakota Republican leaders urge 'soul-searching' after contentious primary", source: "North Dakota Monitor", url: "https://northdakotamonitor.com/2026/06/11/north-dakota-republican-leaders-urge-soul-searching-after-contentious-primary/", date: "2026-06-11", summary: "State GOP leaders called for party introspection after all party-endorsed statewide candidates lost the June 9 primary, raising questions about the NDGOP's endorsement processes." }
  ],
  NE: [
    { title: "Nebraska officials certify results for May 12 primary election that ran 'very smoothly'", source: "Nebraska Examiner", url: "https://nebraskaexaminer.com/2026/06/08/nebraska-officials-certify-results-for-may-12-primary-election-that-ran-very-smoothly/", date: "2026-06-08", summary: "The Nebraska Board of State Canvassers unanimously certified the May 12 primary results on June 8, finding no races requiring automatic recounts; incumbent Secretary of State Bob Evnen lost to challenger Scott Petersen." }
  ],
  NH: [
    { title: "Hitting the trail: Candidate filing period continues at NH State House", source: "New Hampshire Public Radio", url: "https://www.nhpr.org/nh-news/2026-06-08/candidate-filing-period-nh-2026-elections-midterms-newhampshire-politics", date: "2026-06-08", summary: "New Hampshire's June 3-12 candidate filing period for the September 8 primary saw high-profile filings including Rep. Chris Pappas for U.S. Senate; undeclared voters remain the state's largest bloc at 377,158 registrants." }
  ],
  NM: [
    { title: "Board of Canvass Certifies 2026 Primary Election Results", source: "Bernalillo County", url: "https://www.bernco.gov/blog/2026/06/15/board-of-canvass-certifies2026-primary-election-results/", date: "2026-06-15", summary: "Bernalillo County's Board of Canvass officially certified the results of New Mexico's June 2 primary election on June 15, completing post-election certification for the state's most populous county following the historic first semi-open primary." }
  ],
  NV: [
    { title: "Southern Nevada voters will see new paper ballot system at the polls today", source: "Las Vegas Sun", url: "https://lasvegassun.com/news/2026/jun/09/clark-county-voters-will-see-new-paper-ballot-syst/", date: "2026-06-09", summary: "Clark County debuted a new touchscreen paper ballot system for the June 9 primary, expanding a system first used in smaller counties in 2024." },
    { title: "Mail ballot signature issues could delay Nevada primary votes", source: "Fox5 Las Vegas", url: "https://www.fox5vegas.com/2026/06/10/nevada-voters-urged-check-mail-ballot-signature-status/", date: "2026-06-10", summary: "Following Nevada's June 9 primary, thousands of mail ballots were flagged for missing or mismatched signatures; voters were urged to cure issues at Cure.NV.gov before the June 15 deadline." },
    { title: "Nevada election officials report thousands of mail ballots still uncounted as primary tabulation continues", source: "Las Vegas Sun", url: "https://lasvegassun.com/news/2026/jun/11/nevada-election-officials-report-thousands-of-mail/", date: "2026-06-11", summary: "Two days after the primary, Washoe County had roughly 9,468 mail ballots unprocessed and 1,317 flagged for signature curing; Clark County had 1,493 needing signature cure, with a statewide canvass deadline of June 18." },
    { title: "Nevada Secretary of State issues second update on 2026 primary ballot count", source: "News3LV", url: "https://news3lv.com/news/local/nevada-secretary-of-state-issues-second-update-on-2026-primary-ballot-count", date: "2026-06-12", summary: "Nevada's Secretary of State reported that most counties had tabulated over 90% of mail ballots by June 12, with Clark County at 99%; the official statewide canvass must be complete by June 18." }
  ],
  NY: [
    { title: "Coalition of Civil and Voting Rights Organizations Condemns New York Redistricting Changes that Roll Back Protections for Minority Voters", source: "NAACP Legal Defense Fund", url: "https://www.naacpldf.org/press-release/coalition-of-civil-and-voting-rights-organizations-condemns-new-york-redistricting-changes-that-roll-back-protections-for-minority-voters/", date: "2026-06-05", summary: "The NAACP LDF condemned the New York legislature's June 4 passage of a constitutional amendment permitting mid-decade redistricting and removing anti-gerrymandering protections, warning it strips voting safeguards from communities of color." },
    { title: "More than 16,500 New Yorkers cast ballots on first day of early voting", source: "NY1", url: "https://ny1.com/nyc/all-boroughs/politics/2026/06/14/early-voting-first-day-numbers-nyc", date: "2026-06-14", summary: "More than 16,500 New Yorkers voted on the first day of early voting (June 13) for the June 23 primary, led by Manhattan at 7,581 ballots; competitive races include the NY-10 Goldman vs. Lander contest." },
    { title: "More than 44,000 New Yorkers cast ballots in first three days of early voting", source: "NY1", url: "https://ny1.com/nyc/all-boroughs/politics/2026/06/15/early-voting-first-day-numbers-nyc", date: "2026-06-15", summary: "Through June 15, over 44,000 NYC residents had cast early ballots for the June 23 primary, with Manhattan leading at 19,216 and Brooklyn at 11,438; early voting continues through June 21 before Primary Day." }
  ],
  OH: [
    { title: "Ohio Republican lawmakers send constitutional amendment requiring voter photo ID to ballot", source: "Ohio Capital Journal", url: "https://ohiocapitaljournal.com/2026/06/10/ohio-republican-lawmakers-send-constitutional-amendment-requiring-voter-photo-id-to-ballot/", date: "2026-06-10", summary: "Ohio's Republican-controlled legislature passed SJR 10 to place a constitutional amendment on the November 2026 ballot requiring photo ID for all voters, including absentee voters." },
    { title: "Ohio Republican lawmakers pass bill requiring absentee voters show a copy of their ID to vote", source: "Ohio Capital Journal", url: "https://ohiocapitaljournal.com/2026/06/10/ohio-republican-lawmakers-pass-bill-requiring-absentee-voters-show-a-copy-of-their-id-to-vote/", date: "2026-06-10", summary: "Ohio Republicans passed companion legislation (SB 104) requiring absentee voters to include a copy of their photo ID with their mail ballot." },
    { title: "Ohio voters to decide voter ID amendment in November, one of five voter ID ballot measures in 2026", source: "Ballotpedia News", url: "https://news.ballotpedia.org/2026/06/12/ohio-voters-to-decide-voter-id-amendment-in-november-one-of-five-voter-id-ballot-measures-in-2026/", date: "2026-06-12", summary: "Ohio is among five states placing voter ID constitutional amendments before voters in November 2026. A citizen-initiated amendment proposing automatic voter registration also has a July 1 signature submission deadline." }
  ],
  OK: [
    { title: "State Election Board Offers Tips and Reminders Ahead of June 16 Primary", source: "Oklahoma State Election Board", url: "https://oklahoma.gov/elections/newsroom/2026/june/state-election-board-offers-tips-and-reminders-ahead-of-june-16-.html", date: "2026-06-09", summary: "Oklahoma's State Election Board issued reminders that all June 16 primaries are closed. Party affiliation changes are locked from April 1 through August 31 of even-numbered years." },
    { title: "Oklahomans cast their ballots Thursday as early voting begins", source: "Oklahoma Voice", url: "https://oklahomavoice.com/2026/06/11/oklahomans-cast-their-ballots-thursday-as-early-voting-begins/", date: "2026-06-11", summary: "Early in-person absentee voting opened June 11 across Oklahoma ahead of the state's June 16 primary, featuring open-seat races for governor and U.S. Senate after incumbents hit term limits or resigned." },
    { title: "Early Voting Begins Thursday for June 16 Election", source: "Oklahoma State Election Board", url: "https://oklahoma.gov/elections/newsroom/2026/june/early-voting-begins-thursday-for-june-16-election.html", date: "2026-06-11", summary: "The Oklahoma State Election Board announced early voting for the June 16 primary runs June 11-12 (8 a.m.-6 p.m.) and June 13 (8 a.m.-2 p.m.), with limited-edition 'I Voted' stickers available." }
  ],
  OR: [
    { title: "Oregon Require In-Person Election Day Voting Initiative (2026)", source: "Ballotpedia", url: "https://ballotpedia.org/Oregon_Require_In-Person_Election_Day_Voting_Initiative_(2026)", date: "2026-06-04", summary: "A proposed 2026 Oregon ballot initiative that would ban the state's all-mail voting system and require in-person Election Day voting is approaching its July 2, 2026 signature submission deadline, needing 160,551 valid signatures to qualify for the November ballot." }
  ],
  PA: [
    { title: "Democratic registration drops in key midterm districts", source: "Spotlight PA", url: "https://www.spotlightpa.org/news/2026/06/democratic-voter-registration-decline-swing-districts-federal-government/", date: "2026-06-09", summary: "Spotlight PA analysis shows Democratic voter registration has declined in key Pennsylvania congressional swing districts. Republicans have narrowed the statewide Democratic registration advantage to under 4 points." }
  ],
  SC: [
    { title: "South Carolina results: Evette and Wilson head to runoff", source: "NPR", url: "https://www.npr.org/2026/06/09/nx-s1-5851591/trump-south-carolina-evette-wilson-governor", date: "2026-06-09", summary: "Trump-backed Lt. Gov. Pamela Evette and state Attorney General Alan Wilson advanced to a June 23 Republican gubernatorial runoff after no candidate cleared 50% in South Carolina's June 9 primary." },
    { title: "Statewide Primary Runoffs set for June 23, 2026; early voting June 17-18", source: "Horry County SC.Gov", url: "https://www.horrycountysc.gov/news/articles/statewide-primary-runoffs-set-for-june-23-2026-early-voting-june-17-18/", date: "2026-06-09", summary: "South Carolina's Election Commission confirmed the statewide primary runoff for June 23, 2026, covering races for governor, attorney general, and congressional seats. Early voting runs June 17-18; photo ID is required to vote." },
    { title: "GUIDE: What to know about runoff elections in South Carolina", source: "WIS-TV", url: "https://www.wistv.com/2026/06/10/what-know-about-runoff-elections-south-carolina/", date: "2026-06-10", summary: "WIS-TV explains South Carolina's runoff system ahead of the June 23 runoffs for governor, attorney general, and congressional seats, detailing early voting June 17-18." },
    { title: "Trump-backed Pamela Evette advances to GOP primary runoff against Alan Wilson in South Carolina governor's race", source: "NBC News", url: "https://www.nbcnews.com/politics/2026-election/south-carolina-governor-primary-runoff-pamela-evette-trump-rcna348699", date: "2026-06-09", summary: "Pamela Evette and Alan Wilson secured the top two spots in the Republican governor primary, advancing to the June 23 runoff. The runoff winner will face Democrat Jermaine Johnson in November." }
  ],
  SD: [
    { title: "South Dakota's first gubernatorial runoff July 28: who can vote and key dates", source: "KOTA TV", url: "https://www.kotatv.com/2026/06/11/qa-what-know-about-south-dakotas-first-gubernatorial-runoff/", date: "2026-06-11", summary: "KOTA TV explains eligibility for South Dakota's first gubernatorial runoff on July 28 between Gov. Larry Rhoden and businessman Toby Doeden. Only registered Republicans may vote; registration changes must be completed by July 13." },
    { title: "Absentee voting for Republican gubernatorial runoff election opens on June 12", source: "Mitchell Republic", url: "https://www.mitchellrepublic.com/news/south-dakota/absentee-voting-for-republican-gubernatorial-runoff-election-opens-on-june-12", date: "2026-06-12", summary: "Absentee voting for South Dakota's July 28 Republican gubernatorial runoff opened June 12; voters who requested a primary absentee ballot will automatically receive a runoff ballot." }
  ],
  TN: [
    { title: "NAACP files for federal court injunction to stop new Tennessee congressional map", source: "Tennessee Lookout", url: "https://tennesseelookout.com/2026/06/10/naacp-files-for-federal-court-injunction-to-stop-new-tennessee-congressional-map/", date: "2026-06-10", summary: "The NAACP filed a motion seeking a preliminary injunction to block Tennessee's new congressional map before the 2026 elections, arguing it intentionally dismantles the state's only majority-Black district centered on Memphis." }
  ],
  TX: [
    { title: "Here's how the Texas secretary of state's resignation could complicate the midterm elections", source: "Votebeat", url: "https://www.votebeat.org/texas/2026/06/08/secretary-of-state-jane-nelson-greg-abbott-nomination/", date: "2026-06-08", summary: "Local Texas election officials and voting rights advocates expressed concern that the vacancy at the Secretary of State's office — following Jane Nelson's announced resignation effective July 17 — could disrupt midterm election administration." },
    { title: "Texas takes over voter registration in Val Verde County amid struggles", source: "Texas Tribune", url: "https://www.texastribune.org/2026/06/12/texas-elections-takeover-val-verde-county/", date: "2026-06-12", summary: "Texas invoked a 2023 law to assume administrative oversight of voter registration in Val Verde County after audits found persistent failures, the first time a county other than Harris County has been placed under state oversight." },
    { title: "The state has taken over elections in Val Verde County. Here's what we know.", source: "Votebeat", url: "https://www.votebeat.org/texas/2026/06/12/state-takeover-val-verde-county-harris-county/", date: "2026-06-12", summary: "Texas Secretary of State's office formally took over voter registration administration in Val Verde County following persistent audit failures, marking the first time under the 2023 election law a non-Harris County has been placed under state oversight." }
  ],
  UT: [
    { title: "Utah has same-day voter registration. Here's how to be sure you won't miss the primary elections.", source: "Salt Lake Tribune", url: "https://www.sltrib.com/news/politics/2026/06/09/same-day-voter-registration-utah/", date: "2026-06-09", summary: "Explains Utah's same-day voter registration option for the June 23 primary, noting voters who missed the June 12 mail-in registration deadline can still register in person at early voting locations or on Election Day." },
    { title: "Utah primary elections: Why haven't I received a mail-in ballot?", source: "Salt Lake Tribune", url: "https://www.sltrib.com/news/politics/2026/06/11/utah-primary-elections-why-havent/", date: "2026-06-11", summary: "Most Utah voters received mail-in primary ballots but unaffiliated voters may not have received one since Republican primaries are closed; the article explains how to still participate in the June 23 primary." },
    { title: "2026 primary elections in Northern Utah: candidate profiles for Weber, Davis counties", source: "Standard-Examiner", url: "https://www.standard.net/news/government/2026/jun/13/2026-primary-elections-in-northern-utah-candidate-profiles-for-weber-davis-counties/", date: "2026-06-13", summary: "Profiles candidates running in the June 23 primary elections for Weber and Davis county offices in northern Utah, as early voting is underway ahead of the state's primary." }
  ],
  VA: [
    { title: "Wittman seeks to keep 1st District seat, as Democratic challengers face crowded primary", source: "Virginia Mercury", url: "https://virginiamercury.com/2026/06/10/wittman-seeks-to-keep-1st-district-seat-as-democratic-challengers-face-crowded-primary/", date: "2026-06-10", summary: "Democratic contenders are lining up to challenge longtime Republican incumbent Rob Wittman in Virginia's 1st congressional district, with early voting for the August 4 primary beginning June 18." },
    { title: "Early Voting for Aug. 4 Primary Election Begins June 18", source: "City of Virginia Beach", url: "https://virginiabeach.gov/connect/blog/early-voting", date: "2026-06-10", summary: "Virginia Beach and other Virginia localities announced that early in-person voting for the August 4 primary election begins June 18, with absentee ballots to be mailed no later than June 19 and a voter registration deadline of July 24." }
  ],
  VT: [
    { title: "Governor Scott signs 16 bills, including voter protections act (S.298)", source: "Vermont Business Magazine", url: "https://vermontbiz.com/news/2026/june/08/governor-scott-signs-16-bills-including-h930-and-s227", date: "2026-06-08", summary: "Governor Phil Scott signed S.298, the Vermont Voter Protections Act, creating a state-level framework protecting against vote denial and dilution with civil penalties up to $5,000 for a first violation and $25,000 for subsequent violations." }
  ],
  WA: [
    { title: "Why AG Nick Brown wants the Supreme Court involved in WA's redistricting fight", source: "Washington State Standard", url: "https://washingtonstatestandard.com/2026/06/08/why-ag-nick-brown-wants-the-supreme-court-involved-in-was-redistricting-fight/", date: "2026-06-08", summary: "Washington Attorney General Nick Brown explained his strategy of inviting U.S. Supreme Court review of Washington's redrawn legislative district maps drawn to enhance Latino voter representation." },
    { title: "These new Washington laws take effect Thursday", source: "OPB", url: "https://www.opb.org/article/2026/06/11/new-washington-state-laws-take-effect-thursday/", date: "2026-06-11", summary: "More than 200 new Washington state laws took effect June 11, including major expansions to the state's Voting Rights Act: HB 1750 bars election policies creating material disparate burdens on protected-class voters, HB 1710 reinstates preclearance requirements." },
    { title: "More than 200 new laws now in effect in Washington state", source: "Cascadia Daily News", url: "https://www.cascadiadaily.com/2026/jun/11/more-than-200-new-laws-now-in-effect-in-washington-state/", date: "2026-06-11", summary: "Washington state's package of new laws effective June 11 includes significant voting rights enhancements: preclearance requirements for jurisdictions with histories of discrimination and tighter rules for challenging voter registrations." }
  ],
  WV: [
    { title: "Preliminary Report on 2026 Primary, Unaffiliated Voter Participation", source: "LootPress", url: "https://www.lootpress.com/preliminary-report-on-2026-primary-unaffiliated-voter-participation/", date: "2026-06-10", summary: "West Virginia Secretary of State's office released a preliminary report finding evidence that unaffiliated voters were permitted to participate in some precincts during the 2026 Republican primary, the first closed primary in nearly 30 years." },
    { title: "All 55 counties certify Primary Election results as voter participation review planned", source: "WV MetroNews", url: "https://wvmetronews.com/2026/06/11/all-55-counties-certify-primary-election-results-as-voter-participation-review-planned/", date: "2026-06-11", summary: "West Virginia Secretary of State Kris Warner announced all 55 counties certified 2026 primary results, with 21.02% voter turnout. Two counties have election contests pending alleging unaffiliated voters improperly voted in the first closed Republican primary in nearly three decades." }
  ],
  WI: [
    { title: "Wisconsin election officials warn Trump directive could allow USPS to deny mail-in ballots", source: "WTAQ News Talk", url: "https://wtaq.com/2026/06/11/wisconsin-election-officials-warn-trump-directive-could-allow-usps-to-deny-mail-in-ballots/", date: "2026-06-11", summary: "Wisconsin Elections Commission officials warned that a Trump executive order directing USPS to control mail-in ballot delivery could effectively give the federal government veto power over absentee voting, widely used in Wisconsin." },
    { title: "USPS ballot rule could affect state absentee voting", source: "Wisconsin Law Journal", url: "https://wislawjournal.com/2026/06/11/usps-ballot-rule-could-affect-state-absentee-voting/", date: "2026-06-11", summary: "A proposed USPS rule would restrict mail-in ballot delivery to voters on state-provided lists, raising concerns among Wisconsin election officials about delays in rural communities and compliance with barcode requirements." },
    { title: "Wisconsin Supreme Court takes up appeal seeking redraw of congressional map", source: "Wisconsin Public Radio", url: "https://www.wpr.org/news/wisconsin-supreme-court-appeal-seeking-redraw-of-congressional-map", date: "2026-06-13", summary: "The Wisconsin Supreme Court accepted a second appeal contesting the dismissal of a congressional redistricting lawsuit claiming Wisconsin's maps are gerrymandered to ensure Republican dominance." },
    { title: "Elections commission hears challenges to candidates' ballot access", source: "Wausau Pilot & Review", url: "https://wausaupilotandreview.com/2026/06/10/elections-commission-hears-challenges-to-candidates-ballot-access/", date: "2026-06-10", summary: "The Wisconsin Elections Commission met for more than three hours to adjudicate challenges to nominating signatures for legislative, congressional, and Secretary of State candidates, largely rejecting the challenges and approving candidates for the August 11 primary ballot." },
    { title: "Will new postmark rule affect voter registration, absentee ballots in Wisconsin?", source: "Wisconsin Public Radio", url: "https://www.wpr.org/news/new-postmark-rule-voter-registration-absentee-ballots-wisconsin", date: "2026-06-11", summary: "WPR examines how a new USPS postmark rule change could affect Wisconsin voters' ability to register by mail and return absentee ballots in time, noting Wisconsin law requires ballots to be received by 8pm on Election Day." }
  ],
  WY: [
    { title: "Wyoming Supreme Court considers constitutionality of crossover-voting ban", source: "WyoFile", url: "https://wyofile.com/wyoming-supreme-court-considers-constitutionality-of-crossover-voting-ban/", date: "2026-06-12", summary: "Wyoming Supreme Court justices heard oral arguments challenging the constitutionality of the state's crossover-voting ban and party affiliation restrictions. Plaintiffs argue the laws violate Wyoming constitutional provisions requiring open, free, and equal elections." }
  ]
};

// ─── Compute updated thresholds from current stateNews.json ─────────────────
const stateNews = JSON.parse(fs.readFileSync(stateNewsPath, 'utf8'));
const thresholds = {};
for (const run of stateNews.runs) {
  for (const [abbr, items] of Object.entries(run.states)) {
    for (const item of items) {
      if (!thresholds[abbr] || item.date > thresholds[abbr]) {
        thresholds[abbr] = item.date;
      }
    }
  }
}

// ─── Filter items against updated thresholds ─────────────────────────────────
const newRunStates = {};
let totalKept = 0, totalDropped = 0;

for (const [abbr, items] of Object.entries(eveningItems)) {
  const threshold = thresholds[abbr] || null;
  const qualifying = items.filter(item => {
    if (!threshold || item.date > threshold) return true;
    totalDropped++;
    return false;
  });
  totalKept += qualifying.length;
  if (qualifying.length > 0) {
    newRunStates[abbr] = qualifying;
  }
}

console.log(`Filtering results: ${totalKept} items kept, ${totalDropped} dropped (below updated thresholds)`);
console.log(`States with qualifying items: ${Object.keys(newRunStates).sort().join(', ')}`);

if (Object.keys(newRunStates).length === 0) {
  console.log('No new items qualify after filtering. No run to add.');
  process.exit(0);
}

// ─── Add the new run to stateNews.json ───────────────────────────────────────
const newRun = { date: TODAY, states: newRunStates };
stateNews.runs.push(newRun);
fs.writeFileSync(stateNewsPath, JSON.stringify(stateNews, null, 2));
console.log(`✓ stateNews.json: added evening run for ${TODAY} with ${Object.keys(newRunStates).length} states, ${totalKept} items`);

// ─── Update states.json changelog ────────────────────────────────────────────
const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
let updatedCount = 0;
for (const s of states) {
  if (newRunStates[s.abbreviation]) {
    s.changes = s.changes || [];
    s.changes.push({ date: TODAY, field: 'Recent News', description: 'Added recent news items' });
    updatedCount++;
  }
}
fs.writeFileSync(statesPath, JSON.stringify(states, null, 2));
console.log(`✓ states.json: updated changelog for ${updatedCount} states`);

// ─── Write latestRunSummary.json ─────────────────────────────────────────────
// Build summary from the items that actually made it in
const summary = { date: TODAY, items: [] };

const allNewItems = Object.entries(newRunStates).flatMap(([abbr, items]) =>
  items.map(i => ({ ...i, abbr }))
).sort((a, b) => b.date.localeCompare(a.date));

// Pick 5 notable themes from qualifying items
if (newRunStates['AK']) {
  summary.items.push({ text: "Alaska election official disqualifies Senate candidate who shares name with incumbent Dan Sullivan", url: newRunStates['AK'][0].url, abbr: "AK" });
}
if (newRunStates['AZ']) {
  const az15 = (newRunStates['AZ'] || []).find(i => i.date === '2026-06-15');
  if (az15) summary.items.push({ text: "Arizona Republicans send mail-ballot voter ID measure to November voters, bypassing governor's veto", url: az15.url, abbr: "AZ" });
}
if (newRunStates['LA']) {
  const la = (newRunStates['LA'] || []).find(i => i.date === '2026-06-15');
  if (la) summary.items.push({ text: "Louisiana navigates first closed primary runoff as unaffiliated voters face uncertain future access", url: la.url, abbr: "LA" });
}
if (newRunStates['NY']) {
  const ny = (newRunStates['NY'] || []).find(i => i.date === '2026-06-15');
  if (ny) summary.items.push({ text: "New York City early voting hits 44,000 ballots in first three days before June 23 primary", url: ny.url, abbr: "NY" });
}
if (newRunStates['DC']) {
  summary.items.push({ text: "DC prepares for first ever ranked-choice primary on June 16", url: newRunStates['DC'][0].url, abbr: "DC" });
}
if (newRunStates['GA']) {
  const ga = (newRunStates['GA'] || []).find(i => i.date === '2026-06-15');
  if (ga) summary.items.push({ text: "Georgia holds June 16 primary runoff as redistricting special session looms", url: ga.url, abbr: "GA" });
}
if (newRunStates['HI']) {
  summary.items.push({ text: "Hawaii Elections Commission deadlocked on new chair ahead of August primary", url: newRunStates['HI'][0].url, abbr: "HI" });
}
if (newRunStates['NM']) {
  summary.items.push({ text: "New Mexico's Bernalillo County certifies June 2 primary results from historic semi-open primary", url: newRunStates['NM'][0].url, abbr: "NM" });
}
// Trim to 5
summary.items = summary.items.slice(0, 5);

if (summary.items.length === 0) {
  // Fallback if nothing matched
  summary.items = allNewItems.slice(0, 5).map(i => ({ text: i.title.slice(0, 80), url: i.url, abbr: i.abbr }));
}

fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`✓ latestRunSummary.json: written with ${summary.items.length} items`);
