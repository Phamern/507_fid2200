import { writable } from "svelte/store";

const store = writable({
  fire: [
    {
      name: "fire",
      description:
        "Fire is traditionally seen as the most rarefied and spiritual of the physical elements because of its masculine properties (which were superior to female properties). It also lacks physical existence, produces light, and has a transformative power when it comes in contact with more physical material.",
      video: "./fire.mp4",
    },
  ],
  water: [
    {
      name: "water",
      video: "./water.mp4"
    },
  ],
  air: [
    {
      name: "Air",
      video: "./air.mp4"
    },
  ],
  earth: [
    {
      name: "Earth",
      video: "./earth.mp4"
    },
  ],
});

export default store;
