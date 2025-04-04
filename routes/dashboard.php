<?php

use App\Http\Controllers\Dashboard\AccountController;
use Illuminate\Support\Facades\Route;

Route::prefix('/dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/dashboard/overview')->name('dashboard');

    Route::get('/overview', fn () => inertia('dashboard/overview'));

    Route::prefix('/accounts')->group(function () {
        Route::get('/', [AccountController::class, 'index']);
    });
});
