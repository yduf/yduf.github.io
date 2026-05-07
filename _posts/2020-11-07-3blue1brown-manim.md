---
published: true
title: Manim (3Blue1Brown) 🎬
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

- [Manim Basics in 100 Seconds](https://www.youtube.com/watch?v=rIgOfmcd1iA)

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

## [Mobjects ⮺](https://docs.manim.community/en/stable/tutorials/building_blocks.html#mobjects)

Mobjects are the basic building blocks for all manim animations. Each class that derives from Mobject represents an object that can be displayed on the screen. 

## [VGroup ⮺](https://docs.manim.community/en/stable/reference/manim.mobject.types.vectorized_mobject.VGroup.html)

a VGroup (short for Vectorized Group) is a container that let you “bundle” shape together so you can move, scale, or animate them all at once:
- Holds multiple vectorized mobjects (like shapes, text, lines)
- Lets you apply transformations to the whole group
- Keeps relative positioning between its elements

{% highlight python %}
from manim import *

class VGroupExample(Scene):
    def construct(self):
        circle = Circle()
        square = Square().shift(RIGHT)
        triangle = Triangle().shift(LEFT)

        group = VGroup(circle, square, triangle)

        self.play(Create(group))
        self.play(group.animate.shift(UP))
{% endhighlight %}

## [Scene ⮺](https://docs.manim.community/en/stable/tutorials/building_blocks.html#scenes)

The _Scene_ class is the connective tissue of manim. Every mobject has to be added to a scene to be displayed, or removed from it to cease being displayed. Every animation has to be played by a scene, and every time interval where no animation occurs is determined by a call to wait(). 

## Animation

- [88 Manim Animations in ONE Video ](https://www.youtube.com/watch?v=5qj3b7DY5oA&t=50s)

## Graph

- [ 2D Graphs](https://www.youtube.com/watch?v=jFqYq9quBds&list=PL3Q3QFVgazl1qr948EOpix__PrVxjg4RO&index=9)
- [Graphing with Updaters](https://www.youtube.com/watch?v=kXqAme1jCmg&list=PL3Q3QFVgazl1qr948EOpix__PrVxjg4RO&index=10)
- [ 3D Graphing](https://www.youtube.com/watch?v=FEtYAw3sI9Y&list=PL3Q3QFVgazl1qr948EOpix__PrVxjg4RO&index=52)