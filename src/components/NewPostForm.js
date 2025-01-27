import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import PostForm from "./PostForm";

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      body: event.target.body.value,
      id: v4(),
    });
  }
  return (
    <>
      <PostForm
        formSubmissionHandler={handleNewPostFormSubmission}
        headingText="Add a Post"
        buttonText="Add Post"
      />
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPostForm;
