
export class MessagingClass {
  sendEmail = () => {};
  sendText = () => {};
  sendQueueNotification = () => {};

  triggerMessage = (user) => {
    let message = '';
    switch (user.type) {
      case 'admin':
        message = 'Admin Message';
        break;
      case 'user':
        message = 'User Message';
        break;
      case 'author':
        message = 'Author Message';
        break;
      default:
        message = 'Anonymous Message';
        break;
    }

    if (user.preferredNotificationMethod === 'email') {
      this.sendEmail(message);
    } else if (user.preferredNotificationMethod === 'text') {
      this.sendText(message);
    } else {
      this.sendQueueNotification(message);
    }
  };
}