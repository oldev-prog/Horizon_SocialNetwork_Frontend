import { useNavigate } from 'react-router-dom';
import '../styles/MediaContent.css';
import {PostMediaContentInfo} from "../../../PostElements /PostPage/PostMediaContentInfo.tsx";
import { MediaPostContent } from "./MediaPostContent.tsx";

// export function MediaContentPage() {
//     const { id } = useParams(); // Получаем ID из ссылки
//     const navigate = useNavigate();
//
//     return (
//         <div className="media_page_overlay">
//             {/* Кнопка закрытия (назад) */}
//             <div className="close_area" onClick={() => navigate(-1)} />
//
//             <div className="post_full_container">
//                 {/* Левая часть: Изображение */}
//                 <div className="post_full_media">
//                     <img src={`/media/img${id}.jpg`} alt="Post content" />
//                 </div>
//
//                 {/* Правая часть: Инфо и Комментарии */}
//                 <div className="post_full_info">
//                     <div className="post_full_header">
//                         <img className="author_avatar_small" src="/myphoto.jpg" alt="" />
//                         <span className="author_name_small">User_Name</span>
//                     </div>
//
//                     <div className="post_full_comments">
//                         {/* Тут будет твой список комментариев */}
//                         <p className="comment_placeholder">Здесь будут комментарии для поста #{id}...</p>
//                     </div>
//
//                     <div className="post_full_actions">
//                         <div className="post_interactions">
//                             {/* Твои кнопки Like, Comment из предыдущих шагов */}
//                         </div>
//                         <input
//                             className="post_full_input"
//                             placeholder="Добавьте комментарий..."
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export function MediaContentPage({media_path} : {media_path: string}) {
    const navigate = useNavigate();

    const handleClose=() => {
        navigate(-1)
    }

    return (
        <div className="media_page" onClick={handleClose}>
            <div className="media_container" onClick={(e) => e.stopPropagation()}>
                <MediaPostContent media_path={media_path} />
                <PostMediaContentInfo />
            </div>
            <img className="post_media_cross" src="../../../../public/icons/icon_cross.png"/>
        </div>
    );
}
