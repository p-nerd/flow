<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'name' => fake()->word().' Category',
            'plaid_id' => fake()->boolean(70) ? fake()->unique()->regexify('[A-Za-z0-9]{24}') : null,
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => fn (array $attributes) => fake()->dateTimeBetween($attributes['created_at'], 'now'),
        ];
    }

    /**
     * Indicate that the account has no Plaid ID.
     */
    public function withoutPlaidId(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'plaid_id' => null,
            ];
        });
    }

    /**
     * Indicate that the account has a Plaid ID.
     */
    public function withPlaidId(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'plaid_id' => $this->faker->unique()->regexify('[A-Za-z0-9]{24}'),
            ];
        });
    }

    /**
     * Indicate that the account belongs to a specific user.
     */
    public function forUser(User|int $user): Factory
    {
        $userId = $user instanceof User ? $user->id : $user;

        return $this->state(function (array $attributes) use ($userId) {
            return [
                'user_id' => $userId,
            ];
        });
    }
}
