# input-lgcode

地方公共団体コードを簡単に入力できるWeb コンポーネントです。地方公共団体コードには市区町村レベルの2桁コードと、さらに詳細な5桁コードの両方に対応しています。

## 機能
- 地方公共団体コードを入力できる
- 選択した地方公共団体コードを取得・設定できる

## 必要環境
- [select-city](https://github.com/code4fukui/select-city)
- [LGCode](https://github.com/code4fukui/LGCode)

## 使い方

```html
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode.js"></script>

<input-lgcode id="lgcode"></input-lgcode><br>

<p><input id="selected"></p>
<p><button id="set">18207 (福井県鯖江市) をセット</button></p>

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