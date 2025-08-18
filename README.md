# animation-js

## Running the examples

1. Create an `index.html` file in the project root with the following content:

```html
<!doctype html>
<html>
  <body>
    <canvas id="canvas" width="300" height="100"></canvas>
    <script type="module" src="src/example.js"></script>
  </body>
</html>
```

2. Open the file directly in a browser or serve it locally (e.g. `npx serve .`) and navigate to the page.
3. You should see a red square move across the canvas.

## More creative examples

- **Bouncing ball** – Replace the script tag in the HTML with `src/bouncingBall.js` to see a ball continuously bounce within the canvas.
- **Fading text** – Add an element like `<div id="text">Hello</div>` to the HTML and use `src/fadeText.js` to fade the text in and out.

Each example imports the `animate` helper from `src/index.js`, showcasing different ways to animate values on the page.
