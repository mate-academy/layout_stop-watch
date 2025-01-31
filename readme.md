# Stopwatch task

Create a working stopwatch with minute and second hands using **only CSS animations**.
- Use the reference image below to create a stopwatch:
  - place it in the center of the page (vertically and horizontally)
  - stopwatch must have a size of `80vmin` x `80vmin`
  - it should have a `1vmin` dotted round border with `#000` color
  - minutes hand should have a length of `20vmin` and `3vmin` width with blue (`#0700ff`) color
  - seconds hand should have a length of `38vmin` and `1.5vmin` width with green (`#2c8000`) color
  - the center of the stopwatch should be a circle with a diameter of `5vmin` and orange (`#f6a603`) color
- The starting position of the hands should be at the top.
- The stopwatch should be animated infinitely.
- For seconds hand use animation with even speed, without acceleration and deceleration. It should take the `60s` for the seconds hand to make a full circle.
- For minutes hand use steps animation with 60 steps. It should take the `60min` for the minutes hand to make a full circle.

In addition to the basic functionality create a BEM modifier called `speed-up` for your stopwatch block:
- it will take only `10s` for the seconds hand to make a full circle (change animation duration)
- it will take only `10min` for the minutes hand to make a full circle (change animation duration)

❗️ Create an HTML element with the class stopwatch (this element is required for the tests).
❗️ Add the modifier to the stopwatch for tests.
❗️ Mentors will remove it via Dev Tools and check if Basic functionality works as expected.

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

![reference image](reference.png)
![speed-up animation demo](demo.gif)

## Checklist

❗️ Replace `<your_account>` with your GitHub username and copy the links to the `Pull Request` description:
- [DEMO LINK](https://saywin.github.io/layout_stop-watch/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [x] Keyframes implemented using from/to + transform with rotate property
- [x] Stopwatch is centered and has the correct arrows size
- [x] All `Typical Mistakes` from the `BEM` lesson theory are checked.
- [x] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
