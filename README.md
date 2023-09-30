

<div id="top"></div>

## 使用技術一覧

<p style="display: inline">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [動作確認](#動作確認)
4. [環境変数の一覧](#環境変数の一覧)

## プロジェクト名

都道府県別の人口推移

<!-- プロジェクトについて -->

## プロジェクトについて

1960~2045年の間の各都道府県の人口推移をグラフで表示するアプリです。各都道府県にチェックマークをいれることで、その都道府県の人口の増減を一目で把握することができます。

<!-- <p align="right">(<a href="#top">トップへ</a>)</p> -->

#### 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク      | バージョン   |
| --------------------- | ---------- |
| React                 | 18.2.0     |
| Next.js               | 13.4.10    |
| typescript            | 5.2.2      |

その他のパッケージのバージョンは package.json を参照してください

#### 動作確認

[Node.js](https://nodejs.org/en)が必須です。

1. [レポジトリ](https://github.com/mtake986/yumemi-coding-test)にアクセスして、
![緑色のCodeボタン](./public/images/greenCodeBtn.png "緑色のCodeボタン")緑色の`<>Code`ボタンをクリック
2. `Download ZIP`をクリックして、zipファイルをダウンロード。
もしくは、自身PCのターミナル（コマンドライン）にて`git clone HTTPSの下に表示されてる(https://github...)をコピペ`でクローンする
3. フォルダーに移動し、ターミナルで `npm i`を打ち、Enter。さらに`npm run dev` と打ち、Enter
4. ターミナルに表示されているリンク（例えば、http://localhost:3000/） にアクセスできるか確認。アクセスできたら成功

#### 環境変数の一覧

| 変数名                  | 役割                                       |
| ---------------------- | ----------------------------------------- |
| NEXT_PUBLIC_RESAS_API_KEY         | ResasAPIの自分のAPI Key　           　　|
| NEXT_PUBLIC_RESAS_CONTENT_TYPE    | ResasAPIのheaders用のContent-Type　　　 | 

#### 工夫したこと
- [x] 複数選択、全選択、全解除
- [x] 人口データを取得中のUI
- [x] スマホ対応

#### 達成できなかったこと
- [ ] custom hooksの実装（現状useContext）
- [ ] 十分なテストの実装
- [ ] 都道府県に地方別に分け、わかりやすく。
- [ ] グラフの点をホバー時に、前年からの人口増減を表示

[Coding Test Link](https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d)
