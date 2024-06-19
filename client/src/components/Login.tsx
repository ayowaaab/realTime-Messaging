import { FormEvent, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';

interface Props {
  onIdSubmit: (id: string | undefined) => void;
}

const Login = ({ onIdSubmit }: Props) => {
  const idRef = useRef<HTMLInputElement>(null);
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    onIdSubmit(idRef.current?.value);
  };
  const createNewId = () => {
    onIdSubmit(uuidv4());
  };

  return (
    <form
      onSubmit={handelSubmit}
      className=" flex flex-col gap-5 h-full items-center"
    >
      <div className="flex flex-col gap-2 w-2/3 mt-12 mx-auto">
        <label className="text-md">Enter your ID :</label>
        <input
          className="text-md px-3 py-2 border rounded-md outline-none border-neutral-400"
          placeholder="ID"
          ref={idRef}
          type="text"
        />
        <div className="flex gap-3 w-1/2">
          <button type="submit" className="btn btn-primary mt-3">LogIn</button>
          <button
            type="button"
            onClick={createNewId}
            className="btn btn-secondary whitespace-nowrap  mt-3"
          >
            Create New ID
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
