
<script>
import BurgerMenu from './BurgerMenu.svelte'
export let showBurger;
export let show;

let hidden = true

</script>

  <div class='hamburger' on:click={showBurger}>
    <div class='hamburger-icon' class:active={show}></div>
    <div class='hamburger-icon' class:active={show}></div>
    <div class='hamburger-icon' class:active={show}></div>
  </div>
  {#if show}
    <BurgerMenu />
  {/if}
<style>

  .hamburger {
    z-index: 1;
    display: grid;
    grid-template-rows: repeat(3, 5px);
    height: 30px;
    position: absolute;
    right: 5vw;
    gap: 4px;
    cursor: pointer;
  }

  .hamburger-icon {
    width: 30px;
    height: 2px;
    background-color: #fff;
    transition: .3s ease-in-out;
  }

  .active:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  .active:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
  .active:nth-child(2) {
    opacity: 0;
  }

  </style>