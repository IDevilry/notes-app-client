export const useAuth = (): boolean => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};