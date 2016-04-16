# ng-table-controls

>This is angular js directive meant for adding a few table control tools on the top of any HTML table.

#### Getting Started
```sh
<link rel="stylesheet" href="/table-controls/css/table_controls.css">
<script src="/table-controls/js/table_controls.js"></script>
```

##### Dependcencies
[Bootstrap](http://getbootstrap.com/getting-started/#download), [Fontawesome](http://fortawesome.github.io/Font-Awesome/icons/)

#### Usage
```sh
<table-controls data-ng-model="filterText.firstName">
    <table>
        <thead>
            <th>First Name</th>
            <th>Last Name</th>
        </thead>
        <tr data-ng-repeat="customer in customers | filter: filterText">
            <td>{{ customer.firstName }}</td>
            <td>{{ customer.lastName }}</td>
        </tr>
    </table>
</table-controls>
```

#### Template Style
>**table_controls.css** contains classes which define the look and feel of table controls. You can customize these classes as per your need.
