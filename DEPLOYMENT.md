# ロリポップ レンタルサーバー デプロイ手順（GitHub Actions版）

このドキュメントでは、一般社団法人セルフラブ協会のウェブサイトをロリポップのレンタルサーバーに**GitHub Actions経由で**デプロイする手順を説明します。

## 技術構成

- **フロントエンド**: Vite + React（SPA）
- **ルーティング**: react-router-dom（BrowserRouter）
- **ビルド**: `npm run build` → `out`ディレクトリに静的ファイル生成
- **ホスティング**: ロリポップ（通常のレンタルサーバー）
- **デプロイ方式**: GitHub Actions + FTP Deploy Action

## 前提条件

- GitHubリポジトリが作成されていること
- ロリポップのレンタルサーバー契約があること
- ロリポップのFTP情報（サーバー、アカウント、パスワード）が確認できること

## 初回セットアップ

### 1. GitHub Secretsの設定

GitHubリポジトリの設定画面で、以下のSecretsを登録してください：

1. リポジトリページで `Settings` → `Secrets and variables` → `Actions` を開く
2. `New repository secret` をクリックし、以下の3つを追加：

| Secret名 | 説明 | 取得方法 |
|----------|------|----------|
| `FTP_SERVER` | FTPサーバーアドレス | ロリポップのユーザー専用ページ「アカウント情報」→「サーバー情報」 |
| `FTP_USERNAME` | FTPアカウント名 | ロリポップのユーザー専用ページ「アカウント情報」→「サーバー情報」 |
| `FTP_PASSWORD` | FTPパスワード | ロリポップのユーザー専用ページ「アカウント情報」→「サーバー情報」 |

### 2. FTP接続テスト

Secretsの設定が完了したら、まず接続テストを実行します：

1. GitHubリポジトリの `Actions` タブを開く
2. 左側のワークフロー一覧から `Test FTP Connection` を選択
3. `Run workflow` → `Run workflow` をクリック
4. ワークフローが成功すれば、FTP接続設定は正しいです

**失敗した場合**:
- Secretsの値が正しいか確認
- ロリポップのFTP設定が有効か確認
- FTPサーバーアドレスに `ftp://` などのプレフィックスが含まれていないか確認

## デプロイ方法

### 方法1: 自動デプロイ（推奨）

`master`ブランチに変更をpushすると、自動的にデプロイが実行されます：

```bash
git add .
git commit -m "更新内容を記述"
git push origin master
```

デプロイの進行状況は、GitHubリポジトリの `Actions` タブで確認できます。

### 方法2: 手動デプロイ

任意のタイミングでデプロイを実行したい場合：

1. GitHubリポジトリの `Actions` タブを開く
2. 左側のワークフロー一覧から `Deploy to Lolipop` を選択
3. `Run workflow` → ブランチを選択 → `Run workflow` をクリック

## デプロイの流れ

GitHub Actionsによるデプロイは、以下の手順で自動実行されます：

1. **チェックアウト**: ソースコードを取得
2. **Node.jsセットアップ**: Node.js 20をインストール
3. **依存関係のインストール**: `npm ci` を実行
4. **ビルド実行**: `npm run build` を実行し、`out`ディレクトリに静的ファイルを生成
5. **ロリポップへデプロイ**: `out`ディレクトリの全ファイルをFTPでアップロード

## サブディレクトリへのデプロイ

ドメインのルートではなく、サブディレクトリ（例: `https://example.com/selflove/`）にデプロイする場合：

### 1. `deploy-lolipop.yml`を編集

`.github/workflows/deploy-lolipop.yml:43` の `server-dir` を変更：

```yaml
server-dir: /selflove/ # アップロード先のサブディレクトリ（必ず末尾に / が必要）
```

### 2. ビルド設定を変更

`deploy-lolipop.yml:28` のビルドコマンドを変更：

```yaml
- name: ビルド実行
  run: BASE_PATH=/selflove/ npm run build
```

## デプロイされるファイル

`out`ディレクトリ内の全ファイルがアップロードされます：

```
/
├── index.html
├── .htaccess (SPAルーティング対応)
├── assets/
│   ├── index.[hash].js
│   ├── index.[hash].css
│   ├── react-vendor.[hash].js
│   ├── i18n-vendor.[hash].js
│   └── ...
├── audio/
│   └── selflove.wav
└── selflove-okura.jpg
```

## デプロイ後の確認

