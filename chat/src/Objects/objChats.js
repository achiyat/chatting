import { MyUser, users } from "./objUsers";

const myUser = MyUser;
const User1 = users.find((user) => user.PhoneNumber === "0540001001");
const User2 = users.find((user) => user.PhoneNumber === "0540001002");

export const chatJSON = {
  "0540001001": {
    PhoneNumber: User1.PhoneNumber,
    FirstName: User1.FirstName,
    LastName: User1.LastName,
    FullName: User1.FullName,
    Image: User1.Img,
    messages: [
      {
        MessagesId: 1,
        IdOfUser: myUser.Id,
        FromUser: myUser.Name,
        Image: myUser.Img,
        DateTimeOfMsg: new Date("Mon Jul 03 2023 10:00:00"),
        message: "Hello!",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 2,
        IdOfUser: User1.PhoneNumber,
        FromUser: User1.FullName,
        Image: User1.Img,
        DateTimeOfMsg: new Date("Tue Jul 04 2023 11:30:00"),
        message: "⊘ This message has been deleted",
        IfRead: true,
        IfDelete: true,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 3,
        IdOfUser: User1.PhoneNumber,
        FromUser: User1.FullName,
        Image: User1.Img,
        DateTimeOfMsg: new Date("Tue Jul 04 2023 11:31:00"),
        message: "are?",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 4,
        IdOfUser: User1.PhoneNumber,
        FromUser: User1.FullName,
        Image: User1.Img,
        DateTimeOfMsg: new Date("Tue Jul 04 2023 11:32:00"),
        message: "you?",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 5,
        IdOfUser: myUser.Id,
        FromUser: myUser.Name,
        Image: myUser.Img,
        DateTimeOfMsg: new Date("Fri Jul 07 2023 10:00:00"),
        message: "good!",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 6,
        IdOfUser: User1.PhoneNumber,
        FromUser: User1.FullName,
        Image: User1.Img,
        DateTimeOfMsg: new Date("Sat Jul 08 2023 11:30:00"),
        message: "How?",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 7,
        IdOfUser: User1.PhoneNumber,
        FromUser: User1.FullName,
        Image: User1.Img,
        DateTimeOfMsg: new Date("Sun Jul 09 2023 11:31:00"),
        message: "are?",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 8,
        IdOfUser: User1.PhoneNumber,
        FromUser: User1.FullName,
        Image: User1.Img,
        DateTimeOfMsg: new Date("Mon Jul 10 2023 11:32:00"),
        message: "you??????????????",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
    ],
  },
  "0540001002": {
    PhoneNumber: User2.PhoneNumber,
    FirstName: User2.FirstName,
    LastName: User2.LastName,
    FullName: User2.FullName,
    Image: User2.Img,
    messages: [
      {
        MessagesId: 1,
        IdOfUser: myUser.Id,
        FromUser: myUser.Name,
        Image: myUser.Img,
        DateTimeOfMsg: new Date("Mon Jul 03 2023 14:00:00"),
        message: "Hi there!",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 2,
        IdOfUser: myUser.Id,
        FromUser: myUser.Name,
        Image: myUser.Img,
        DateTimeOfMsg: new Date("Tue Jul 04 2023 15:30:00"),
        message: "I'm doing great!",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 3,
        IdOfUser: User2.PhoneNumber,
        FromUser: User2.FullName,
        Image: User2.Img,
        DateTimeOfMsg: new Date("Thu Jul 06 2023 16:30:00"),
        message: "How are you?",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 4,
        IdOfUser: User2.PhoneNumber,
        FromUser: User2.FullName,
        Image: User2.Img,
        DateTimeOfMsg: new Date("Thu Jul 06 2023 17:38:00"),
        message: "????",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 5,
        IdOfUser: myUser.Id,
        FromUser: myUser.Name,
        Image: myUser.Img,
        DateTimeOfMsg: new Date("Sun Jul 09 2023 14:00:00"),
        message: "Good",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 6,
        IdOfUser: myUser.Id,
        FromUser: myUser.Name,
        Image: myUser.Img,
        DateTimeOfMsg: new Date("Sun Jul 09 2023 15:30:00"),
        message: "and you?",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 7,
        IdOfUser: User2.PhoneNumber,
        FromUser: User2.FullName,
        Image: User2.Img,
        DateTimeOfMsg: new Date("Sun Jul 09 2023 16:30:00"),
        message: "me?",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 8,
        IdOfUser: User2.PhoneNumber,
        FromUser: User2.FullName,
        Image: User2.Img,
        DateTimeOfMsg: new Date("Sun Jul 09 2023 17:38:00"),
        message: "????",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
    ],
  },
};
