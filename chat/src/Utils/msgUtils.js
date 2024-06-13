// messageUtils.js

import { getFormattedDate } from "../Objects/objDetails";

export const updateMessagesIfRead = (messages) => {
  // Find and update messages where IfRead is false
  messages
    .filter((m) => !m.IfRead) // Filter out messages where IfRead is false
    .forEach((m) => {
      m.IfRead = true; // Update IfRead to true for filtered messages
    });

  return messages;
};

export const updateMessagesIfDelete = (messages, selectedMessages) => {
  // Create a map of messages' indices for quick lookup
  const messageIndexMap = new Map();
  messages.forEach((m, index) => {
    messageIndexMap.set(`${m.MessagesId}-${m.IdOfUser}`, index);
  });

  // Iterate over selected messages and update only them
  selectedMessages.forEach((msg) => {
    const key = `${msg.MessagesId}-${msg.IdOfUser}`;
    if (messageIndexMap.has(key)) {
      const index = messageIndexMap.get(key);
      const updatedMessage = {
        ...messages[index],
        IfDelete: true,
        IfRemoved: messages[index].IfDelete ? true : messages[index].IfRemoved,
        message: "⊘ This message has been deleted",
      };
      messages[index] = updatedMessage; // This line is crucial to update the messages array
    }
  });

  return updateMessagesIfRead(messages);
};

// messages.map((m) => {
//     console.log(m.IfFavorite, m.MessagesId);
//   });

export const updateMessagesIfFavorite = (messages, selectedMessages) => {
  // Create a map of messages' indices for quick lookup
  const messageIndexMap = new Map();
  messages.forEach((m, index) => {
    messageIndexMap.set(`${m.MessagesId}-${m.IdOfUser}`, index);
  });

  // Iterate over selected messages and update only them
  selectedMessages.forEach((msg) => {
    const key = `${msg.MessagesId}-${msg.IdOfUser}`;
    if (messageIndexMap.has(key)) {
      const index = messageIndexMap.get(key);
      const updatedMessage = {
        ...messages[index],
        IfRead: true,
        IfFavorite: true,
      };
      messages[index] = updatedMessage; // Update the message in the original array
    }
  });

  return updateMessagesIfRead(messages);
};

export const updateMessagesIfEdit = (
  messages,
  selectedMessages,
  newMessage
) => {
  // Create a map of messages' indices for quick lookup
  const messageIndexMap = new Map();
  messages.forEach((m, index) => {
    messageIndexMap.set(`${m.MessagesId}-${m.IdOfUser}`, index);
  });

  // Iterate over selected messages and update only them
  selectedMessages.forEach((msg) => {
    const key = `${msg.MessagesId}-${msg.IdOfUser}`;
    if (messageIndexMap.has(key)) {
      const index = messageIndexMap.get(key);
      const isMessageSelected = true; // Assuming all selected messages are being edited
      const updatedMessage = {
        ...messages[index],
        IfRead: true,
        IfEdit: isMessageSelected ? true : messages[index].IfEdit,
        message: isMessageSelected ? newMessage : messages[index].message,
      };
      messages[index] = updatedMessage; // Update the message in the original array
    }
  });

  return updateMessagesIfRead(messages);
};

// export const setNewMessages = (chatData) => {
//   if (chatData && chatData.messages) {
//     console.log(chatData.messages);
//     return chatData.messages.map((m) => ({
//       ...m,
//     }));
//   } else {
//     return [];
//   }
// };

export const findFirstMessagesOfDay = (messages) => {
  const firstMessages = {};
  const dateFirstMessages = {};
  messages.forEach((message) => {
    const formattedDate = getFormattedDate(message.DateTimeOfMsg);
    if (!dateFirstMessages[formattedDate]) {
      dateFirstMessages[formattedDate] = true;
      firstMessages[message.MessagesId] = true;
    }
  });
  return firstMessages;
};
