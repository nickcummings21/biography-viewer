let storiesTextEl = document.querySelector("#story-1");
storiesTextEl.innerHTML = `
<div class="text-title">
  <p style="font-size: 1.4rem">A Boar in the Kitchen</p>
  <p>Based on events from the life of Albert Franklin Hulet.</p>
</div>
<div class="story-pic-container">
  <img class="story-pic" src="assets/boar.png" alt="boar"/>
</div>
<p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  "Now you make sure to get those clothes good and clean before your father 
  gets back from the pasture, Lenora May," said Mother. "And Francis, put 
  away those toys now; it's just about time for supper."
</p>
<p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Francis sighed and got up reluctantly to place his rag doll and wooden 
  blocks back in their box, which he carefully slid under the edge of the bed 
  he shared with Oscar and me. He then shuffled over to where Lenora May had 
  placed some of Father's clothes that she had already finished washing and 
  gathered them up to take them out to the clothesline.
</p>
<p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  It was spring again and it was warm enough outside that the 
  recently-washed clothes were no longer forced to occupy the space by the fireplace 
  in order to dry properly. It also meant that Father could tell from a long way 
  off whether or not the washing had been done.
</p>
`;

const popupHtml = `
<div class="def-popup">
  <div class="def-popup-title">Definition: </div>
  <div className="def-popup-content"></div>
</div>
`;
