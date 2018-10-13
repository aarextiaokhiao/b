//time dimensions

function getBlackholeDimensionPower(tier) {
  var dim = player["blackholeDimension"+tier];

  let ret = dim.power;

  if (ret.lt(1)) {
    ret = new Decimal(1)
  }

  if (player.dilation.active) {
    ret = Decimal.pow(10, Math.pow(ret.log10(), 0.75))
    if (player.dilation.upgrades.includes(9)) {
      ret = Decimal.pow(10, Math.pow(ret.log10(), 1.05))
    }
  }


  return ret

}


function getBlackholeDimensionProduction(tier) {
  var dim = player["blackholeDimension"+tier]
  if (player.currentEternityChall == "eterc11") return dim.amount
  var ret = dim.amount.times(getBlackholeDimensionPower(tier))
  return ret
}


function getBlackholeDimensionRateOfChange(tier) {
  let toGain = getBlackholeDimensionProduction(tier+1)
  var current = Decimal.max(player["blackholeDimension"+tier].amount, 1);
  var change  = toGain.times(10).dividedBy(current);
  return change;
}

function getBlackholeDimensionDescription(tier) {
  var name = TIER_NAMES[tier];

  let description = shortenDimensions(player['blackholeDimension'+tier].amount);

  if (tier < 4) {
      description += '  (+' + formatValue(player.options.notation, getBlackholeDimensionRateOfChange(tier), 2, 2) + '%/s)';
  }

  return description;
}

function getBlackholeUpgradeExponent() {
  let ret = player.blackhole.upgrades.total / 10;
  if (ret > 2) {
    ret = (ret - 2) / Math.log2(ret) + 2;
  }
  return ret;
}

function getBlackholePowerEffect() {
  return Math.pow(Math.max(player.blackhole.power.log(2), 1), getBlackholeUpgradeExponent());
}

function unlockBlackhole() {
    if (player.eternityPoints.gte('1e4000')) {
        document.getElementById("blackholediv").style.display="inline-block"
        document.getElementById("blackholeunlock").style.display="none"
        player.blackhole.unl = true
        player.eternityPoints = player.eternityPoints.minus('1e4000')
    }
}

function updateBlackhole() {
  drawBlackhole();
  document.getElementById("blackholePowAmount").innerHTML = shortenMoney(player.blackhole.power);
  document.getElementById("blackholePowPerSec").innerHTML = "You are getting " + shortenMoney(getBlackholeDimensionProduction(1)) + " blackhole power per second.";
  document.getElementById("DilMultAmount").innerHTML = shortenMoney(getBlackholePowerEffect());
  document.getElementById("InfAndReplMultAmount").innerHTML = shortenMoney(Math.cbrt(getBlackholePowerEffect()));
  document.getElementById("blackholeDil").innerHTML = "Feed the black hole with dilated time<br>Cost: "+shortenCosts(new Decimal(1e20).times(Decimal.pow(10, player.blackhole.upgrades.dilatedTime)))+" dilated time";
  document.getElementById("blackholeInf").innerHTML = "Feed the black hole with banked infinities<br>Cost: "+formatValue(player.options.notation, 5e9 * Math.pow(2, player.blackhole.upgrades.bankedInfinities), 1, 1)+" banked infinities";
  document.getElementById("blackholeRepl").innerHTML = "Feed the black hole with replicanti<br>Cost: "+shortenCosts(new Decimal("1e20000").times(Decimal.pow("1e1000", player.blackhole.upgrades.replicanti)))+" replicanti";
  document.getElementById("blackholeDil").className = canFeedBlackHole(1) ? 'eternityupbtn' : 'eternityupbtnlocked';
  document.getElementById("blackholeInf").className = canFeedBlackHole(2) ? 'eternityupbtn' : 'eternityupbtnlocked';
  document.getElementById("blackholeRepl").className = canFeedBlackHole(3) ? 'eternityupbtn' : 'eternityupbtnlocked';
  if (document.getElementById("blackhole").style.display == "block" && document.getElementById("eternitystore").style.display == "block") {
    for (let tier = 1; tier <= 4; ++tier) {
      document.getElementById("blackholeD"+tier).textContent = DISPLAY_NAMES[tier] + " Blackhole Dimension x" + shortenMoney(getBlackholeDimensionPower(tier));
      document.getElementById("blackholeAmount"+tier).textContent = getBlackholeDimensionDescription(tier);
    }
  }
}

