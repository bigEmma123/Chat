<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Chat </title>
    <link rel="stylesheet" href={{ asset('css/app.css') }}>
     <link rel="stylesheet" href={{ asset('css/custom.css') }}>
  </head>
  <body>
    <div class="container">
    <div class="" id='app'>
       <h2 class='jumbotron'>Laravel Realtime</h2>
       @{{ message }}
       <input class='form-control ' v-model="message"  @keyup.enter='send()' />
       <div class='row'>
         <div class='col-md-6'>
           <message v-for="value in chat.messages" v-bind:key='value.index' >
          @{{ value }} </message>
        </div>
       

      
    </div>

    </div> 
<script src={{ asset('js/app.js')}} charset="utf-8"></script>
<script src={{ asset('js/bootstrap.js') }}></script>
</body>
</html>
