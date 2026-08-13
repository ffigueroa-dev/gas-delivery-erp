<?php

namespace App\Support;

use Inertia\Inertia;

class Toast
{
    public static function success(string $message): void
    {
        self::send('success', $message);
    }

    public static function error(string $message): void
    {
        self::send('error', $message);
    }

    private static function send(string $type, string $message): void
    {
        Inertia::flash([
            'toast' => [
                'type' => $type,
                'message' => $message,
            ],
        ]);
    }
}
