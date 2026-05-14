# input-lgcode

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component that provides an input field for selecting Japanese local government codes.

## Demo

[Live demo](https://code4fukui.github.io/input-lgcode/)

## Features

-   Provides two custom elements: `<input-lgcode>` for municipalities and `<input-lgcode-ward>` for wards.
-   Renders as a set of dropdowns for easy selection of prefectures and municipalities/wards.
-   Exposes the selected 6-digit local government code via a standard `.value` property.
-   Allows for programmatically setting the value.

## Dependencies

-   [select-city](https://github.com/code4fukui/select-city)
-   [LGCode](https://github.com/code4fukui/LGCode)

## Usage

Import the component scripts, then add the custom elements to your HTML.

```html
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode.js"></script>
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode-ward.js"></script>

<h3>City-level selection</h3>
<input-lgcode id="city"></input-lgcode>

<h3>Ward-level selection</h3>
<input-lgcode-ward id="ward"></input-lgcode-ward>

<hr>
<p>Selected code: <input id="selected" readonly></p>
<button id="set-sabae">Set to Sabae City (182079)</button>
<button id="set-sapporo">Set to Sapporo Chuo-ku (011011)</button>

<script type="module">
  // Listen for changes
  city.onchange = () => {
    selected.value = city.value;
  };
  ward.onchange = () => {
    selected.value = ward.value;
  };

  // Programmatically set values
  document.getElementById("set-sabae").onclick = () => {
    // This will update both, but only the city-level one will show a valid selection
    city.value = "182079";
    ward.value = "182079";
    selected.value = city.value;
  };
  document.getElementById("set-sapporo").onclick = () => {
    // This will update both, and the ward-level one will show the full selection
    city.value = "011011";
    ward.value = "011011";
    selected.value = ward.value;
  };
</script>
```

## Attribution

App: [福野泰介の一日一創](https://fukuno.jig.jp/3356)

## License

MIT License