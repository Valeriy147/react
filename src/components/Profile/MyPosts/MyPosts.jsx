import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likes} />);

  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.postsBlock}>
      <div>
        A photo and name of a user with a hardcoded ID was taken as a test (taken from ajax
        request). If they don't show up, please turn on<b> VPN</b>
      </div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            className={s.textarea}
          />
        </div>
        <div>
          <button onClick={onAddPost} className={s.button}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
