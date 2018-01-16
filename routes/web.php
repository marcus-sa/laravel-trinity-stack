<?php

Route::get('/logout', 'LogoutController');
Route::fallback('FrontendController');
//Route::get('/{any}', 'FrontendController')->where('any', '^((?!api).)*$');