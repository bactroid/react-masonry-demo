import React from "react";
import Masonry from "react-masonry-css";
import "./App.css";

const breakpointsColumnsSettings = {
  default: 4,
  1100: 3,
  800: 2
};

const moby =
  "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can.";

const amontillado =
  "The thousand injuries of Fortunato I had borne as I best could, but when he ventured upon insult, I vowed revenge. You, who so well know the nature of my soul, will not suppose, however, that I gave utterance to a threat. At length I would be avenged; this was a point definitely settled—but the very definitiveness with which it was resolved, precluded the idea of risk. I must not only punish, but punish with impunity. A wrong is unredressed when retribution overtakes its redresser. It is equally unredressed when the avenger fails to make himself felt as such to him who has done the wrong.";

const pride =
  "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.";

const cities =
  "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way— in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.";

const dunwich =
  "When a traveler in north central Massachusetts takes the wrong fork at the junction of the Aylesbury pike just beyond Dean's Corners he comes upon a lonely and curious country. The ground gets higher, and the brier-bordered stone walls press closer and closer against the ruts of the dusty, curving road. The trees of the frequent forest belts seem too large, and the wild weeds, brambles, and grasses attain a luxuriance not often found in settled regions.";

const frankenstein =
  "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.";

const wild =
  "Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they wanted were heavy dogs, with strong muscles by which to toil, and furry coats to protect them from the frost.";

const dracula =
  "3 May. Bistritz.—Left Munich at 8:35 P. M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets. I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible. The impression I had was that we were leaving the West and entering the East; the most western of splendid bridges over the Danube, which is here of noble width and depth, took us among the traditions of Turkish rule.";

const sourceData = [
  { id: 1, title: "Moby Dick", descr: moby, buttonText: "Engage" },
  {
    id: 2,
    title: "The Cask of Amontillado",
    descr: amontillado,
    buttonText: "Engage"
  },
  { id: 3, title: "Pride and Prejudice", descr: pride, buttonText: "Engage" },
  { id: 4, title: "Dracula", descr: dracula, buttonText: "Engage" },
  { id: 5, title: "Frankenstein", descr: frankenstein, buttonText: "Engage" },
  { id: 6, title: "The Call of the Wild", descr: wild, buttonText: "Engage" },
  { id: 7, title: "The Dunwich Horror", descr: dunwich, buttonText: "Engage" },
  { id: 8, title: "A Tale of Two Cities", descr: cities, buttonText: "Engage" }
];

const items = sourceData.map(item => {
  return (
    <div key={item.id}>
      <h2 className="header-title">
        {item.title} ({item.id})
      </h2>
      <p>{item.descr}</p>
      <button>{item.buttonText}</button>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <h1>[ Generic Portal Title ]</h1>
      <Masonry
        breakpointCols={breakpointsColumnsSettings}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </div>
  );
}

export default App;
