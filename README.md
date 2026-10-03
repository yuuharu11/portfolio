# Portfolio

個人ポートフォリオサイトのソースコードです。研究内容や論文歴、制作物・プロジェクト、学歴・職務経験を紹介しています。

AstroとTypeScriptで構築した静的サイトで、GitHub Pagesでの公開を想定しています。

公開先：<https://yuuharu11.github.io/portfolio/>

## 使用技術

- Astro
- TypeScript
- CSS
- GitHub Actions / GitHub Pages

## ローカルでの起動

Node.js 24を使用します。

```bash
npm ci
npm run dev
```

開発サーバー：<http://localhost:4321/portfolio/>

## チェック・ビルド

```bash
npm run check
npm run build
```

ビルド結果は`dist/`に出力されます。`npm run preview`でビルド後のサイトを確認できます。

## ディレクトリ構成

| パス | 内容 |
| --- | --- |
| `src/data/portfolio.ts` | プロフィール、経歴、研究、論文、プロジェクトの情報 |
| `src/pages/index.astro` | トップページ |
| `src/components/` | 経歴・研究・論文の表示コンポーネント |
| `src/styles/global.css` | サイト全体のスタイル |
| `img/` | 会報表紙などの画像 |
| `public/` | 静的ファイル |
| `astro.config.mjs` | サイトURLとビルド設定 |

## デプロイ

GitHub Actionsの`Deploy to GitHub Pages`ワークフローを手動実行すると、チェック・ビルド後にGitHub Pagesへデプロイします。
