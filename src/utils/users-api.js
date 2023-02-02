const BASE_URL = "/api/users";

export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
 
    console.log("skmdfnlsdkfs")
    return res.json();
 
}

export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Request");
  }
}

