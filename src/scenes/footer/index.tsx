import Logo from "@/assets/Logo.png";
import footer from "@/assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={footer} />
          <p className="my-5">
          Leading gym app offering personalized fitness classes with progress tracking and exclusive access to our community.
          </p>
          <p>© Ellegym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Our Policy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We will get back to you as soon as possible.</p>
          <p>(514) 672-4117</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
