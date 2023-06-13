export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.userAccessToken) {
    return {
      token: user.userAccessToken,
    };
  } else {
    return {};
  }
};
