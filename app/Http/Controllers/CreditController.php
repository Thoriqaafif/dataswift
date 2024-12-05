<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CreditPackage;

class CreditController extends Controller
{
    /**
     * Tampilkan daftar kredit pengguna.
     */
    public function index()
    {
        $packages = CreditPackage::all();
        return Inertia::render('Dashboard/Credit', compact('packages'));
    }

    /**
     * Tampilkan form untuk menambahkan kredit baru pada pengguna.
     */
    public function create()
    {
        $users = User::all();
        return Inertia::render('Credits/Create', compact('users'));
    }

    /**
     * Simpan kredit baru untuk pengguna.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'credit_amount' => 'required|integer|min:0',
        ]);

        $user = User::find($request->user_id);
        $user->credit += $request->credit_amount;
        $user->save();

        return redirect()->route('credits.index')->with('success', 'Credit berhasil ditambahkan.');
    }

    /**
     * Tampilkan form untuk mengedit kredit pengguna.
     */
    public function edit(User $credit)
    {
        return Inertia::render('Credits/Edit', compact('credit'));
    }

    /**
     * Update kredit pengguna.
     */
    public function update(Request $request, User $credit)
    {
        $request->validate([
            'credit_amount' => 'required|integer|min:0',
        ]);

        $credit->credit = $request->credit_amount;
        $credit->save();

        return redirect()->route('credits.index')->with('success', 'Credit berhasil diperbarui.');
    }

    /**
     * Hapus kredit pengguna (menyetel ke 0).
     */
    public function destroy(User $credit)
    {
        $credit->credit = 0;
        $credit->save();

        return redirect()->route('credits.index')->with('success', 'Credit berhasil dihapus.');
    }

    public function purchase(Request $request)
    {
        $request->validate([
            'package_id' => 'required|integer|exists:credit_packages,id',
        ]);

        $user = $request->user();
        $package = CreditPackage::find($request->package_id);

        // Asumsikan Anda memiliki model CreditPackage dengan atribut credit dan price
        if (!$package) {
            return back()->withErrors(['package_id' => 'Paket tidak ditemukan.']);
        }

        // Tambahkan kredit ke pengguna
        $user->credit += $package->credit;
        $user->save();

        return redirect()->route('credit.index')->with('success', 'Kredit berhasil ditambahkan.');
    }
}