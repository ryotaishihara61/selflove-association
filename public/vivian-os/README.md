# ビビアン教育OS - 先生向けランディングページ

## 概要

このディレクトリには、「ビビアン教育OS」の先生向けランディングページが含まれています。
既存サイト（selflove.or.jp）とは独立したスタンドアロンページとして実装されています。

## アクセスURL

```
https://selflove.or.jp/vivian-os/
```

## ディレクトリ構造

```
vivian-os/
├── index.html              # メインHTMLファイル
├── assets/
│   ├── css/
│   │   └── style.css       # LP専用CSSファイル
│   ├── js/
│   │   └── script.js       # LP専用JavaScriptファイル
│   └── images/
│       ├── hero.png        # ファーストビュー背景画像（要配置）
│       └── gallery/        # 実施校写真ギャラリー画像（任意）
└── README.md               # このファイル
```

## セットアップ手順

### 1. 画像の配置

#### 必須：ファーストビュー背景画像

`/vivian-os/assets/images/hero.png` に背景画像を配置してください。

- **推奨サイズ**: 1920px × 1080px 以上
- **形式**: PNG, JPG
- **注意**: 画像の左側に十分な余白があることを確認してください（テキストが左寄せで配置されます）

#### 任意：実施校写真ギャラリー

`/vivian-os/assets/images/gallery/` ディレクトリに写真を配置できます。

配置方法：
1. `/vivian-os/assets/js/script.js` を開く
2. `GALLERY_IMAGES` 配列のコメントを解除し、画像パスを設定

```javascript
const GALLERY_IMAGES = [
  { src: './assets/images/gallery/1.jpg', alt: '実施のようす1' },
  { src: './assets/images/gallery/2.jpg', alt: '実施のようす2' },
  { src: './assets/images/gallery/3.jpg', alt: '実施のようす3' },
  // ... 必要な枚数を追加
];
```

画像を配置しない場合は、プレースホルダーが自動表示されます。

### 2. Googleフォームの設定

勉強会申込フォームのURLを設定してください。

1. `/vivian-os/assets/js/script.js` を開く
2. `CONFIG.WORKSHOP_FORM_URL` を実際のGoogleフォームURLに変更

```javascript
const CONFIG = {
  WORKSHOP_FORM_URL: 'https://forms.gle/xxxxxxxxxxxxx', // ← ここを変更すれば全CTAが更新されます
};
```

**重要**: このURL変更だけで、以下のすべてのCTAボタンが自動更新されます：
- ファーストビューCTA
- 最終CTAボタン
- モバイル固定CTA

### 3. 先生の声の編集（任意）

`/vivian-os/assets/js/script.js` の `TESTIMONIALS` 配列を編集することで、先生の声を追加・編集できます。

```javascript
const TESTIMONIALS = [
  {
    summary: '短い要約（15〜25文字）', // 太字で表示されます
    text: '本文（2〜3行程度が読みやすい）',
    author: '所属・役職',
  },
  // ... 必要な数だけ追加
];
```

## カスタマイズ

### CSSのカスタマイズ

`/vivian-os/assets/css/style.css` を編集してください。

- **接頭辞**: 全てのクラス名は `.vivian-` で始まります
- **カラースキーム**: 既存サイトのピンク/オレンジ系を踏襲
- **レスポンシブ**: タブレット（768px以上）、デスクトップ（1024px以上）に対応

### JavaScriptのカスタマイズ

`/vivian-os/assets/js/script.js` を編集してください。

主な機能：
- モバイルメニューのトグル
- FAQアコーディオン
- ギャラリーモーダル
- 先生の声の動的生成
- スムーズスクロール

## 技術仕様

### フレームワーク

- なし（Pure HTML/CSS/JavaScript）

### 外部ライブラリ

- **Google Fonts**: Noto Sans JP, Pacifico
- **Remix Icon**: アイコンフォント

### ブラウザ対応

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- モバイルブラウザ（iOS Safari, Chrome for Android）

### レスポンシブ対応

- モバイル：〜767px
- タブレット：768px〜1023px
- デスクトップ：1024px以上

## 注意事項

### CSS/JSの衝突回避

既存サイトとの衝突を避けるため、以下のルールを守ってください：

1. **CSSクラス名**: 必ず `.vivian-` 接頭辞を使用
2. **JavaScript**: グローバル変数を使用しない
3. **ID属性**: 既存サイトと重複しないようにする

### 既存サイトとの連携

- ヘッダー・フッターは既存サイトの構造を再現しています
- ロゴ画像やリンクは既存サイトのパスを使用しています
- 既存サイトのHTML/CSS/JSは一切変更していません

## トラブルシューティング

### 画像が表示されない

1. 画像ファイルが正しいパスに配置されているか確認
2. ファイル名が正しいか確認（大文字小文字を区別）
3. 画像形式が対応しているか確認（PNG, JPG, GIF, SVG）

### Googleフォームに遷移しない

1. `script.js` の `CONFIG.GOOGLE_FORM_URL` が正しく設定されているか確認
2. URLが `https://` で始まっているか確認

### モバイルメニューが動作しない

1. ブラウザのコンソールでエラーがないか確認
2. `script.js` が正しく読み込まれているか確認

## お問い合わせ

技術的な質問やバグ報告は、開発者までご連絡ください。

## 更新履歴

- 2025-12-17 v1.1: 微調整完了
  - hero画像（vivian-os.png）を反映
  - GoogleフォームURL管理を WORKSHOP_FORM_URL に変更（一元管理強化）
  - 勉強会概要に具体的な情報追加（開催頻度、所要時間、申込締切など）
  - 5点訴求カードの補足文を具体化
  - 先生の声に要約（summary）を追加し、読みやすさ向上
  - ギャラリー実写真対応のコメント改善
- 2025-12-17 v1.0: 初版作成
