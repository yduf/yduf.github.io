---
title: Spare parts
published: true
tags: pc-hardware disk storage
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
