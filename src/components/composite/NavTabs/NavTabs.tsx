export default function NavTabs() {
  return (
    <div className="flex w-full justify-between items-center bg-project-secondary rounded-full p-1 space-x-3">
      <a href="#" className="bg-project-primary rounded-full flex-1 text-center py-2">
        Chat
      </a>
      <a href="#" className="flex-1 text-center py-2 rounded-full">
        Status
      </a>
      <a href="#" className="flex-1 text-center py-2 rounded-full">
        Call
      </a>
    </div>
  );
}
