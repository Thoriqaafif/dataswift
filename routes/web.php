<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResearchController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CreditController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get(uri: '/beranda', action: function () {
        return Inertia::render(component: 'Dashboard/Beranda');
    })->name('beranda');

    Route::get(uri: '/eksplor', action: function () {
        return Inertia::render(component: 'Dashboard/Eksplor');
    })->name('eksplor');
    
    Route::get(uri: '/analisis', action: [ResearchController::class, 'index'])
    ->name('analisis');
    Route::get(uri: '/analisis/{research}', action: [ResearchController::class, 'show'])
    ->name('analisis.show');
    
    Route::post(uri: '/analisis', action: [ResearchController::class, 'store'])
    ->name('analisis.store');
    Route::delete(uri: '/analisis/{research}', action: [ResearchController::class, 'destroy'])
    ->name('analisis.destroy');
    
    Route::get(uri: '/penggunaan', action: function () {
        return Inertia::render(component: 'Dashboard/Penggunaan');
    })->name('penggunaan');

    Route::get('/credit', [CreditController::class, 'index'])->name('credit.index');
    Route::post('/credit/purchase', [CreditController::class, 'purchase'])->name('credit.purchase');
});

require __DIR__.'/auth.php';
