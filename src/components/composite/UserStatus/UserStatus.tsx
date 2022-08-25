type Props = {
  friendsSince: string;
  totalCalls: number;
};

export default function UserStatus({ friendsSince, totalCalls }: Props) {
  return (
    <div className="flex w-full justify-center items-center my-4">
      <div className="flex-1 text-center">
        <span className="block text-white font-bold">Friends Since:</span>
        <span className="block text-white">{friendsSince}</span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-white font-bold">Total Calls</span>
        <span className="block text-white">{totalCalls}</span>
      </div>
    </div>
  );
}
