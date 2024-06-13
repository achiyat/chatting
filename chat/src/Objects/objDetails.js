import { v4 as uuid_v4 } from "uuid";

export const getDetails = () => {
  const currentTime = new Date();
  const NewId = uuid_v4(); // Generate a unique ID using uuid

  return {
    NewId,
    currentTime,
  };
};

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
    IfRead: !isGroupMessage,
    IfDelete: false,
    IfRemoved: false,
    IfFavorite: false,
    IfEdit: false,
    IfMessageGroup: isGroupMessage,
  };
};

export const MessageUser = (message, MyUser) =>
  createMessage(message, MyUser, false);

export const MessageGroup = (message) => createMessage(message, null, true);

export const createFriendOfGroup = (user, isPrincipalAdmin) => {
  const details = getDetails();
  const departureDate = [{ DateOut: null }];
  const joiningDate = [{ DateIn: details.currentTime }];

  console.log(user);
  return {
    PhoneNumber: user.PhoneNumber || user.Id,
    FirstName: user.FirstName || user.Name,
    LastName: user.LastName ? user.LastName : "",
    Img: user.Img || user.Image,
    IfManager: isPrincipalAdmin,
    Status: isPrincipalAdmin ? "Principal Admin" : "",
    IfLeft: false,
    DepartureDate: departureDate,
    JoiningDate: joiningDate,
  };
};

export const filterGroupMessagesByDate = (group, myUserId) => {
  // Check if group and group.Friends are defined
  if (!group || !Array.isArray(group.Friends)) {
    console.log("Group or Friends not found");
    return group;
  }

  // Find the reduxMyUser object within Friends
  const myUser = group.Friends.find(
    (friend) => friend.PhoneNumber === myUserId
  );

  console.log(myUser);

  if (!myUser) {
    console.log("myUser not found");
    // If myUser is not found, return the original group
    return group;
  }

  // Initialize arrays to store filtered messages
  const filteredMessages = [];

  // Iterate through JoiningDate and DepartureDate arrays of myUser
  for (let i = 0; i < myUser.JoiningDate.length; i++) {
    const joiningDate = myUser.JoiningDate[i].DateIn;
    const departureDate = myUser.DepartureDate[i].DateOut
      ? myUser.DepartureDate[i].DateOut
      : new Date(); // Use current date if there's no departure date

    // Filter messages based on user's joining and departure dates
    const messagesInRange = group.messages.filter((message) => {
      const messageDateTime = message.DateTimeOfMsg;

      return messageDateTime >= joiningDate && messageDateTime <= departureDate;
    });

    console.log(messagesInRange);
    filteredMessages.push(...messagesInRange);
  }

  // Create a new object with the filtered messages
  const newGroup = {
    ...group,
    messages: filteredMessages,
  };

  return newGroup;
};

export const getFormattedTime = (time) => {
  return time instanceof Date
    ? time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";
};

export const getFormattedDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB");
};

// export const getFormattedDate = (date, time) => {
//   if (date) return new Date(date).toLocaleDateString("en-GB");
//   if (time)
//     return time instanceof Date
//       ? time.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         })
//       : "";
// };
