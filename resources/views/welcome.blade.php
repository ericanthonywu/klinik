<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href="{{url('css/login.css')}}" rel="stylesheet">
    {{--<link href="{{url('css/app.css')}}" rel="stylesheet">--}}
</head>
<body>
<div class="page">
    <div class="container">
        <div class="left">
            <div class="login">Login</div>
            <div class="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read
            </div>
        </div>
        <div class="right">
            <svg viewBox="0 0 320 300">
                <defs>
                    <linearGradient
                            inkscape:collect="always"
                            id="linearGradient"
                            x1="13"
                            y1="193.49992"
                            x2="307"
                            y2="193.49992"
                            gradientUnits="userSpaceOnUse">
                        <stop
                                style="stop-color:#ff00ff;"
                                offset="0"
                                id="stop876"/>
                        <stop
                                style="stop-color:#ff0000;"
                                offset="1"
                                id="stop878"/>
                    </linearGradient>
                </defs>
                <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"/>
            </svg>
            <form class="form" autocomplete="off" id="formlogin">
                {{csrf_field()}}
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <input type="submit" id="submit" value="Submit">
            </form>
        </div>
    </div>
</div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src="{{url('js/jquery.js')}}"></script>
<script src="{{url('js/login.js')}}"></script>
<script>
    $(document).ready(() => {
        $('#username').on('keypress', e => {
            if (e.keyCode == 13) {
                $('#password').focus();
            }
        });
        $('#password').on('keypress', e => {
            if (e.keyCode == 13) {
                $('#submit').focus();
            }
        });
    });
    $('#formlogin').on('submit', e => {
        e.preventDefault();
        // let data = new FormData(e.target);
        let user = $('#username').val();
        let pass = $('#password').val();
        if (user && pass) {
            const data = new FormData(e.target);
            $.ajax({
                type: 'POST',
                url: "{{url('/login')}}",
                cache: false,
                contentType: false,
                processData: false,
                data: data,
                success: (res) => {
                    if (res) {
                        alert(res);
                    } else {
                        location.href = "{{url('/home')}}"
                    }
                }
            })
        }
    });
</script>
</html>

{{--<!doctype html>--}}
{{--<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">--}}
{{--<head>--}}
{{--<meta charset="utf-8">--}}
{{--<meta name="viewport" content="width=device-width, initial-scale=1">--}}
{{--<title>Laravel</title>--}}
{{--<link href="{{url('css/app.css')}}" rel="stylesheet">--}}
{{--</head>--}}
{{--<body>--}}
{{--<div>--}}
{{--<form action="{{url('/login')}}" method="post">--}}
{{--<h1> Login </h1>--}}
{{--{{csrf_field()}}--}}
{{--<input type="text" name="username" class="form-control">--}}
{{--<input type="password" name="password" class="form-control">--}}
{{--<input type="submit" value="Login">--}}
{{--</form>--}}
{{--</div>--}}
{{--<div>--}}
{{--<form action="{{url('/register')}}" method="post">--}}
{{--<h1> Register </h1>--}}
{{--{{csrf_field()}}--}}
{{--<input type="text" name="username" class="form-control">--}}
{{--<input type="password" name="password" class="form-control">--}}
{{--<input type="submit" value="Register">--}}
{{--</form>--}}
{{--</div>--}}
{{--</body>--}}
{{--</html>--}}
