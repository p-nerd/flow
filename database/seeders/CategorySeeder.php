<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::all()->each(function ($user) {
            Category::factory()
                ->forUser($user)
                ->state(['name' => 'Checking Category'])
                ->create();

            Category::factory()
                ->forUser($user)
                ->state(['name' => 'Savings Category'])
                ->create();

            Category::factory()
                ->forUser($user)
                ->withPlaidId()
                ->state(['name' => 'Credit Card Category'])
                ->create();
        });

        // Category::factory()
        //     ->count(47)
        //     ->create();
    }
}
