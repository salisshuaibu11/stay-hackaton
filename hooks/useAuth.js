const useAuth = (Component) => {
  /* eslint-disable react/display-name */
  return (props) => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("user-data"));

      if (!data?.token) {
        document.location.href = "/";
        return null;
      }
    }
    return <Component {...props} />
  };
};

export default useAuth;
