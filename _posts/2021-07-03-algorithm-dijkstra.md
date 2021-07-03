---
published: true
title: Dijkstra's Algorithm
tags: graph queue search blog
---
> Dijkstra's algorithm for the shortest-path problem is one of the most important graph algorithms... However, going from the pseudocode to an actual implementation is made difficult by the fact that it relies on a [priority queue]({% post_url 2021-07-03-cpp-priority-queue %}) with a "decrease key" operation... this operation is generally not supported. - [Actually Implementing Dijkstra's Algorithm](http://nmamano.com/blog/dijkstra/dijkstra.html)

## The graph's representation

A graph is a mathematical concept. In the context of graph algorithms, we need to specify how the graph is represented as a data structure. For Dijkstra's algorithm, the most convenient representation is [the adjacency list](https://en.wikipedia.org/wiki/Adjacency_list). The valuable thing about the adjacency list representation is that it allows us to iterate through the out-going edges of a node efficiently.

## Dijkstra's algorithm idea

One of the data structures that we maintain is a list dist where dist[u] is the best distance known for u so far. At the beginning, dist[s] = 0, and for every other node dist[u] = infinity. These distances improve during the algorithm as we consider new paths. Our goal is to get to the point where dist contains the correct distance for every node.

During the algorithm, the dist list is only updated through an operation called "relaxing" an edge.

{% highlight python %}
def relax(u,v,l): #l is the length of the edge (u,v)
    if dist[u] + l < dist[v]:
        dist[v] = dist[u] + l
{% endhighlight %}

Dijkstra's algorithm is efficient because every edge is relaxed only once (unlike other algorithms like Bellman-Ford, which relaxes the edges multiple times). To relax every edge only once, we must relax the out-going edges of each node only after we have found the correct distance for that node.

{% highlight python %}
dijkstra(G, s):
    dist = list of length n initialized with INF everywhere except for a 0 at position s
    mark every node as unvisited
    while there are unvisited nodes:
        u = unvisited node with smallest distance in dist
        mark u as visited
        for each edge (u,v):
            relax((u,v))
{% endhighlight %}

## Lazy Dijkstra

Dijkstra using a priority queue that does not support the change-priority operation. We need the following change: when we find a shorter distance to a node that is already in the priority-queue, instead of using the "change-priority" operation, we simply use an "insert" operation and add a copy of the node in the priority queue with the new distance. Then, when we extract a node from the priority queue, we ignore it if it is not the first time we extract that node. We call this version of Dijkstra "lazy Dijkstra" because we "postpone" the removal of the pre-existing copy of the node.

{% highlight cpp %}
vector<int> lazyDijkstra(const vector<vector<pair<int,int>>>& G, int s) {
    int n = G.size();
    vector<int> dist(n, INT_MAX);
    dist[s] = 0;
    vector<int> vis(n, false);
    //PQ of (distance, node) pairs prioritized by smallest distance
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> PQ;
    PQ.push({0, s});
    while (not PQ.empty()) {
        int u = PQ.top().second;
        PQ.pop();
        if (vis[u]) continue; //not first extraction
        vis[u] = true;
        for (auto edge : G[u]) {
            int v = edge.first, l = edge.second;
            if (dist[u]+l < dist[v]) {
                dist[v] = dist[u]+l;
                PQ.push({dist[v], v});
            }
        }
    }
    return dist;
}
{% endhighlight %}

Analysis: since nodes can be added to the priority queue multiple times, in lazy Dijkstra the maximum number of elements in the priority queue increases from O(n) to O(m). As a result, we do O(m) extract_min and insert operations. The total runtime is O(m*log m). This can be simplified to O(m*log n), because log m < log (n^2) = 2 log n = O(log n). Thus, in terms of big-O notation, lazy Dijkstra is equally fast as textbook Dijkstra (Dijkstra with an indexed priority queue). The only thing that got worse is the space used by the priority queue.

## See also:
- [Prim's algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) - a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.
- [AdjacencyLists: A Graph as a Collection of Lists ](http://opendatastructures.org/versions/edition-0.1e/ods-java/12_2_AdjacencyLists_Graph_a.html)
