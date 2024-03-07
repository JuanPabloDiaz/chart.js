import Link from "next/link";

export const Header = () => {
  const ul_style =
    "m-auto flex font-bold list-none flex-row flex-nowrap justify-center space-x-10 p-8";
  return (
    <header>
      <nav className="bg-bg-300 dark:bg-bg-300-dark text-text-100 dark:text-text-100-dark flex justify-around">
        <ul className={ul_style}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/page">Page Template</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
