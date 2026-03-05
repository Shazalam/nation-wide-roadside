import Link from "next/link";
import { Truck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-dark transition-colors">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white">
                                NATIONWIDE<span className="text-brand-primary">ROADSIDE</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Leading the way in commercial dispatch and roadside solutions across all 50 states. Reliable, fast, and professional support for fleets of all sizes.
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="#" className="hover:text-brand-accent transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-brand-accent transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div> */}
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Our Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#services" className="hover:text-white transition-colors">Emergency Towing</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Heavy Duty Recovery</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Fleet Maintenance</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Battery & Tire Support</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">EV Specialist Support</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Network</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Compliance</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-brand-primary shrink-0" />
                                <span>1234 Enterprise Way, Suite 100<br />Dallas, TX 75201</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                                <span>+1 (800) XXX-XXXX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-brand-primary shrink-0" />
                                <span>support@nationwideroadside.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
                    <p>© 2024 NATIONWIDE ROADSIDE ASSISTANCE. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
