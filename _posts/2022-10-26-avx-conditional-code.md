---
published: true
title: Condition in vector code
tags: c++ avx
---
> If a vector component is already finished, freeze it to avoid doing any further calculations on it. This is done by masking the finished components on any value assignment. The unfinished vector components will keep being updated, but finished ones won't. - [Controlling the Data Flow](https://www.codingame.com/playgrounds/283/sse-avx-vectorization/controlling-the-data-flow)

{% highlight cpp %}
inline v8f slowFunction(int i){
	usleep(2000); //Emulating an slow function
	v8f slow(-2.0f,+3.0f,-4.0f,+5.0f,-6.0f,+7.0f,-8.0f,+9.0f);
	slow += ((float)i)/40.0f;
	return slow;
}

v8f result(0.0f);
//Main loop to optimize	
for (int i=0;i<2000;++i) {
	 v8f test(1.4f,3.3f,-12.5f,-33.4f,7.9f,-70.2f,15.1f,22.6f);  
	 test += ((float)i)/100.0f;
	 result += if_select( test >= 38.0f, slowFunction(i), test );
}
{% endhighlight %}

## see also
- [How to use if condition in intrinsics](https://stackoverflow.com/questions/38006616/how-to-use-if-condition-in-intrinsics)