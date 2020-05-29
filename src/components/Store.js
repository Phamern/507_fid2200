import { writable } from "svelte/store";

const store = writable({
  fire: [
    {
      name: "Fire",
      video: "./video/fire.mp4",
      description: "The element of Fire is both creative and destructive, its qualities are Brightness, Thinness and Motion and its mode is Active. It is fire that we and our ancestors used to warm our homes, we use it to cook our food, we sit around it to ward of the darkness of night, and it fuels our passions.",
      cors: [{direction: 'East - the place of sunrise.', energy: 'Projective'}]
    },
  ],
  water: [
    {
      name: "Water",
      video: "./video/water.mp4",
      description: 'Water, is a great necessity, without it nothing can live. Only earth and water can bring forth a living soul. Such is the greatness of water that spiritual regeneration cannot be done without it.',
      cors: [{direction: 'East - the place of sunrise.'}]
    },
  ],
  air: [
    {
      name: "Air",
      video: "./video/air.mp4",
      description: 'The element of Air is vital to human survival, without it we would all perish, its aspects are Thinness, Motion and Darkness and its quality is Active. Air is the manifestation of movement, freshness, communication and of the intelligence. Sound is another manifestation of this element. As an element, it is invisible, but its reality can be felt in the air that we breathe in every day.',
      cors: [{direction: 'East - the place of sunrise.', energy: 'Projective'}]
    },
  ],
  earth: [
    {
      name: "Earth",
      video: "./video/earth.mp4",
      description: 'The basis and foundation of all the elements is the Earth. The Earth is the object; subject and receptacle of all celestial rays and influences and in it are the seeds of all things. It is made fruitful by the other elements and the heavens, and brings forth all things of itself. It is the first fountain from whence all things spring; it is the centre, foundation and mother of all things.',
      cors: [{direction: 'East - the place of sunrise.'}]
    },
  ],
});

export default store;
