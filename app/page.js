import Link from "next/link";
import Headers from "@/components/header";

export default function Home() {
  console.log('Executing...');
  return (
    <main>
      <Headers />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/awesome">NextJS Is Awesome</Link></p>
      <p><Link href="/about">About This Project</Link></p>
      
    </main>
  );
}
