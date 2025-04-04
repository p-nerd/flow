<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\User;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create accounts (3 per user)
        User::all()->each(function ($user) {
            Account::factory()
                ->forUser($user)
                ->state(['name' => 'Checking Account'])
                ->create();

            Account::factory()
                ->forUser($user)
                ->state(['name' => 'Savings Account'])
                ->create();

            Account::factory()
                ->forUser($user)
                ->withPlaidId()
                ->state(['name' => 'Credit Card Account'])
                ->create();
        });

        // Account::factory()
        //     ->count(10)
        //     ->create();
        //
        // Account::factory()
        //     ->count(5)
        //     ->withoutPlaidId()
        //     ->create();
    }
}
