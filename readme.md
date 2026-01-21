
- For seconds hand use animation with even speed, without acceleration and deceleration. It should take the `60s` for the seconds hand to make a full circle.
- For minutes hand use steps animation with 60 steps. It should take the `60min` for the minutes hand to make a full circle.

In addition to the basic functionality create a BEM modifier called `speed-up` for your stopwatch block:
- it will take only `10s` for the seconds hand to make a full circle (change animation duration)
- it will take only `10min` for the minutes hand to make a full circle (change animation duration)

❗️ Create an HTML element with the class stopwatch (this element is required for the tests).
❗️ Add the modifier to the stopwatch for tests.
❗️ Mentors will remove it via Dev Tools and check if Basic functionality works as expected.

[Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

![reference image](reference.png)
![speed-up animation demo](demo.gif)

## Checklist

❗️ Replace `<your_account>` with your GitHub username and copy the links to the `Pull Request` description:
- [DEMO LINK](https://<your_account>.github.io/layout_stop-watch/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] Keyframes implemented using from/to + transform with rotate property
- [ ] Stopwatch is centered and has the correct arrows size
- [ ] All `Typical Mistakes` from the `BEM` lesson theory are checked.
- [ ] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
