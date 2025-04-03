<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/dashboard', '/dashboard/overview')->name('dashboard');
    Route::get('/dashboard/overview', fn () => inertia('dashboard/overview'));
});
