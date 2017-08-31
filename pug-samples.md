Pug bundle for Sublime Text 2/3: <https://packagecontrol.io/packages/Pug>

### Express app setup

```js
//////////////////////
// Express app setup
// ex: app.js
//////////////////////

// 1. require pug
const pug = require('pug');

// 2. template engine setup
app.set('views', './views'); // set 'views' to specify the templates dir
app.set('view engine', 'pug'); // set 'view engine' to specify pug
```

### Extend, Iteration, and Conditionals

* Basic examples:

```js
//////////////////////
// Acme Users PG
// ex: layout.pug
//////////////////////

html(lang='en')
  head
    meta(name='author' content='Colin FitzGerald')
    title Acme Users PG

    <!-- Bootstrap core CSS -->
    link(href='/vendor/bootstrap/dist/css/bootstrap.css' rel='stylesheet')
    <!-- Custom styles -->
    link(href='/stylesheets/style.css' rel='stylesheet')
    <!-- Google Fonts -->
    link(href='https://fonts.googleapis.com/css?family=Roboto:400,700|Zilla+Slab:300,400,700' rel='stylesheet')

    body
      div.container
        div.page-header
          h1 Acme Users #[small PG!]

        ul.nav.nav-pills
          li(class = (nav === 'home' ? 'active' : ''))
            a(href='/') Home
          li(class = (nav === 'users' ? 'active' : ''))
            a(href='/users') Users (#{userCount})
          li(class = (nav === 'managers' ? 'active' : ''))
            a(href='/users/managers') Managers (#{managerCount})

        block content

//////////////////////
// Acme Users PG
// ex: users.pug
// extends layout.pug
//////////////////////

extends layout

block content
  h2 Users
  ul.list-group
    each user in users
      li.list-group-item
        if user.is_manager
          h3.user-name #{user.name} #[label.manager Manager]
        else
          h3.user-name #{user.name}
          div.form-group
            form(method='POST' action='/users/' + user.id + '?_method=PUT')
              button.btn.btn-primary.btn-sm Make Manager
            form(method='POST' action='/users/' + user.id + '?_method=DELETE')
              button.btn.btn-danger.btn-sm Delete User

//////////////////////
// Acme Users PG
// resulting HTML
//////////////////////

<html lang="en">
  <head>
    <meta name="author" content="Colin FitzGerald"/>
    <title>Acme Users PG</title>
    <!-- Bootstrap core CSS -->
    <link href="/vendor/bootstrap/dist/css/bootstrap.css" rel="stylesheet"/>
    <!-- Custom styles -->
    <link href="/stylesheets/style.css" rel="stylesheet"/>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700|Zilla+Slab:300,400,700" rel="stylesheet"/>
    
    <body>
      <div class="container">
        <div class="page-header">
          <h1>Acme Users  <small>PG!</small></h1>
        </div>
        <ul class="nav nav-pills">
          <li>
            <a href="/">Home</a>
          </li>
          <li class="active">
            <a href="/users">Users (5)</a>
          </li>
          <li>
            <a href="/users/managers">Managers (2)</a>
          </li>
        </ul>
        <h2>Users</h2>
        <ul class="list-group">
          <li class="list-group-item">
            <h3 class="user-name">Hans Tanager 
              <label class="manager">Manager</label>
            </h3>
          </li>
          <li class="list-group-item">
            <h3 class="user-name">Gretta Muser</h3>
            <div class="form-group">
              <form method="POST" action="/users/2?_method=PUT">
                <button class="btn btn-primary btn-sm">Make Manager</button>
              </form>
              <form method="POST" action="/users/2?_method=DELETE">
                <button class="btn btn-danger btn-sm">Delete User</button>
              </form>
            </div>
          </li>
          <li class="list-group-item">
            <h3 class="user-name">Shrimply Pibbles 
              <label class="manager">Manager</label>
            </h3>
          </li>
          <li class="list-group-item">
            <h3 class="user-name">The Best User</h3>
            <div class="form-group">
              <form method="POST" action="/users/4?_method=PUT">
                <button class="btn btn-primary btn-sm">Make Manager</button>
              </form>
              <form method="POST" action="/users/4?_method=DELETE">
                <button class="btn btn-danger btn-sm">Delete User</button>
              </form>
            </div>
          </li>
          <li class="list-group-item">
            <h3 class="user-name">The Very Best User</h3>
            <div class="form-group">
              <form method="POST" action="/users/5?_method=PUT">
                <button class="btn btn-primary btn-sm">Make Manager</button>
              </form>
              <form method="POST" action="/users/5?_method=DELETE">
                <button class="btn btn-danger btn-sm">Delete User</button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </body>
  </head>
</html>
```

### Whitespace control

