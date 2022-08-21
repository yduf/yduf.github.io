---
title: Quadratic Equations
published: true
tags: math algorithm avx float
use_math: true
---
> Numerically stable algorithm for solving the quadratic equation when a
is very small or 0 - [SE](https://math.stackexchange.com/questions/866331/numerically-stable-algorithm-for-solving-the-quadratic-equation-when-a-is-very?newreg=70e12aede30e4337bbadac3882aa8108)


## [Numerically Stable Method for Solving Quadratic Equations](https://people.csail.mit.edu/bkph/articles/Quadratics.pdf)

### Context  
We want to solve $ax²+bx+c=0$

By multiplying by $4a$ and [completing the square]() by adding $b²-b²$, we obtain:  
$(2ax+b)²+(4ac-b²)=0$

From which, one can found, the most known form:
$x=\frac{-b±\sqrt{b²-4ac}}{2a}$

By instead completing the square in $a+\frac{b}{x}+\frac{c}{x2}=0$  
one find the [_Citardauq_ formula _("quadratic", reversed)_](https://math.stackexchange.com/questions/2072174/citardauq-formula-derivation):  
$x = \frac{2c}{−b ∓ \sqrt{b² − 4ac}}$  where $∓=−(±)$

And finally combining this two formula, we can see that:
$x_1 x_2 = \frac{c}{a}$ and $x_1 + x_2 = \frac{−b}{a}$ 

### [Numerical Issue](https://math.stackexchange.com/a/2007723/1087524)

In numerical analysis, [catastrophic cancellation](https://en.wikipedia.org/wiki/Catastrophic_cancellation) is the phenomenon that subtracting good approximations to two nearby numbers may yield a very bad approximation to the difference of the original numbers.

This can happens here, if the term, $4ac$, is small compared to $b²$, in which case $b$ has about the same magnitude as $\sqrt{b² − 4ac}$, and if using the formula where the radical has the same sign has $b$, then catastropic cancellation occurs.

Fortunately, the two quadratic formulas have opposite signs on the radical term for the same roots, thus it is possible to avoid catastrophic cancellation by selecting the stable form, ie:  
$x_1=\frac{−b−\sign(b) \sqrt{b²−4ac}}{2a}     x_2 =\frac{c}{a x_1}$

### [$b²-4ac$](https://stackoverflow.com/a/50065711/51386)

An additional issue to be considered is the accurate computation of the term $b²-4ac$. It is examined in detail by [William Kahan (2004)](https://people.eecs.berkeley.edu/~wkahan/Qdrtcs.pdf).

The discriminant $ b^{2}-4ac$ needs to be computed in arithmetic of twice the precision of the result (e.g. quad precision if the final result is to be accurate to full double precision).

[Recent follow-up work (2013)](https://hal.inria.fr/ensl-00649347/en) to Kahan's note looked at the more general issue of computing the difference of two products $ab-cd$.

This makes use of the fused multiply-add operation, or _FMA_ ... FMA computes $a*b+c$ using the full product (neither rounded nor truncated in any way) and applies a single rounding at the end. 

This allows the accurate computation of the product of two native-precision floating-point numbers as the unevaluated sum of two native-precision floating-point numbers, without resorting to the use of extended-precision arithmetic in intermediate computation: $h = a * b$ and $l = fma (a, b,- h)$ where $h+l$ represents the product $a*b$ exactly. This provides for the efficient computation of $ab-cd$ as follows:

{% highlight cpp %}
/*
  diff_of_products() computes a*b-c*d with a maximum error <= 1.5 ulp

  Claude-Pierre Jeannerod, Nicolas Louvet, and Jean-Michel Muller, 
  "Further Analysis of Kahan's Algorithm for the Accurate Computation 
  of 2x2 Determinants". Mathematics of Computation, Vol. 82, No. 284, 
  Oct. 2013, pp. 2245-2264
*/
double diff_of_products (double a, double b, double c, double d)
{
    double w = d * c;
    double e = fma (-d, c, w);
    double f = fma (a, b, -w);
    return f + e;
}
{% endhighlight %}


[To illustrate this](https://en.wikipedia.org/wiki/Loss_of_significance#A_better_algorithm), consider the following quadratic equation, adapted from Kahan (2004):

$ 94906265.625 x 2 − 189812534 x + 94906268.375 = 0$

This equation has Δ = 7.5625 and roots:
$x_1 = 1.000000028975958$,  
$x_2 = 1.000000000000000$

When computed with appropriate resolution.

### [Code](https://stackoverflow.com/a/50065711/51386)

With this building block, the real roots of a quadratic equation can be computed with high accuracy as follows, provided the discriminant is positive:

{% highlight cpp %}
/* compute the real roots of a quadratic equation: ax² + bx + c = 0, 
   provided the discriminant b²-4ac is positive
*/
void solve_quadratic (double a, double b, double c, double *x0, double *x1)
{
    double q = -0.5 * (b + copysign (sqrt (diff_of_products (b, b, 4.0*a, c)), b));
    *x0 = q / a;
    *x1 = c / q;
}
{% endhighlight %}

## [Case Illustration](https://en.wikipedia.org/wiki/Loss_of_significance#Instability_of_the_quadratic_equation)

For castrophic cancellation

### $x^{2}+200x-0.000015=0.$

Expected solutions:  
$x_1=-200.000000075$ and $x_2=0.000000075$

### $x^{2}-1.786737601482363x+2.054360090947453\times 10^{-8}=0.$

Expected solutions:  
$ x_{1}=1.786737589984535$ and $ x_{2}=1.149782767465722\times 10^{-8} $


### Notes

**When a=0**: thus the equation is linear and has at most one root given by −c/b. It should be noted that if b=0 as well, the equation is actually c=0 and leaves x undefined/unconstrained!

**When a≠0 and c=0**: thus one root is at x=0. In this case, the second form of the quadratic equation will yield a NaN (0/0) for the second root. It is best therefore to determine the second root by factoring out the root at zero to give −b/a.

**On platforms without hardware support for FMA**, fma() must use emulation, which is often quite slow, and some emulations have been found to have serious [functional deficiencies](https://stackoverflow.com/questions/42166563/is-my-fma-broken?noredirect=1&lq=1).

## see also
- [Numerically Stable Method for Solving Quadratic Equations](https://people.csail.mit.edu/bkph/articles/Quadratics.pdf)
- [Numerically stable algorithm for solving the quadratic equation when a
is very small or 0](https://math.stackexchange.com/questions/866331/numerically-stable-algorithm-for-solving-the-quadratic-equation-when-a-is-very?newreg=70e12aede30e4337bbadac3882aa8108)
- [Numerically stable method for solving quadratic equations](https://stackoverflow.com/questions/48979861/numerically-stable-method-for-solving-quadratic-equations)
- [Loss of significance](https://en.wikipedia.org/wiki/Loss_of_significance#Instability_of_the_quadratic_equation) - has a detail explanation for a stable algorithm
- [Kahan summation algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) - also known as compensated summation,[1] significantly reduces the numerical error in the total obtained by adding a sequence of finite-precision floating-point numbers, compared to the obvious approach.
- The [Herbie](http://herbie.uwplse.org/) tool for automatically rearranging floating point expressions to reduce rounding error 