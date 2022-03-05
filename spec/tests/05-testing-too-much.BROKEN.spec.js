
class MessagingClass {
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
    };
  
    if (user.preferredNotificationMethod === 'email') {
      this.sendEmail(message);
    } else if (user.preferredNotificationMethod === 'text') {
      this.sendText(message);
    } else {
      this.sendQueueNotification(message);
    }
  };  
}

describe('Testing Too Much', () => {
  let messagingClass;
  beforeEach(() => {
    messagingClass = new MessagingClass();
    spyOn(messagingClass, 'sendEmail').and.stub();
    spyOn(messagingClass, 'sendText').and.stub();
    spyOn(messagingClass, 'sendQueueNotification').and.stub();
  });

  it('expects admin, email to send the message', () => {
    const user = { type: 'admin', preferredNotificationMethod: 'email' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledWith('Admin Message');
  });

  it('expects admin, email to send the message', () => {
    const user = { type: 'admin', preferredNotificationMethod: 'text' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledWith('Admin Message');
  });

  it('expects admin, email to send the message', () => {
    const user = { type: 'admin', preferredNotificationMethod: 'other' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledWith('Admin Message');
  });

  it('expects user, email to send the message', () => {
    const user = { type: 'user', preferredNotificationMethod: 'email' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledWith('User Message');
  });

  it('expects user, email to send the message', () => {
    const user = { type: 'user', preferredNotificationMethod: 'text' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledWith('User Message');
  });

  it('expects user, email to send the message', () => {
    const user = { type: 'user', preferredNotificationMethod: 'other' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledWith('User Message');
  });

  it('expects author, email to send the message', () => {
    const user = { type: 'author', preferredNotificationMethod: 'email' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledWith('Author Message');
  });

  it('expects author, email to send the message', () => {
    const user = { type: 'author', preferredNotificationMethod: 'text' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledWith('Author Message');
  });

  it('expects author, email to send the message', () => {
    const user = { type: 'author', preferredNotificationMethod: 'other' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledWith('Author Message');
  });

  it('expects anonymous, email to send the message', () => {
    const user = { type: 'anonymous', preferredNotificationMethod: 'email' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledWith('Anonymous Message');
  });

  it('expects anonymous, email to send the message', () => {
    const user = { type: 'anonymous', preferredNotificationMethod: 'text' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledWith('Anonymous Message');
  });

  it('expects anonymous, email to send the message', () => {
    const user = { type: 'anonymous', preferredNotificationMethod: 'other' };
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledWith('Anonymous Message');
  });
});
