const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500 bg-teal-500"
          href="https://www.linkedin.com/in/anish-mainali-937409280"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className=" hover:opacity-50 transition duration-500"
          href="https://github.com/anishmendes"
          target="_blank"
          rel="noreferrer" 
        >
          <img alt="github-link" src="../assets/twitter.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500 bg-indigo-800 rounded-sm"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a>
        <a
          className=" bg-rose-600 hover:opacity-50 transition duration-500 rounded "
          href="https://www.instagram.com/anish_peter_mendes"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;