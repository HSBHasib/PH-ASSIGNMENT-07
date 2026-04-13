import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white pt-10 pb-4 px-6 sm:px-12 md:px-24">
            <div className="flex flex-col items-center text-center space-y-5">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">KeenKeeper</h2>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="space-y-3">
                    <h3 className="text-[17px] font-medium tracking-wider text-gray-200">Social Links</h3>
                    <div className="flex items-center justify-center gap-3">
                        <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
                            <RiInstagramFill size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
                            <FaSquareFacebook size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white text-[#244D3F] rounded-full hover:bg-gray-200 transition-all">
                            <FaXTwitter size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400">
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

