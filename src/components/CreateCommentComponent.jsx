import { useState } from "react";
import { IoIosSend } from "react-icons/io";
function CreateCommentComponent({ createComment }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex-col justify-items-center pt-5" >
      <h2 className="title text-whitecustom text-5xl max-sm:text-4xl">
        Berilah Ucapan
      </h2>
      <label className="block text-whitecustom max-sm:text-center">
        Berikan ucapan dari doa terbaik untuk kedua mempelai
      </label>
      <div className="max-md:w-150  max-md:px-80  max-sm:w-70 max-sm:px-35  flex flex-row flex-auto justify-items-center place-content-center text-center shadow-sm p-2 mt-4 border-whitecustom border-3 rounded-lg w-190 h-100 drop-shadow-md/30">
        <form
          className="flex flex-col mt-5 gap-y-5 w-180 max-sm:px-10"
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
            onChange={(event) => setName(event.target.value)}
            placeholder="Nama"
            className="max-md:w-150 max-sm:w-65  block h-10 border-whitecustom border-3 rounded-md focus:outline-none focus:ring-0 indent-3 placeholder-white text-white"
            required
          />
          <textarea
            value={message}
            maxLength={200}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Pesan"
            className="max-md:w-150 max-sm:w-65 w-full min-h-50 px-4 py-3 border-whitecustom border-3 rounded-md leading-relaxed   resize-none focus:outline-none focus:ring-0 placeholder-white text-white"
            required
          ></textarea>
          <button className="max-md:w-150 max-sm:w-65  flex justify-center border-whitecustom border-3 text-whitecustom px-8 py-2 mt-4 rounded-4xl drop-shadow-md/25">
            Kirim
            <IoIosSend className="justify-self-end ml-2 mt-1"/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCommentComponent;
