import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null });

      // Remove token
      localStorage.removeItem("token");

      // Show toast
      toast.success("Logout Successfully", { autoClose: 3000 });

      // Navigate to login after toast auto-close duration
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Match this duration with autoClose duration
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <button className="btn btn-danger ms-2 fw-bold" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
