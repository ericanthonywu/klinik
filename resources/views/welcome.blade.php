<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href="{{url('css/app.css')}}" rel="stylesheet">
</head>
<body>
<div>
    <form action="{{url('/login')}}" method="post">
        <h1> Login </h1>
        {{csrf_field()}}
        <input type="text" name="username" class="form-control">
        <input type="password" name="password" class="form-control">
        <input type="submit" value="Login">
    </form>
</div>
<div>
    <form action="{{url('/register')}}" method="post">
        <h1> Register </h1>
        {{csrf_field()}}
        <input type="text" name="username" class="form-control">
        <input type="password" name="password" class="form-control">
        <input type="submit" value="Register">
    </form>
</div>
</body>
</html>
