import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-primary)] text-center px-6">
      <span className="tech-label text-[var(--color-accent)] mb-6">
        Signal Lost
      </span>
      <h1 className="heading-xl text-[8rem] md:text-[12rem] leading-none mb-4 text-[var(--color-text-muted)]/20">
        404
      </h1>
      <h2 className="heading-lg mb-4">Lost the Signal.</h2>
      <p className="body-lg mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Return to Base
        <span>→</span>
      </Link>
    </section>
  );
}
