import myPIC from "../../media/img/myPIC.jpg";
import profile from "../../media/img/profile-picture.jpg";

export const GroupJSON = {
  "97d5f888-9bec-4524-a743-46b02f54fc95": {
    GroupName: "Group1",
    ImgGroup: profile,
    DateTime: new Date(`Mon Jul 03 2023 08:16:00`),
    Description: "description of the group",
    PrincipalAdminId: "1234",
    PrincipalAdminName: "user1",
    Friends: [
      {
        PhoneNumber: "1234",
        FirstName: "user",
        LastName: "1",
        Img: myPIC,
        IfManager: true,
        Status: "Principal Admin",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Mon Jul 03 2023 08:16:00`),
          },
        ],
      },
      {
        PhoneNumber: "308",
        FirstName: "achiya",
        LastName: "",
        Img: myPIC,
        IfManager: true,
        Status: "Administrator",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: new Date(`Tue Jul 04 2023 03:22:00`),
          },
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Mon Jul 03 2023 08:16:00`),
          },
          {
            DateIn: new Date(`Wed Jul 05 2023 04:18:00`),
          },
        ],
      },
      {
        PhoneNumber: "A1234",
        FirstName: "User",
        LastName: "Name1",
        Img: myPIC,
        IfManager: true,
        Status: "Administrator",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Mon Jul 03 2023 08:16:00`),
          },
        ],
      },
      {
        PhoneNumber: "B5678",
        FirstName: "User",
        LastName: "Name2",
        Img: profile,
        IfManager: false,
        Status: "",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Mon Jul 03 2023 08:16:00`),
          },
        ],
      },
      {
        PhoneNumber: "3",
        FirstName: "User",
        LastName: "Name3",
        Img: profile,
        IfManager: false,
        Status: "",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Mon Jul 03 2023 08:16:00`),
          },
        ],
      },
    ],
    messages: [
      {
        MessagesId: "150dcaab-30a5-46c3-bb2f-cb1cffb25f81",
        IdOfUser: "",
        FromUser: "",
        Image: "",
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 08:16:00`),
        message: "user1 created the group",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: true,
      },
      {
        MessagesId: "3aecc370-6134-4673-85e3-3e73bd518ff0",
        IdOfUser: "",
        FromUser: "",
        Image: "",
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 08:16:00`),
        message: "user1 added achiya, User Name1, User Name2, User Name3",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: true,
      },
      {
        MessagesId: "873427cc-b0f0-4137-8a1e-8fe3982cc69e",
        IdOfUser: "308",
        FromUser: "achiya",
        Image: myPIC,
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 09:00:00`),
        message: "aaaa",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 1,
        IdOfUser: "3",
        FromUser: "user Name3",
        Image: myPIC,
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 10:00:00`),
        message: "Hello!",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: "44c6c7ca-ac31-43dc-841d-be8a7a900037",
        IdOfUser: "",
        FromUser: "",
        Image: "",
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 03:22:00`),
        message: "achiya has left the group",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: true,
      },
      {
        MessagesId: 2,
        IdOfUser: "1",
        FromUser: "user Name1",
        Image: profile,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 11:30:00`),
        message: "Hello1",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 3,
        IdOfUser: "1",
        FromUser: "user Name1",
        Image: profile,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 11:31:00`),
        message: "aaaa",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 4,
        IdOfUser: "1234",
        FromUser: "user1",
        Image: profile,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 11:32:00`),
        message: "Hello3",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: "ca5b328c-14f1-4d96-8fb2-215edbdccd3e",
        IdOfUser: "",
        FromUser: "",
        Image: "",
        DateTimeOfMsg: new Date(`Wed Jul 05 2023 04:18:00`),
        message: "user1 added achiya",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: true,
      },
      {
        MessagesId: 5,
        IdOfUser: "2",
        FromUser: "user Name2",
        Image: myPIC,
        DateTimeOfMsg: new Date(`Wed Jul 05 2023 11:35:00`),
        message: "Hello4",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: "873427cc-b0f0-4137-8a1e-8fe3992cc69e",
        IdOfUser: "308",
        FromUser: "achiya",
        Image: myPIC,
        DateTimeOfMsg: new Date(`Wed Jul 05 2023 12:11:00`),
        message: "aaaa",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
    ],
  },
  "97d5f888-9bec-4524-a743-46b02f54fc98": {
    GroupName: "Group2",
    ImgGroup: profile,
    DateTime: new Date(`Sun Jul 02 2023 06:20:00`),
    Description: "description of the group",
    PrincipalAdminId: "5678",
    PrincipalAdminName: "user2",
    Friends: [
      {
        PhoneNumber: "5678",
        FirstName: "user2",
        LastName: "",
        Img: profile,
        IfManager: true,
        Status: "Principal Admin",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Sun Jul 02 2023 06:20:00`),
          },
        ],
      },
      {
        PhoneNumber: "A1234",
        FirstName: "User",
        LastName: "Name1",
        Img: myPIC,
        IfManager: true,
        Status: "Administrator",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Sun Jul 02 2023 06:20:00`),
          },
        ],
      },
      {
        PhoneNumber: "B5678",
        FirstName: "User",
        LastName: "Name2",
        Img: profile,
        IfManager: false,
        Status: "",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Sun Jul 02 2023 06:20:00`),
          },
        ],
      },
      {
        PhoneNumber: "3",
        FirstName: "User",
        LastName: "Name3",
        Img: profile,
        IfManager: false,
        Status: "",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Sun Jul 02 2023 06:20:00`),
          },
        ],
      },
      {
        PhoneNumber: "308",
        FirstName: "achiya",
        LastName: "",
        Img: myPIC,
        IfManager: false,
        Status: "",
        IfLeft: false,
        DepartureDate: [
          {
            DateOut: null,
          },
        ],
        JoiningDate: [
          {
            DateIn: new Date(`Sun Jul 02 2023 06:20:00`),
          },
        ],
      },
    ],
    messages: [
      {
        MessagesId: "608235eb-877b-42c2-92fe-131964c761d9",
        IdOfUser: "",
        FromUser: "",
        Image: "",
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 08:16:00`),
        message: "user2 created the group",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: true,
      },
      {
        MessagesId: "5b78335b-2e6b-400d-a296-970d77276772",
        IdOfUser: "",
        FromUser: "",
        Image: "",
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 08:16:00`),
        message: "user2 added User Name1, User Name2, User Name3, achiya",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: true,
      },
      {
        MessagesId: 1,
        IdOfUser: "5678",
        FromUser: "user2",
        Image: myPIC,
        DateTimeOfMsg: new Date(`Mon Jul 03 2023 10:00:00`),
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
        IdOfUser: "1",
        FromUser: "user Name1",
        Image: profile,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 11:30:00`),
        message: "Hello1",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 3,
        IdOfUser: "1",
        FromUser: "user Name1",
        Image: profile,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 11:31:00`),
        message: "Hello2",
        IfRead: true,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 4,
        IdOfUser: "3",
        FromUser: "user Name3",
        Image: profile,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 11:32:00`),
        message: "Hello3",
        IfRead: false,
        IfDelete: false,
        IfRemoved: false,
        IfFavorite: false,
        IfEdit: false,
        IfMessageGroup: false,
      },
      {
        MessagesId: 5,
        IdOfUser: "2",
        FromUser: "user Name2",
        Image: myPIC,
        DateTimeOfMsg: new Date(`Tue Jul 04 2023 10:00:00`),
        message: "Hello4?????",
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

// achiya created the group
