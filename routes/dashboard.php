<?php

use App\Http\Controllers\Dashboard\AccountController;
use Illuminate\Support\Facades\Route;

Route::prefix('/dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/dashboard/overview')->name('dashboard');

    Route::get('/overview', fn () => inertia('dashboard/overview'));

    Route::prefix('/accounts')->group(function () {
        Route::get('/', [AccountController::class, 'index'])->name('dashboard.accounts.index');

        Route::post('/', [AccountController::class, 'store'])->name('dashboard.accounts.store');

        Route::patch('/{account}', [AccountController::class, 'update'])->name('dashboard.accounts.update');

        Route::delete('/{account}', [AccountController::class, 'destroy'])->name('dashboard.accounts.destroy');
        Route::delete('/', [AccountController::class, 'destroys'])->name('dashboard.accounts.destroys');
    });
});
