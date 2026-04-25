---
published: true
title: Manim (3Blue1Brown) ∑
tags: math animation 3blue1brown vscode
toc: true
---
> Manim is an animation engine for explanatory math videos. It's used to create precise animations programmatically, as seen in the videos at [3Blue1Brown](https://www.3blue1brown.com/) - [3b1b/manim](https://github.com/3b1b/manim) / [HN](https://news.ycombinator.com/item?id=24926947)


**Notes** see the [Community Edition](https://docs.manim.community/en/stable/faq/installation.html#different-versions) for starter
- **Manim,** or **ManimCE** refers to the community maintained version of the library. 
- **ManimGL** is the latest released version of the version of the library developed by Grant “3b1b” Sanderson. It has more experimental features and breaking changes between versions are not documented. 
- **ManimCairo** is the name that is sometimes used for the old, pre-OpenGL version of manimgl.

![caption](https://raw.githubusercontent.com/3b1b/manim/master/logo/cropped.png)

see also
- [Ego and Math ](https://www.youtube.com/watch?v=z7GVHB2wiyg) - Stanford Math Department Commencement Speech 2023


# Setup

see [Fully working Manim setup](https://github.com/yduf/Manim-starter#fully-working-manim-setup-) using nix + uv

## [Why use the OpenGL renderer?  ⮺](https://web.archive.org/web/20250708135737/https://www.aquabeam.me/manim/opengl_guide/)

[Manim Live Rendering Options](https://chatgpt.com/share/69eb1e15-f6b4-83eb-a724-715aa78872ec)


## [VSCode ⮺](https://docs.manim.community/en/stable/installation.html#editors)

- [How To Run Manim Code With VS Code](https://manimclass.com/how-to-run-manim-code/)
- [Manim Sideview](https://open-vsx.org/extension/Rickaym/manim-sideview)

**Alternatives**
- is to use [Jupyter Notebooks](https://docs.manim.community/en/stable/installation.html#interactive-jupyter-notebooks-for-your-browser)

# [ Tutorials ⮺](https://docs.manim.community/en/stable/tutorials_guides.html#tutorials-guides)

- [	How I Animate 3Blue1Brown](https://www.youtube.com/watch?v=rbu7Zu5X1zI) / [HN](https://news.ycombinator.com/item?id=41818779)
- [Manim tutorial | Introduction: What is Manim? (2022 Update)](https://www.youtube.com/watch?v=ENMyFGmq5OA&list=PL2B6OzTsMUrwo4hA3BBfS7ZR34K361Z8F)

## [Hello World ⮺](https://docs.manim.community/en/stable/tutorials/quickstart.html)

{% highlight bash %}
$ manim init project my-project --default
{% endhighlight %}

{% highlight python %}
from manim import *


class CreateCircle(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
        self.play(Create(circle))  # show the circle on screen
{% endhighlight %}

## Example
- [IDS graph search Algorithm](https://www.youtube.com/watch?v=7DLmUKHdi6A) / [code](https://github.com/Danial-Kord/Artificial-Intelligence-Visualization)

