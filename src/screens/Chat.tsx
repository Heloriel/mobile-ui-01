import { CaretLeft, PaperPlaneRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white items-start">
      <div className="flex w-full py-6 px-4 justify-between items-center">
        <a role={"button"} onClick={() => navigate(-1)}>
          <CaretLeft size={22} color="#191C3F" />
        </a>
        <div>Matheus Andrade</div>
        <div>
          <img src="https://github.com/Heloriel.png" className="rounded-full w-8 h-8 object-cover" />
        </div>
      </div>
      <div className="flex-1">aaa</div>
      <div className="flex w-full p-2">
        <div className="flex flex-1 pr-2">
          <input type="text" name="" id="" className="flex-1 border border-project-primary rounded-full px-4" placeholder="Message..." />
        </div>
        <div className="flex">
          <a href="#" role={"button"} className="flex items-center justify-center leading-none p-2 rounded-full bg-project-primary">
            <PaperPlaneRight size={28} color="#fff" weight="fill" />
          </a>
        </div>
      </div>
    </div>
  );
}
