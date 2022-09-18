# input-lgcode
 
地方公共団体コードタグ, input-lgcodeタグ

## sample

https://code4fukui.github.io/input-lgcode/

## usage

```html
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode.js"></script>

<input-lgcode id="lgcode"></input-lgcode><br>

<p><input id="selected"></p>
<p><button id="set">18207(福井県鯖江市)をセット</button></p>

<script type="module">
lgcode.onchange = () => {
  selected.value = lgcode.value;
};
set.onclick = () => {
  lgcode.value = 18207;
};
</script>
```

## dependencies

- [select-city](https://github.com/code4fukui/select-city)
- [LGCode](https://github.com/code4fukui/LGCode)
