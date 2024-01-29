export default function ContactLink() {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center">
      <a
        href="https://github.com/Dev-Fl0"
        target="blank"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-800 text-primary-50 hover:bg-primary-400 h-9 px-3"
      >
        <img
          src="./logos/github-mark-white.png"
          alt="GitHub Logo"
          className="mr-2"
          height={16}
          width={16}
        />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/florian-wauthier/"
        target="blank"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-800 text-primary-50 hover:bg-primary-400 h-9 px-3"
      >
        <img
          src="./logos/LI-In-logo.png"
          alt="GitHub Logo"
          className="mr-2"
          height={16}
          width={16}
        />
        Linkedin
      </a>

      <a
        href="mailto:florian.wauthier74@gmail.com"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-800 text-primary-50 hover:bg-primary-400 h-9 px-3"
      >
        <img
          src="./logos/email_logo2.png"
          alt="GitHub Logo"
          className="mr-2"
          height={16}
          width={16}
        />
        Mail
      </a>

      <a
        href="https://twitter.com/Dev_Flo_ppeur"
        target="blank"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-800 text-primary-50 hover:bg-primary-400 h-9 px-3"
      >
        <img
          src="./logos/twitter_logo.png"
          alt="GitHub Logo"
          className="mr-2"
          height={16}
          width={16}
        />
        Twitter
      </a>
    </div>
  );
}
