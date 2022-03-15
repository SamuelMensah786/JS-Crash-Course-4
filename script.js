const url = "http://localhost:3000/users";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

async function getAllUser() {
  const response = await fetch(url);
  console.log(response.json());
  console.log(data);
}
async function getUser(userid) {
  const response = await fetch(`${url}/${userid}`);
  const data = await response.json();
  console.log(data);
  console.log(data);
}
getUser(2);

let user = {
  email: "delabans8@gmail.com",
};

async function updateUser(userInfo, userid) {
  const response = await fetch(`${url}/${userid}`, {
    method: "PATCH",
    body: JSON.stringify(userInfo),
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
updateUser(user, 1);

async function deleteUser(userid) {
  const response = await fetch(`${url}/${userid}`, {
    method: "DELETE",
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

deleteUser(2);
