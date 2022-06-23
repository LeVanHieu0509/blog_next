import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";
export default function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const emailEl = useRef();
  const nameEl = useRef();

  useEffect(() => {}, []);
  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = emailEl.current;
    const { value: email } = nameEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg pb-12 mb-8 ">
      <h3 className="text-black font-semibold border-b pb-4 mb-6">
        CommentsForm
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="rounded-lg p-4 outline-none forcus:ring-2 forcus:ring-gray-200 bg-gray-100 w-full text-gray-700"
          placeholder="Comment"
          name="comment"
        />
        <div className="grid grid-cols-1 gap-4">
          <input
            ref={nameEl}
            className="rounded-lg py-2 p-4 outline-none forcus:ring-2 forcus:ring-gray-200 bg-gray-100 w-full text-gray-700"
            placeholder="Name"
            type="text"
            name="name"
            id=""
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            ref={emailEl}
            className="rounded-lg py-2 p-4 outline-none forcus:ring-2 forcus:ring-gray-200 bg-gray-100 w-full text-gray-700"
            placeholder="Email"
            type="text"
            name="email"
            id=""
          />
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={handleCommentSubmission}
          className="p-4 transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full"
          type="button"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
}
