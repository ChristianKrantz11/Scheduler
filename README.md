<h1 align="center">🗓️ Work Day Scheduler</h1>

<p align="center">An hour-by-hour planner for the 8 AM – 5 PM workday, color-coded by past, present and future.</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css&amp;logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&amp;logo=bootstrap&amp;logoColor=white" alt="Bootstrap">
</p>

<p align="center"><a href="https://christiankrantz11.github.io/Scheduler/"><strong>🚀 Live Demo</strong></a></p>

<p align="center"><img src="docs/screenshot.png" alt="Work Day Scheduler with hourly blocks colored gray for past, red for the current hour and green for future hours" width="850"></p>

## Features

- Live date and time at the top of the page
- Hourly time blocks from 8 AM to 5 PM
- Color-coded blocks that update automatically as the day goes on:
  - Gray for past hours
  - Red for the current hour
  - Green for future hours
- Type an event into any hour and click its save button. A checkmark confirms it was saved.
- Events are saved in `localStorage` and are still there after a refresh
- **Clear schedule** button to start a fresh day
- Accessible: every hour label is linked to its text box, and every save button has a descriptive label
- Responsive layout for desktop and mobile

## Built With

- HTML, CSS and JavaScript
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/) grid
- [Font Awesome](https://fontawesome.com/) icons

## Running Locally

No build step is needed.

1. Clone the repo:
   ```bash
   git clone https://github.com/ChristianKrantz11/Scheduler.git
   ```
2. Open `index.html` in your browser.

## How It Works

The hour rows are generated in JavaScript from a start and end hour, rather than repeated in the HTML. The clock refreshes every 30 seconds and re-colors the blocks, so the page stays accurate if you leave it open all day.

## User Story

<details>
<summary>Original assignment user story</summary>

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

</details>

## Author

[ChristianKrantz11](https://github.com/ChristianKrantz11)
