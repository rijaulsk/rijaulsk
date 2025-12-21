export default function Footer() {
  return (
    <footer className="w-full bg-background py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Rijaul Sk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
