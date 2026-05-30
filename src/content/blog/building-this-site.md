---
title: "How I built this site"
description: "A quick tour of the stack behind this portfolio — and why I kept it boring on purpose."
date: 2025-11-20
tags: ["Astro", "Web"]
---

I wanted a portfolio I could update in under a minute, that would never send me
a hosting bill, and that I'd actually enjoy writing in. Here's what I landed on.

## The stack

- **Astro** for the site itself — content-first and ships almost no JavaScript
- **Markdown** for every project and post, validated by a schema
- **Git + a static host** for deploys: push, and it's live a minute later

## Why boring is good

Every piece here is replaceable and well-documented. When I come back in a year,
nothing will have rotted, and I won't have to relearn a framework to fix a typo.

```ts
const posts = await getCollection('blog');
```

That's the whole "CMS." A folder of text files I own.
