import { Shield, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Trust badges */}
        <div className="mb-6 flex items-center justify-center gap-6 text-primary-foreground/70">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4" />
            <span>Secure Process</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Lock className="h-4 w-4" />
            <span>Privacy Protected</span>
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="mb-6 text-center text-xs text-primary-foreground/60 leading-relaxed">
          This website is not affiliated with or endorsed by any government agency. 
          We provide information about financial assistance programs and connect users with 
          application resources. Eligibility for programs varies based on individual circumstances. 
          Results are not guaranteed.
        </p>
        
        {/* Copyright */}
        <p className="text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Financial Assistance Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;