* [https://pugjs.org/language/plain-text.html\#whitespace-control](https://pugjs.org/language/plain-text.html#whitespace-control)

* Search bar example:

```js
//////////////////////
// Acme Users PG
// ex: layout.pug
//////////////////////

html(lang='en')
  head
    meta(name='author' content='Colin FitzGerald')
    title Acme Users PG

    <!-- Bootstrap core CSS -->
    link(href='/vendor/bootstrap/dist/css/bootstrap.css' rel='stylesheet')
    <!-- Custom styles -->
    link(href='/stylesheets/style.css' rel='stylesheet')
    <!-- Google Fonts -->
    link(href='https://fonts.googleapis.com/css?family=Roboto:400,700|Zilla+Slab:300,400,700' rel='stylesheet')

    body
      div.container
        div.page-header
          h1 Acme Users #[small PG!]

        ul.nav.nav-pills
          li(class = (nav === 'home' ? 'active' : ''))
            a(href='/') Home
          li(class = (nav === 'users' ? 'active' : ''))
            a(href='/users') Users (#{userCount})
          li(class = (nav === 'managers' ? 'active' : ''))
            a(href='/users/managers') Managers (#{managerCount})

        block content
        
//////////////////////
// Acme Users PG
// ex: index.pug
// extends layout.pug
//////////////////////

extends layout

block content

  form.well.well-lg(method='POST' action='/users')
    div.form-group
      div.input-group
        input.form-control(name='name' placeholder='add the name of a new user...')
        span.input-group-addon
          // AKWARD WHITESPACE CONTROL HERE!
          input#isManager(type='checkbox' name='is_manager')
          |
          |
          label(for='is_manager') Is Manager?
        span.input-group-btn
          button.btn.btn-success Add User

//////////////////////
// Acme Users PG
// resulting HTML
//////////////////////

<html lang="en">
<head>
  <meta name="author" content="Colin FitzGerald" />
  <title>Acme Users PG</title>
  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
  <!-- Custom styles -->
  <link href="/stylesheets/style.css" rel="stylesheet" />
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700|Zilla+Slab:300,400,700" rel="stylesheet" />

  <body>
    <div class="container">
      <div class="page-header">
        <h1>Acme Users <small>PG!</small></h1>
      </div>
      <ul class="nav nav-pills">
        <li class="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/users">Users (5)</a>
        </li>
        <li>
          <a href="/users/managers">Managers (2)</a>
        </li>
      </ul>
      <form class="well well-lg" method="POST" action="/users">
        <div class="form-group">
          <div class="input-group">
            <input class="form-control" name="name" placeholder="add the name of a new user..." /><span class="input-group-addon"><input id="isManager" type="checkbox" name="is_manager"/>
<label for="is_manager">Is Manager?</label></span><span class="input-group-btn"><button class="btn btn-success">Add User</button></span>
          </div>
        </div>
      </form>
    </div>
  </body>
</head>
</html>
```

### Tag interpolation

* <https://pugjs.org/language/interpolation.html>

* Search bar example:

```js
//////////////////////
// Acme Cart
// ex: layout.pug
//////////////////////

html(lang='en')
  head
    meta(name='author' content='Colin FitzGerald')
    title Acme Cart

    <!-- Bootstrap core CSS -->
    link(href='/vendor/bootstrap/dist/css/bootstrap.css' rel='stylesheet')
    <!-- Custom styles -->
    link(href='/stylesheets/style.css' rel='stylesheet')
    <!-- Google Fonts -->
    link(href='https://fonts.googleapis.com/css?family=Roboto:400,700|Zilla+Slab:300,400,700' rel='stylesheet')

    body
      div.container
        div.page-header
          h1 Acme Cart

        block content

//////////////////////
// Acme Cart
// ex: index.pug
// extends layout.pug
//////////////////////

extends layout

block content
 div.row

  div.col-sm-8
    h2 Products
    ul.list-group
      each product in viewModel.products
        li.list-group-item
          form(action='/orders/' + viewModel.cart.id + '/lineItems' method='POST')
            |
            |
            h3 #{ product.name }
              button.btn.btn-primary.pull-right Add to Cart!
              input(type='hidden' value=product.id name='productId')

  div.col-sm-4
    h2 Your Cart
    div.well
      ul.list-group
        each lineItem in viewModel.cart.lineItems
          // AWKWARD TAG INTERPOLATION HERE!
          // resulting HTML for these 3 lines below...
          li.list-group-item #{ lineItem.product.name } #[span.label.label-default.pull-right Quantity: #{ lineItem.quantity }]
            form(action='/orders/' + viewModel.cart.id + '/lineItems/' + lineItem.id + '?_method=DELETE' method='POST')
              button.btn.btn-warning.btn-sm Remove From Cart
      form(action='/orders/' + viewModel.cart.id + '?_method=PUT' method='POST')
        input(type='hidden' name='isCart' value='false')
        hr
        div.form-group
          label Shipping Address
          input.form-control(name='address')
          hr
          button.btn.btn-primary Place Order

    h2 Order History
    div#order
      ul.list-group
        each order in viewModel.orders
          li.list-group-item
            |
            |
            h4 Order# #[span.bold #{ order.id }]
            // simpler example of above... #[ and #{
            h4 Ship To: #[span.bold #{ order.address }]
            ul.list-group
              each lineItem in order.lineItems
                li.list-group-item.order-items #{ lineItem.product.name } #[span.label.label-default.pull-right Quantity: #{ lineItem.quantity }]
                
//////////////////////
// Acme Users PG
// resulting HTML
// 
// for:
//        each lineItem in viewModel.cart.lineItems
//          li.list-group-item #{ lineItem.product.name } #[span.label.label-default.pull-right Quantity: #{ lineItem.quantity }]
//            form(action='/orders/' + viewModel.cart.id + '/lineItems/' + lineItem.id + '?_method=DELETE' method='POST')
//              button.btn.btn-warning.btn-sm Remove From Cart
//
//////////////////////

            <ul class="list-group">
              // resulting interpolated tags...
              <li class="list-group-item">Plumbus <span class="label label-default pull-right">Quantity: 99</span>
                <form action="/orders/1/lineItems/1?_method=DELETE" method="POST">
                  <button class="btn btn-warning btn-sm">Remove From Cart</button>
                </form>
              </li>

```