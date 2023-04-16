
export class MessagingClass {
  sends = {
    email: () => {},
    text: () => {},
    other: () => {},
  };

  messages = {
    admin: 'Admin Message',
    user: 'User Message',
    author: 'Author Message',
    anonymous: 'Anonymous Message',
  };

  getMessage = (type) => this.messages[type] || this.messages.anonymous;

  triggerMessageType = (type, message) => {
    if (['email', 'text'].includes(type) === true) {
      this.sends[type](message);
      return;
    }
    this.sends.other(message);
  };

  triggerMessage = (user) => {
    const message = this.getMessage(user.type);
    this.triggerMessageType(user.preferredNotificationMethod, message);
  };
}