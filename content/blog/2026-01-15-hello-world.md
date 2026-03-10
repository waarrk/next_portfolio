---
title: "はじめての投稿"
date: "2026-01-15"
description: "ポートフォリオサイトを作りました。"
tags: ["雑記"]
draft: false
---

# はじめての投稿

このサイトはNext.jsで作ったポートフォリオ兼ブログです。

記事はMarkdownで書いて、Gitリポジトリにコミットするだけで更新できます。

## 機能

- Markdownブログ
- コードハイライト
- 写真ギャラリー（EXIFメタデータ表示）
- ダークモード

## コードサンプル

```typescript title="hello.ts"
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

```python title="fibonacci.py"
def fibonacci(n: int) -> list[int]:
    if n <= 0:
        return []
    seq = [0, 1]
    while len(seq) < n:
        seq.append(seq[-1] + seq[-2])
    return seq[:n]

print(fibonacci(10))
```

これからちょくちょく更新していきます。
