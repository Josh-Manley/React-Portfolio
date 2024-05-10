export default function About() {
  const styles = {
    text: {
      fontSize: '45px',
      fontFamily: 'arial',
    },
  };

  return (
    <div>
      <h1>About Me</h1>
      <p style={styles.text}>
        My name is Josh manley, im an aspiring web/software developer. I love going outdoors and being in the mountains.
        I'ts very peaceful, thats one of the benefits of living in Utah. I also enjoy cooking for my family, and playing
        video games in my free time.
      </p>
      <p style={styles.text}>
        Web/software development and coding has always been an interest of mine, it is intriguing and satisfying to
        solve a problem within the code and creating something from scratch and seeing it come together overtime. I've
        recently decided to make a career change to do something more beneficial with my career life and this seemed
        like the right direction.
      </p>
    </div>
  );
}
