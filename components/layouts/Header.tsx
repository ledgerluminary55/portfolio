import { Nav, Logo } from "../../components/ui";

export default function Header() {
  return (
    <div className="header bg-[rgba(0, 0, 0, 0.08)] sticky top-0 z-10 overflow-hidden bg-opacity-5 px-4 pb-[1px] pt-[5px] transition-all duration-500 md:px-6 lg:px-10 ">
      <div className="max-w-screen-xl w-full py-8 mx-auto">
        <div className="sm:flex sm:flex-row justify-between mx-8">
          <Logo />
          <Nav nav="About" />
        </div>
      </div>
    </div>
  );
}
