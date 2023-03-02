// imports
import router from 'next/router'

// methods
function goToPostsPage() {
  router.push('/posts-page')
}

// posts
export default function Home() {
  return (
    <>
      <div className="pageName">
        <div>
          Home page
          <div className="go-to-posts-button" style={{marginTop: '10px'}} onClick={() => goToPostsPage()}>Posts</div>
        </div>
      </div>
    </>
  );
}
