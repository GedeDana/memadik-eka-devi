import { useState } from "react";
import { IoIosSend } from "react-icons/io";
function CreateCommentComponent({ createComment }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
<div className="flex flex-col items-center pt-10 px-4">
  <h2 className="title text-whitecustom text-5xl max-sm:text-4xl text-center">
    Berilah Ucapan
  </h2>

  <p className="text-whitecustom text-center mt-2">
    Berikan ucapan dan doa terbaik untuk kedua mempelai
  </p>

  <div className="w-full max-w-xl mt-6 bg-transparent border-2 border-whitecustom rounded-lg p-6 shadow-md">

    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        createComment(name, message);
        setName("");
        setMessage("");
      }}
    >
      <input
        type="text"
        value={name}
        maxLength={50}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama"
        className="w-full h-10 border-2 border-whitecustom rounded-md px-3 placeholder-white text-white bg-transparent"
        required
      />

      <textarea
        value={message}
        maxLength={200}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Pesan"
        className="w-full min-h-32 border-2 border-whitecustom rounded-md px-4 py-3 placeholder-white text-white bg-transparent resize-none"
        required
      />

      <button className="flex items-center justify-center gap-2 border-2 border-whitecustom text-white px-6 py-2 rounded-full mt-2">
        Kirim
        <IoIosSend />
      </button>
    </form>

  </div>
</div>
  );
}

export default CreateCommentComponent;
