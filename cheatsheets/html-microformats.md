---
title: Microformats
category: HTML
intro: |
  HTML microformats for embedding author and time metadata in web pages.
---

### Author

``` html
<span class="entry-author" itemprop="author" itemscope="itemscope" itemtype="https://schema.org/Person">
  <a href="https://AUTHORPAGE" class="entry-author-link" itemprop="url" rel="author">
    <span class="entry-author-name" itemprop="name">AUTHORNAME</span>
  </a>
</span>
```

### Time

``` html
<time class="entry-time" itemprop="datePublished" datetime="2009-02-09T20:04:00+00:00">February 9, 2009</time>
```
