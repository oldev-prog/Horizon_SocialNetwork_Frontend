import './styles/PostsContent.css'
import { AuthorContainer } from "./AuthorContainer.tsx";
import { PostContentContainer } from "./PostContentContainer.tsx";
import { PostInteractions } from "./PostInteractions.tsx";

interface PostsLayoutProps {
    post_content?: string;
    media_path?: string;
}

export function PostsLayout({post_content, media_path} : PostsLayoutProps) {

  return (
      <div className="post_container">
          <AuthorContainer />
          <PostContentContainer text={post_content} media_path={media_path}/>
          <PostInteractions />
      </div>
  );
}