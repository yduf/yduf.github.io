---
published: true
title: '#pragma omp parallel (OpenMP)'
tags: c++ thread codingame
---
> [Agade Arena example](https://github.com/Agade09/CG-UTTT-Arena/blob/f23807e5de22f590f2bce1e13e6406bdc31cb158/Arena.cpp#L506C5-L506C25)

- [Tutorials & Articles](https://www.openmp.org/resources/tutorials-articles/)

{% highlight cpp %}
    #pragma omp parallel num_threads(N_Threads) shared(points,Bot_Names,games)
    while(!stop){
        double winner{Play_Round(Bot_Names)};
        #pragma omp atomic
        points[0]+=winner;
        ...
        #pragma omp critical
        cout << "Wins:" << setprecision(4) << 100*p << "+-" << 100*sigma << "% Rounds:" << games << " Draws:" << draws << " " << better*100 << "% chance that " << Bot_Names[0] << " is better" << endl;
    }
{% endhighlight %}