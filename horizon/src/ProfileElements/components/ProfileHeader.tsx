import { useNavigate} from "react-router-dom";
import api from "../../api.tsx";

export function ProfileHeader() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } catch (err) {
            console.error("Logout request failed, cleaning up locally...", err);
        } finally {
            localStorage.removeItem('accessToken');

            delete api.defaults.headers.common['Authorization'];

            navigate('/login');
        }
    };

    return (
    <div className="profile_background">
      <button className="button_glass logout" onClick={handleLogout}>Log out</button>
      <button className="button_glass header notifications">
        <img
          className="icon_header"
          src="../../../public/icons/icon_notification.png"
        />
      </button>
      <button className="button_glass header search">
        <img className="icon_header" src="../../../public/icons/icon_search.svg" />
      </button>
      <button className="button_glass edit_photo">Edit cover photo</button>
    </div>
  );
}
