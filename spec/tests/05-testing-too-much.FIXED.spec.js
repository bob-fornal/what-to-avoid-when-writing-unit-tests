
class MessagingClass {
  sendEmail = () => {};
  sendText = () => {};
  sendQueueNotification = () => {};
  
  messages = {
    admin: 'Admin Message',
    user: 'User Message',
    author: 'Author Message',
    anonymous: 'Anonymous Message'
  };

  getMessage = (type) => this.messages[type] || this.messages.anonymous;

  triggerMessageType = (type, message) => {
    if (type === 'email') this.sendEmail(message);
    if (type === 'text') this.sendText(message);
    if ([ 'email', 'text' ].includes(type) === false) this.sendQueueNotification(message);
  };

  triggerMessage = (user) => {
    let message = this.getMessage(user.type);
    this.triggerMessageType(user.preferredNotificationMethod, message);
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

  it('expects getMessage email get the admin messagage', () => {
    expect(messagingClass.getMessage('admin')).toEqual('Admin Message');
  });

  it('expects getMessage email get the user messagage', () => {
    expect(messagingClass.getMessage('user')).toEqual('User Message');
  });

  it('expects getMessage email get the author messagage', () => {
    expect(messagingClass.getMessage('author')).toEqual('Author Message');
  });

  it('expects getMessage email get the anonymous messagage', () => {
    expect(messagingClass.getMessage('something-else')).toEqual('Anonymous Message');
  });

  it('expects triggerMessageType to take a type and message and send email correctly', () => {
    messagingClass.triggerMessageType('email', 'MESSAGE1');
    expect(messagingClass.sendEmail).toHaveBeenCalledWith('MESSAGE1');
  });

  it('expects triggerMessageType to take a type and message and send text correctly', () => {
    messagingClass.triggerMessageType('text', 'MESSAGE2');
    expect(messagingClass.sendText).toHaveBeenCalledWith('MESSAGE2');
  });

  it('expects triggerMessageType to take a type and message and send queue notification correctly', () => {
    messagingClass.triggerMessageType('something-else', 'MESSAGE3');
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledWith('MESSAGE3');
  });

  it('expects triggerMessage to get the message and send', () => {
    spyOn(messagingClass, 'getMessage').and.returnValue('MESSAGE4');
    spyOn(messagingClass, 'triggerMessageType').and.stub();
    const user = { type: 'TEST', preferredNotificationMethod: 'SOMETHING' };

    messagingClass.triggerMessage(user);
    expect(messagingClass.getMessage).toHaveBeenCalledWith('TEST');
    expect(messagingClass.triggerMessageType).toHaveBeenCalledWith('SOMETHING', 'MESSAGE4');
  });

});
