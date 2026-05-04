import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
              KTILP<span className="text-[--color-neon-cyan]">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Empowering the next generation of top-tier professionals. Master your craft, communicate effectively, and launch your dream career.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold">
                GH
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#benefits" className="hover:text-[--color-neon-cyan] transition-colors">Benefits</Link></li>
              <li><Link href="#courses" className="hover:text-[--color-neon-cyan] transition-colors">Courses</Link></li>
              <li><Link href="#testimonials" className="hover:text-[--color-neon-cyan] transition-colors">Testimonials</Link></li>
              <li><Link href="#pricing" className="hover:text-[--color-neon-cyan] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[--color-neon-cyan] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[--color-neon-cyan] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[--color-neon-cyan] transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-[--color-neon-cyan] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} KTILP Masterclasses. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with Next.js & Three.js</p>
        </div>
      </div>
    </footer>
  );
}
