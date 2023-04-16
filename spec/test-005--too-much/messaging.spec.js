
import { MessagingClass } from "./messaging.js";

describe('Testing Too Much (short form)', () => {
  let messagingClass;

  beforeEach(() => {
    messagingClass = new MessagingClass();

    spyOn(messagingClass.sends, 'email').and.stub();
    spyOn(messagingClass.sends, 'text').and.stub();
    spyOn(messagingClass.sends, 'other').and.stub();
  });

  it('expects "getMessage" email to get the admin message', () => {
    expect(messagingClass.getMessage(('admin'))).toEqual('Admin Message');
  });

  it('expects "getMessage" something-else to get the anonymous message', () => {
    expect(messagingClass.getMessage(('something-else'))).toEqual('Anonymous Message');
  });

  it('expect "triggerMessageType" to send email correctly', () => {
    messagingClass.triggerMessageType('email', 'MESSAGE1');
    expect(messagingClass.sends.email).toHaveBeenCalledWith('MESSAGE1');
  });

  it('expect "triggerMessageType" to send queue notification correctly', () => {
    messagingClass.triggerMessageType('something-else', 'MESSAGE2');
    expect(messagingClass.sends.other).toHaveBeenCalledWith('MESSAGE2');
  });

  it('expects "triggerMessage" to get the message and send', () => {
    spyOn(messagingClass, 'getMessage').and.returnValue('MESSAGE3');
    spyOn(messagingClass, 'triggerMessageType').and.stub();
    const user = { type: 'TEST', preferredNotificationMethod: 'SOMETHING' };

    messagingClass.triggerMessage(user);
    expect(messagingClass.getMessage).toHaveBeenCalledWith('TEST');
    expect(messagingClass.triggerMessageType).toHaveBeenCalledWith('SOMETHING', 'MESSAGE3')
  });
});
