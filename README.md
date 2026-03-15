# input-lgcode

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component that provides an input field for local government (Japan) codes.

## Demo
[Code4Fukui github.io demo](https://code4fukui.github.io/input-lgcode/)

## Features
- Provides an input field for selecting local government codes in Japan
- Supports both city and ward level codes
- Allows setting the initial value of the input field

## Requirements
- [select-city](https://github.com/code4fukui/select-city)
- [LGCode](https://github.com/code4fukui/LGCode)

## Usage

```html
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode.js"></script>

<input-lgcode id="lgcode"></input-lgcode><br>

<p><input id="selected"></p>
<p><button id="set">18207 (Sabae City, Fukui) をセット</button></p>

<script type="module">
lgcode.onchange = () => {
  selected.value = lgcode.value;
};
set.onclick = () => {
  lgcode.value = 18207;
};
</script>
```

## License
MIT License