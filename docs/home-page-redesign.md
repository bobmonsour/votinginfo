# Home page redesign

This document describes an effort to redesign the home page of the site, including the following:

- Placing news on the home page
- Links to state by state news
- Showing an example state summary on the home page; add the 3 most recent news headlines for that state as part of the summary
- Providing a link to each state detail page from the home page

NOTE: ALL WORK ON THIS SHALL BE DONE IN A SEPARATE BRANCH, AND NOT MERGED INTO THE MAIN BRANCH UNTIL ALL WORK IS COMPLETE AND REVIEWED.

## Placing news on the home page

The concept is that the a select number of news items from the All News page would be shown on the home page. I would propose that the most recent 5 news items be presented along with a "More news..." link that would take the user to the All News page.

Each news item would be presented as shown in the All News page, with the title of the news item, a 2-character state abbreviation for the state it pertains to (acting as a link to the news page for that state), the name of the source, the date it was published, and a brief description. Again, this would be displayed in the same manner as news items are displayed on the All News page.

## Links to state by state news

Below any presentation of these recent news items, there would be a list of all of the two-character state abbreviations, each one serving as a link to the news for that state. For example, clicking on "CA" would take the user to the news for California. There would be descriptive text above the list of state abbreviations that would say something like "Click on a state abbreviation to see voting news for that state." Note that the spacing between the state abbreviations would be such that they are easily clickable on a mobile device.

## Redesigning the rest of the page

I would propose that a single sample state summary be shown on the home page, with the 3 most recent news items for that state included as part of the summary. The state that is shown could be randomly selected each time the page is loaded, or it could be a specific state that is chosen by the site administrators. The state summary would be presented in the same manner as it is on the state detail page, which is different from the way it is presented on the home page currently.


## Other changes

On each state's detail page, in the Recent News section, the "View All News" link should be changed to "View All News for [state name]", where [state name] is the name of the state that the page is about. For example, on the California detail page, the link would say "View All News for California". This would make it clearer to users that they are viewing news specific to that state.
