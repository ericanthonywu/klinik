<head>
    <meta charset="utf-8" />
    <title>Sistem Klinik</title>
    <meta name="description" content="Latest updates and statistic charts">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta name="author" content="Eric Anthony">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--begin::Web font -->
    <script src="{{url('https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js')}}"></script>
    <script>
        WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>

    <!--end::Web font -->

    <!--begin::Global Theme Styles -->
    <link href="{{url('assets/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />

    <!--RTL version:<link href="assets/vendors/base/vendors.bundle.rtl.css" rel="stylesheet" type="text/css" />-->
    <link href="{{url('assets/demo/demo12/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />

    <!--RTL version:<link href="assets/demo/demo12/base/style.bundle.rtl.css" rel="stylesheet" type="text/css" />-->

    <!--end::Global Theme Styles -->

    <!--begin::Page Vendors Styles -->
    <link href="{{url('assets/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet" type="text/css" />

    <!--RTL version:<link href="assets/vendors/custom/fullcalendar/fullcalendar.bundle.rtl.css" rel="stylesheet" type="text/css" />-->

    <!--end::Page Vendors Styles -->
    <link rel="shortcut icon" href="{{url('assets/demo/demo12/media/img/logo/favicon.ico')}}" />
    <link rel="stylesheet" href="{{url('assets/vendors/custom/datatables/datatables.bundle.css')}}">
{{--    <link rel="stylesheet" href="{{url('assets/select2/css/select2.min.css')}}">--}}
    <link rel="stylesheet" href="{{url('assets/select2/css/select2-bootstrap.min.css')}}">
</head>