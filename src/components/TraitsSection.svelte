<script>
  export let element;
  export let trait;
</script>

 <section class='element-information'>
    <div class='intro-text'>
      <h2 class='title'>The <br>{element.name} traits</h2>
      <div class="traits-grid-container">
        <div class='item-container'>
          <p class='trait-label'>Direction </p>
          <p class='trait-item'>{trait.direction}</p>
        </div>
        <div class='item-container'>
          <p class='trait-label'>Energy </p>
          <p class='trait-item'>{trait.energy}</p>
        </div>
        <div class='item-container'>
          <p class='trait-label'>Colour </p>
          <p class='trait-item'>{trait.colour}</p>
        </div>
        <div class='item-container'>
          <p class='trait-label'>Season </p>
          <p class='trait-item'>{trait.season}</p>
        </div>
        <div class='item-container'>
          <p class='trait-label'>Time </p>
          <p class='trait-item'>{trait.time}</p>
        </div>
        <div class='item-container'>
          <p class='trait-label'>Sense </p>
          <p class='trait-item'>{trait.sense}</p>
        </div>
      </div>
    </div>
 </section>


 <style>
  
  .element-information {
    display: grid;
    grid-template-columns:  1fr, 1fr, 30vw;
    padding: 5rem;
    padding-top: 10vh;
    max-width: 100vw;
    gap: 2rem;
    overflow: hidden;
  }

  .title {
    grid-column: 1 / span 2;
    font-size: 4rem;
    font-family: 'Cormorant Garamond', serif;
    font-family: 'Inknut Antiqua', serif;
    font-weight: 400;
    line-height: 7rem;
    letter-spacing: 1rem;
    margin: 0;
    color: #843f5b;
  }

  .traits-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 4rem;
    row-gap: 6rem;
    width: 100%;
    justify-content: center;
  }

  .item-container {
    display: grid;
    grid-template-rows: repeat(2, 3rem);
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .trait-label {
    font-family: 'Cormorant Garamond', serif;
    color: #fff;
    letter-spacing: .4rem;
  }

  .trait-item {
    color: #843f5b;
    font-family: 'Inknut Antiqua', serif;
    font-size: 2rem;
    line-height: 3rem;
    margin: 0;
  }

  @media (max-width: 760px) {
    
    .element-information {
      padding: 3rem;
      margin-top: 5vh;
    }

    .traits-grid-container {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 3rem;
      column-gap: 2rem;
      justify-content: left;
    }

    .item-container {
      grid-template-rows: repeat(2, 2rem);
      justify-content: left;
      text-align: left;
    }

    .title {
      font-size: 2rem;
      width: 100%;
      padding: 0;
      letter-spacing: 1rem;
      line-height: 3.5rem;
    }

    .trait-item {
      padding-left: 0;
      width: 100%;
      font-size: 1.3rem;
    }

  }

  @media (max-width: 375px) {

    .element-information {
      height: auto;
    }

    .traits-grid-container {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1rem;
      column-gap: 2rem;
      justify-content: left;
    }

  }

 </style>