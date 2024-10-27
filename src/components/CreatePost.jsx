import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList)

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postbodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postbody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postbodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          aria-describedby="emailHelp"
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="How are you feeling Today...."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          ref={postbodyElement}
          id="title"
          aria-describedby="emailHelp"
          placeholder="Tell us more about it" rows = "4"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={reactionsElement}
          id="title"
          placeholder="How many people reacted to your post"
        />
      </div>
 
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Tags
        </label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
