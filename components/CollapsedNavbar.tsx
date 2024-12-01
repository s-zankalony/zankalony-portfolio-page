import DarkModeToggle from './DarkModeToggle';

function CollapsedNavbar() {
  return (
    <div
      className={`bg-[url('@/public/images/navbar-bg-light.jpg')] dark:bg-[url('@/public/images/navbar-bg.jpg')] bg-fixed shadow-md `}
    >
      <div className="full-width px-2 mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="font-caveat font-normal text-2xl leading-tight">
            Sameh El Zankalony
          </h1>
          <h2 className="font-caveat font-normal text-lg text-muted-foreground leading-tight">
            Full Stack Developer
          </h2>
        </div>
        <div className="ml-auto">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
export default CollapsedNavbar;
