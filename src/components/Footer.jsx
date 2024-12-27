import { Youtube } from "@/source/icons/Icon";
import { Tiktok } from "@/source/icons/Icon";
import { Xsocial } from "@/source/icons/Icon";

function Footer() {
  return (
    <footer className="bg-[#90EE90] text-black/60 py-5 border-t border-white/20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2024 our system is in the development mode
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <Xsocial />
            <Tiktok />
            <Youtube />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
