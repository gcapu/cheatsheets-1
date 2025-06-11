---
title: rename
category: CLI
intro: |
  `rename` is a command-line utility for renaming multiple files at once using regular expressions.
---

### Installation

```bash
brew install rename
```

See: <http://plasmasturm.org/code/rename/>

### Regex substitution

```bash
rename 's/hello/world/' *.txt
```

Rename `hello.txt` to `world.txt` and so on in `*.txt`.

### Replace extension

```bash
rename -s .png .jpg.png *.png
```

Replace `.png` with `.jpg.png` in `*.png`.

### Options

| Option | Description               |
| ---    | ---                       |
| `-n`   | Simulation                |
| `-l`   | Symlink instead of rename |
| `-i`   | Interactive               |

## Also see

- [Rename website](http://plasmasturm.org/code/rename/) _(plasmasturm.org)_
- [Alternative rename command (Debian/Ubuntu)](https://manpages.debian.org/unstable/rename/rename.1.en.html) _(manpages.debian.org)_
