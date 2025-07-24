import Contact from '@/components/home/contact';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div>
      <h1
        className={
          'motion-blur-in-md text-center text-white text-4xl font-bold'
        }
      >
        Get in touch
      </h1>
      <p
        className={
          'motion-blur-in pt-6 px-6 md:px-16 text-gray-400 text-xl md:text-xl text-justify'
        }
      >
        At the moment, I am open to work and projects. If you want to get in
        touch, feel free to reach out through the contact form. I'll do my best
        to respond as soon as possible to the mail address you provide. You can
        also find my email address below if you prefer to contact me directly.
        If you need more information about me, you can check out my{' '}
        <Link
          to={"/projects"}
          className={'text-primary font-semibold'}
        >
          projects
        </Link>{' '}
        or my <a
          target={"_blank"}
          href={"https://www.linkedin.com/in/thisfatand/"}
          className={"text-primary font-semibold"}
        >
          LinkedIn
        </a> profile.
      </p>
      <div>
        <Contact />
      </div>
    </div>
  );
}
export default ContactPage;
