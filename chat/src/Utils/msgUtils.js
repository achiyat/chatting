// messageUtils.js

import { getDetails, getFormattedDate } from "../Objects/objDetails";

export const MessageUser = (message, MyUser) =>
  createMessage(message, MyUser, false);

const createMessage = (message, MyUser, isGroupMessage = true) => {
  const details = getDetails();
  // console.log(isGroupMessage);
  return {
    MessagesId: details.NewId,
    IdOfUser: isGroupMessage ? "" : MyUser.Id,
    FromUser: isGroupMessage ? "" : MyUser.Name,
    Image: isGroupMessage ? "" : MyUser.Img,
    DateTimeOfMsg: details.currentTime,
    message,
    IfRead: true,
    IfDelete: false,
    IfRemoved: false,
    IfFavorite: false,
    IfEdit: false,
    IfMessageGroup: isGroupMessage,
  };
};

export const MessageGroup = (message) => createMessage(message, null, true);

export const handleIsRead = (messages) => {
  // Find and update messages where IfRead is false
  messages
    .filter((m) => !m.IfRead) // Filter out messages where IfRead is false
    .forEach((m) => {
      m.IfRead = true;
    });

  return messages;
};

export const updateMessagesIfDelete = (messages, selectedMessages) => {
  // Create a Set of keys for selected messages
  const messageKeys = setKeys(selectedMessages);

  // Iterate through messages once to update
  messages.forEach((msg) => {
    const key = `${msg.MessagesId}-${msg.IdOfUser}`;
    if (messageKeys.has(key)) {
      msg.IfRemoved = msg.IfDelete ? true : msg.IfRemoved;
      msg.IfDelete = true;
      msg.message = "⊘ This message has been deleted";
    }
  });

  return handleIsRead(messages);
};

const setKeys = (selectedMessages) => {
  return new Set(
    selectedMessages.map((msg) => `${msg.MessagesId}-${msg.IdOfUser}`)
  );
};

export const updateMessagesIfFavorite = (messages, selectedMessages) => {
  // Create a Set of keys for selected messages
  const messageKeys = setKeys(selectedMessages);

  // Iterate through messages once to update
  messages.forEach((msg) => {
    const key = `${msg.MessagesId}-${msg.IdOfUser}`;
    if (messageKeys.has(key)) {
      msg.IfRead = true;
      msg.IfFavorite = true;
    }
  });

  return handleIsRead(messages);
};

export const updateMessagesIfEdit = (
  messages,
  selectedMessages,
  newMessage
) => {
  // Create a Set of keys for selected messages
  const messageKeys = setKeys(selectedMessages);

  // Iterate through messages once to update
  messages.forEach((msg) => {
    const key = `${msg.MessagesId}-${msg.IdOfUser}`;
    if (messageKeys.has(key)) {
      msg.IfRead = true;
      msg.IfEdit = true;
      msg.message = newMessage;
    }
  });

  return handleIsRead(messages);
};

export const findFirstMessagesOfDay = (messages) => {
  const firstMessages = {};
  const seenDates = new Set();

  for (let message of messages) {
    const formattedDate = getFormattedDate(message.DateTimeOfMsg);
    if (!seenDates.has(formattedDate)) {
      seenDates.add(formattedDate);
      firstMessages[message.MessagesId] = true;
    }
  }

  return firstMessages;
};
