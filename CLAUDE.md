# Task Board Project

## プロジェクト概要

タスク管理ボードアプリケーション。

## Git 運用ルール

### 基本方針

- **コードを変更するたびに GitHub にプッシュする**
- コミットは意味のある単位でまとめる（機能追加・バグ修正・リファクタなど）
- コミットメッセージは変更の「なぜ」を簡潔に記述する

### ブランチ戦略

- `main` ブランチが常にデプロイ可能な状態を保つ
- 機能開発は `feature/<name>` ブランチで行う
- バグ修正は `fix/<name>` ブランチで行う

### コミット & プッシュ手順

コードを変更したら以下の手順を実行する:

```powershell
git add <変更ファイル>
git commit -m "変更内容の説明"
git push origin <ブランチ名>
```

- `git add .` や `git add -A` は使わず、変更ファイルを明示的に指定する
- `.env` や認証情報が含まれるファイルはコミットしない
- 初回プッシュ時は `-u` フラグを付ける: `git push -u origin <ブランチ名>`

### Pull Request

- `main` へのマージは PR 経由で行う
- PR タイトルは 70 文字以内
- `gh pr create` コマンドで PR を作成する

## デプロイ先

https://hourglassfigure-smartman.github.io/samurai_task-board/

- `main` ブランチへのプッシュで GitHub Actions が自動ビルド・デプロイする
- ビルド成果物は `dist/` に出力される（`.gitignore` で除外済み）

## 技術スタック

| 種別 | 採用技術 |
|------|----------|
| UI ライブラリ | React 18 |
| ビルドツール | Vite 5 |
| 言語 | JavaScript (JSX) |
| スタイル | Plain CSS（CSS Modules 不使用） |
| 状態管理 | React `useState` / `useEffect` |
| 永続化 | `localStorage` |
| CI/CD | GitHub Actions |
| ホスティング | GitHub Pages |

## コンポーネント命名規約

### ファイル・コンポーネント名
- **PascalCase** を使用する（例: `TaskItem.jsx`）
- 1ファイル1コンポーネント、ファイル名とコンポーネント名を一致させる
- コンポーネントは `src/components/` に配置する

### CSS クラス名
- **BEM 記法**を使用する
  - ブロック: `.task-item`
  - エレメント: `.task-item__text`
  - モディファイア: `.task-item--completed`

### コンポーネント構成

```
src/
├── App.jsx              # ルートコンポーネント・状態管理
└── components/
    ├── TaskInput.jsx    # タスク入力フォーム
    ├── TaskList.jsx     # タスク一覧
    └── TaskItem.jsx     # 個別タスク行
```

## 開発ルール

- 不要なコメントは書かない（WHY が自明でない場合のみ記述）
- セキュリティ上の問題（XSS・SQLインジェクションなど）は即座に修正する
- 機能追加時は必ず動作確認を行う
