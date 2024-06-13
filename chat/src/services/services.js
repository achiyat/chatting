// services.js
import axios from "axios";

const baseUrl = "http://localhost:5000";

function handleResponse(response) {
  //   console.log("handleResponse");
  switch (response.status) {
    case 200:
      console.log("Success:", response.data.message);
      break;
    case 201:
      console.log("Success:", response.data.message);
      break;
    case 400:
      console.error("Bad Request:", response.data.message);
      break;
    case 404:
      console.error("Bad Request:", response.data.message);
      break;
    case 500:
      console.error("Server Error:", response.data.message);
      break;
    default:
      console.error("Unknown Status: Failed");
  }
  return response.data ? response.data.objects : null;
}

export const getDataFromServer = async (collectionName) => {
  try {
    console.log(`${baseUrl}/${collectionName}`);
    const response = await axios.get(`${baseUrl}/${collectionName}`);
    console.log("get", response);

    return handleResponse(response);
  } catch (e) {
    // console.log(e);
    // console.error(e.response.statusText);
    console.error(e.response.data.message);
    return e.response.data.objects;
  }
};

export const setDataIntoServer = async (collectionName, ObjectData) => {
  try {
    // console.log(`${baseUrl}/${collectionName}`);
    // console.log(ObjectData);
    const response = await axios.post(
      `${baseUrl}/${collectionName}`,
      ObjectData
    );

    console.log(response);

    // console.log("post", response);
    // console.log(response.config.data.get("PhoneNumber"));

    return handleResponse(response);
  } catch (e) {
    console.log(e);
    if (e.response.status === 400) {
      console.log(e.response.data.message);
    } else if (e.response.status === 500) {
      console.log(e.response.data.message);
    } else {
      console.error("Error while sending data to the server:", e);
      return null;
    }
    return e.response.data.objects;
  }
};

export const setManyDataIntoServer = async (collectionName, data) => {
  try {
    const response = await axios.post(`${baseUrl}/${collectionName}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    return handleResponse(response);
  } catch (e) {
    console.log(e);
    if (e.response.status === 400) {
      console.log(e.response.data.message);
    } else if (e.response.status === 500) {
      console.log(e.response.data.message);
    } else {
      console.error("Error while sending data to the server:", e);
      return null;
    }
    return e.response.data.objects;
  }
};

export const deleteDataByIdFromServer = async (collectionName) => {
  console.log(`${baseUrl}/${collectionName}`);
  try {
    const response = await axios.delete(`${baseUrl}/${collectionName}`);
    console.log("delete", response);

    return handleResponse(response);
  } catch (e) {
    console.log(e);
    if (e.response.status === 400) {
      console.error(e.response.data.message);
    } else if (e.response.status === 500) {
      console.error(e.response.data.message);
    } else {
      console.error(e.response.data.message);
    }
    return e.response.data.objects;
  }
};

// Create a function to delete multiple documents from the server
export const deleteManyDataFromServer = async (collectionName, ids) => {
  console.log(`${baseUrl}/${collectionName}`);
  try {
    const response = await axios.delete(`${baseUrl}/${collectionName}`, {
      data: ids,
    });

    return handleResponse(response);
  } catch (e) {
    console.log(e);
    console.error(e.response.data.message);
    return e.response.data.objects;
  }
};

export const updateUserDataOnServer = async (collectionName, data) => {
  try {
    console.log(data);
    const response = await axios.put(`${baseUrl}/${collectionName}`, data, {
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
    });

    console.log("put", response);
    console.log("Response Status:", response.status);

    return handleResponse(response);
  } catch (e) {
    console.log(e);
    if (e.response.status === 404) {
      console.error(e.response.data.message);
    } else if (e.response.status === 500) {
      console.error(e.response.data.message);
    } else {
      console.error("Failed");
    }
    return e.response.data.objects;
  }
};

export const updateManyDataOnServer = async (collectionName, updates) => {
  try {
    console.log(`${baseUrl}/${collectionName}`);
    const response = await axios.put(`${baseUrl}/${collectionName}`, {
      data: updates,
    });

    return handleResponse(response);
  } catch (e) {
    console.error(e.response.data.message);
    return e.response.data.objects;
  }
};

// export const setManyDataIntoServer = async (collectionName, data) => {
//   try {
//     const response = await axios.post(`${baseUrl}/${collectionName}`, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     console.log(response);

//     if (response.status === 200) {
//       console.log("Data successfully created");
//       return response;
//     } else if (response.status === 400) {
//       console.log("Data already exists");
//       return response;
//     } else {
//       console.error("Failed to create data");
//       return response;
//     }
//   } catch (e) {
//     console.log(e);
//     console.error("Error while sending data to the server:", e);
//     return null;
//   }
// };

// import axios from "axios";

// const baseUrl = "http://localhost:5000";

// export const setDataIntoServer = async (ObjectData, collectionName) => {
//   try {
//     const response = await fetch(`${baseUrl}/${collectionName}`, {
//       method: "POST",
//       body: ObjectData,
//     });

//     console.log(response);

//     if (response.status === 200) {
//       console.log("User successfully created");
//       return response;
//     } else if (response.status === 400) {
//       console.log("Phone number is already in use");
//       return response;
//     } else {
//       console.log("Failed");
//       return response;
//     }
//   } catch (e) {
//     console.error(`Failed to create user ${e}`);
//     return null;
//   }
// };

// export const getDataFromServer = async (collectionName) => {
//   try {
//     const response = await fetch(`${baseUrl}/${collectionName}`);
//     if (response.ok) {
//       return response.json();
//     } else {
//       console.error("Failed to fetch data from the server");
//     }
//   } catch (e) {
//     console.error("Error while fetching data from server:", e);
//     return null;
//   }
// };

// export const deleteDataByIdFromServer = async (collectionName) => {
//   try {
//     const response = await fetch(`${baseUrl}/${collectionName}`, {
//       method: "DELETE",
//     });

//     if (response.status === 200) {
//       console.log("User deleted successfully");
//       return response;
//     } else if (response.status === 400) {
//       console.log("User not found");
//       return response;
//     } else if (response.status === 500) {
//       console.log("Failed to delete user");
//       return response;
//     }
//   } catch (e) {
//     console.error(`Error while deleting user data: ${e}`);
//     return null;
//   }
// };

// export const updateUserDataOnServer = async (collectionName, data) => {
//   try {
//     console.log(data);
//     const response = await fetch(`${baseUrl}/${collectionName}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json", // Specify the content type as JSON
//       },
//       body: JSON.stringify(data), // Convert the object to JSON string
//     });

//     console.log("Response Status:", response.status);

//     if (response.status === 200) {
//       console.log("User data updated successfully");
//     } else if (response.status === 404) {
//       console.log("User not found");
//     } else if (response.status === 500) {
//       console.log("Failed to update user data");
//     } else {
//       console.log("Unhandled response status");
//     }
//   } catch (e) {
//     console.log("Error while updating user data:", e);
//   }
// };

// ------------------------

// "Failed"
