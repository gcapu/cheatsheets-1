---
title: Frequency separation retouching
category: Others
intro: |
  Frequency separation is a process that gives you independent control over the fine details and the coarse details of an image.
---

### Frequency separation retouching in Photoshop

Duplicate the layer twice. Perform these in each layer:
{: .-setup}

#### Lower layer

- Apply **Gaussian Blur**

#### Upper layer

- Set layer mask to **Linear light**
- Image → **Apply Image**
  - Layer: _(select the lower layer)_
  - Blending mode: `Subtract`
  - Scale: `2`
  - Offset: `128`

### Reference

- <https://phlearn.com/amazing-power-frequency-separation-retouching-photoshop>
{: .-also-see}
