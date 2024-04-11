import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import testUser from "../../constants/testUserCurrent";
import testUsersArr from "../../constants/testUsersArr";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(()=>testUser);
  const [usersArr, setUsersArr] = useState(()=>testUsersArr);

  function isNotSignedInBefore(Obj) {
    if (usersArr.length != 0) {
      for (let i = 0; i < usersArr.length; i++) {
        const currentUser = usersArr[i];
        console.log(i, currentUser);
        if (currentUser.email == Obj.email) {
          return false;
        }
      }
    }
    return true;
  }

  async function handleLoginOfUser(Obj) {
    return new Promise((resolve, reject) => {
      let myUser = null;
      for (let i = 0; i < usersArr.length; i++) {
        const currentUser = usersArr[i];
        if (
          currentUser.email == Obj.email &&
          currentUser.password == Obj.password
        ) {
          myUser = currentUser;
          break;
        }
      }
      if (!myUser || myUser == null) {
        reject("Recheck your credentials");
      }

      setUser(myUser);
      resolve()
    });
  }

  async function addAndSetAUser(userObj) {
    // console.log(userObj);
    const tempObj = {
      name: userObj.name,
      mobNum: Number(userObj.mobNum),
      email: userObj.email,
      password: userObj.password,
      company: userObj.company,
      Agency: userObj.Agency === "true" ? true : false,
    };

    if (!isNotSignedInBefore(tempObj)) {
      return false;
    }
    // await setUser(tempObj);
    await setUsersArr([...usersArr, tempObj]);
    return true;
  }

  useEffect(() => {
    console.log("Current user", user);
  }, [user]);

  useEffect(() => {
    console.log("My Users", usersArr);
  }, [usersArr]);
  return (
    <UserContext.Provider
      value={{ user, usersArr, addAndSetAUser, handleLoginOfUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
