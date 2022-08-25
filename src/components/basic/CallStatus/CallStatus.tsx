import classNames from "classnames";
import { PhoneIncoming, PhoneSlash, PhoneX } from "phosphor-react";

type Props = {
  status: "accepted" | "lost" | "rejected";
};

export default function CallStatus({ status }: Props) {
  return (
    <div className={classNames("rounded-lg p-1", { "bg-green-600": status == "accepted" }, { "bg-red-600": status == "lost" }, { "bg-yellow-600": status == "rejected" })}>
      {status == "accepted" ? <PhoneIncoming color="#fff" weight="fill" size={20} /> : <></>}
      {status == "lost" ? <PhoneX color="#fff" size={20} /> : <></>}
      {status == "rejected" ? <PhoneSlash color="#fff" size={20} /> : <></>}
    </div>
  );
}
