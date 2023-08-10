import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedPage = ({
  children,
  needLogin = false,
  guestOnly = false,
  required = false,
}) => {
  const userSelector = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (needLogin && !userSelector?.id) return navigate("/login");
    else if (needLogin && !required && userSelector.username)
      return navigate("/home");
    else if (needLogin && required && !userSelector.username)
      return navigate("/required");
    else if (guestOnly && userSelector.id) return navigate("/home");
  }, [children]);

  return children;
};
