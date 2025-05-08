export const storeToken = (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      document.cookie = `token=${token}; path=/; secure; samesite=strict`;
    }
  };
  
  export const getLocalToken = () => {
    return typeof window !== "undefined" ? localStorage.getItem("token") : null;
  };
  
  export const removeToken = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      document.cookie = "token=; Max-Age=0; path=/;";
    }
  };
  