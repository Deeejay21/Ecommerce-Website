<!DOCTYPE html>
<html lang="en" class="material-style layout-fixed">
@include('layouts.links.upper')
<body>
    <div id="app">
        @yield('content')
    </div>

@include('layouts.links.lower')
</body>
</html>