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
    grid-template-rows: repeat(3, 1fr);
    padding: 5rem;
    margin-top: 15vh;
    max-width: 100vw;
    gap: 2rem;
  }

  .title {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
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
    grid-row: 2 / span 3;
    padding-left: 5rem;
    color: #fff;
    font-family: 'Cormorant Garamond', serif;
    width: 600px;
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    .element-information {
      padding: 5rem;
  }

    .title {
      font-size: 3rem;
      width: 80vw;
      padding: 0;
      letter-spacing: 1rem;
      line-height: 4rem;
    }
    .description {
      grid-column: 2 / span 3;
      grid-row: 2 / span 3;
      padding-left: 0;
      color: #fff;
      font-family: 'Cormorant Garamond', serif;
      width: 70vw;
      font-size: 1.5rem;
    }
  }

 </style>