function drawBlackhole() {
    if (document.getElementById("blackhole").style.display == "block" && document.getElementById("eternitystore").style.display == "block") {
        let radius = Math.max(player.blackhole.power.log(2), 0);
        let ctb = document.getElementById('blackHoleCanvas').getContext('2d');
        ctb.beginPath();
        ctb.arc(200, 200, radius, 0, 2 * Math.PI, true);
        ctb.fill();
    }
}

function canFeedBlackHole (i) {
    if (i === 1) {
        return new Decimal(1e20).times(Decimal.pow(10, player.blackhole.upgrades.dilatedTime)).lte(player.dilation.dilatedTime);
    } else if (i === 2) {
        return 5e9 * Math.pow(2, player.blackhole.upgrades.bankedInfinities) <= player.infinitiedBank;
    } else if (i === 3) {
        return new Decimal("1e20000").times(Decimal.pow("1e1000", player.blackhole.upgrades.replicanti)).lte(player.replicanti.amount);
    }
}

function feedBlackHole (i) {
  if (!canFeedBlackHole(i)) {
    return false;
  }
  if (i === 1) {
      player.dilation.dilatedTime = player.dilation.dilatedTime.minus(new Decimal(1e20).times(Decimal.pow(10, player.blackhole.upgrades.dilatedTime)));
      player.blackhole.upgrades.dilatedTime++;
  } else if (i === 2) {
      player.infinitiedBank -= 5e9 * Math.pow(2, player.blackhole.upgrades.bankedInfinities);
      player.blackhole.upgrades.bankedInfinities++;
  } else if (i === 3) {
      player.replicanti.amount = player.replicanti.amount.minus(new Decimal("1e20000").times(Decimal.pow("1e1000", player.blackhole.upgrades.replicanti)));
      player.blackhole.upgrades.replicanti++;
  }
  player.blackhole.upgrades.total++;
  updateBlackhole();
  return true;
}

let blackholeDimStartCosts = [null, new Decimal('1e4000'), new Decimal('1e8000'), new Decimal('1e12000'), new Decimal('1e20000')];

let blackholeDimCostMults = [null, new Decimal('1e500'), new Decimal('1e1000'), new Decimal('1e2000'), new Decimal('1e4000')]

function buyBlackholeDimension(tier) {
  var dim = player["blackholeDimension"+tier]
  if (tier > 4) return false
  if (player.eternityPoints.lt(dim.cost)) return false

  player.eternityPoints = player.eternityPoints.minus(dim.cost)
  dim.amount = dim.amount.plus(1);
  dim.bought += 1
  dim.cost = Decimal.pow(blackholeDimCostMults[tier], dim.bought).times(blackholeDimStartCosts[tier]);
  dim.power = dim.power.times(2)
  updateBlackhole();
  if (tier === 4) {giveAchievement("We couldn't afford 5")}
  return true
}

function resetBlackhole() {
  player.blackhole.power = new Decimal(0);
  document.getElementById('blackHoleCanvas').getContext('2d').clearRect(0, 0, 400, 400);
  for (var i=1; i<5; i++) {
      var dim = player["blackholeDimension"+i]
      dim.amount = new Decimal(dim.bought)
  }
}

function buyMaxBlackholeDimensions() {
  for(var i=1; i<5; i++) while(buyBlackholeDimension(i)) continue
}
