import { Message, GroupedMessages } from './definitions';

export function groupMessagesByIdAndVersion(messages: Message[]) {
  const groupedMessages: GroupedMessages = {};

  messages.forEach(message => {
    const { msgId, versionId } = message;
    console.log(`msgId: ${msgId}, versionId: ${versionId}`);


    if (!groupedMessages[msgId]) {
      groupedMessages[msgId] = {};
    }

    // Initialize versionId if it doesn't exist under this msgId
    if (!groupedMessages[msgId][versionId]) {
      groupedMessages[msgId][versionId] = [];
    }
    console.log(`msgId: ${msgId}, versionId: ${versionId}`);

    groupedMessages[msgId][versionId].push(message);
  });

  return groupedMessages;
}