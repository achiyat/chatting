// import profile from "../../img/profile-picture.jpg";
// import { Logout } from "../Auth0/Logout/logout";
import React from "react";
import "./signUp.css";
import {
  deleteDataByIdFromServer,
  deleteManyDataFromServer,
  getDataFromServer,
  setDataIntoServer,
  setManyDataIntoServer,
  updateManyDataOnServer,
  updateUserDataOnServer,
} from "../../services/services";

// signUp.jsx
export const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const response = await setDataIntoServer("signUp/perOne", formData);
    // console.log(response);

    // const user = await getDataFromServer(`example/perOne/8888`);
    // //const user = await getDataFromServer(`signUp/perOne/1`);
    // console.log(user);

    const Users = [
      {
        _id: "777",
        PhoneNumber: "777",
        FirstName: "@ppp",
        LastName: "@ooo",
        Img: null,
        FullName: "@ppp @ooo",
      },
      {
        _id: "666",
        PhoneNumber: "666",
        FirstName: "@ppp",
        LastName: "@ooo",
        Img: null,
        FullName: "@ppp @ooo",
      },
    ];

    const User = [
      {
        _id: "999",
        PhoneNumber: "999",
        FirstName: "@ppp",
        LastName: "@ooo",
        Img: null,
        FullName: "@ppp @ooo",
      },
    ];

    console.log(User);
    console.log(User[0]._id);

    const response_put = await updateUserDataOnServer(
      `example/perOne/${User[0]._id}`,
      User[0]
    );
    console.log(response_put);

    const response_put_1 = await updateManyDataOnServer("example/Many", Users);
    console.log(response_put_1);

    // const response_delete = await deleteDataByIdFromServer(
    //   `signUp/perOne/${User[0]._id}`
    // );
    // console.log(response_delete);

    // const response_delete_1 = await deleteManyDataFromServer(
    //   "example/Many",
    //   Users
    // );
    // console.log(response_delete_1);

    // console.log(Users);
    // const response_post = await setManyDataIntoServer("example/Many", Users);
    // console.log(response_post);
    // const formData = new FormData(e.currentTarget);

    // console.log(1);
    // //const response = await setDataIntoServer("signUp/perOne",formData);
    // const response = await setDataIntoServer("example/perOne", formData);
    // console.log(response);

    // if (response === null) {
    //   console.log(2);
    //   const users = await getAllData();
    //   console.log(users);
    //   const user = await getDataById(users[1]._id);
    //   console.log(user);

    //   // console.log(3);
    //   // const updatedUser = {
    //   //   ...user,
    //   //   _id: `${formData.get("PhoneNumber")}`,
    //   //   FirstName: `${formData.get("FirstName")}`,
    //   //   LastName: `${formData.get("LastName")}`,
    //   //   FullName: `${formData.get("FirstName")} ${formData.get("LastName")}`,
    //   // };

    //   // console.log(updatedUser);

    //   // console.log(4);
    //   // response = await updateUserDataOnServer(
    //   //   `example/perOne/${updatedUser}`,
    //   //   updatedUser
    //   // );
    //   // console.log(response);

    //   // console.log(5);
    //   // response = await deleteDataByIdFromServer(
    //   //   `example/perOne/${updatedUser}`
    //   // );
    //   // console.log(response);

    //   // Call the function to update the user on the server
    //   // await updateUser(updatedUser._id, updatedUser);

    //   // await deleteUser(updatedUser._id);
    //   // await deleteUser(4);

    //   // const newUser = await getDataById(updatedUser._id);
    //   // console.log(newUser);

    //   // if (newUser) {
    //   //   console.log("newUser");
    //   //   await deleteUser(newUser._id);
    //   // }

    //   return null;
    // } else {
    //   console.log(2);
    //   const users = await getAllData();
    //   console.log(users);
    // }

    return null;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   //   const formData = new FormData(e.currentTarget);

  //   // const User = [
  //   //   {
  //   //     _id: "888",
  //   //     PhoneNumber: "888",
  //   //     FirstName: "ppp",
  //   //     LastName: "ooo",
  //   //     Img: null,
  //   //     FullName: "ppp ooo",
  //   //   },
  //   // ];

  //   // let response = await setDataIntoServer("example/perOne", User);
  //   // console.log(response);
  //   // console.log(1);
  //   // let response = getDataFromServer(`example/perOne/${User[0]._id}`);
  //   // console.log(response);

  //   // const User1 = [
  //   //   {
  //   //     ...response[1],
  //   //     FirstName: "@@@",
  //   //     LastName: "###",
  //   //     FullName: "@@@ ###",
  //   //   },
  //   // ];
  //   // console.log(User1);
  //   // console.log(2);
  //   // response = await updateUserDataOnServer(`example/perOne/${User1}`, User1);
  //   // console.log(response);

  //   // console.log(3);
  //   // response = await deleteDataByIdFromServer(`example/perOne/${User1}`);
  //   // console.log(response);

  //   // ***********************

  //   // let users = await getAllData();
  //   // console.log(users);

  //   // const User = [
  //   //   {
  //   //     _id: "12",
  //   //     PhoneNumber: "12",
  //   //     FirstName: "KKK",
  //   //     LastName: "LLL",
  //   //     Img: null,
  //   //     FullName: "KKK LLL",
  //   //   },
  //   //   {
  //   //     _id: "13",
  //   //     PhoneNumber: "13",
  //   //     FirstName: "BBB",
  //   //     LastName: "MMM",
  //   //     Img: null,
  //   //     FullName: "BBB MMM",
  //   //   },
  //   // ];

  //   // console.log(User);
  //   // const response_post = await setManyDataIntoServer("signUp/Many", User);
  //   // console.log(response_post);

  //   // const updateUsers = [
  //   //   {
  //   //     _id: "12",
  //   //     PhoneNumber: "12",
  //   //     FirstName: "####",
  //   //     LastName: "@@@@",
  //   //     Img: null,
  //   //     FullName: "#### @@@@",
  //   //   },
  //   //   {
  //   //     _id: "13",
  //   //     PhoneNumber: "13",
  //   //     FirstName: "####",
  //   //     LastName: "@@@@",
  //   //     Img: null,
  //   //     FullName: "#### @@@@",
  //   //   },
  //   // ];

  //   // console.log(updateUsers);

  //   // const response_put = await updateManyDataOnServer(
  //   //   "signUp/Many",
  //   //   updateUsers
  //   // );
  //   // console.log(response_put);

  //   // const response_delete = await deleteManyDataFromServer(
  //   //   "signUp/Many",
  //   //   updateUsers
  //   // );
  //   // console.log(response_delete);

  //   return null;
  // };

  const deleteUser = async (userId) => {
    return await deleteDataByIdFromServer(`signUp/perOne/${userId}`);
  };

  const updateUser = async (userId, updatedData) => {
    return await updateUserDataOnServer(`signUp/perOne/${userId}`, updatedData);
  };

  // Function to fetch data from the server
  const getAllData = async () => {
    return await getDataFromServer("signUp/getAll");
  };

  // Function to fetch data by ID from the server
  const getDataById = async (id) => {
    return await getDataFromServer(`signUp/perOne/${id}`);
  };

  return (
    <>
      <div className="signup-form">
        <h1 className="signup-h1">Welcome to our chat</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <input
              className="signup-form-input"
              id="phoneNumber"
              name="PhoneNumber"
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="firstName">
              First Name:
            </label>
            <input
              className="signup-form-input"
              id="firstName"
              name="FirstName"
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="signup-form-input"
              id="lastName"
              name="LastName"
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="img">
              Photo:
            </label>
            <input className="signup-form-input" id="img" name="Img" />
          </div>
          <button className="signup-form-button">Submit</button>
        </form>
      </div>
      {/* <Logout /> */}
    </>
  );
};

// console.log(`${formData.get("PhoneNumber")}`);
// console.log(`${formData.get("FirstName")}`);
// console.log(`${formData.get("LastName")}`);
// console.log(`${formData.get("Img")}`);
