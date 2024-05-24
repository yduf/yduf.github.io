---
published: true
title: WinDirStat
tags: system disk treemap
---
> WinDirStat is a disk usage statistics viewer - [Home](https://windirstat.net/)/[2](https://www.wikiwand.com/en/WinDirStat#Source_code) / [blog](https://blog.windirstat.net/) / [repo](https://osdn.net/projects/windirstat/#) / [github](https://github.com/windirstat/windirstat)

- [WinDirStat-next](https://github.com/windirstat/windirstat-next?tab=readme-ov-file#windirstat---windows-directory-statistics)  / [HN](https://news.ycombinator.com/item?id=40449767)
	- [QDirStat](https://github.com/shundhammer/qdirstat) - KDirStat without any KDE

- [ ariccio/altWinDirStat](https://github.com/ariccio/altWinDirStat) - An unofficial modification of WinDirStat. Tremendous performance improvements.

It uses [treemap](https://www.data-to-viz.com/graph/treemap.html) to represents each file as a colored rectangle, the area of which is proportional to the file's size.

- [Cushion Treemaps: Visualization of Hierarchical Information](https://www.win.tue.nl/~wstahw/publications/papers/ctm.pdf)

![caption](https://windirstat.net/images/windirstat.jpg)

## Project

Have same treemap vizualisation ported to linux

### CodeMap
- treemap code is in `windirstat/Controls/treemap.cpp` CTreemapPreview::OnPaint()
	- CTreemap::DrawTreemapDoubleBuffered()
    	- CTreemap::DrawTreemap()
		- CTreemap::RecurseDrawGraph()
        - RenderLeaf()
            - RenderRectangle()
            - DrawCushion()
        - CTreemap::DrawChildren()    


### see also
- [	Treemaps are awesome](https://news.ycombinator.com/item?id=36868940)
- [  Git Heat Map](https://news.ycombinator.com/item?id=34563851) – a tool for visualising git repo activity for each file
- [TreeSheets]({% post_url 2023-10-13-app-excel-treesheet %}) - A "hierarchical spreadsheet" that is a great replacement for spreadsheets
