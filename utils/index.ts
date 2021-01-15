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
