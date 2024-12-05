<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CreditPackage;

class CreditPackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CreditPackage::create([
            'name' => 'Bulanan',
            'credit' => 300,
            'price' => 69.900,
        ]);

        CreditPackage::create([
            'name' => 'Tahunan',
            'credit' => 600,
            'price' => 799.900,
        ]);
    }
}