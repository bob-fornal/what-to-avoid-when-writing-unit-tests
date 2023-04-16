
import { MessagingClass } from "./messaging.NOT.js";

describe('Testing Too Much (long form)', () => {
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
    expect(messagingClass.sendEmail).toHaveBeenCalledOnceWith('Admin Message');
  });

  it('expects admin, text to send the message', () => {
    const user = { type: 'admin', preferredNotificationMethod: 'text' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledOnceWith('Admin Message');
  });

  it('expects admin, queue to send the message', () => {
    const user = { type: 'admin', preferredNotificationMethod: 'other' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledOnceWith('Admin Message');
  });

  it('expects user, email to send the message', () => {
    const user = { type: 'user', preferredNotificationMethod: 'email' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledOnceWith('User Message');
  });

  it('expects user, text to send the message', () => {
    const user = { type: 'user', preferredNotificationMethod: 'text' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledOnceWith('User Message');
  });

  it('expects user, queue to send the message', () => {
    const user = { type: 'user', preferredNotificationMethod: 'other' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledOnceWith('User Message');
  });

  it('expects author, email to send the message', () => {
    const user = { type: 'author', preferredNotificationMethod: 'email' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledOnceWith('Author Message');
  });

  it('expects author, text to send the message', () => {
    const user = { type: 'author', preferredNotificationMethod: 'text' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledOnceWith('Author Message');
  });

  it('expects author, queue to send the message', () => {
    const user = { type: 'author', preferredNotificationMethod: 'other' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledOnceWith('Author Message');
  });

  it('expects anonymous, email to send the message', () => {
    const user = { type: 'anonymous', preferredNotificationMethod: 'email' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendEmail).toHaveBeenCalledOnceWith('Anonymous Message');
  });

  it('expects anonymous, text to send the message', () => {
    const user = { type: 'anonymous', preferredNotificationMethod: 'text' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendText).toHaveBeenCalledOnceWith('Anonymous Message');
  });

  it('expects anonymous, queue to send the message', () => {
    const user = { type: 'anonymous', preferredNotificationMethod: 'other' };
    
    messagingClass.triggerMessage(user);
    expect(messagingClass.sendQueueNotification).toHaveBeenCalledOnceWith('Anonymous Message');
  });
});