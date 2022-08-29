import { PaperPlaneRight } from "phosphor-react";

export default function MessageInput() {
  return (
    <div className="flex w-full py-2 px-4 bg-white space-x-2 fixed bottom-0">
      <textarea rows={1} name="" id="" className="min-w-[100px] flex flex-1 items-center content-center align-middle border border-project-primary rounded-full px-4 resize-none" placeholder="Message..." />
      <a href="#" role={"button"} className="flex items-center justify-center leading-none p-2 rounded-full bg-project-primary">
        <PaperPlaneRight size={28} color="#fff" weight="fill" />
      </a>
    </div>
  );
}