### 1. トップページの表示確認

ブラウザで以下のURLにアクセスして、トップページが正しく表示されることを確認してください：
- ドメイン直下: `https://yourdomain.com/`
- サブディレクトリ: `https://yourdomain.com/selflove/`

### 2. ルーティングの確認

以下のURLに直接アクセスして、404エラーが発生せず正しくページが表示されることを確認してください：
- `/membership` - 入会案内
- `/member-rules` - 会則
- `/donation` - 寄付のお願い

### 3. リソースの読み込み確認

ブラウザの開発者ツール（F12）を開き、以下を確認してください：
- コンソールにエラーが表示されていないこと
- ネットワークタブで全てのリソースが正しく読み込まれていること（200 OK）

## トラブルシューティング

### GitHub Actionsのデプロイが失敗する

#### 症状1: FTP接続エラー
**エラーメッセージ**: `Error: connect ETIMEDOUT` または `Error: Login failed`

**対処法**:
1. GitHub Secretsの値が正しいか確認（特にスペースや改行が含まれていないか）
2. ロリポップのユーザー専用ページでFTP情報を再確認
3. ロリポップのFTP接続制限設定を確認

#### 症状2: ビルドエラー
**エラーメッセージ**: `npm ERR!` または `vite build failed`

**対処法**:
1. ローカルで `npm run build` を実行してエラーを確認
2. `package.json`の依存関係を確認
3. Node.jsのバージョンを確認（ワークフローではv20を使用）

#### 症状3: デプロイは成功するが404エラー

**原因**: `.htaccess`ファイルが正しくアップロードされていない、または有効になっていない

**対処法**:
1. FTPで実際のサーバーにアクセスし、`.htaccess`が存在するか確認
2. ロリポップのユーザー専用ページで`.htaccess`の使用が有効になっているか確認
3. `.htaccess`の内容が正しいか確認（`public/.htaccess`の内容）

### サブディレクトリにデプロイしたがCSSやJSが読み込まれない

**原因**: `BASE_PATH`の設定が正しくない

**対処法**:
1. `deploy-lolipop.yml`のビルドコマンドで`BASE_PATH`を指定しているか確認
2. `server-dir`とパスが一致しているか確認

### 画像や音声ファイルが表示されない

**原因**: `public`ディレクトリ内のファイルがビルド時にコピーされていない

**対処法**:
1. ローカルで`npm run build`を実行し、`out`ディレクトリに画像・音声ファイルが含まれているか確認
2. `vite.config.ts`の設定を確認

## ワークフローファイル

プロジェクトには2つのGitHub Actionsワークフローが含まれています：

### 1. `test-ftp.yml` - FTP接続テスト
- **用途**: FTP接続設定の検証（ファイルはアップロードしない）
- **トリガー**: 手動実行のみ
- **実行時間**: 約10秒

### 2. `deploy-lolipop.yml` - 本番デプロイ
- **用途**: ビルド & ロリポップへのデプロイ
- **トリガー**: masterブランチへのpush、または手動実行
- **実行時間**: 約2-3分

## ローカルでのビルド確認

デプロイ前にローカルでビルドを確認することをお勧めします：

```bash
# 依存関係のインストール
npm install

# ビルド実行
npm run build

# ビルド結果の確認
ls -la out/

# ローカルでプレビュー
npm run preview
```

## パフォーマンス最適化

`.htaccess`ファイルには以下の最適化設定が含まれています：

- **Gzip圧縮**: HTML、CSS、JavaScriptを圧縮して転送
- **ブラウザキャッシュ**: 静的ファイルをキャッシュして再訪問時の読み込みを高速化
  - 画像・フォント: 1年
  - CSS・JavaScript: 1ヶ月
  - HTML: キャッシュなし（常に最新版を配信）

## セキュリティ設定

`.htaccess`ファイルには以下のセキュリティ設定が含まれています：

- ディレクトリリスティングの無効化
- 隠しファイル（`.`で始まるファイル）へのアクセス禁止
- `.htaccess`ファイルへの直接アクセス禁止

## サポート

デプロイに関する問題が発生した場合は、以下を確認してください：

1. GitHub Actionsのログを確認（`Actions`タブ）
2. GitHub Secretsの設定を確認
3. ロリポップのFTP設定を確認
4. `.htaccess`の有効化設定を確認

それでも解決しない場合は、開発チームにお問い合わせください。
