# input-lgcode

日本の地方公共団体コードを選択するための入力フィールドを提供するウェブコンポーネントです。

## デモ

[ライブデモ](https://code4fukui.github.io/input-lgcode/)

## 機能

- 市区町村用の `<input-lgcode>` と、区用の `<input-lgcode-ward>` の2つのカスタム要素を提供します。
- 都道府県と市区町村/区を簡単に選択できるドロップダウンのセットとしてレンダリングされます。
- 標準の `.value` プロパティを通じて、選択された6桁の地方公共団体コードにアクセスできます。
- プログラムからの値の設定にも対応しています。

## 依存関係

- [select-city](https://github.com/code4fukui/select-city)
- [LGCode](https://github.com/code4fukui/LGCode)

## 使い方

コンポーネントのスクリプトをインポートし、HTMLにカスタム要素を追加します。

```html
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode.js"></script>
<script type="module" src="https://code4fukui.github.io/input-lgcode/input-lgcode-ward.js"></script>

<h3>市区町村レベルの選択</h3>
<input-lgcode id="city"></input-lgcode>

<h3>区レベルの選択</h3>
<input-lgcode-ward id="ward"></input-lgcode-ward>

<hr>
<p>選択されたコード: <input id="selected" readonly></p>
<button id="set-sabae">鯖江市（182079）に設定</button>
<button id="set-sapporo">札幌市中央区（011011）に設定</button>

<script type="module">
  // 変更をリッスンする
  city.onchange = () => {
    selected.value = city.value;
  };
  ward.onchange = () => {
    selected.value = ward.value;
  };

  // プログラムから値を設定する
  document.getElementById("set-sabae").onclick = () => {
    // 両方を更新しますが、市区町村レベルの要素でのみ有効な選択として表示されます
    city.value = "182079";
    ward.value = "182079";
    selected.value = city.value;
  };
  document.getElementById("set-sapporo").onclick = () => {
    // 両方を更新し、区レベルの要素では完全な選択状態が表示されます
    city.value = "011011";
    ward.value = "011011";
    selected.value = ward.value;
  };
</script>
```

## クレジット

アプリ: [福野泰介の一日一創](https://fukuno.jig.jp/3356)

## ライセンス

MIT License
