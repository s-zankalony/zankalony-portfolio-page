import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiGlobe } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-800 text-background dark:bg-background dark:text-foreground">
      <div className="max-w-100 w-[85%] mx-auto py-4 md:text-center">
        <h2 className="font-caveat font-normal text-5xl mb-8 text-center">
          Let's Keep in Touch!
        </h2>

        {/* <!-- Social media and contact links. Add or remove any networks. --> */}
        <ul className="list-none p-0 flex flex-col gap-2 items-center md:flex-row md:justify-between">
          <li>
            <a
              href="mailto:sameh@zankalony.com"
              className="flex items-center justify-between gap-2"
            >
              <span>
                <MdOutlineMailOutline />
              </span>
              <span>sameh@zankalony.com</span>
            </a>
          </li>
          <li>
            <a
              href="https://zankalony.com"
              target="_blank"
              className="flex items-center justify-between gap-2"
            >
              <span>
                <CiGlobe />
              </span>
              <span>zankalony.com</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/szankalony"
              target="_blank"
              className="flex items-center justify-between gap-2"
            >
              <span>
                <FaXTwitter />
              </span>
              <span>x.com</span>
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/zankalony"
              target="_blank"
              className="flex items-center justify-between gap-2"
            >
              <span>
                <FaLinkedin />
              </span>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/sameh.zankalony77"
              target="_blank"
              className="flex items-center justify-between gap-2"
            >
              <span>
                <FaFacebookSquare />
              </span>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/s-zankalony"
              target="_blank"
              className="flex items-center justify-between gap-2"
            >
              <span>
                <FaGithubSquare />
              </span>
              <span>Github</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
