---
published: true
title: Manipulating Spreadsheet
tags: ruby
---
> Manipulating spreadsheets with Ruby - [rspreadsheet](https://github.com/gorn/rspreadsheet)

**Note that**  
- all indexes are 1-based. This applies to rows, cells cordinates, and all array like structures like list od worksheets etc. Spreadsheet world is 1-based, ruby is 0-based so I had to make a decision. I intend to make an global option for this, but in early stage I need to keep things simple.
- with numeric coordinates row always comes before col as in (row,col)
- with alphanumerical col always comes before row as in F12
- Shorter syntax worksheet[x,y] returns value, longer syntax worksheet.cell(x,y) return cell objects. This allows to work conviniently with values using short syntax and access the cell object if needed (to access formatting for example).
- Singular and plural like sheet/sheets, row/rows, cell/cells can be used intergangebly.
