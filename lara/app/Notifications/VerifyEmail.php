<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerifyEmailNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable)
    {
        // return (new MailMessage)
        //             ->line('The introduction to the notification.')
        //             ->action('Notification Action', url('/'))
        //             ->line('Thank you for using our application!');
        //    $url = route('verify.email', ['id' => $notifiable->id, 'token' => $notifiable->email_verification_token]);
 $url = url('/verify-email', $notifiable->email_verification_token);
  return (new MailMessage)
        ->subject('Подтверждение адреса электронной почты')
        ->line('Пожалуйста, нажмите на кнопку ниже для подтверждения вашего адреса электронной почты.')
        ->action('Подтвердить адрес', $url)
        ->line('Спасибо за использование нашего приложения!');
    }
    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
