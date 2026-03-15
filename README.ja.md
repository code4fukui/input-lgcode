# input-lgcode

地方公共団体コードを簡単に入力できる input-lgcodeタグ

## デモ

https://code4fukui.github.io/input-lgcode/

## 機能

- 地方公共団体コードを入力できる
- 選択した地方公共団体コードを取得・設定できる

## 使い方

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

## ライセンス

MIT License