import Footer from "../components/Footer";

export default function About() {
  const styles = {
    img: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      marginTop: '2vw',
      marginBottom: '2vw',
    },
    text: {
      fontSize: '2.6rem',
      fontFamily: 'Open Sans',
    },
    aboutMe: {
      fontSize: '3rem',
      fontFamily: 'Open Sans',
    },
    aboutContent: {
      margin: '6vw',
    },
  };

  return (
    <div style={styles.aboutContent} className="d-flex flex-column align-items-center">
      <h1 className="p-2" style={styles.aboutMe}>
        About Me
      </h1>
      <img className="p-2" style={styles.img} src="/assets/portfolio-pic.jpeg" alt="portfolio picture" />
      <p className="p-2" style={styles.text}>
        My name is Josh manley, im an aspiring web/software developer. I love going outdoors and being in the mountains.
        I'ts very peaceful, thats one of the benefits of living in Utah. I also enjoy cooking for my family, and playing
        video games in my free time.
      </p>
      <p className="p-2" style={styles.text}>
        Web/software development and coding has always been an interest of mine, it is intriguing and satisfying to
        solve a problem within the code and creating something from scratch and seeing it come together overtime. I've
        recently decided to make a career change to do something more beneficial with my career life and this seemed
        like the right direction.
      </p>
      <Footer />
    </div>
  );
}
