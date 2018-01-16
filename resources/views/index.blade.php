<!DOCTYPE html>
<!-- https://github.com/marcus-sa -->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Welcome to {!! $name !!}</title>

        <link rel="stylesheet" href="{!! $url !!}/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="{!! $url !!}/css/animate.min.css"/>
        <link rel="stylesheet" href="{!! $url !!}/css/material-design-iconic-font.min.css"/>
        <link rel="stylesheet" href="{!! $url !!}/css/app.css" />
    </head>
    <body>
        <!-- Page loader -->
        <div id="page-loader">
            <div class="preloader preloader--xl preloader--light">
                <svg viewBox="25 25 50 50">
                    <circle cx="50" cy="50" r="20"></circle>
                </svg>
            </div>
        </div>

        <app style="display: none;">
            <!-- If URI doesn't match any route this will just be shown -->
            <div class="page-error">
                <div class="page-error__inner">
                    <h2>SEX!</h2>
                    <p>Nah.. it's 404</p>
                </div>
            </div>
        </app>

        <script type="text/javascript">
            window.__data = '{!! $data !!}';

           window.onload = function () {
                document.querySelector('#page-loader').style.display = 'none';
                document.querySelector('app').style.display = 'block';
            }
        </script>
        <script type="text/javascript" src="{!! $script !!}"></script>
    </body>
</html>