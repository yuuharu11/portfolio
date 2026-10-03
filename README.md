# Portfolio

Astro + TypeScript のポートフォリオひな形です。白背景、中央のプロフィール、一覧形式の経歴・制作物で構成した個人サイトです。スマートフォンにも対応しています。

## ローカルで見る

Node.js 24 を使用します。

```bash
npm ci
npm run dev
```

ブラウザで http://localhost:4321/portfolio/ を開きます。

## 内容を編集する

- `src/data/portfolio.ts`: 名前、所属、紹介文、経歴、制作物、スキル、連絡先
- `src/styles/global.css`: 色、余白、レイアウト
- `src/pages/index.astro`: セクションの構成
- `astro.config.mjs`: 公開URLとパス

初期の文章、技術名、制作物はすべてサンプルです。公開前に自分の情報に置き換えてください。メールアドレスや制作物のリンクは未設定なら表示されません。

プロフィール写真は `public/images/profile.webp` などに置き、`profileImage: 'images/profile.webp'` を設定します。未設定なら名前の頭文字が表示されます。CVは `public/cv.pdf` に置き、`cvPath: 'cv.pdf'` を設定するとリンクが表示されます。

制作物の画像は `public/images/` に置き、該当する制作物に `image: 'images/my-app.webp'` と `imageAlt: 'アプリの画面'` を追加します。未設定なら文章のみの一覧になります。`demoUrl` と `sourceUrl` を設定するとリンクが表示されます。

お知らせ・学歴・職務経験・受賞歴は、それぞれ `news`・`education`・`experience`・`awards` に追加します。各項目は `date`・`title` と、任意の `description`・`url` を持ちます。配列が空 (`[]`) のセクションは表示されません。制作物も空の配列で非表示にできます。

資格・語学スコアは `qualifications` に追加します。受賞と同じ「受賞・資格」欄の中で、小見出しを分けて表示します。資格は合格・取得年月、語学スコアは試験名・スコア・受験年月を記載してください。

研究紹介は `research` に追加します。`researchPageUrl` に研究ページのURLを設定するとリンクが表示されます。準備中の場合は `researchPagePreparing: true` を設定します。画像は制作物と同様に `image`・`imageAlt` で設定できます。`conference` の `name`・`status`・`url` で学会名・発表／投稿状況・公式リンクを設定します。

発表・論文は `publications` に著者一覧・学会名・日付・主著／共著・発表状況・論文URLを記載します。本人の著者名は太字になります。著者や日付が未確定の場合は省略できます。査読の有無は任意の `review`、短い論文概要は `summary` に記載できます。

論文歴は `category` の「国際学会」「国内学会」で分けて表示します。投稿済み・採択待ちの論文は `status` にその状況を記載します。`repositoryUrl` と `repositoryPrivate` でGitHubリンクと非公開表記を設定できます。

## 確認する

```bash
npm run check
npm run build
npm run preview
```

## 完成後に GitHub Pages で公開する

制作中はリポジトリをプライベートのまま使用します。ワークフローは手動実行のみで、プライベートの場合は公開処理をスキップします。

1. サンプル文章・画像を置き換え、公開する内容とリンクを確認します。
2. コードをGitHubにpushします。
3. GitHubの Settings → General → Danger Zone → Change repository visibility で Public に変更します。リポジトリの履歴も公開されるので、秘密情報をコミットしないでください。
4. Settings → Pages → Build and deployment → Source を **GitHub Actions** にします。
5. Actions → Deploy to GitHub Pages → Run workflow を実行します。

公開URL: https://yuuharu11.github.io/portfolio/

公開後に自動更新したい場合は `.github/workflows/deploy.yml` の `on:` に `push: { branches: [main] }` を追加します（実際に使うブランチ名に合わせてください）。

設定の参考: [Astro公式 GitHub Pagesガイド](https://docs.astro.build/en/guides/deploy/github/)
