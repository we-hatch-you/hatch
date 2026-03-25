import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Platform",
    links: [
      { title: "Core Loop", href: "#" },
      { title: "AI API Hub", href: "#" },
      { title: "Token Economics", href: "#" },
      { title: "Waitlist", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Hatch", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Security Protocols", href: "#" },
      { title: "Contact Support", href: "#" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { title: "Terms & Conditions", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Acceptable Use", href: "#" },
      { title: "Bug Bounty Program", href: "#" },
      { title: "Cardholder Agreement", href: "#" },
    ],
  },
];

const FooterLink = ({ title, href }: { title: string; href: string }) => {
  if (href === "#") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-base font-normal text-muted-foreground hover:text-foreground text-left transition-colors">
            {title}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <DialogDescription className="pt-4 flex flex-col gap-4 text-base">
              <span className="block text-foreground/80 leading-relaxed">
                This is a brief placeholder operational document for <strong>{title}</strong>. Hatch Cards is architected to prioritize decentralized security, absolute privacy, and seamless autonomous infrastructure operations above all else.
              </span>
              <span className="block italic text-sm text-muted-foreground mt-4">
                (Full legal documentation will be published globally prior to launch.)
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <a href={href} className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors">
      {title}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                {/* Logo */}
                <a href="#">
                  <Logo />
                </a>

                <p className="text-base font-normal text-muted-foreground">
                  The credit card that pays you in AI compute. Turn your everyday purchases into intelligence.
                </p>

              </div>
            </div>

            <div className="col-span-1 lg:block hidden"></div>

            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                  <p className="text-base font-medium text-foreground">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <FooterLink title={title} href={href} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <p className="text-base font-medium text-foreground">
                  Contact Details
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <p className="text-base font-normal text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </li>
                  <li>
                    <a
                      href="mailto:join@hatchcards.app"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      join@hatchcards.app
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-col items-center justify-center gap-8 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <h1 className="text-[14vw] leading-none font-bold tracking-tighter text-foreground/5 uppercase select-none pointer-events-none mt-8">
              HATCH CARDS
            </h1>
            <p className="text-sm font-normal text-muted-foreground text-center">
              © 2026 Hatch Cards. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
