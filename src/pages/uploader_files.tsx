import FileUploader from "../components/FileUploader";
import ThemeToggle from "../components/ThemeToggle";

export default function Uploads() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center py-2">
      <div>
        <ThemeToggle />
      </div>
      <FileUploader />
    </div>
  );
}
