<script>
export let fact;
</script>

 <section class='element-information'>
    <div class='intro-text'>
      <h2 class='title'>The <br>{fact.name} Element</h2>
      <p class='description'>{fact.description}</p>
    </div>
 </section>


 <style>
  
  .element-information {
    display: grid;
    grid-template-columns:  1fr, 1fr, 30vw;
    padding: 5rem;
    padding-top: 15vh;
    max-width: 100vw;
    gap: 2rem;
    overflow-x: hidden;
  }

  .title {
    grid-column: 1 / span 2;
    font-size: 5rem;
    font-family: 'Cormorant Garamond', serif;
    font-family: 'Inknut Antiqua', serif;
    font-weight: 400;
    line-height: 7rem;
    letter-spacing: 1rem;
    margin: 0;
    color: #a05454;
  }

  .description {
    grid-column: 2 / span 3;
    padding-left: 5rem;
    color: #fff;
    font-family: 'Cormorant Garamond', serif;
    width: 600px;
    font-size: 2rem;
  }

  @media (max-width: 760px) {
    .element-information {
      padding: 3rem;
      margin-top: 5vh;
  }

    .title {
      font-size: 2.5rem;
      width: 100%;
      padding: 0;
      letter-spacing: 1rem;
      line-height: 3.5rem;
    }
    .description {
      padding-left: 0;
      color: #fff;
      font-family: 'Cormorant Garamond', serif;
      width: 100%;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 320px) {
    .element-information {
      padding: 2rem;
      margin-top: 2vh;
  }

    .title {
      font-size: 2rem;
      width: 100%;
      padding: 0;
      letter-spacing: 1rem;
      line-height: 3.5rem;
    }
    .description {
      padding-left: 0;
      color: #fff;
      font-family: 'Cormorant Garamond', serif;
      width: 100%;
      font-size: 1rem;
    }
  }

 </style>