Ok, we're making a new modification. Actually, that would be too much work, so I'll just take the test branch (since I'm invisi-invisi-tester) and reimplement it. That's why it's called "NG Update".

So what's in the new update? Basically:
- 3 new eternity upgrades
- blackhole stuff
- a new thing called "ex-dilation"
- 1 new achievement row

Fortunately, none of this stuff requires new styles. You need to add a new style when you realize that there's something in the HTML that needs to look different from everything already there. The way to add a new style is to add it to stylesheets/styles.css, and then add it to all the stylesheets/theme-{something}.css stylesheets for which it needs to look different in that theme (for example, in theme-S1.css, things are often a different color). But here, we won't be doing that, which is nice since that's really annoying.

OK, so what are the new eternity upgrades? Apparently they're boosts to dilated time gain based on antimatter, infinity points, and eternity points. Let's find where dilated time gain is in the code. It doesn't seem like one of the things that would be handled in any of the javascripts/core files, so let's search for "player.dilation.dilatedTime += " in the main file, which is javascripts/game.js. (Of course to do this you need to know where dilated time is stored in the player object, but a list of what everything in the player object means is on the wiki, at http://antimatter-dimensions.wikia.com/wiki/Cheating). And... no results? Why?

Ok, I'm dumb. player.dilation.dilatedTime is a decimal, so we want player.dilation.dilatedTime = player.dilation.dilatedTime.plus(something). Let's try searching "player.dilation.dilatedTime = player.dilation.dilatedTime.plus". We find the following line:
```
if (player.dilation.studies.includes(1)) player.dilation.dilatedTime =
player.dilation.dilatedTime.plus(player.dilation.tachyonParticles*Math.pow(2, player.dilation.rebuyables[1])*diff/10)
```
If we add anything more to this line it's going to become even longer than it already is, so let's make a function "getDilatedTimePerSecond". Also, the game displays dilated time per second; let's cal that function in the part that sets the display. I found the part that sets the display by looking in index.html for the name of the element that stores the display of dilated time per second (which I did by finding it in the "Dilation" subdiv). The name turned out to be "dilatedTimePerSecond", rather intuitively. Then I searched for that name in game.js and found it.)

Our new function ends up being:
```
function getDilatedTimePerSecond () {
    let ret = player.dilation.tachyonParticles.times(Decimal.pow(2, player.dilation.rebuyables[1]));
    if (player.eternityUpgrades.includes(7)) {
        ret = ret.times(1 + Math.log10(Math.max(1, player.antimatter.log(10))) / 40);
    }
    if (player.eternityUpgrades.includes(8)) {
        ret = ret.times(1 + Math.log10(Math.max(1, player.infinityPoints.log(10))) / 20);
    }
    if (player.eternityUpgrades.includes(9)) {
        ret = ret.times(1 + Math.log10(Math.max(1, player.eternityPoints.log(10))) / 10);
    }
    return ret;
}
```
We call this function in the two places it's needed. Now are we done?

No, of course we're not done. We need to actually add the eternity upgrades. I added the following to index.html, right below the second eternity upgrade row:
```
<tr id="dilationeterupgrow">
    <td>
        <button id="eter7" class="eternityupbtn" onclick="buyEternityUpgrade(7, new Decimal('1e1500'))">Dilated time gain is boosted by antimatter<br>Currently: Xx<br>Cost: 1e1500 EP</button>
    </td>
    <td>
        <button id="eter8" class="eternityupbtn" onclick="buyEternityUpgrade(8, new Decimal('1e2000'))">Dilated time gain is boosted by infinity points<br>Currently: Xx<br>Cost: 1e2000 EP</button>
    </td>
    <td>
        <button id="eter9" class="eternityupbtn" onclick="buyEternityUpgrade(9, new Decimal('1e3000'))">Dilated tiem gain is boosted by eternity points<br>Currently: Xx<br>Cost: 1e3000 EP</button>
    </td>
</tr>
```
I gave it an ID since I want to hide it if dilation isn't locked. This needs to be done in two parts: hide it on game load, and show it if dilation is unlocked. Neither of these is that hard. I initially wanted to put the part that shows it if dilation is unlocked in the gameLoop function, but I happened to stumble across the following line of code:
```
document.getElementById("dilationTabbtn").style.display = (player.dilation.studies.includes(1)) ? "inline-block" : "none"
```
and I put it right below that line.

Ok, what's left? Check buyEternityUpgrade to make sure it works with decimals (it does) and update the displays for the three new eternity upgrades, both the text they contain and whether they're shown as bought. We can find both these places by searching eternityUpgrades in game.js. We basically just have to copy the analogous stuff for the other eternity upgrades.

And after a bit more messing around, we're done with that! 1/4 done!

Now we have the blackhole stuff. This is going to require a new eternity subtab, so let's create that. We need to create both a button to access it and the subtab itself. It's sort of like the replicanti subtab in that it's never hidden, it just has an unlock requirement.

I did that and then committed, so you can see it in the commit history. There really is a lot of blackhole stuff, isn't there?

Ok, I found everything in game.js and load_functions.js that mentioned time dimensions and added the analogous thing for blackhole dimensions. I also copied time_dimensions.js into a new file blackhole.js; there's more to the blackhole than blackhole dimensions, but it's a good base.
