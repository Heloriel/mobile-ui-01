export default function NavTabs() {
  return (
    <div className="flex w-full justify-between bg-project-secondary rounded-xl p-2 space-x-3">
      <a href="#" className="bg-project-primary rounded-lg flex-1 text-center py-2">
        Chat
      </a>
      <a href="#" className="flex-1 text-center py-2">
        Status
      </a>
      <a href="#" className="flex-1 text-center py-2">
        Call
      </a>
    </div>
  );
}
