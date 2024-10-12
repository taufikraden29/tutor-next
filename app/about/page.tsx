import Link from "next/link";

export const metadata = {
  title: "About Codevolution",
};

export default function About() {
  return (
    <div>
      <Link href="/" className="py-5">
        Home
      </Link>
      <h1>About Me</h1>
    </div>
  );
}
