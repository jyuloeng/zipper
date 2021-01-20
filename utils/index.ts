export const formatIntroNum = (num: number) => {
  if (num > 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};

interface User {
  id: string;
  email: string;
  password: string;
}

function signup(user: Pick<User, "email" | "password">): User {
  return {
    id: "1",
    email: user.email,
    password: user.password,
  };
}

signup({
  email: "qq@.com",
  password: "sdsa",
});

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
