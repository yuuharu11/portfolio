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

お知らせ・学歴・職務経験・論文・受賞歴は、それぞれ `news`・`education`・`experience`・`publications`・`awards` に追加します。各項目は `date`・`title` と、任意の `description`・`url` を持ちます。配列が空 (`[]`) のセクションは表示されません。制作物やスキルも空の配列で非表示にできます。

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
