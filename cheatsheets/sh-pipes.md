---
title: "Shell: named pipes"
category: CLI
intro: |
  Named pipes (also known as FIFOs) are a powerful shell feature that let you redirect the output of one command to the input of another, without creating temporary files.
---

### Named pipes

```sh
diff <(ls ./old) <(ls ./new)
```

This creates a virtual file with the contents of the output of `ls ./old`.

### References

* [Named pipe](https://en.wikipedia.org/wiki/Named_pipe) _(wikipedia.org)_
