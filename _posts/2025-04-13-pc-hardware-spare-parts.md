---
title: Spare parts
tags: pc-hardware disk storage
toc: true
---
> Inventory here.

<style>
.my-custom-table td,
.my-custom-table th {
  vertical-align: top;
  text-align: left;
  padding: 8px;
}

/* Optional: full custom styling for this table only */
.my-custom-table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ccc;
}

.my-custom-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}
</style>

### Spare hard drive
<table class="my-custom-table">
  {% for row in site.data.pc_disk_parts %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] | markdownify }}
    {% endtablerow %}
  {% endfor %}
</table>

# [SSD  ⮺]({% post_url 2025-11-28-hardware-SSD %})

# SATA

| Disk | Year | Capacity | comments |
| --- | --- | --- | --- |
| WD                | ?    |    2To | [Tristan]({% post_url 2026-10-16-pc-tristan %}) |
| WD                | 2011 |    2To | Fred    |
| Samsung HD103SJ   | 2010 |    1To |         |
| WD10EADS          | 2009 |    1To |         |
| WD5000AAKS        | 2007 |  0.5To |         |
| Hitachi           | 2003 | 0.12To |         |

**see also**
- [NAS]({% post_url 2019-01-21-home-nas %})