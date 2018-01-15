<?php

Route::middleware('api')->group(function () {
   Route::group([
       'namespace' => 'Guest',
       'middleware' => 'guest'
   ], function () {
       Route::post('/register', 'RegisterController');
       Route::post('/login', 'LoginController');
   });

   Route::group([
       'namespace' => 'User',
       'middleware' => 'user',
       'prefix' => 'user'
   ], function () {
        //Route::post('/login', '');
   });

   Route::group([
       'namespace' => 'Admin',
       'middleware' => 'admin',
       'prefix' => 'admin'
   ], function () {
        //Route::post('/login', '');
   });
});