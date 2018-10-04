//test
var Marathon = 0;
var auto = false;
var autoS = true;

var initTimestudy = function () {
  return {
      theorem: 0,
      amcost: new Decimal("1e20000"),
      ipcost: new Decimal(1),
      epcost: new Decimal(1),
      studies: [null, 0, 0, 0, 0, 0, 0, 0, 0],
      studyGroupsUnlocked: 0
  }
}

var player = {
    money: new Decimal(10),
    tickSpeedCost: new Decimal(1000),
    tickspeed: new Decimal(1000),
    firstCost: new Decimal(10),
    secondCost: new Decimal(100),
    thirdCost: new Decimal(10000),
    fourthCost: new Decimal(1000000),
    fifthCost: new Decimal(1e9),
    sixthCost: new Decimal(1e13),
    seventhCost: new Decimal(1e18),
    eightCost: new Decimal(1e24),
    firstAmount: new Decimal(0),
    secondAmount: new Decimal(0),
    thirdAmount: new Decimal(0),
    fourthAmount: new Decimal(0),
    firstBought: 0,
    secondBought: 0,
    thirdBought: 0,
    fourthBought: 0,
    fifthAmount: new Decimal(0),
    sixthAmount: new Decimal(0),
    seventhAmount: new Decimal(0),
    eightAmount: new Decimal(0),
    fifthBought: 0,
    sixthBought: 0,
    seventhBought: 0,
    eightBought: 0,
    firstPow: new Decimal(1),
    secondPow: new Decimal(1),
    thirdPow: new Decimal(1),
    fourthPow: new Decimal(1),
    fifthPow: new Decimal(1),
    sixthPow: new Decimal(1),
    seventhPow: new Decimal(1),
    eightPow: new Decimal(1),
    sacrificed: new Decimal(0),
    boughtDims: [],
    achievements: [],
    infinityUpgrades: [],
    challenges: [],
    currentChallenge: "",
    infinityPoints: new Decimal(0),
    infinitied: 0,
    bankedInfinities: 0,
    bankedEternities: 0,
    totalTimePlayed: 0,
    bestInfinityTime: 9999999999,
    thisInfinityTime: 0,
    resets: 0,
    galaxies: 0,
    tickDecrease: 0.9,
    totalmoney: new Decimal(0),
    achPow: 1,
    newsArray: [],
    interval: null,
    lastUpdate: new Date().getTime(),
    autobuyers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
    tickspeedMultiplier: new Decimal(10),
    chall2Pow: 1,
    chall3Pow: new Decimal(0.01),
    matter: new Decimal(0),
    chall11Pow: new Decimal(1),
    partInfinityPoint: 0,
    partInfinitied: 0,
    break: false,
    challengeTimes: [600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31],
    infchallengeTimes: [600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31],
    lastTenRuns: [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]],
    lastTenEternities: [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]],
    lastTenExtragalaxies: [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]],
    infMult: new Decimal(1),
    infMultCost: new Decimal(10),
    tickSpeedMultDecrease: 10,
    tickSpeedMultDecreaseCost: 3e6,
    dimensionMultDecrease: 10,
    dimensionMultDecreaseCost: 1e8,
    overXGalaxies: 10,
    version: 9,
    infDimensionsUnlocked: [false, false, false, false, false, false, false, false],
    infinityPower: new Decimal(1),
    spreadingCancer: 0,
    postChallUnlocked: 0,
    postC4Tier: 0,
    postC3Reward: new Decimal(1),
    eternityPoints: new Decimal(0),
    eternities: 0,
    thisEternity: 0,
    bestEternity: 9999999999,
    eternityUpgrades: [],
    epmult: new Decimal(1),
    epmultCost: new Decimal(500),
    infinityDimension1 : {
        cost: new Decimal(1e8),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension2 : {
        cost: new Decimal(1e9),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension3 : {
        cost: new Decimal(1e10),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension4 : {
        cost: new Decimal(1e20),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension5 : {
        cost: new Decimal(1e140),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension6 : {
        cost: new Decimal(1e200),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension7 : {
        cost: new Decimal(1e250),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension8 : {
        cost: new Decimal(1e280),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infDimBuyers: [false, false, false, false, false, false, false, false],
    timeShards: new Decimal(0),
    eternityChallenges: {
      done: {},
      unlocked: null,
      current: null,
      totalTiersDone: 0,
      everDone: {}
    },
    tickThreshold: new Decimal(1),
    totalTickGained: 0,
    timeDimension1: {
        cost: new Decimal(1),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension2: {
        cost: new Decimal(10),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension3: {
        cost: new Decimal(100),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension4: {
        cost: new Decimal(1000),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimBuyers: [false, false, false, false],
    offlineProd: 0,
    offlineProdCost: 1e7,
    challengeTarget: 0,
    autoSacrifice: 1,
    replicanti: {
        amount: new Decimal(0),
        unl: false,
        galaxyPowerUnl: false,
        chance: 0.01,
        chanceCost: new Decimal(1e150),
        interval: 1000,
        intervalCost: new Decimal(1e160),
        gal: 0,
        galaxies: 0,
        galCost: new Decimal(1e170),
        galaxybuyer: {
            unl: false,
            on: false,
            bulk: 1,
            wait: 0,
            lastTick: Date.now()
        },
        auto: [false, false, false],
        limit: new Decimal(Number.MAX_VALUE),
        newLimit: new Decimal(Number.MAX_VALUE)
    },
    timestudy: initTimestudy(),
    autoIP: new Decimal(0),
    autoTime: 1e300,
    infMultBuyer: false,
    eterMultBuyer: false,
    autoCrunchMode: "amount",
    autoEterMode: "amount",
    respec: false,
    eternityBuyer: {
        limit: new Decimal(0),
        isOn: false
    },
    extragalactic: {
        points: new Decimal(0),
        extragalaxies: 0,
        galacticPower: new Decimal(0),
        galacticDimension1: {
            cost: new Decimal(1),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        },
        galacticDimension2: {
            cost: new Decimal(100),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        },
        galacticDimension3: {
            cost: new Decimal(1e4),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        },
        galacticDimension4: {
            cost: new Decimal(1e6),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        },
        // x2, more gal, xlog10(gal), better formula
        galacticDimensionUpgrades: [0, 0, 0, 0],
        galacticDimensionUpgradeCosts: [new Decimal(1e4), new Decimal(1e5), new Decimal(1e7), new Decimal(1e9)],
        galacticDimensionUpgradeCostMults: [new Decimal(1e4), new Decimal(1e5), new Decimal(1e7), new Decimal(1e9)],
        totalGalacticDimensionUpgrades: 0,
        galaxies: 0,
        antigalaxies: 0,
        galacticstudy: {
          studies: {
            '11': 0, '21': 0, '31': 0, '41': 0,
            '12': 0, '22': 0, '32': 0, '42': 0,
            '13': 0, '23': 0, '33': 0, '43': 0,
            '14': 0, '24': 0, '34': 0, '44': 0
          },
          theorems: 0,
          bulk: 1,
          upgrades: [0, 0],
          upgradeCosts: [new Decimal(10), new Decimal(10)],
          upgradeCostMults: [new Decimal(10), new Decimal(10)]
        },
        thisExtragalaxy: 0,
        bestExtragalaxy: 9999999999,
        extragalaxyBuyer: {
            limit: new Decimal(0),
            isOn: false
        }
    },
    peaks: {
      ip: {
        perMin: new Decimal(0),
        total: new Decimal(0)
      },
      ep: {
        perMin: new Decimal(0),
        total: new Decimal(0)
      },
      gp: {
        perMin: new Decimal(0),
        total: new Decimal(0)
      }
    },
    options: {
        newsHidden: false,
        notation: "Standard",
        //Standard = normal prefixed numbers, Scientific = standard form, Engineering = powers of 3.
        scientific: false,
        customNotation: '',
        customNotationName: 'Empty',
        challConf: false,
        sacrificeConfirmation: true,
        retryChallenge: false,
        bulkOn: true,
        hotkeys: true,
        theme: undefined,
        eternityconfirm: true,
        extragalaxyconfirm: true,
        commas: true,
        cheat: false
    }
};

/*var c = document.getElementById("game");
var ctx = c.getContext("2d");*/

var defaultStart = $.extend(true, {}, player);
var firstButton = document.getElementById("first");
var secondButton = document.getElementById("second");
var thirdButton = document.getElementById("third");
var fourthButton = document.getElementById("fourth");
var fifthButton = document.getElementById("fifth");
var sixthButton = document.getElementById("sixth");
var seventhButton = document.getElementById("seventh");
var eightButton = document.getElementById("eight");
var tickSpeedButton = document.getElementById("tickSpeed");


if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {

        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          // c. Increase k by 1.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }

    if (!Math.log10) {
        Math.log10 = Math.log10 || function(x) {
            return Math.log(x) * Math.LOG10E;
        };
    }

    if (!Math.log2) {
        Math.log2 = Math.log2 || function(x) {
            return Math.log(x) * Math.LOG2E;
        };
    }

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }


function set_save(name, value) {
    localStorage.setItem(name, btoa(JSON.stringify(value, function(k, v) { return (v === Infinity) ? "Infinity" : v; })))
}

function get_save(name) {
    if (localStorage.getItem("dimensionSave") !== null) {
        return JSON.parse(atob(localStorage.getItem(name), function(k, v) { return (v === Infinity) ? "Infinity" : v; }))
    }
}

function setMatterDisplay () {
  if (player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") document.getElementById("matter").style.display = "block";
  else document.getElementById("matter").style.display = "none";
}

function setQuickResetDisplay () {
  if (player.currentChallenge == "challenge12" || player.currentChallenge == "challenge9" || player.currentChallenge == "challenge5" ||
      player.currentChallenge == "postc1" || player.currentChallenge == "postc4" || player.currentChallenge == "postc5" || player.currentChallenge == "postc6" || player.currentChallenge == "postc6" || player.currentChallenge == "postc8") document.getElementById("quickReset").style.display = "inline-block";
  else document.getElementById("quickReset").style.display = "none";
}

/*
function setDarkMatterDisplay () {
  if (player.eternityChallenges.current === 7) document.getElementById("darkMatter").style.display = "block";
  else document.getElementById("darkMatter").style.display = "none";
}
*/


function setTheme(name) {
    document.querySelectorAll("link").forEach( function(e) {
        if (e.href.includes("theme")) e.remove();
    });

    if(name === undefined) {
        document.getElementById("theme").innerHTML="Current theme: Normal";
    } else {
        document.getElementById("theme").innerHTML="Current theme: " + name;
    }

    if (name === undefined || name === 'Normal') return;

    var head = document.head;
    var link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = "stylesheets/theme-" + name + ".css";

    head.appendChild(link);
}

document.getElementById("theme").onclick = function () {
    if (player.options.theme === undefined) {
        player.options.theme = "Metro";
    } else if (player.options.theme === "Metro") {
        player.options.theme = "Dark";
    } else if (player.options.theme === "Dark") {
        player.options.theme = "Dark Metro";
    } else if (player.options.theme === "Dark Metro") {
        player.options.theme = "Inverted";
    } else if (player.options.theme === "Inverted") {
        player.options.theme = "Inverted Metro";
    } else {
        player.options.theme = undefined;
    }

    setTheme(player.options.theme);

}


function fixTimeDimensions () {
  if (player.timeDimension2.cost.eq(5)) {
    player.timeDimension2.cost = 10;
  }
  for (let i = 1; i <= 4; i++) {
    player['timeDimension' + i].amount = new Decimal(player['timeDimension' + i].amount);
    // determine power directly from bought
    player['timeDimension' + i].power = Decimal.pow(3, player['timeDimension' + i].bought);
    player['timeDimension' + i].cost = new Decimal(player['timeDimension' + i].cost);
  }
}

function onLoad() {
    if (player.totalmoney === undefined || isNaN(player.totalmoney)) player.totalmoney = player.money;
    if (player.options === undefined) {
        player.options = {
            scientific: false,
            animationOn: true
        }
    }
    if (player.options.invert === true) player.options.theme = "Inverted"; player.options.invert = undefined;
    if (player.options.notation === undefined) player.options.notation = "Standard"
    if (player.options.challConf === undefined) player.options.challConf = false
	if (player.options.notation === undefined) player.options.notation = "Standard";
    if (player.options.newsHidden === undefined) player.options.newsHidden = false;
    if (player.options.sacrificeConfirmation === undefined) player.options.sacrificeConfirmation = true;
    if (player.options.retryChallenge === undefined) player.options.retryChallenge = false;
    if (player.options.bulkOn === undefined) player.options.bulkOn = true
    if (player.options.hotkeys === undefined) player.options.hotkeys = true
    if (player.options.eternityconfirm === undefined) player.options.eternityconfirm = true
    if (player.options.extragalaxyconfirm === undefined) player.options.extragalaxyconfirm = true
    if (player.options.customNotation === undefined) player.options.customNotation = '';
    if (player.options.customNotationName === undefined) player.options.customNotationName = 'Custom';
    if (player.achievements === undefined) player.achievements = [];
    if (player.sacrificed === undefined) player.sacrificed = new Decimal(0);
    if (player.infinityUpgrades === undefined) player.infinityUpgrades = [];
    if (player.infinityPoints === undefined) player.infinityPoints = new Decimal(0);
    if (player.infinitied === undefined) player.infinitied = 0;
    if (player.totalTimePlayed === undefined) player.totalTimePlayed = 0;
    if (player.bestInfinityTime === undefined) player.bestInfinityTime = 9999999999;
    if (player.thisInfinityTime === undefined) player.thisInfinityTime = 9999999999;
    if (player.galaxies === undefined) player.galaxies = 0;
    if (player.lastUpdate === undefined) player.lastUpdate = new Date().getTime();
    if (player.achPow === undefined) player.achPow = 1;
    if (player.newsArray === undefined) player.newsArray = [];
    if (player.chall2Pow === undefined) player.chall2Pow = 1;
    if (player.chall3Pow === undefined) player.chall3Pow = 0.01;
    if (player.firstAmount !== 0) document.getElementById("secondRow").style.display = "table-row";
    if (player.challenges === undefined) player.challenges = []
    if (player.currentChallenge === undefined) player.currentChallenge = ""
	  if (player.infinitied > 0 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1")
    if (player.matter === undefined) player.matter = new Decimal(0)
    if (player.autobuyers === undefined) player.autobuyers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    if (player.costMultipliers === undefined) player.costMultipliers = [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)]
    if (player.tickspeedMultiplier === undefined) player.tickspeedMultiplier = new Decimal(10)
    if (player.partInfinityPoint === undefined) player.partInfinityPoint = 0
    if (player.challengeTimes === undefined) player.challengeTimes = [600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31]
    if (player.infchallengeTimes === undefined) player.infchallengeTimes = [600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31]
    if (player.lastTenRuns === undefined) player.lastTenRuns = [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]]
    if (player.infMult === undefined) player.infMult = new Decimal(1)
    if (player.infMultCost === undefined) player.infMultCost = new Decimal(100)
    if (player.tickSpeedMultDecrease === undefined) player.tickSpeedMultDecrease = 10
    if (player.tickSpeedMultDecreaseCost === undefined) player.tickSpeedMultDecreaseCost = 3e6
    if (player.dimensionMultDecrease === undefined) player.dimensionMultDecrease = 10
    if (player.dimensionMultDecreaseCost === undefined) player.dimensionMultDecreaseCost = 1e8
    if (player.overXGalaxies === undefined) player.overXGalaxies = 10;
    if (player.partInfinitied === undefined) player.partInfinitied = 0
    if (player.spreadingCancer === undefined) player.spreadingCancer = 0
    if (player.postC4Tier === undefined) player.postC4Tier = 0
    if (player.postC3Reward === undefined) player.postC3Reward = new Decimal(1)
    if (player.offlineProd === undefined) player.offlineProd = 0
    if (player.offlineProdCost === undefined) player.offlineProdCost = 1e7
    if (player.autoSacrifice === undefined) player.autoSacrifice = 1
    if (player.postChallUnlocked === undefined) player.postChallUnlocked = 0
    if (player.infMultBuyer === undefined) player.infMultBuyer = false
    if (player.autoCrunchMode === undefined) player.autoCrunchMode = "amount"
    if (player.challengeTarget === undefined) {
        player.challengeTarget = 0
        if (player.currentChallenge != "") player.challengeTarget = Number.MAX_VALUE
    }
    if (player.lastTenEternities === undefined) player.lastTenEternities = [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]]
    if (player.lastTenExtragalaxies === undefined) player.lastTenExtragalaxies = [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]]
    if (player.respec === undefined) player.respec = false
    if (player.options.commas === undefined) player.options.commas = true

    setTheme(player.options.theme);

    if (player.secondAmount !== 0) {
        document.getElementById("thirdRow").style.display = "table-row";
        document.getElementById("tickSpeed").style.visibility = "visible";
        document.getElementById("tickSpeedMax").style.visibility = "visible";
        document.getElementById("tickLabel").style.visibility = "visible";
        document.getElementById("tickSpeedAmount").style.visibility = "visible";
    }
    if (player.options.notation == "Mixed") player.options.notation = "Mixed scientific"

    if (player.infinityPower === undefined) {
        player.infinityPower = new Decimal(1)
        player.infinityDimension1 = {
            cost: new Decimal(1e8),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.infinityDimension2 = {
            cost: new Decimal(1e9),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.infinityDimension3 = {
            cost: new Decimal(1e10),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.infinityDimension4 = {
            cost: new Decimal(1e20),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.infDimensionsUnlocked = [false, false, false, false]
    }

    if (player.timeShards === undefined) {
        player.timeShards = new Decimal(0)
        player.eternityPoints = new Decimal(0)
        player.tickThreshold = new Decimal(1)
        player.totalTickGained = 0
        player.eternities = 0
        player.timeDimension1 = {
            cost: new Decimal(1),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        }
        player.timeDimension2 = {
            cost: new Decimal(10),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        }
        player.timeDimension3 = {
            cost: new Decimal(100),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        }
        player.timeDimension4 = {
            cost: new Decimal(1000),
            amount: new Decimal(0),
            power: new Decimal(1),
            bought: 0
        }
    }

    if (player.timeDimBuyers === undefined) {
        player.timeDimBuyers = [false, false, false, false];
    }

    if (player.eterMultBuyer === undefined) {
        player.eterMultBuyer = false;
    }

    if (player.autoEterMode === undefined) {
        player.autoEterMode = 'amount';
    }

    // no need to update best or current extragalaxy apart from this
    if (player.extragalactic === undefined) {
        player.extragalactic = {
            points: new Decimal(0),
            extragalaxies: 0,
            galacticPower: new Decimal(0),
            galacticDimension1: {
                cost: new Decimal(1),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            galacticDimension2: {
                cost: new Decimal(100),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            galacticDimension3: {
                cost: new Decimal(1e4),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            galacticDimension4: {
                cost: new Decimal(1e6),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            // x2, more gal, xlog10(gal), better formula
            galacticDimensionUpgrades: [0, 0, 0, 0],
            galacticDimensionUpgradeCosts: [new Decimal(1e4), new Decimal(1e5), new Decimal(1e7), new Decimal(1e9)],
            galacticDimensionUpgradeCostMults: [new Decimal(1e4), new Decimal(1e5), new Decimal(1e7), new Decimal(1e9)],
            totalGalacticDimensionUpgrades: 0,
            galaxies: 0,
            antigalaxies: 0,
            galacticstudy: {
              studies: {
                '11': 0, '21': 0, '31': 0, '41': 0,
                '12': 0, '22': 0, '32': 0, '42': 0,
                '13': 0, '23': 0, '33': 0, '43': 0,
                '14': 0, '24': 0, '34': 0, '44': 0
              },
              theorems: 0,
              bulk: 1,
              upgrades: [0, 0],
              upgradeCosts: [new Decimal(10), new Decimal(10)],
              upgradeCostMults: [new Decimal(10), new Decimal(10)]
            },
            thisExtragalaxy: 0,
            bestExtragalaxy: 9999999999,
            extragalaxyBuyer: {
                limit: new Decimal(0),
                isOn: false
            }
        }
    }

    if (player.peaks === undefined) {
        player.peaks = {
          ip: {
            perMin: new Decimal(0),
            total: new Decimal(0)
          },
          ep: {
            perMin: new Decimal(0),
            total: new Decimal(0)
          },
          gp: {
            perMin: new Decimal(0),
            total: new Decimal(0)
          }
        }
    }

    if (player.eternityChallenges === undefined) {
      player.eternityChallenges = {
        done: {},
        unlocked: null,
        current: null,
        totalTiersDone: 0,
        everDone: {}
      }
    }

    if (player.eternityChallenges.everDone === undefined) {
      player.eternityChallenges.everDone = {};
    }

    if (player.eternityChallenges.totalTiersDone === undefined) {
      updateTotalTiersDone();
    }

    if (player.infinityDimension1.baseAmount === undefined) {
        player.infinityDimension1.baseAmount = 0;
        player.infinityDimension2.baseAmount = 0;
        player.infinityDimension3.baseAmount = 0;
        player.infinityDimension4.baseAmount = 0;

        player.infinityDimension1.baseAmount = new Decimal(player.infinityDimension1.power).log(50).times(10).toNumber()
        player.infinityDimension2.baseAmount = new Decimal(player.infinityDimension2.power).log(30).times(10).toNumber()
        player.infinityDimension3.baseAmount = new Decimal(player.infinityDimension3.power).log(10).times(10).toNumber()
        player.infinityDimension4.baseAmount = new Decimal(player.infinityDimension4.power).log(5).times(10).toNumber()


    }

    if (player.boughtDims === undefined) {
      player.boughtDims = [1, 2, 3, 4, 5, 6, 7, 8];
    }

    if (player.autoIP === undefined) player.autoIP = new Decimal(0)
    if (player.autoTime === undefined) player.autoTime = 1e300;

    if (player.matter === null) player.matter = new Decimal(0)
    for (var i=0; i<12; i++) {
        if (player.autobuyers[i]%1 !== 0 && player.autobuyers[i].tier === undefined) {
            player.autobuyers[i].tier = i+1
        }
        if (player.autobuyers[i]%1 !== 0 && player.autobuyers[i].target%1 !== 0) {
            player.autobuyers[i].target = i+1
            if (i == 8) player.autobuyers[i].target = 1
        }

        if (player.autobuyers[i]%1 !== 0 && (player.autobuyers[i].bulk === undefined || isNaN(player.autobuyers[i].bulk) || player.autobuyers[i].bulk === null)) {
            player.autobuyers[i].bulk = 1
        }
    }
    if (player.autobuyers[8].tier == 10) player.autobuyers[8].tier = 9

    if (player.thirdAmount !== 0) document.getElementById("fourthRow").style.display = "table-row";
    if (player.fourthAmount !== 0)
    if (player.resets > 0) document.getElementById("fifthRow").style.display = "table-row";
    if (player.fifthAmount !== 0)
    if (player.resets > 1) document.getElementById("sixthRow").style.display = "table-row";
    if (player.sixthAmount !== 0)
    if (player.resets > 2 && player.currentChallenge !== "challenge4" && player.currentChallenge !== "postc1") document.getElementById("seventhRow").style.display = "table-row";
    if (player.seventhAmount !== 0)
    if (player.resets > 3 && player.currentChallenge !== "challenge4") document.getElementById("eightRow").style.display = "table-row";

    document.getElementById("totaltickgained").innerHTML = "You've gained "+shortenDimensions(player.totalTickGained)+" tickspeed upgrades."

    if (player.autobuyers[9]%1 !== 0) {
        if (player.autobuyers[9].bulk === null || player.autobuyers[9].bulk === undefined) player.autobuyers[9].bulk = 1
    }

    if (player.options.sacrificeConfirmation == false) document.getElementById("confirmation").checked = "true"

    if (player.version === undefined) { // value will need to be adjusted when update goes live
        for (var i = 0; i < player.autobuyers.length; i++) {
            if (player.autobuyers[i]%1 !== 0) player.infinityPoints = player.infinityPoints.plus(player.autobuyers[i].cost - 1)
        }
        player.autobuyers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        player.version = 1
    }
    if (player.version == 1) {
        if (player.dimensionMultDecrease != 10) {
            if (player.dimensionMultDecrease == 9) {
                player.dimensionMultDecrease = 10
                player.dimensionMultDecreaseCost = 1e8
                player.infinityPoints = player.infinityPoints.plus(1e8)
            }
            if (player.dimensionMultDecrease == 8) {
                player.dimensionMultDecrease = 10
                player.dimensionMultDecreaseCost = 1e8
                player.infinityPoints = player.infinityPoints.plus(2.1e9)
            }
            if (player.dimensionMultDecrease == 7) {
                player.dimensionMultDecrease = 10
                player.dimensionMultDecreaseCost = 1e8
                player.infinityPoints = player.infinityPoints.plus(4.21e10)
            }
        }
        player.version = 2
    }
	if (player.version < 5) {
		player.newsArray = []
		player.version = 5
    }

    if (player.infinityDimension5 === undefined) {
        player.infDimensionsUnlocked.push(false)
        player.infDimensionsUnlocked.push(false)
        player.infinityDimension5 = {
            cost: new Decimal(1e140),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.infinityDimension6 = {
            cost: new Decimal(1e200),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.version = 6
    }

    if (player.infinityDimension7 == undefined) {
        player.infDimensionsUnlocked.push(false)
        player.infDimensionsUnlocked.push(false)
        player.infinityDimension7 = {
            cost: new Decimal(1e250),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
        player.infinityDimension8 = {
            cost: new Decimal(1e280),
            amount: new Decimal(0),
            bought: 0,
            power: new Decimal(1),
            baseAmount: 0
        }
    }

    if (player.replicanti === undefined) {
        player.replicanti = {
            amount: new Decimal(0),
            unl: false,
            galaxyPowerUnl: false,
            chance: 0.01,
            chanceCost: new Decimal(1e150),
            interval: 1000,
            intervalCost: new Decimal(1e160),
            gal: 0,
            galaxies: 0,
            galCost: new Decimal(1e170),
            auto: [false, false, false],
            limit: new Decimal(Number.MAX_VALUE),
            newLimit: new Decimal(Number.MAX_VALUE)
        }
    }
    if (player.replicanti.galaxybuyer !== undefined && typeof player.replicanti.galaxybuyer !== 'object') {
      player.replicanti.galaxybuyer = {
          unl: true,
          on: false,
          bulk: 1,
          wait: 0,
          lastTick: Date.now()
      }
    }
    if (player.replicanti.galaxybuyer === undefined) {
      player.replicanti.galaxybuyer = {
          unl: false,
          on: false,
          bulk: 1,
          wait: 0,
          lastTick: Date.now()
      }
    }
    if (player.replicanti.galaxybuyer.unl === undefined) {
      player.replicanti.galaxybuyer.unl = player.eternities > 2;
    }
    if (!(player.replicanti.amount instanceof Decimal)) {
      player.replicanti.amount = new Decimal(player.replicanti.amount);
    }
    if (!('limit' in player.replicanti)) {
      player.replicanti.limit = new Decimal(Number.MAX_VALUE)
    }
    if (!('newLimit' in player.replicanti)) {
      player.replicanti.newLimit = new Decimal(Number.MAX_VALUE)
    }
    if (player.bestEternity === undefined) {
        player.bestEternity = 9999999999
        player.thisEternity = player.totalTimePlayed
    }
    if (player.timestudy === undefined || player.timestudy.studies[0] !== null) {
        player.timestudy = initTimestudy();
    }

    if (player.bankedInfinities === undefined) {
        player.bankedInfinities = 0;
    }

    if (player.bankedEternities === undefined) {
        player.bankedEternities = 0;
    }

    while (player.timestudy.studies.length < 1 + numTimeStudies) {
        player.timestudy.studies.push(0);
    }

    if (player.timestudy.studyGroupsUnlocked === undefined) {
        player.timestudy.studyGroupsUnlocked = 0;
    }

    if (player.eternities == 0) {
        document.getElementById("eternityPoints2").style.display = "none";
        document.getElementById("eternitystorebtn").style.display = "none";
    }

    if (player.options.cheat) {
        document.getElementById("cheatbtn").style.display = "inline-block";
    } else {
        document.getElementById("cheatbtn").style.display = "none";
    }

    if (player.eternityUpgrades === undefined) player.eternityUpgrades = []

    if (player.infDimBuyers === undefined) player.infDimBuyers = [false, false, false, false, false, false, false, false]

    if (player.replicanti.auto === undefined) player.replicanti.auto = [false, false, false]
    if (player.eternityBuyer === undefined) {
        player.eternityBuyer = {
            limit: new Decimal(0),
            isOn: false
        }
    }

    transformSaveToDecimal();
    fixTimeDimensions();
    updateCosts();
    updateTickSpeed();
    updateAchPow();
    updateChallenges();
    initAllECs();
    updateCheckBoxes();
    toggleChallengeRetry()
    toggleChallengeRetry()
    toggleBulk()
    toggleBulk()
    respecToggle()
    respecToggle()
    toggleEternityConf()
    toggleEternityConf()
    toggleCommas()
    toggleCommas()
    if (!player.replicanti.auto[0]) document.getElementById("replauto1").innerHTML = "Auto: OFF"
    if (!player.replicanti.auto[1]) document.getElementById("replauto2").innerHTML = "Auto: OFF"
    if (!player.replicanti.auto[2]) document.getElementById("replauto3").innerHTML = "Auto: OFF"

    loadAutoBuyerSettings();
    updateLastTenRuns()
    updateLastTenEternities()
    updateLastTenExtragalaxies()

    updateInfCosts()

    if (player.replicanti.unl == true) {
        document.getElementById("replicantidiv").style.display="inline-block"
        document.getElementById("replicantiunlock").style.display="none"
    }

    if (player.replicanti.galaxyPowerUnl == true) {
        document.getElementById("replicantigalaxypowerdiv").style.display="inline-block"
    }

    if (player.achievements.includes('r131')) {
        document.getElementById("eterrow3").style.display = "";
    }

    if (player.version < 7) {
        player.infMultCost = player.infMultCost.dividedBy(10)
        player.version = 7
    }

    setMatterDisplay();
    setQuickResetDisplay();
    // setDarkMatterDisplay();
    // ec8UpdateAll();


    if (player.break == true) document.getElementById("break").innerHTML = "FIX INFINITY"
    document.getElementById("infiMult").innerHTML = "Multiply infinity points from all sources by 2 <br>currently: "+shortenDimensions(getIPMult()) +"x<br>Cost: "+shortenCosts(player.infMultCost)+" IP"

    document.getElementById("notation").innerHTML = "Notation: " + player.options.notation

    if (player.infinitied == 0) document.getElementById("infinityPoints2").style.display = "none"

    replicantiGalaxyAutoToggle()
    replicantiGalaxyAutoToggle()



    if (player.infMultBuyer !== undefined) {
        infMultAutoToggle()
        infMultAutoToggle()
    }

    if (player.epmult === undefined) {
        player.epmult = new Decimal(1)
        player.epmultCost = new Decimal(500)
    }

    clearOldAchieves()
    for (var i=0; i<player.achievements.length; i++) {
        document.getElementById(allAchievements[player.achievements[i]]).className = "achievementunlocked"
    }
    document.getElementById("epmult").innerHTML = "You gain 5 times more EP<p>Currently: "+shortenDimensions(player.epmult)+"x<p>Cost: "+shortenDimensions(player.epmultCost)+" EP"

    let numCrunchModes = 4;
    for (let i = 0; i < numCrunchModes; i++) {
      toggleCrunchMode()
    }


    if (player.options.newsHidden) {
        document.getElementById("game").style.display = "none";
    }
    if (player.options.challConf) {
        document.getElementById("challengeconfirmation").innerHTML = "Challenge confirmation off"
    } else {
        document.getElementById("challengeconfirmation").innerHTML = "Challenge confirmation on"
    }

    if (!player.options.hotkeys) document.getElementById("hotkeys").innerHTML = "Enable hotkeys"
    updateAutobuyers();
    updateReplicantiGalaxyPowerControl();
    updateAntigalaxyBulk();
    setAchieveTooltip();
    updatePriorities()
    updateTheoremButtons()
    updateTimeStudyButtons()
    totalMult = Math.pow(player.totalmoney.e+1, 0.5)
    currentMult = Math.pow(player.money.e+1, 0.5)
    infinitiedMult = 1+Math.log10(getInfinitied()+1)*10
    achievementMult = Math.max(Math.pow((player.achievements.length-30), 3)/40,1)
    challengeMult = Decimal.max(10*3000/worstChallengeTime, 1)
    unspentBonus = player.infinityPoints.dividedBy(2).pow(1.5).plus(1)
    transformSaveToDecimal();
    updateMilestones();
    updateEternityUpgrades()
    loadInfAutoBuyers()
    checkForEndMe()
    setCustomNotation();
}



function loadFromString(string) {
    var save = LZString.decompressFromEncodedURIComponent(string)
    console.log("Save length: "+save.length)
    if (save == "") player = JSON.parse(atob(string))
    else player = JSON.parse(save)
    onLoad()
}


function load_game() {
    var save_data = get_save('dimensionSave');
    if (!save_data) return;
    player = save_data;
    onLoad()
}


function save_game() {
    set_save('dimensionSave', player);
    $.notify("Game saved", "info")
}


function transformSaveToDecimal() {

    player.infinityPoints = new Decimal(player.infinityPoints)
    document.getElementById("eternitybtn").style.display = player.infinityPoints.gte(currentEternityRequirement()) ? "inline-block" : "none"

    player.money = new Decimal(player.money)
    player.tickSpeedCost = new Decimal(player.tickSpeedCost)
    player.tickspeed = new Decimal(player.tickspeed)
    player.firstCost = new Decimal(player.firstCost)
    player.secondCost = new Decimal(player.secondCost)
    player.thirdCost = new Decimal(player.thirdCost)
    player.fourthCost = new Decimal(player.fourthCost)
    player.fifthCost = new Decimal(player.fifthCost)
    player.sixthCost = new Decimal(player.sixthCost)
    player.seventhCost = new Decimal(player.seventhCost)
    player.eightCost = new Decimal(player.eightCost)
    player.firstAmount = new Decimal(player.firstAmount)
    player.secondAmount = new Decimal(player.secondAmount)
    player.thirdAmount = new Decimal(player.thirdAmount)
    player.fourthAmount = new Decimal(player.fourthAmount)
    player.fifthAmount = new Decimal(player.fifthAmount)
    player.sixthAmount = new Decimal(player.sixthAmount)
    player.seventhAmount = new Decimal(player.seventhAmount)
    player.eightAmount = new Decimal(player.eightAmount)
    player.firstPow = new Decimal(player.firstPow)
    player.secondPow = new Decimal(player.secondPow)
    player.thirdPow = new Decimal(player.thirdPow)
    player.fourthPow = new Decimal(player.fourthPow)
    player.fifthPow = new Decimal(player.fifthPow)
    player.sixthPow = new Decimal(player.sixthPow)
    player.seventhPow = new Decimal(player.seventhPow)
    player.eightPow = new Decimal(player.eightPow)
    player.sacrificed = new Decimal(player.sacrificed)
    player.totalmoney = new Decimal(player.totalmoney)
    player.chall3Pow = new Decimal(player.chall3Pow)
    player.costMultipliers = [new Decimal(player.costMultipliers[0]), new Decimal(player.costMultipliers[1]), new Decimal(player.costMultipliers[2]), new Decimal(player.costMultipliers[3]), new Decimal(player.costMultipliers[4]), new Decimal(player.costMultipliers[5]), new Decimal(player.costMultipliers[6]), new Decimal(player.costMultipliers[7])]
    player.tickspeedMultiplier = new Decimal(player.tickspeedMultiplier)
    player.matter = new Decimal(player.matter)
    player.infinityPower = new Decimal(player.infinityPower)
    player.timeShards = new Decimal(player.timeShards)
    player.epmult = new Decimal(player.epmult)
    player.eternityPoints = new Decimal(player.eternityPoints)
    player.tickThreshold = new Decimal(player.tickThreshold)
    player.postC3Reward = new Decimal(player.postC3Reward)

    for (var i=0; i<10; i++) {
        player.lastTenRuns[i][1] = new Decimal(player.lastTenRuns[i][1])
        player.lastTenEternities[i][1] = new Decimal(player.lastTenEternities[i][1])
        player.lastTenExtragalaxies[i][1] = new Decimal(player.lastTenExtragalaxies[i][1])
    }
    player.lastTenRuns = [[parseFloat(player.lastTenRuns[0][0]), player.lastTenRuns[0][1]], [parseFloat(player.lastTenRuns[1][0]), player.lastTenRuns[1][1]], [parseFloat(player.lastTenRuns[2][0]), player.lastTenRuns[2][1]],
    [parseFloat(player.lastTenRuns[3][0]), player.lastTenRuns[3][1]], [parseFloat(player.lastTenRuns[4][0]), player.lastTenRuns[4][1]], [parseFloat(player.lastTenRuns[5][0]), player.lastTenRuns[5][1]],
    [parseFloat(player.lastTenRuns[6][0]), player.lastTenRuns[6][1]], [parseFloat(player.lastTenRuns[7][0]), player.lastTenRuns[7][1]], [parseFloat(player.lastTenRuns[8][0]), player.lastTenRuns[8][1]],
    [parseFloat(player.lastTenRuns[9][0]), player.lastTenRuns[9][1]]]
    player.replicanti.chanceCost = new Decimal(player.replicanti.chanceCost)
    player.replicanti.intervalCost = new Decimal(player.replicanti.intervalCost)
    player.replicanti.galCost = new Decimal(player.replicanti.galCost)
    player.replicanti.amount = new Decimal(player.replicanti.amount)
    player.replicanti.limit = new Decimal(player.replicanti.limit)
    player.replicanti.newLimit = new Decimal(player.replicanti.newLimit)

    for (var i=1; i<=8; i++) {
        player["infinityDimension"+i].amount = new Decimal(player["infinityDimension"+i].amount)
        player["infinityDimension"+i].cost = new Decimal(player["infinityDimension"+i].cost)
        player["infinityDimension"+i].power = new Decimal(player["infinityDimension"+i].power)
    }

    for (var i=1; i<=4; i++) {
        player["timeDimension"+i].amount = new Decimal(player["timeDimension"+i].amount)
        player["timeDimension"+i].cost = new Decimal(player["timeDimension"+i].cost)
        player["timeDimension"+i].power = new Decimal(player["timeDimension"+i].power)
    }

    for (var i=1; i<=4; i++) {
        player.extragalactic["galacticDimension"+i].amount = new Decimal(player.extragalactic["galacticDimension"+i].amount)
        player.extragalactic["galacticDimension"+i].cost = new Decimal(player.extragalactic["galacticDimension"+i].cost)
        player.extragalactic["galacticDimension"+i].power = new Decimal(player.extragalactic["galacticDimension"+i].power)
    }

    player.infMultCost = new Decimal(player.infMultCost)
    player.infMult = new Decimal(player.infMult)
    player.timestudy.amcost = new Decimal(player.timestudy.amcost)
    player.timestudy.ipcost = new Decimal(player.timestudy.ipcost)
    player.timestudy.epcost = new Decimal(player.timestudy.epcost)

    player.autoIP = new Decimal(player.autoIP)

    if (!['undefined', 'null', 'max'].includes(player.autobuyers[11].priority)) {
      player.autobuyers[11].priority = new Decimal(player.autobuyers[11].priority);
    }

    player.epmultCost = new Decimal(player.epmultCost);
    player.eternityBuyer.limit = new Decimal(player.eternityBuyer.limit);

    player.extragalactic.points = new Decimal(player.extragalactic.points);

    player.extragalactic.galacticPower = new Decimal(player.extragalactic.galacticPower);

    for (let i = 0; i < 4; i++) {
        player.extragalactic.galacticDimensionUpgradeCosts[i] = new Decimal(player.extragalactic.galacticDimensionUpgradeCosts[i]);
        player.extragalactic.galacticDimensionUpgradeCostMults[i] = new Decimal(player.extragalactic.galacticDimensionUpgradeCostMults[i]);
    }

    for (let i = 0; i < 2; i++) {
        player.extragalactic.galacticstudy.upgradeCosts[i] = new Decimal(player.extragalactic.galacticstudy.upgradeCosts[i]);
        player.extragalactic.galacticstudy.upgradeCostMults[i] = new Decimal(player.extragalactic.galacticstudy.upgradeCostMults[i]);
    }

    player.extragalactic.extragalaxyBuyer.limit = new Decimal(player.extragalactic.extragalaxyBuyer.limit);

    player.peaks.ip.perMin = new Decimal(player.peaks.ip.perMin);
    player.peaks.ip.total = new Decimal(player.peaks.ip.total);
    player.peaks.ep.perMin = new Decimal(player.peaks.ep.perMin);
    player.peaks.ep.total = new Decimal(player.peaks.ep.total);
    player.peaks.gp.perMin = new Decimal(player.peaks.gp.perMin);
    player.peaks.gp.total = new Decimal(player.peaks.gp.total);

    player.chall11Pow = new Decimal(player.chall11Pow)
}

function loadAutoBuyerSettings() {
    for (var i=0; i<9; i++) {
        document.getElementById("priority" + (i+1)).selectedIndex = player.autobuyers[i].priority-1
        if (i == 8 && player.autobuyers[i].target == 10) document.getElementById("toggleBtnTickSpeed").innerHTML = "Buys max"
        else if (i == 8 && player.autobuyers[i].target !== 10) document.getElementById("toggleBtnTickSpeed").innerHTML = "Buys singles"
        else if (player.autobuyers[i].target > 10) document.getElementById("toggleBtn" + (i+1)).innerHTML = "Buys until 10"
        else document.getElementById("toggleBtn" + (i+1)).innerHTML = "Buys singles"
    }

    document.getElementById("buyTickspeedWhenMultIncreases").checked = player.autobuyers[8].buyTickspeedWhenMultIncreases;
    document.getElementById("priority10").value = player.autobuyers[9].priority
    document.getElementById("priority11").value = player.autobuyers[10].priority
    document.getElementById("priority12").value = player.autobuyers[11].priority
    document.getElementById("overGalaxies").value = player.overXGalaxies
    document.getElementById("bulkDimboost").value = player.autobuyers[9].bulk
    document.getElementById("prioritySac").value = player.autoSacrifice.priority
    document.getElementById("bulkgalaxy").value = player.autobuyers[10].bulk
    document.getElementById("maxReplicantiCrunchSwitch").checked = player.autobuyers[11].requireMaxReplicanti;
    document.getElementById("requireIPPeak").checked = player.autobuyers[11].requireIPPeak;
    document.getElementById("priority13").value = player.eternityBuyer.limit

}




function showTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('tab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}

var FormatList = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QdDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QdVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QdTg', 'QtTg', 'SxTg', 'SpTg', 'OTg', 'NTg', 'Qa', 'UQa', 'DQa', 'TQa', 'QdQa', 'QtQa', 'SxQa', 'SpQa', 'OQa', 'NQa', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QdOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QdNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn', 'Ce',];

var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var emojiList = ['\uD83D\uDE20','\uD83C\uDF82','\uD83C\uDF84','\uD83D\uDC80','\uD83C\uDF46','\uD83D\uDC6A','\uD83C\uDF08','\uD83D\uDCAF','\uD83C\uDF66','\uD83C\uDF83','\uD83D\uDC8B','\uD83D\uDE02','\uD83C\uDF19','\u26D4','\uD83D\uDC19','\uD83D\uDCA9','\u2753','\u2622\uFE0F','\uD83D\uDE48','\uD83D\uDC4D','\u2602\uFE0F','\u270C\uFE0F','\u26A0\uFE0F','\u274C','\uD83D\uDE0B','\u26A1'];



function isDecimal(value) {
    return value instanceof Decimal
}



function getAbbreviation(e) {
    var prefixes = ['', 'U', 'D', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'O', 'N']
    var prefixes2 = ['', 'Dc', 'Vg', 'Tg', 'Qa', 'Qi', 'Se', 'St', 'Og', 'Nn']
    var prefixes3 = ['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne']
    var prefixes4 = ['', 'U', 'D', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'O', 'N']
    var index = Decimal.floor(e/3)-1
    var index2 = Decimal.floor(index/10)
    var index3 = Decimal.floor(index2/10)
    var index4 = Decimal.floor(index3/10)
    var prefix = prefixes[index%10]
    var prefix2 = prefixes2[index2%10]
    var prefix3 = prefixes3[index3%10]
    if (e <= 3002) {
        return prefix + prefix2 + prefix3
    } else {
        var secondIndex = Decimal.floor(index/1000)-1
        var secondIndex2 = Decimal.floor(secondIndex/10)
        var secondIndex3 = Decimal.floor(secondIndex2/10)
        var secondIndex4 = Decimal.floor(secondIndex3/10)
        var secondPrefix = prefixes4[secondIndex%10]
        var secondPrefix2 = prefixes2[secondIndex2%10]
        var secondPrefix3 = prefixes3[secondIndex3%10]
        var x = "MI"
        if ((index)%1000 !== 0) x += "-"
        return secondPrefix + secondPrefix2 + secondPrefix3 + x + prefix + prefix2 + prefix3
    }
}

function addCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function letters (x, l) {
  x = Math.floor(x / 3);
  let s = [];
  while (x > 0) {
    let v = x % l.length;
    s.push(l[(v + l.length - 1) % l.length]);
    x = (x - v) / l.length;
  }
  return s.reverse().join('');
}

function mysterious (value) {
  value = new Decimal(value).plus(1).times(4);
  let s = '0123456789abcdefghijklmnopqrstuvwxyz\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BB\u03BC\u03BD\u03BE\u03C0\u03DE\u03C1\u03C3\u03C4\u03C5\u03C6\u03C7\u03C8\u03C9';
  let r = '';
  for (let i = 0; i < 5; i++) {
      value = Math.log2(Math.log2(value.log2())) * 10;
      r += s[Math.floor(value)];
      value = new Decimal(4 / (1 - value + Math.floor(value)));
  }
  return r;
}

function setCustomNotation () {
    document.getElementById("notation").innerHTML = 'Notation: ' + player.options.customNotationName;
    x = eval(player.options.customNotation);
    if (typeof x === 'function') {
        customNotationFunction = x;
    }
}

function customNotationFunction () {
    return '';
}

function formatValue(notation, value, places, placesUnder1000) {

    if ((value <= Number.MAX_VALUE || (player.break && (player.currentChallenge == "" || !new Decimal(Number.MAX_VALUE).equals(player.challengeTarget)) )) && (value >= 1000)) {
        if (isDecimal(value)) {
           var power = value.e
           var temp = value.toExponential(4).split("e")
           var matissa = parseFloat(temp[0])
           if (parseInt(temp[1]) != power) power++;
        } else {
            var matissa = value / Math.pow(10, Math.floor(Math.log10(value)));
            var power = Math.floor(Math.log10(value));
        }
        if (power > 100000 && player.options.commas) pow = addCommas(power);
        else pow = power
        if (notation === "Standard") {
            if (power <= 303) return (matissa * Decimal.pow(10, power % 3)).toFixed(places) + " " + FormatList[(power - (power % 3)) / 3];
            else return (matissa * Decimal.pow(10, power % 3)).toFixed(places) + " " + getAbbreviation(power)
        } else if (notation === "Mixed scientific") {
            if (power < 33) return (matissa * Decimal.pow(10, power % 3)).toFixed(places) + " " + FormatList[(power - (power % 3)) / 3];
            else return ((matissa).toFixed(places) + "e" + pow);
        } else if (notation === "Mixed engineering") {
            if (power < 33) return (matissa * Decimal.pow(10, power % 3)).toFixed(places) + " " + FormatList[(power - (power % 3)) / 3];
            else return ((matissa * Decimal.pow(10, power % 3)).toFixed(places) + "ᴇ" + pow);
        } else if (notation === "Scientific") {
            return ((matissa).toFixed(places) + "e" + pow);
        } else if (notation === "Engineering") {
            return ((matissa * Decimal.pow(10, power % 3)).toFixed(places) + "e" + pow);
        } else if (notation === "Letters") {
            return (matissa * Decimal.pow(10, power % 3)).toFixed(places) + letters(power, letterList);
        } else if (notation === "Emojis") {
            return (matissa * Decimal.pow(10, power % 3)).toFixed(places) + letters(power, emojiList);
        } else if (notation === "Logarithm") {
            if (power > 100000  && player.options.commas) return "e"+addCommas(Decimal.log10(value).toFixed(places));
            else return "e"+Decimal.log10(value).toFixed(places)
        } else if (notation === 'Mysterious') {
            return mysterious(value);
        } else if (notation === 'Custom') {
            return customNotationFunction(value, places);
        } else {
            if (power > 100000  && player.options.commas) power = addCommas(power.toString());
            return ((matissa).toFixed(places) + "e" + power);
        }
    } else if (value < 1000) {
        return (value).toFixed(placesUnder1000);
    } else {
        return "Infinite";
    }
}


function updateMoney() {
    var element = document.getElementById("coinAmount");
    element.innerHTML = formatValue(player.options.notation, player.money, 2, 1);
    var element2 = document.getElementById("matter");
    if (element2.style.display === 'block') element2.innerHTML = "There is " + formatValue(player.options.notation, player.matter, 2, 1) + " matter.";
    /*
    var element3 = document.getElementById("darkMatter");
    if (element3.style.display === 'block') element3.innerHTML = "There is " + formatValue(player.options.notation, player.darkMatter, 2, 1) + " dark matter.";
    */
}

function getAntimatterPerSecond() {
    if (player.currentChallenge == "challenge3" || player.currentChallenge == "postc1") {
      return getDimensionProductionPerSecond(1).times(player.chall3Pow);
    } else if (player.currentChallenge == "challenge7") {
      return getDimensionProductionPerSecond(1).plus(getDimensionProductionPerSecond(2));
    } else {
      return getDimensionProductionPerSecond(1);
    }
}

function updateCoinPerSec() {
    var element = document.getElementById("coinsPerSec");
    /*
    if (player.eternityChallenges.current === 13) {
      element.innerHTML = 'You are getting ' + shortenDimensions(new Decimal(1).dividedBy(player.tickspeed.dividedBy(1000))) + ' antimatter per second.';
    } else
    */
    element.innerHTML = 'You are getting ' + shortenDimensions(getAntimatterPerSecond()) + ' antimatter per second.';
}

function hasInfinityMult(tier) {
    switch (tier) {
        case 1: case 8: return player.infinityUpgrades.includes("18Mult");
        case 2: case 7: return player.infinityUpgrades.includes("27Mult");
        case 3: case 6: return player.infinityUpgrades.includes("36Mult");
        case 4: case 5: return player.infinityUpgrades.includes("45Mult");
    }
}

showMults = true;

/*
function bugCheck (tier) {
    var name = TIER_NAMES[tier];

    if (Number.isNaN(player[name + 'Pow'].e)) {
      console.log('bug check: dim pow is buggy');
    }
    if (Number.isNaN(player.achPow.e)) {
      console.log('bug check: ach pow is buggy');
    }

    if (Number.isNaN(player.infinityPower.e)) {
      console.log('bug check: inf pow is buggy');
    }

    if (Number.isNaN(totalMult)) {
      console.log('bug check: total mult is buggy');
    }

    if (Number.isNaN(currentMult)) {
      console.log('bug check: current mult is buggy');
    }

    if (Number.isNaN(infinitiedMult)) {
      console.log('bug check: infinitied mult is buggy');
    }

    if (Number.isNaN(achievementMult)) {
      console.log('bug check: achievement mult is buggy');
    }

    if (Number.isNaN(challengeMult.e)) {
      console.log('bug check: challenge mult is buggy');
    }

    if (Number.isNaN(dimMults().e)) {
      console.log('bug check: inf dim mult is buggy');
    }

    if (Number.isNaN(unspentBonus.e)) {
      console.log('bug check: inf unspent bonus is buggy');
    }

    if (Number.isNaN(timeMult().e)) {
      console.log('bug check: time mult is buggy');
    }

    if (Number.isNaN(player.thisInfinityTime)) {
      console.log('bug check: infinity time is buggy')
    }

    if (Number.isNaN(player.infinityDimension8.amount.e)) {
      console.log('bug check: id8 is buggy')
    }

    if (Number.isNaN(player.money.e)) {
      console.log('bug check: money is buggy')
    }

    if (Number.isNaN(player.money.pow(0.00004).plus(1).e)) {
      console.log('bug check: money is weirdly buggy')
    }

    if (Number.isNaN(player.postC3Reward.e)) {
      console.log('bug check: postc3 reward is buggy')
    }

    if (Number.isNaN(mult18.e)) {
      console.log('bug check: mult18 is buggy')
    }

    if (Number.isNaN(postc8Mult.e)) {
      console.log('bug check: post c8 mult is buggy')
    }

    let l = [player[name + 'Pow'], player.achPow, player.infinityPower,
    totalMult, currentMult, infinitiedMult, achievementMult, challengeMult,
    dimMults(), unspentBonus, timeMult(), player.thisInfinityTime,
    player.infinityDimension8.amount, player.money, player.money.pow(0.00004).plus(1),
    player.postC3Reward, mult18, postc8Mult];

    let r = new Decimal(1);

    for (let i of l) {
      r = r.times(new Decimal(1).plus(i));
    }

    if (Number.isNaN(r.e)) {
      console.log('bug check: something is really weirdly buggy')
    }
}
*/

function getInfinityPowerNDMultiplier() {
  if (player.eternityChallenges.current === 2) {
    return new Decimal(1);
  }
  let exp = 7;
  if (player.eternityUpgrades.includes(7)) {
    exp = eter7Upg();
  }
  return player.infinityPower.pow(exp).max(1);
}

function getInfinityPowerTDMultiplier() {
  if (player.eternityChallenges.current !== 2) {
    return new Decimal(1);
  }
  return Decimal.pow(Math.max(player.infinityPower.ln(), 1), 9);
}

function getDimensionFinalMultiplier(tier) {
    if ((player.eternityChallenges.current === 3 && tier > 4) || player.eternityChallenges.current === 13) {
      return new Decimal(0);
    }
    /*
    if (player.eternityChallenges.current === 11) {
      return getDimensionBoostMultiplierOn(tier).times(getInfinityPowerNDMultiplier());
    }
    */
    var name = TIER_NAMES[tier];

    let multiplier = new Decimal(player[name + 'Pow']);
    if (player.currentChallenge == "challenge7") {
        if (tier == 4) multiplier = multiplier.pow(1.4)
        if (tier == 2) multiplier = multiplier.pow(1.6)
    }
    multiplier = multiplier.times(player.achPow);

    multiplier = multiplier.times(getInfinityPowerNDMultiplier());

    if (player.infinityUpgrades.includes("totalMult")) multiplier = multiplier.times(totalMult)
    if (player.infinityUpgrades.includes("currentMult")) multiplier = multiplier.times(currentMult)
    if (player.infinityUpgrades.includes("infinitiedMult")) multiplier = multiplier.times(infinitiedMult)
    if (player.infinityUpgrades.includes("achievementMult")) multiplier = multiplier.times(achievementMult)
    if (player.infinityUpgrades.includes("challengeMult")) multiplier = multiplier.times(challengeMult)

    if (hasInfinityMult(tier)) multiplier = multiplier.times(dimMults());
    if (tier == 1) {
        if (player.infinityUpgrades.includes("unspentBonus")) multiplier = multiplier.times(unspentBonus);
        if (player.achievements.includes("r28")) multiplier = multiplier.times(1.1);
        if (player.achievements.includes("r31")) multiplier = multiplier.times(1.05);
        if (player.achievements.includes("r71")) multiplier = multiplier.times(3);
        if (player.achievements.includes("r68")) multiplier = multiplier.times(1.5);
    }

    multiplier = multiplier.times(timeMult());
    if (tier == 8 && player.achievements.includes("r23")) multiplier = multiplier.times(1.1);
    else if (player.achievements.includes("r34")) multiplier = multiplier.times(1.02);
    if (tier <= 4 && player.achievements.includes("r43")) multiplier = multiplier.times(1.25);
    if (player.achievements.includes("r48")) multiplier = multiplier.times(1.1);
    if (player.achievements.includes("r72")) multiplier = multiplier.times(1.1); // tbd
    if (player.achievements.includes("r74") && player.currentChallenge != "") multiplier = multiplier.times(1.4);
    if (player.achievements.includes("r77")) multiplier = multiplier.times(1+tier/100);
    if (player.achievements.includes("r56") && player.thisInfinityTime < 1800) multiplier = multiplier.times(3600/(player.thisInfinityTime+1800));
    if (player.achievements.includes("r78") && player.thisInfinityTime < 3) multiplier = multiplier.times(3.3/(player.thisInfinityTime+0.3));
    if (player.achievements.includes("r65") && player.currentChallenge != "" && player.thisInfinityTime < 1800) multiplier = multiplier.times(Math.max(2400/(player.thisInfinityTime+600), 1))
    if (player.achievements.includes("r91") && player.thisInfinityTime < 50) multiplier = multiplier.times(Math.max(301-player.thisInfinityTime*6, 1))
    if (player.achievements.includes("r92") && player.thisInfinityTime < 600) multiplier = multiplier.times(Math.max(101-player.thisInfinityTime/6, 1));
    if (player.achievements.includes("r98")) multiplier = multiplier.times(player.infinityDimension8.amount.max(1));
    if (player.achievements.includes("r84")) multiplier = multiplier.times(player.money.pow(0.00004).plus(1));
    else if (player.achievements.includes("r73")) multiplier = multiplier.times(player.money.pow(0.00002).plus(1));
    if (player.achievements.includes("r125")) multiplier = multiplier.times(Decimal.pow(player.eternities + 1, Math.pow(player.eternities + 1, 1 / 3)));
   // tt normal dimension multipliers deleted

    multiplier = multiplier.times(player.postC3Reward)
    if (player.challenges.includes("postc8") && tier < 8 && tier > 1) multiplier = multiplier.times(mult18);

    if (player.currentChallenge == "postc6") multiplier = multiplier.dividedBy(player.matter.max(1))
    if (player.currentChallenge == "postc8") multiplier = multiplier.times(postc8Mult)

    multiplier = multiplier.times(getGalacticStudyMultiplierTo(1));

    /*
    // newest EC6 reward handled
    multiplier = multiplier.times(ecNumReward(6));

    // EC7 dark matter handled nd (1 / 3)
    if (player.eternityChallenges.current === 7) {
        multiplier = multiplier.dividedBy(player.darkMatter);
    }

    // EC7 reward handled nd (1/3)
    multiplier = multiplier.times(ecNumReward(7));

    // EC10 in-challenge compensation handled
    if (player.eternityChallenges.current === 10) {
      multiplier = multiplier.times(Decimal.pow(Math.max(getInfinitied(), 1), 10000));
    }

    // EC10 reward handled
    multiplier = multiplier.times(ecNumReward(10));
    */

    // easter eff (er, egg)
    multiplier = multiplier.times(Decimal.pow(2, Decimal.pow(2, Math.max(Math.pow(Math.max(lastFstreak - 5, 1), .4), 0)).minus(2)))

    if (player.currentChallenge == "postc4" && player.postC4Tier !== tier) multiplier = multiplier.pow(0.25)
    if (player.challenges.includes("postc4")) multiplier = multiplier.pow(1.05);

    // catches NaN too
    if (multiplier.lt(1)) {multiplier = new Decimal(1)}

    return multiplier;
}

function getDimensionDescription(tier) {
    var name = TIER_NAMES[tier];

    let description = shortenDimensions(player[name + 'Amount']) + ' (' + player[name + 'Bought'] + ')';
    if (tier == 8) description = Math.round(player[name + 'Amount']) + ' (' + player[name + 'Bought'] + ')';

    if (tier < 8) {
        description += '  (+' + formatValue(player.options.notation, getDimensionRateOfChange(tier), 2, 2) + '%/s)';
    }

    return description;
}

function getDimensionRateOfChange(tier) {
    if (tier == 8) {
        return 0;
    }

    let toGain = getDimensionProductionPerSecond(tier + 1)

    var name = TIER_NAMES[tier];
    if (player.currentChallenge == "challenge7") {
        if (tier == 7) return 0
        else toGain = getDimensionProductionPerSecond(tier + 2);
    }
    var current = player[name + 'Amount'].max(1);
    var change  = toGain.times(10).dividedBy(current);

    return change;
}

function getDimboostCostIncrease() {
    let ret = 15;
    if (player.currentChallenge == "challenge4") {
        ret = 20;
    }
    if (player.achievements.includes('r101')) {
        ret -= Math.min(8, Math.pow(player.eternityPoints.max(1).log(10), .25));
    }
    return ret;
}

function maxTier () {
    if (player.currentChallenge == "challenge4") {
        return 6;
    } else {
        return 8;
    }
}

function getShiftRequirement(bulk) {
    let tier = Math.min(player.resets + 4, 8);
    let amount = 20;
    if (player.currentChallenge == "challenge4") {
        tier = Math.min(player.resets + 4, 6)
        if (tier == 6) amount += (player.resets+bulk - 2) * getDimboostCostIncrease();
    }

    if (tier == 8) amount += (player.resets+bulk - 4) * getDimboostCostIncrease();

    if (player.infinityUpgrades.includes("resetBoost")) amount -= 9;
    if (player.challenges.includes("postc5")) amount -= 1

    return { tier: tier, amount: Math.floor(amount) };
}

function galaxyIncrement () {
  let ret = 60;
  if (player.currentChallenge === "challenge4") {
    ret = 90;
  }
  return ret;
}

function getGalaxyRequirement() {
    let amount = 80;
    if (player.currentChallenge == "challenge4") {
      amount = 99;
    }
    amount += player.galaxies * galaxyIncrement();
    if (player.infinityUpgrades.includes("resetBoost")) amount -= 9;
    if (player.challenges.includes("postc5")) amount -= 1;
    if (player.eternityChallenges.current === 5) {
        // for 1 this is 0, for 2 it's 1, for 3 it's 3, etc.
        // this is correct, I think.
        amount += player.galaxies * (player.galaxies - 1) / 2;
    }

    return amount;
}

var worstChallengeTime = 1

function updateWorstChallengeTime() {
    worstChallengeTime = 1
    for (var i=0; i<10; i++) {
        if (player.challengeTimes[i] > worstChallengeTime) worstChallengeTime = player.challengeTimes[i]
    }
}


function sacrificeConf() {
    player.options.sacrificeConfirmation = !player.options.sacrificeConfirmation
}




function updateDimensions() {

    for (let tier = 1; tier <= 8; ++tier) {
        var name = TIER_NAMES[tier];
        if (!canBuyDimension(tier)) {
            break;
        }
        document.getElementById(name + "D").innerHTML = DISPLAY_NAMES[tier] + " Dimension x" + formatValue(player.options.notation, getDimensionFinalMultiplier(tier), 1, 1);
        document.getElementById(name + "Amount").innerHTML = getDimensionDescription(tier);
    }


    for (let tier = 1; tier <= 8; ++tier) {
        var name = TIER_NAMES[tier];
        if (!canBuyDimension(tier)) {
            break;
        }

        document.getElementById(name + "Row").style.display = "table-row";
        document.getElementById(name + "Row").style.visibility = "visible";


    }

    if (canBuyTickSpeed()) {
        var tickmult = getTickSpeedMultiplier();
        if (tickmult < 1e-9) {
          document.getElementById("tickLabel").textContent = "Divide the tick interval by " + shortenDimensions(tickmult.pow(-1)) + '.'
        } else {
          var places = 0;
          if (tickmult < 0.2) places = Math.floor(Math.log10(Math.round(1/tickmult)));
          document.getElementById("tickLabel").innerHTML = 'Reduce the tick interval by ' + ((1 - tickmult) * 100).toFixed(places) + '%.';
        }

        document.getElementById("tickSpeed").style.visibility = "visible";
        document.getElementById("tickSpeedMax").style.visibility = "visible";
        document.getElementById("tickLabel").style.visibility = "visible";
        document.getElementById("tickSpeedAmount").style.visibility = "visible";
    }

    var shiftRequirement = getShiftRequirement(0);
    if (player.currentChallenge == "challenge4" ? shiftRequirement.tier < 6 : shiftRequirement.tier < 8) {
        document.getElementById("resetLabel").innerHTML = 'Dimension Shift (' + player.resets + '): requires ' + shiftRequirement.amount + " " + DISPLAY_NAMES[shiftRequirement.tier] + " Dimensions";
    } else {
      document.getElementById("resetLabel").innerHTML = 'Dimension Boost (' + player.resets + '): requires ' + shiftRequirement.amount + " " + DISPLAY_NAMES[shiftRequirement.tier] + " Dimensions";
    }

    if (player.currentChallenge == "challenge4" ? player.resets > 2 : player.resets > 3) {
        document.getElementById("softReset").innerHTML = "Reset the game for a Boost";
    } else {
        document.getElementById("softReset").innerHTML = "Reset the game for a new Dimension";
    }

    let dimType;
    if (player.currentChallenge === "challenge4") {
      dimType = 'Sixth';
    } else {
      dimType = 'Eighth'
    }
    let galCount;
    if (player.replicanti.galaxies > 0) {
      galCount = player.galaxies + '+' + player.replicanti.galaxies;
    } else {
      galCount = player.galaxies;
    }
    document.getElementById("secondResetLabel").innerHTML = 'Antimatter Galaxies (' + galCount + '): requires ' + getGalaxyRequirement() + ' ' + dimType + ' Dimensions';
    document.getElementById("totalmoney").innerHTML = 'You have made a total of ' + shortenMoney(player.totalmoney) + ' antimatter.';
    document.getElementById("totalresets").innerHTML = 'You have done ' + player.resets + ' Dimension Shifts/Boosts.';
    document.getElementById("galaxies").innerHTML = 'You have ' + Math.round(player.galaxies) + ' Antimatter Galaxies.';
    document.getElementById("totalTime").innerHTML = "You have played for " + timeDisplay(player.totalTimePlayed) + ".";

    if (player.infinitied === 0 && player.eternities === 0) {
        document.getElementById("bestInfinity").innerHTML = ""
        document.getElementById("infinitied").innerHTML = ""
        document.getElementById("thisInfinity").innerHTML = ""
    } else {
        document.getElementById("bestInfinity").innerHTML = "Your fastest Infinity is in " + timeDisplay(player.bestInfinityTime) + "."
        document.getElementById("thisInfinity").innerHTML = "You have spent " + timeDisplay(player.thisInfinityTime) + " in this Infinity."
        let ipPlural = player.infinityPoints.equals(1) ? '' : 's';
        document.getElementById("infinityPoints1").innerHTML = "You have <span class=\"IPAmount1\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + ".";
        document.getElementById("infinityPoints2").innerHTML = "You have <span class=\"IPAmount2\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + ".";
        let infPlural = getInfinitied() === 1 ? '' : 's';
        if (player.eternities > 0) {
            document.getElementById("infinitied").innerHTML = "You have infinitied " + addCommas(player.infinitied) + " time" + infPlural + " this eternity.";
        } else {
            document.getElementById("infinitied").innerHTML = "You have infinitied " + addCommas(player.infinitied) + " time" + infPlural + ".";
        }
    }
    if (player.bankedInfinities === 0) {
        document.getElementById("bankedInfinities").innerHTML = ""
    } else {
        document.getElementById("bankedInfinities").innerHTML = "You have " + addCommas(player.bankedInfinities) + " banked infinities.";
    }

    if (player.eternities == 0) {
        document.getElementById("eternitied").innerHTML = ""
        document.getElementById("besteternity").innerHTML = ""
        document.getElementById("thiseternity").innerHTML = ""
    } else {
        document.getElementById("eternitied").innerHTML = "You have eternitied "+addCommas(player.eternities)+" times.";
        document.getElementById("besteternity").innerHTML = "You have spent "+timeDisplay(player.thisEternity)+" in this Eternity.";
        document.getElementById("thiseternity").innerHTML = "Your fastest Eternity is in "+timeDisplay(player.bestEternity)+".";
    }

    document.getElementById("infi11").innerHTML = "Production increase over time <br>Currently: " + (Math.pow(0.5 * player.totalTimePlayed / 600, 0.15)).toFixed(2) + "x<br>Cost: 1 IP"
    document.getElementById("infi12").innerHTML = "First and Eighth Dimension power based on infinitied stat<br>" + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
    document.getElementById("infi13").innerHTML = "Third and Sixth Dimension power based on infinitied stat<br>" + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
    document.getElementById("infi22").innerHTML = "Second and Seventh Dimension power based on infinitied stat<br>" + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
    document.getElementById("infi23").innerHTML = "Fourth and Fifth Dimension power based on infinitied stat<br>" + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>Cost: 1 IP"
    document.getElementById("infi31").innerHTML = "Production increase over time in current infinity<br>Currently: " + Decimal.max(Math.pow(player.thisInfinityTime / 2400, 0.25), 1).toFixed(2) + "x<br>Cost: 3 IP"
    document.getElementById("infi32").innerHTML = "Bonus for unspent Infinity Points on 1st Dimension<br>(Currently " + formatValue(player.options.notation, player.infinityPoints.dividedBy(2).pow(1.5).plus(1), 2, 2) + "x)<br>Cost: 5 IP"
    document.getElementById("infi34").innerHTML = "Infinity Point generation (based on fastest infinity) <br>(Currently "+shortenDimensions(getIPMult())+" every " + timeDisplay(player.bestInfinityTime*10) + ")<br>Cost: 10 IP"
    document.getElementById("postinfi11").innerHTML = "Power up all dimensions based on total antimatter produced<br>Currently: "+ Math.pow(player.totalmoney.e+1, 0.5).toFixed(2)+"x<br>Cost: "+shortenCosts(1e4)+" IP"
    document.getElementById("postinfi21").innerHTML = "Power up all dimensions based on current antimatter<br>Currently: "+ Math.pow(player.money.e+1, 0.5).toFixed(2)+"x<br>Cost: "+shortenCosts(5e4)+" IP"
    document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>"+player.tickSpeedMultDecrease+"x -> "+(player.tickSpeedMultDecrease-1)+"x<br>Cost: "+shortenDimensions(player.tickSpeedMultDecreaseCost) +" IP"
    if (player.tickSpeedMultDecrease == 2) document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>"+player.tickSpeedMultDecrease+"x"
    document.getElementById("postinfi22").innerHTML = "Power up all dimensions based on achievements completed <br>Currently: "+Math.max(Math.pow((player.achievements.length-30), 3)/40,1).toFixed(2)+"x<br>Cost: "+shortenCosts(1e6)+" IP"
    document.getElementById("postinfi12").innerHTML = "Power up all dimensions based on amount infinitied <br>Currently: "+(1+Math.log10(getInfinitied()+1)*10).toFixed(2)+"x<br>Cost: "+shortenCosts(1e5)+" IP"
    document.getElementById("postinfi41").innerHTML = "Makes galaxies 50% stronger <br>Cost: "+shortenCosts(5e11)+" IP"
    document.getElementById("postinfi32").innerHTML = "Power up all dimensions based on slowest challenge run<br>Currently: "+Decimal.max(10*3000/worstChallengeTime, 1).toFixed(2)+"x<br>Cost: "+shortenCosts(1e7)+" IP"
    document.getElementById("postinfi42").innerHTML = "Dimension cost multiplier increase <br>"+player.dimensionMultDecrease+"x -> "+(player.dimensionMultDecrease-1)+"x<br>Cost: "+shortenCosts(player.dimensionMultDecreaseCost) +" IP"

    document.getElementById("postinfi13").innerHTML = "You passively generate infinitied stat based on your fastest infinity.<br>1 Infinity every "+timeDisplay(player.bestInfinityTime*5)+ " <br>Cost: "+shortenCosts(20e6)+" IP"
    document.getElementById("postinfi23").innerHTML = "Option to bulk buy Dimension Boosts <br>Cost: "+shortenCosts(5e9)+" IP"
    document.getElementById("postinfi33").innerHTML = "Autobuyers work twice as fast<br>Cost:"+ shortenCosts(1e15)+" IP"
    if (player.dimensionMultDecrease == 3) document.getElementById("postinfi42").innerHTML = "Dimension cost multiplier increase <br>"+player.dimensionMultDecrease+"x"

    document.getElementById("offlineProd").innerHTML = "Generates "+player.offlineProd+"% > "+Math.max(Math.max(5, player.offlineProd + 5), Math.min(50, player.offlineProd + 5))+"% of your best IP/min from last 10 infinities, works offline<br>Currently: "+shortenMoney(bestRunIppm.times(player.offlineProd/100)) +"IP/min<br> Cost: "+shortenCosts(player.offlineProdCost)+" IP"
    if (player.offlineProd == 50) document.getElementById("offlineProd").innerHTML = "Generates "+player.offlineProd+"% of your best IP/min from last 10 infinities, works offline<br>Currently: "+shortenMoney(bestRunIppm.times(player.offlineProd/100)) +" IP/min"

    document.getElementById("eter1").innerHTML = "Infinity Dimension multiplier based on unspent EP (x+1)<br>Currently: "+shortenMoney(player.eternityPoints.plus(1))+"x<br>Cost: 5 EP";
    document.getElementById("eter2").innerHTML = "Infinity Dimension multiplier based on eternities (x^log4(2x))<br>Currently: "+shortenMoney(Decimal.pow(player.eternities, Math.log(player.eternities*2)/Math.log(4)))+"x<br>Cost: 10 EP";
    document.getElementById("eter3").innerHTML = "Infinity Dimension multiplier based on timeshards (x/"+shortenCosts(player.options.notation, 1e12)+"+1)<br>Currently: "+shortenMoney(player.timeShards.div(1e12).plus(1))+"x<br>Cost: "+shortenCosts(1e4)+" EP"
    document.getElementById("eter4").innerHTML = "Eternity production is boosted by unspent EP (floor(1+log10(EP)/4))<br>Currently: "+(Math.floor(1 + player.eternityPoints.max(1).log(10) / 4))+"x<br>Cost: "+shortenCosts(1e6)+" EP";
    document.getElementById("eter5").innerHTML = "Timeshard production is boosted by eternities (1+eternities)<br>Currently: "+shortenMoney(1 + player.eternities)+"x<br>Cost: "+shortenCosts(1e9)+" EP";
    document.getElementById("eter6").innerHTML = "EP production is boosted by timeshards (1+log10(timeshards)^0.3)<br>Currently: "+shortenMoney(1 + Math.pow(Math.max(player.timeShards.log(10), 0), 0.3))+"x<br>Cost: "+shortenCosts(1e12)+" EP"
    document.getElementById("eter7").innerHTML = "Infinity power exponent is boosted by infinities<br>(7 + min(0.1, log10(log10(x / "+shortenCosts(2e7)+" + 9)) / 2))<br>Currently: x^"+shorten(eter7Upg())+"<br>Cost: "+shortenCosts(new Decimal('1e1000'))+" EP"
    document.getElementById("eter8").innerHTML = "Tickspeed upgrades from time dimensions are boosted by eternities<br>(1 + min(0.1, log10(log10(x / "+shortenCosts(2e7)+" + 9)) / 2))<br>Currently: "+shorten(eter8Upg())+"x<br>Cost: "+shortenCosts(new Decimal('1e1500'))+" EP"
    document.getElementById("eter9").innerHTML = "Infinity and eternity production is boosted by infinities plus eternities<br>(floor((x / "+shortenCosts(2e7)+")^0.5))<br>Currently: "+shortenCosts(eter9Upg())+"x<br>Cost: "+shortenCosts(new Decimal('1e2000'))+" EP"

    updateGalacticUpgrades();
    document.getElementById("galdimupg1").innerHTML = "Double all galactic dimension multipliers<br>Cost: "+shortenCosts(player.extragalactic.galacticDimensionUpgradeCosts[0])+" galactic power";
    document.getElementById("galdimupg2").innerHTML = "Decrease extragalactic galaxy cost multiplier<br>Extragalactic galaxies: "+getTotalExtragalacticGalaxiesGained()+" -> "+getTotalExtragalacticGalaxiesGained(1)+"<br>Cost: "+shortenCosts(player.extragalactic.galacticDimensionUpgradeCosts[1])+" galactic power";
    document.getElementById("galdimupg3").innerHTML = "Multiply all galactic dimensions based on extragalactic galaxies<br>Additional multiplier: "+shorten(multiplierPerGalacticUpgrade3())+"<br>Cost: "+shortenCosts(player.extragalactic.galacticDimensionUpgradeCosts[2])+" galactic power"
    document.getElementById("galdimupg4").innerHTML = "Increase GP formula base based on extragalactic galaxies<br>Currently: "+shorten(getExtragalacticPointBase())+" -> "+shorten(getExtragalacticPointBase(1))+"<br>Cost: "+shortenCosts(player.extragalactic.galacticDimensionUpgradeCosts[3])+" galactic power";
    displayAllECRewards();
    checkAllECUnlockStatuses();
}

function updateCosts() {
    document.getElementById("first").innerHTML = 'Cost: ' + shortenCosts(player.firstCost);
    document.getElementById("second").innerHTML = 'Cost: ' + shortenCosts(player.secondCost);
    document.getElementById("third").innerHTML = 'Cost: ' + shortenCosts(player.thirdCost);
    document.getElementById("fourth").innerHTML = 'Cost: ' + shortenCosts(player.fourthCost);
    document.getElementById("fifth").innerHTML = 'Cost: ' + shortenCosts(player.fifthCost);
    document.getElementById("sixth").innerHTML = 'Cost: ' + shortenCosts(player.sixthCost);
    document.getElementById("seventh").innerHTML = 'Cost: ' + shortenCosts(player.seventhCost);
    document.getElementById("eight").innerHTML = 'Cost: ' + shortenCosts(player.eightCost);

    document.getElementById("firstMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.firstCost.times((10 - player.firstBought)));
    document.getElementById("secondMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.secondCost.times((10 - player.secondBought)));
    document.getElementById("thirdMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.thirdCost.times((10 - player.thirdBought)));
    document.getElementById("fourthMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.fourthCost.times((10 - player.fourthBought)));
    document.getElementById("fifthMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.fifthCost.times((10 - player.fifthBought)));
    document.getElementById("sixthMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.sixthCost.times((10 - player.sixthBought)));
    document.getElementById("seventhMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.seventhCost.times((10 - player.seventhBought)));
    document.getElementById("eightMax").innerHTML = 'Until 10, Cost: ' + shortenCosts(player.eightCost.times((10 - player.eightBought)));

    document.getElementById("tickSpeed").innerHTML = 'Cost: ' + shortenCosts(player.tickSpeedCost);


    for (var i=1; i<=8; i++) {
        document.getElementById("infMax"+i).innerHTML = "Cost: " + shortenCosts(player["infinityDimension"+i].cost) + " IP"
    }

    for (var i=1; i<=4; i++) {

        document.getElementById("timeMax"+i).innerHTML = "Cost: " + shortenDimensions(player["timeDimension"+i].cost) + " EP"
    }
}

function updateTickSpeed() {
    var exp = player.tickspeed.e;
    if (exp > 1) document.getElementById("tickSpeedAmount").innerHTML = 'Tickspeed: ' + player.tickspeed.toFixed(0);
    else {
        document.getElementById("tickSpeedAmount").innerHTML = 'Tickspeed: ' + player.tickspeed.times(new Decimal(100).dividedBy(Decimal.pow(10, exp))).toFixed(0) + ' / ' + shorten(new Decimal(100).dividedBy(Decimal.pow(10, exp)));
    }
    if (player.tickspeed.lt(1e-26)) giveAchievement("Faster than a potato");
    if (player.tickspeed.lt(1e-52)) giveAchievement("Faster than a squared potato");

    /*	else if (player.tickspeed > 10) document.getElementById("tickSpeedAmount").innerHTML = 'Tickspeed: ' + Decimal.round(player.tickspeed*10)  + ' / 10';
    	else if (player.tickspeed > 1) document.getElementById("tickSpeedAmount").innerHTML = 'Tickspeed: ' + Decimal.round(player.tickspeed*100) + ' / 100';
    else if (player.tickspeed > .1) document.getElementById("tickSpeedAmount").innerHTML = 'Tickspeed: ' + Decimal.round(player.tickspeed*1000) + ' / 1000';
    else document.getElementById("tickSpeedAmount").innerHTML = 'Tickspeed: ' + Decimal.round(player.tickspeed*10000) + ' / 10000';*/
}


function updateChallenges() {
    var buttons = Array.from(document.getElementsByClassName('onchallengebtn'))
    for (var i=0; i < buttons.length; i++) {
        if (buttons[i].id.includes('eter')) continue;
        buttons[i].className = "challengesbtn";
        buttons[i].innerHTML = "Start"
    }

    var buttonss = Array.from(document.getElementsByClassName('completedchallengesbtn'))
    for (var i=0; i < buttonss.length; i++) {
        if (buttonss[i].id.includes('eter')) continue;
        buttonss[i].className = "challengesbtn";
        buttonss[i].innerHTML = "Start"
    }

    for (var i=0; i < player.challenges.length; i++) {
        document.getElementById(player.challenges[i]).className = "completedchallengesbtn";
        document.getElementById(player.challenges[i]).innerHTML = "Completed"
    }

    if (player.currentChallenge != "") {
        document.getElementById(player.currentChallenge).className = "onchallengebtn"
        document.getElementById(player.currentChallenge).innerHTML = "Running"
    }

    for (var i = 1; i <= player.postChallUnlocked; i++) {
        document.getElementById("postc"+i+"div").style.display = "inline-block"
    }
    for (var i = player.postChallUnlocked + 1; i <= 8; i++) {
        document.getElementById("postc"+i+"div").style.display = "none"
    }

    // Show the normal challenges tab (and the challenges tab overall) if and only if infinity tab is shown.
    if (player.infinitied > 0 || player.eternities > 0) {
        document.getElementById('challengessubtabbtn').style.display = 'inline-block';
        document.getElementById('challengesbtn').style.display = 'inline-block';
        document.getElementById('challengetimesbtn').style.display = 'inline-block';
    } else {
        document.getElementById('challengessubtabbtn').style.display = 'none';
        document.getElementById('challengesbtn').style.display = 'none';
        document.getElementById('challengetimesbtn').style.display = 'none';
    }
    // Show the infinity challenges tab if and only if you've reached at least one IC.
    if (player.postChallUnlocked > 0) {
        document.getElementById('infchallengessubtabbtn').style.display = 'inline-block';
        document.getElementById('infchallengesbtn').style.display = 'inline-block';
    } else {
        document.getElementById('infchallengessubtabbtn').style.display = 'none';
        document.getElementById('infchallengesbtn').style.display = 'none';
        if (document.getElementById('breakchallenges').style.display === 'block') {
            showChallengesTab('challenges');
        }
    }
    // Show the eternity challenges tab if and only if you've eternitied.
    if (player.eternities > 0) {
        document.getElementById('eterchallengessubtabbtn').style.display = 'inline-block';
        document.getElementById('eclock').style.display = 'inline-block';
    } else {
        document.getElementById('eterchallengessubtabbtn').style.display = 'none';
        document.getElementById('eclock').style.display = 'none';
    }
}


//infinity dimensions


function DimensionDescription(tier) {
    var name = TIER_NAMES[tier];

    let description = shortenDimensions(player['infinityDimension'+tier].amount) + ' (' + player['infinityDimension'+tier].bought + ')';

    if (tier < 8) {
        description += '  (+' + formatValue(player.options.notation, DimensionRateOfChange(tier), 2, 2) + '%/s)';
    }

    return description;
}


function DimensionRateOfChange(tier) {
    let toGain = DimensionProduction(tier+1)
    var current = Decimal.max(player["infinityDimension"+tier].amount, 1);
    var change  = toGain.times(10).dividedBy(current);
    return change;
}




function updateInfinityDimensions() {
    for (let tier = 1; tier <= 8; ++tier) {
        document.getElementById("infD"+tier).innerHTML = DISPLAY_NAMES[tier] + " Infinity Dimension x" + shortenDimensions(DimensionPower(tier));
        document.getElementById("infAmount"+tier).innerHTML = DimensionDescription(tier);
        var name = TIER_NAMES[tier];
        if (!player.infDimensionsUnlocked[tier-1]) {
            break;
        }

        document.getElementById("infRow"+tier).style.display = "table-row";
        document.getElementById("infRow"+tier).style.visibility = "visible";
    }
}

function DimensionProduction(tier) {
    var dim = player["infinityDimension"+tier]
    if (player.challenges.includes("postc6")) return dim.amount.times(DimensionPower(tier)).dividedBy(player.tickspeed.dividedBy(1000).pow(0.0005))
    else return dim.amount.times(DimensionPower(tier))
}

function DimensionPower(tier) {
    /*
    if (player.eternityChallenges.current === 9 || player.eternityChallenges.current === 10) {
      return new Decimal(0);
    }
    if (player.eternityChallenges.current === 11) {
      return new Decimal(1);
    }
    */
    var dim = player["infinityDimension"+tier]
    var mult = dim.power;
    if (player.challenges.includes("postc1")) mult = mult.times(infDimPow);
    if (player.achievements.includes("r75")) mult = mult.times(player.achPow);
    if (player.achievements.includes("r94") && tier == 1) mult = mult.times(2);
    if (player.achievements.includes("r114")) mult = mult.times(Decimal.pow(10, ecCompletions(4) + 1))
    if (player.achievements.includes("r115")) mult = mult.times(Decimal.pow(7, player.eternityChallenges.totalTiersDone))
    if (player.replicanti.unl) {
        // ts 3 is replicanti multiplier
        var replmult = getReplMult();

        mult = mult.times(replmult)
    }

    if (player.eternityUpgrades.includes(1)) {
        mult = mult.times(player.eternityPoints.plus(1))
    }

    if (player.eternityUpgrades.includes(2)) {
      mult = mult.times(Decimal.pow(player.eternities, Math.log(player.eternities*2+1)/Math.log(4)));
    }

    if (player.eternityUpgrades.includes(3)) {
      mult = mult.times(player.timeShards.div(1e12).plus(1));
    }

    /*
    // EC7 dark matter handled id (2 / 3)
    if (player.eternityChallenges.current === 7) {
        mult = mult.dividedBy(player.darkMatter);
    }
    */

    // EC4 reward handled
    mult = mult.times(ecNumReward(4));

    mult = mult.times(getGalacticStudyMultiplierTo(2));

    /*
    // EC7 reward handled id (2/3)
    mult = mult.times(ecNumReward(7));

    // newest EC8 reward handled
    mult = mult.times(ecNumReward(8));

    // EC9 reward handled
    mult = mult.times(ecNumReward(9));
    */

    // why not for ID too
    if (mult.lt(1)) {mult = new Decimal(1)}

    return mult;
}




function resetInfDimensions() {

    if (player.infDimensionsUnlocked[0]) {
        player.infinityPower = new Decimal(0)
    }
    if (player.infDimensionsUnlocked[7] && player.infinityDimension6.amount != 0){
        player.infinityDimension7.amount = new Decimal(player.infinityDimension7.baseAmount)
        player.infinityDimension6.amount = new Decimal(player.infinityDimension6.baseAmount)
        player.infinityDimension5.amount = new Decimal(player.infinityDimension5.baseAmount)
        player.infinityDimension4.amount = new Decimal(player.infinityDimension4.baseAmount)
        player.infinityDimension3.amount = new Decimal(player.infinityDimension3.baseAmount)
        player.infinityDimension2.amount = new Decimal(player.infinityDimension2.baseAmount)
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }
    if (player.infDimensionsUnlocked[6] && player.infinityDimension6.amount != 0){
        player.infinityDimension6.amount = new Decimal(player.infinityDimension6.baseAmount)
        player.infinityDimension5.amount = new Decimal(player.infinityDimension5.baseAmount)
        player.infinityDimension4.amount = new Decimal(player.infinityDimension4.baseAmount)
        player.infinityDimension3.amount = new Decimal(player.infinityDimension3.baseAmount)
        player.infinityDimension2.amount = new Decimal(player.infinityDimension2.baseAmount)
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }
    if (player.infDimensionsUnlocked[5] && player.infinityDimension6.amount != 0){
        player.infinityDimension5.amount = new Decimal(player.infinityDimension5.baseAmount)
        player.infinityDimension4.amount = new Decimal(player.infinityDimension4.baseAmount)
        player.infinityDimension3.amount = new Decimal(player.infinityDimension3.baseAmount)
        player.infinityDimension2.amount = new Decimal(player.infinityDimension2.baseAmount)
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }
    if (player.infDimensionsUnlocked[4] && player.infinityDimension5.amount != 0){
        player.infinityDimension4.amount = new Decimal(player.infinityDimension4.baseAmount)
        player.infinityDimension3.amount = new Decimal(player.infinityDimension3.baseAmount)
        player.infinityDimension2.amount = new Decimal(player.infinityDimension2.baseAmount)
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }
    if (player.infDimensionsUnlocked[3] && player.infinityDimension4.amount != 0){
        player.infinityDimension3.amount = new Decimal(player.infinityDimension3.baseAmount)
        player.infinityDimension2.amount = new Decimal(player.infinityDimension2.baseAmount)
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }
    else if (player.infDimensionsUnlocked[2] && player.infinityDimension3.amount != 0){
        player.infinityDimension2.amount = new Decimal(player.infinityDimension2.baseAmount)
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }
    else if (player.infDimensionsUnlocked[1] && player.infinityDimension2.amount != 0){
        player.infinityDimension1.amount = new Decimal(player.infinityDimension1.baseAmount)
    }

}

let getInfCostMult = function (tier) {
  return infCostMults[tier];
}


var infCostMults = [null, 1e3, 1e6, 1e8, 1e10, 1e15, 1e20, 1e25, 1e30]
var infPowerMults = [null, 50, 30, 10, 5, 5, 5, 5, 5]
function buyManyInfinityDimension(tier) {

    var dim = player["infinityDimension"+tier]

    if (!canBuyInfDim(tier, dim)) return false;

    player.infinityPoints = player.infinityPoints.minus(dim.cost)
    dim.amount = dim.amount.plus(10);
    dim.cost = Decimal.round(dim.cost.times(getInfCostMult(tier)))
    dim.power = dim.power.times(infPowerMults[tier])
    dim.baseAmount += 10
    // player.ec8.PurchasesMade.ids++;
    // ec8Update('ids');
}

function canBuyInfDim (tier, dim) {
    return player.infinityPoints.gte(dim.cost) && player.infDimensionsUnlocked[tier-1];
    // && !ec8noMorePurchases('ids');
}

function makePurchase (currency, initial, increase, max) {
  let extraFactor = new Decimal(increase).minus(1).pow(-1);
  // account for small purchases
  let alreadyBought = initial.times(extraFactor);
  let simulatedCurrency = currency.plus(alreadyBought);
  // for safety
  let amount = 1 + Math.floor(simulatedCurrency.plus(.001).div(
    extraFactor.plus(1)).div(initial).log(10) / new Decimal(increase).log(10));
  if (max !== undefined) {
      amount = Math.min(amount, max);
  }
  let cost = initial.times(Decimal.pow(increase, amount - 1)).times(
    extraFactor.plus(1)).minus(alreadyBought);
  if (amount <= 0) {
    cost = new Decimal(0);
  }
  if (isNaN(amount)) {
    throw new Error('Number of purchases is NaN! Some debug data: ' + [currency, initial, increase, amount, cost].join(', '));
  }
  if (cost.gt(currency)) {
    throw new Error('Cost is greater than currency. Some debug data: ' + [currency, initial, increase, amount, cost].join(', '))
  }
  return {amount: amount, cost: cost};
}

function buyMaxInfDims(tier) {
    var dim = player["infinityDimension"+tier]

    if (!canBuyInfDim(tier, dim)) return false;

    var toBuy = makePurchase(player.infinityPoints, dim.cost, getInfCostMult(tier));
    /*
    if (player.eternityChallenges.current === 8) {
        toBuy = Math.min(toBuy, 50 - player.ec8.PurchasesMade.ids);
    }
    */
    player.infinityPoints = player.infinityPoints.minus(toBuy.cost)
    dim.amount = dim.amount.plus(10*toBuy.amount);
    dim.cost = Decimal.round(dim.cost.times(Decimal.pow(getInfCostMult(tier), toBuy.amount)))
    dim.power = dim.power.times(Decimal.pow(infPowerMults[tier], toBuy.amount))
    dim.baseAmount += 10*toBuy.amount;

    // player.ec8.PurchasesMade.ids += toBuy;
    // ec8Update('ids');
}

function switchAutoInf(tier) {
    if (player.infDimBuyers[tier-1]) {
        player.infDimBuyers[tier-1] = false
        document.getElementById("infauto"+tier).innerHTML = "Auto: OFF"
    } else {
        player.infDimBuyers[tier-1] = true
        document.getElementById("infauto"+tier).innerHTML = "Auto: ON"
    }
}

function toggleAllInfDims() {
    if (player.infDimBuyers[0]) {
        for (var i=1; i<9; i++) {
            player.infDimBuyers[i-1] = false
            document.getElementById("infauto"+i).innerHTML = "Auto: OFF"
        }
    } else {
        for (var i=1; i<9; i++) {
            if (player.eternities - 10>=i) {
                player.infDimBuyers[i-1] = true
                document.getElementById("infauto"+i).innerHTML = "Auto: ON"
            }
        }
    }
}

function loadInfAutoBuyers() {
    for (var i=1; i<9; i++) {
        if (player.infDimBuyers[i-1]) document.getElementById("infauto"+i).innerHTML = "Auto: ON"
        else document.getElementById("infauto"+i).innerHTML = "Auto: OFF"
    }
}



var infDimPow = 1


//time dimensions

function getPower(tier) {
  let dim = player["timeDimension" + tier];
  /*
  if (player.eternityChallenges.current === 1 || player.eternityChallenges.current === 10) {
    return new Decimal(0);
  }
  if (player.eternityChallenges.current === 11) {
    return new Decimal(1);
  }
  */
  var ret = dim.power;
  if (player.eternityUpgrades.includes(5) && tier === 1) {
    ret = ret.times(1 + player.eternities);
  }
  if (player.achievements.includes('r117')) {
    ret = ret.times(1 + Math.pow(Math.log(player.eternities), 1.5) / Math.log(100));
  } else if (player.achievements.includes('r102')) {
    ret = ret.times(1 + Math.log(player.eternities) / Math.log(100));
  }
  if (player.achievements.includes('r105')) {
    ret = ret.times(Math.max(Math.pow(player.eightAmount.toNumber(), 1 / 8), 1));
  }
  if (player.achievements.includes("r114")) {
    ret = ret.times(Decimal.pow(2, ecCompletions(4) + 1));
  }
  if (player.achievements.includes('r127')) {
    ret = ret.times(player.eternityPoints.max(2).log(2))
  }
  if (player.achievements.includes('r128')) {
    ret = ret.times(Math.max(getTotalTT(), 1))
  }
  // EC1 reward handled
  ret = ret.times(ecNumReward(1));

  /*
  // EC7 dark matter handled td (3 / 3)
  if (player.eternityChallenges.current === 7) {
      ret = ret.dividedBy(player.darkMatter);
  }
  */

  // EC2 bonus handled
  ret = ret.times(getInfinityPowerTDMultiplier());
  // EC2 reward handled
  ret = ret.times(ecNumReward(2));

  /*
  // EC7 reward handled td (3/3)
  ret = ret.times(ecNumReward(7));
  */

  // and for TD
  ret = ret.times(getGalacticStudyMultiplierTo(3));
  if (ret.lt(1)) {ret = new Decimal(1)}
  return ret;
}


function getTimeDimensionProduction(tier) {
    var dim = player["timeDimension"+tier]
    var ret = dim.amount.times(getPower(tier))
    // effect of tickspeed, which is not part of power
    // (see, for example, normal dimensions)
    // this will work when we add infinite time
    if (hasInfiniteTime()) {
      ret = ret.times(infiniteTimeEffect())
    }
    return ret;
}

function getTimeDimensionRateOfChange(tier) {
    let toGain = getTimeDimensionProduction(tier+1)
    var current = Decimal.max(player["timeDimension"+tier].amount, 1);
    var change  = toGain.times(10).dividedBy(current);
    return change;
}

function getTimeDimensionDescription(tier) {
    var name = TIER_NAMES[tier];

    let description = shortenDimensions(player['timeDimension'+tier].amount);

    if (tier < 4) {
        description += '  (+' + formatValue(player.options.notation, getTimeDimensionRateOfChange(tier), 2, 2) + '%/s)';
    }

    return description;
}

function updateTimeDimensions() {
    for (let tier = 1; tier <= 4; ++tier) {
        document.getElementById("timeD"+tier).innerHTML = DISPLAY_NAMES[tier] + " Time Dimension x" + shortenMoney(getPower(tier));
        document.getElementById("timeAmount"+tier).innerHTML = getTimeDimensionDescription(tier);
    }
}

var timeDimCostMults = [null, 3, 9, 27, 81];

function buyTimeDimension(tier) {
    var dim = player["timeDimension"+tier]
    if (player.eternityPoints.lt(dim.cost)) return false
    player.eternityPoints = player.eternityPoints.minus(dim.cost)
    dim.amount = dim.amount.plus(1);
    dim.bought += 1
    dim.cost = Decimal.pow(10, tier - 1).times(Decimal.pow(timeDimCostMults[tier], dim.bought))
    dim.power = dim.power.times(3);
    return true;
}

function buyMaxTimeDimensions () {
  for (var tier = 1; tier <= 4; tier++) {
    var dim = player["timeDimension"+tier];
    let buy = makePurchase(player.eternityPoints, dim.cost, timeDimCostMults[tier])
    if (buy.amount === 0) continue;
    player.eternityPoints = player.eternityPoints.minus(buy.cost);
    dim.amount = dim.amount.plus(buy.amount);
    dim.bought += buy.amount;
    dim.cost = Decimal.pow(10, tier - 1).times(Decimal.pow(timeDimCostMults[tier], dim.bought))
    dim.power = dim.power.times(Decimal.pow(3, buy.amount));
  }
}

function resetTimeDimensions() {
    for (var i = 1; i <= 4; i++) {
        var dim = player["timeDimension"+i]
        dim.amount = new Decimal(dim.bought)
    }
}

// galactic dimensions

// small subsection devoted to galactic Upgrades

function canBuyGalacticUpgrade(name) {
    let cost = player.extragalactic.galacticDimensionUpgradeCosts[name - 1];
    return player.extragalactic.galacticPower.gte(cost) && !hasGalacticStudies();
}

function buyGalacticUpgrade(name) {
    if (canBuyGalacticUpgrade(name)) {
        let cost = player.extragalactic.galacticDimensionUpgradeCosts[name - 1];
        player.extragalactic.galacticPower = player.extragalactic.galacticPower.minus(cost);
        player.extragalactic.galacticDimensionUpgrades[name - 1]++;
        player.extragalactic.galacticDimensionUpgradeCosts[name - 1] = cost.times(player.extragalactic.galacticDimensionUpgradeCostMults[name - 1]);
        player.extragalactic.totalGalacticDimensionUpgrades++;
    }
}

function updateGalacticUpgrades () {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("galdimupg" + i).className = canBuyGalacticUpgrade(i) ? "galacticupbtn" : "galacticupbtnlocked";
    }
}

// end galactic upgrades

function multiplierPerGalacticUpgrade3 () {
    return Math.sqrt(Math.max(1, Math.log2(player.extragalactic.galaxies)));
}

function getGalacticDimensionPower(tier) {
  let dim = player.extragalactic["galacticDimension" + tier];
  let ret = dim.power;
  ret = ret.times(Decimal.pow(2, player.extragalactic.galacticDimensionUpgrades[0]));
  ret = ret.times(Decimal.pow(multiplierPerGalacticUpgrade3(), player.extragalactic.galacticDimensionUpgrades[2]));
  ret = ret.times(Decimal.pow(1.05, player.extragalactic.totalGalacticDimensionUpgrades));
  ret = ret.times(getGalacticStudyMultiplierTo(4));
  if (ret.lt(1)) {ret = new Decimal(1)}
  return ret;
}


function getGalacticDimensionProduction(tier) {
    var dim = player.extragalactic["galacticDimension"+tier]
    var ret = dim.amount.times(getPower(tier))
    return ret;
}

function getGalacticDimensionRateOfChange(tier) {
    let toGain = getGalacticDimensionProduction(tier+1)
    var current = Decimal.max(player.extragalactic["galacticDimension"+tier].amount, 1);
    var change  = toGain.times(10).dividedBy(current);
    return change;
}

function getGalacticDimensionDescription(tier) {
    var name = TIER_NAMES[tier];

    let description = shortenDimensions(player.extragalactic['galacticDimension'+tier].amount);

    if (tier < 4) {
        description += '  (+' + formatValue(player.options.notation, getGalacticDimensionRateOfChange(tier), 2, 2) + '%/s)';
    }

    return description;
}

function updateGalacticDimensions() {
    for (let tier = 1; tier <= 4; ++tier) {
        document.getElementById("galacticD"+tier).innerHTML = DISPLAY_NAMES[tier] + " Galactic Dimension x" + shortenMoney(getPower(tier));
        document.getElementById("galacticAmount"+tier).innerHTML = getGalacticDimensionDescription(tier);
    }
}

var galacticDimCostMults = [null, 2, 4, 8, 16];

function buyGalacticDimension(tier) {
    var dim = player.extragalactic["galacticDimension"+tier]
    if (player.extragalactic.points.lt(dim.cost)) return false
    player.extragalactic.points = player.extragalactic.points.minus(dim.cost)
    dim.amount = dim.amount.plus(1);
    dim.bought += 1
    dim.cost = Decimal.pow(100, tier - 1).times(Decimal.pow(galacticDimCostMults[tier], dim.bought))
    dim.power = dim.power.times(2);
    return true;
}

function buyMaxGalacticDimensions () {
  for (var tier = 1; tier <= 4; tier++) {
    var dim = player.extragalactic["galacticDimension"+tier];
    let buy = makePurchase(player.extragalactic.points, dim.cost, galacticDimCostMults[tier])
    if (buy.amount === 0) continue;
    console.log(buy.amount);
    player.extragalactic.points = player.extragalactic.points.minus(buy.cost);
    dim.amount = dim.amount.plus(buy.amount);
    dim.bought += buy.amount;
    dim.cost = Decimal.pow(100, tier - 1).times(Decimal.pow(galacticDimCostMults[tier], dim.bought))
    dim.power = dim.power.times(Decimal.pow(2, buy.amount));
  }
}

function resetGalacticDimensions() {
    for (var i = 1; i <= 4; i++) {
        var dim = player.extragalactic["galacticDimension"+i]
        dim.amount = new Decimal(dim.bought)
    }
}

// Time studies

let numTimeStudies = 10;

function studyHasBeenUnlocked (num) {
  return rowHasBeenUnlocked(Math.floor((num + 1) / 2));
}

function rowHasBeenUnlocked (num) {
  return studyRowLevels[num] <= player.timestudy.studyGroupsUnlocked;
}

function updateTimeStudyButtons () {
  for (let i = 1; i <= numTimeStudies / 2; i++) {
    let row = document.getElementById('tsrow' + i);
    if (rowHasBeenUnlocked(i)) {
      row.style.display = 'inline';
    } else {
      row.style.display = 'none';
    }
  }
  for (let i = 1; i <= numTimeStudies; i++) {
    let t = document.getElementById('ts' + i);
    if (player.timestudy.theorem >= player.timestudy.studies[i] + 1 && studyHasBeenUnlocked(i)) {
      t.className = "eternityttbtn"
    } else {
      t.className = "eternityttbtnlocked"
    }
    let bought = document.getElementById('ts' + i + 'bought');
    bought.innerHTML = player.timestudy.studies[i];
    let cost = document.getElementById('ts' + i + 'cost');
    cost.innerHTML = player.timestudy.studies[i] + 1;
  }
}

function buyWithAntimatter() {
    if (player.money.gte(player.timestudy.amcost)) {
        player.money = player.money.minus(player.timestudy.amcost)
        player.timestudy.amcost = player.timestudy.amcost.times(new Decimal('1e20000'))
        player.timestudy.theorem += 1
        updateTheoremButtons()
        updateTimeStudyButtons()
        return true;
    } else {
        return false;
    }
}

function buyWithIP() {
    if (player.infinityPoints.gte(player.timestudy.ipcost)) {
        player.infinityPoints = player.infinityPoints.minus(player.timestudy.ipcost)
        player.timestudy.ipcost = player.timestudy.ipcost.times(1e100)
        player.timestudy.theorem += 1
        updateTheoremButtons()
        updateTimeStudyButtons()
        return true;
    } else {
        return false;
    }
}

function checkEPTTPurchaseAbility () {
  let tdBought = false;
  for (let i = 1; i <= 4; i++) {
      if (player['timeDimension' + i].bought > 0) {
          tdBought = true;
      }
  }
  if (!tdBought) {
      alert('You need to buy a time dimension before you can purchase time theorems with Eternity Points.');
      return false;
  } else {
      return true;
  }
}

function buyWithEP() {
    if (!checkEPTTPurchaseAbility()) {
        return false;
    }
    if (player.eternityPoints.gte(player.timestudy.epcost)) {
        player.eternityPoints = player.eternityPoints.minus(player.timestudy.epcost)
        player.timestudy.epcost = player.timestudy.epcost.times(2)
        player.timestudy.theorem += 1
        updateTheoremButtons()
        updateTimeStudyButtons()
        return true;
    } else {
        return false;
    }
}

function buyMaxWithAntimatter () {
    let buy = makePurchase(player.money, player.timestudy.amcost, new Decimal('1e20000'));
    if (buy.amount > 0) {
        player.money = player.money.minus(buy.cost);
        player.timestudy.amcost = player.timestudy.amcost.times(Decimal.pow(new Decimal('1e20000'), buy.amount));
        player.timestudy.theorem += buy.amount;
        updateTheoremButtons()
        updateTimeStudyButtons()
        return true;
    } else {
        return false;
    }
}

function buyMaxWithIP () {
    let buy = makePurchase(player.infinityPoints, player.timestudy.ipcost, 1e100);
    if (buy.amount > 0) {
        player.infinityPoints = player.infinityPoints.minus(buy.cost);
        player.timestudy.ipcost = player.timestudy.ipcost.times(Decimal.pow(1e100, buy.amount));
        player.timestudy.theorem += buy.amount;
        updateTheoremButtons()
        updateTimeStudyButtons()
        return true;
    } else {
        return false;
    }
}

function buyMaxWithEP () {
    if (!checkEPTTPurchaseAbility()) {
        return false;
    }
    let buy = makePurchase(player.eternityPoints, player.timestudy.epcost, 2);
    if (buy.amount > 0) {
        player.eternityPoints = player.eternityPoints.minus(buy.cost);
        player.timestudy.epcost = player.timestudy.epcost.times(Decimal.pow(2, buy.amount));
        player.timestudy.theorem += buy.amount;
        updateTheoremButtons()
        updateTimeStudyButtons()
        return true;
    } else {
        return false;
    }
}

function getTotalTT () {
  return Math.round(player.timestudy.amcost.log(10) / 20000 + player.timestudy.ipcost.log(10) / 100 + player.timestudy.epcost.log(2) - 1);
}

let nextStudiesAt = [60, 1000, 100000];

let studyRowLevels = {1: 0, 2: 0, 3: 1, 4: 2, 5: 3}

function updateTheoremButtons() {
    document.getElementById("theoremam").className = player.money.gte(player.timestudy.amcost) ? "timetheorembtn" : "timetheorembtnlocked"
    document.getElementById("theoremip").className = player.infinityPoints.gte(player.timestudy.ipcost) ? "timetheorembtn" : "timetheorembtnlocked"
    document.getElementById("theoremep").className = player.eternityPoints.gte(player.timestudy.epcost) ? "timetheorembtn" : "timetheorembtnlocked"
    document.getElementById("theoremammax").className = player.money.gte(player.timestudy.amcost) ? "timetheorembtn" : "timetheorembtnlocked"
    document.getElementById("theoremipmax").className = player.infinityPoints.gte(player.timestudy.ipcost) ? "timetheorembtn" : "timetheorembtnlocked"
    document.getElementById("theoremepmax").className = player.eternityPoints.gte(player.timestudy.epcost) ? "timetheorembtn" : "timetheorembtnlocked"
    document.getElementById("theoremep").innerHTML = "Buy Time Theorems <br>Cost: "+shortenDimensions(player.timestudy.epcost)+" EP"
    document.getElementById("theoremip").innerHTML = "Buy Time Theorems <br>Cost: "+shortenCosts(player.timestudy.ipcost)+" IP"
    document.getElementById("theoremam").innerHTML = "Buy Time Theorems <br>Cost: "+shortenCosts(player.timestudy.amcost)
    document.getElementById("timetheorems").innerHTML = "You have <span style='display:inline' class=\"TheoremAmount\">"+player.timestudy.theorem+"</span> unspent Time "+ (player.timestudy.theorem === 1 ? "Theorem." : "Theorems.")
    document.getElementById("totaltimetheorems").innerHTML = "You have <span style='display:inline' class=\"TheoremAmount\">"+getTotalTT()+"</span> total Time "+ (getTotalTT() === 1 ? "Theorem." : "Theorems.")
    if (nextStudiesAt[player.timestudy.studyGroupsUnlocked] === undefined) {
        document.getElementById("nextstudy").innerHTML = "You've unlocked all the time studies.";
    }
    else {
        document.getElementById("nextstudy").innerHTML = "Next time studies unlock at " + nextStudiesAt[player.timestudy.studyGroupsUnlocked] + " total Time Theorems.";
        if (getTotalTT() >= nextStudiesAt[player.timestudy.studyGroupsUnlocked]) {
            player.timestudy.studyGroupsUnlocked += 1
            if (player.timestudy.studyGroupsUnlocked === 4) {
                giveAchievement('Now actually go study')
            }
        }
    }
}

function buyTimeStudy(num) {
  if (player.timestudy.theorem >= 1 + player.timestudy.studies[num] && studyHasBeenUnlocked(num)) {
      player.timestudy.studies[num] += 1;
      player.timestudy.theorem -= player.timestudy.studies[num];
      updateTheoremButtons()
      updateTimeStudyButtons()
      return true;
  } else {
      return false;
  }
}

function buyManyTimeStudy(num, x) {
  if (studyHasBeenUnlocked(num)) {
      let toBuy = arithmeticSequencePurchases(1, player.timestudy.studies[x] + 1, player.timestudy.theorem);
      player.timestudy.studies[num] += toBuy.amount;
      player.timestudy.theorem -= toBuy.cost;
      updateTheoremButtons()
      updateTimeStudyButtons()
      return true;
  } else {
      return false;
  }
}

function exportSpec() {
  let l = [];
  for (let i = 1; i <= numTimeStudies; i++) {
    if (studyHasBeenUnlocked(i)) {
      l.push(player.timestudy.studies[i]);
    }
  }
  let s = l.join('/');
  copyToClipboard(s);
}

function importSpec () {
  let s = prompt('Enter your spec');
  let l = s.split('/');
  for (let i = 1; i <= l.length; i++) {
    let amount = +l[i - 1];
    buyManyTimeStudy(i, amount);
  }
}

function respecTimeStudies() {
  // Respec can be done after challenge unlock, I don't care.
  for (let i = 0; i < player.timestudy.studies.length; i++) {
    let bought = player.timestudy.studies[i];
    if (bought !== null) {
      player.timestudy.theorem += (bought * (bought + 1)) / 2;
      player.timestudy.studies[i] = 0;
    }
  }
  updateTheoremButtons();
  updateTimeStudyButtons();
}

function lockEternityChallenge () {
  let ecUnlocked = player.eternityChallenges.unlocked
  if (ecUnlocked && !player.eternityChallenges.current) {
    player.timestudy.theorem += ecTTCosts[ecUnlocked];
    player.eternityChallenges.unlocked = null;
    updateECDisplay(ecUnlocked);
  }
  updateTheoremButtons();
  updateTimeStudyButtons();
}

// Galactic studies. Wow there's a lot of stuff.

let galacticStudyTableSize = 4;

function getGalacticStudyCost (i) {
  let ret = 1;
  for (let j = 1; j <= galacticStudyTableSize; j++) {
    ret += player.extragalactic.galacticstudy.studies[j + i[1]];
    ret += player.extragalactic.galacticstudy.studies[i[0] + j];
  }
  return ret;
}

// They should never disappear. Galactic studies tab should be like time studies tab.
function updateGalacticStudyButtons () {
  for (let i in player.extragalactic.galacticstudy.studies) {
    let t = document.getElementById('gs' + i);
    if (player.extragalactic.galacticstudy.theorems >= getGalacticStudyCost(i) && studyHasBeenUnlocked(i)) {
      t.className = "eternityttbtn"
    } else {
      t.className = "eternityttbtnlocked"
    }
    let bought = document.getElementById('ts' + i + 'bought');
    bought.innerHTML = player.timestudy.studies[i];
    let cost = document.getElementById('ts' + i + 'cost');
    cost.innerHTML = player.timestudy.studies[i] + 1;
  }
}

function getBuyableGalacticStudies () {
    // Is this a hack? Maybe sort of?
    return Math.max(0, getRegularGalaxiesNumber() - player.extragalactic.antigalaxies);
}

function galacticTheoremsPerAntigalaxy () {
    return player.extragalactic.galacticstudy.upgrades[1];
}

function buyOneGalacticStudy () {
  if (getBuyableGalacticStudies() >= 1) {
    player.extragalactic.antigalaxies += 1;
    player.extragalactic.galacticstudy.theorems += galacticTheoremsPerAntigalaxy();
  }
}

function setAntigalaxyBulk () {
    var bulk = document.getElementById("bulkantigalaxies").value
    bulk = parseInt(bulk);
    if (isNaN(bulk) || bulk < 1) {
        bulk = 1;
    }
    player.extragalactic.galacticstudy.bulk = bulk;
}

function updateAntigalaxyBulk () {
    document.getElementById("bulkantigalaxies").value = player.extragalactic.galacticstudy.bulk;
}

function buyChosenGalacticStudies () {
  let b = player.extragalactic.galacticstudy.bulk;
  if (getBuyableGalacticStudies() >= b) {
    player.extragalactic.antigalaxies += b;
    player.extragalactic.galacticstudy.theorems += b * galacticTheoremsPerAntigalaxy();
  }
}

function buyMaxGalacticStudies () {
  let g = getBuyableGalacticStudies();
  player.extragalactic.antigalaxies += g;
  player.extragalactic.galacticstudy.theorems += g * galacticTheoremsPerAntigalaxy();
}

function updateGalacticTheoremButtons() {
    let b = player.extragalactic.galacticstudy.bulk;
    let g = getBuyableGalacticStudies();
    let per = galacticTheoremsPerAntigalaxy();
    document.getElementById("gtheoremone").className = (g >= 1) ? "galactictheorembtn" : "galactictheorembtnlocked"
    document.getElementById("gtheoremchosen").className = (g >= b) ? "galactictheorembtn" : "galactictheorembtnlocked"
    document.getElementById("gtheoremmax").className = (g >= 1) ? "galactictheorembtn" : "galactictheorembtnlocked"
    document.getElementById("gtheoremone").innerHTML = 'Get 1 antigalaxy and ' + per + ' Galactic Theorem' + ((per === 1) ? '' : 's') + '.';
    document.getElementById("gtheoremchosen").innerHTML = 'Get ' + b + ' antigalax' + ((b === 1) ? 'y' : 'ies') + ' and ' + (b * per) + ' Galactic Theorem' + ((b * per === 1) ? '' : 's') + '.';
    document.getElementById("gtheoremmax").innerHTML = 'Get ' + g + ' antigalax' + ((g === 1) ? 'y' : 'ies') + ' and ' + (g * per) + ' Galactic Theorem' + ((g * per === 1) ? '' : 's') + '.';
    document.getElementById("antigalaxies").innerHTML = "You have <span style='display:inline' class=\"AntigalaxyAmount\">"+player.extragalactic.antigalaxy+"</span> "+ (player.extragalactic.galacticstudy.antigalaxy === 1 ? "antigalaxy." : "antigalaxies.");
    document.getElementById("galactictheorems").innerHTML = "You have <span style='display:inline' class=\"GalacticTheoremAmount\">"+player.extragalactic.galacticstudy.theorem+"</span> unspent Galactic "+ (player.extragalactic.galacticstudy.theorem === 1 ? "Theorem." : "Theorems.");
}

function buyOneGalacticStudy (id) {
    let cost = getGalacticStudyCost(id);
    if (player.extragalactic.galacticstudy.theorems >= cost) {
        player.extragalactic.galacticstudy.studies[id] += 1;
        player.extragalactic.galacticstudy.theorems -= cost;
        updateGalacticTheoremButtons()
        updateGalacticStudyButtons()
        return true;
    } else {
        return false;
    }
}

function arithmeticSequencePurchases (increase, costPer, remainingResource, minimumPurchases, maximumPurchases) {
    // increase * x * (x - 1) / 2 + cost * x - resource = 0
    // increase / 2 * x ** 2 + (cost - increase / 2) * x - remainingResource = 0
    if (minimumPurchases === undefined) {
        minimumPurchases = 0;
    }
    if (maximumPurchases === undefined) {
        maximumPurchases = Infinity;
    }
    let a = increase / 2;
    let b = costPer - increase / 2;
    // c has the opposite sign as usual.
    let c = remainingResource;
    let amount = Math.min(maximumPurchases, Math.max(minimumPurchases, Math.floor((-b + Math.sqrt(Math.pow(b, 2) + 4 * a * c)) / (2 * a))));
    let cost = increase * amount * (amount - 1) / 2 + costPer * amount;
    return {
        'amount': amount,
        'cost': cost
    }
}

function buyManyGalacticStudy (id, x) {
    let toBuy = arithmeticSequencePurchases(2, getGalacticStudyCost(id), player.extragalactic.galacticstudy.theorems);
    player.extragalactic.galacticstudy.studies[id] += toBuy.amount;
    player.extragalactic.galacticstudy.theorems -= toBuy.cost;
    updateGalacticTheoremButtons()
    updateGalacticStudyButtons()
    return newAmount > 0;
}

function exportGalacticSpec() {
  let l = [];
  for (let i = 1; i <= numTimeStudies; i++) {
    if (studyHasBeenUnlocked(i)) {
      l.push(player.timestudy.studies[i]);
    }
  }
  let s = l.join('/');
  copyToClipboard(s);
}

function importGalacticSpec () {
  let s = prompt('Enter your spec:');
  let l = s.split('/');
  for (let i = 0; i < l.length; i++) {
    let amount = +l[i];
    let id = (Math.floor(i / 4) + 1).toString() + (i % 4).toString();
    buyManyGalacticStudy(id, amount);
  }
}

function respecGalacticStudies() {
  eternity(true, false);
  resetGalacticDimensions();
  player.extragalactic.antigalaxies = 0;
  player.extragalactic.galacticstudy.theorems = 0;
  player.extragalactic.galacticstudy.studies = {
    '11': 0, '21': 0, '31': 0, '41': 0,
    '12': 0, '22': 0, '32': 0, '42': 0,
    '13': 0, '23': 0, '33': 0, '43': 0,
    '14': 0, '24': 0, '34': 0, '44': 0
  };
  updateGalacticTheoremButtons();
  updateGalacticTimeStudyButtons();
}

// galactic studies can't be too strong: towards the end, maybe
// 1 purchase = 5 galaxies. This means that about 1.2x multiplier on GD
// is reasonable, maybe a little more. We can get this by taking the tenth
// root of the log.
// Non-GD might be too strong, let's see what the testers think.

let firstGSBenefits = [
  function (x) {
    return x.pow(2000);
  },
  function (x) {
    return x.pow(40);
  },
  function (x) {
    return x.pow(4);
  },
  function (x) {
    return new Decimal(x.log(2).plus(1)).pow(.1);
  }
]

let secondGSBenefits = [
  function () {
    let x = player.extragalactic.points;
    return x.plus(1);
  },
  function () {
    let x = player.extragalactic.extragalaxies;
    return Decimal.pow(x + 1, Math.log2(x + 1) / 4);
  },
  function () {
    let x = player.extragalactic.galacticPower;
    return x.plus(1).pow(.2);
  },
  function () {
    let x = player.extragalactic.galacticstudy.theorems;
    return Decimal.pow(x + 1, Math.cbrt(x + 1))
  }
];

function getGSBenefit (id, num) {
    // string autoconverts to number under subtraction
    return firstGSBenefits[id[0] - 1](secondGSBenefits[id[1] - 1]()).pow(num).pow(1 + player.extragalactic.galacticstudy.upgrades[0] * 0.5);
}

function getGalacticStudyMultiplierTo(dimtype) {
    let mult = new Decimal(1);
    for (let j = 1; j <= 4; j++) {
        let id = dimtype.toString() + j.toString();
        mult = mult.times(getGSBenefit(id, player.extragalactic.galacticstudy.studies[id]));
    }
    return mult;
}

function whatGS (id) {
  let dimType = ['normal', 'infinity', 'time', 'galactic'][id[0] - 1];
  let basedOn = ['extragalactic points', 'times gone extragalactic', 'galactic power', 'unspent galactic theorems'][id[1] - 1];
  return 'Boost all ' + dimType + ' dimensions based on ' + basedOn;
}

function updateGSDescs () {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      let id = i.toString() + j.toString();
      let oldBenefit = getTSBenefit(id, player.extragalactic.galacticstudy.studies[id]);
      let newBenefit = getTSBenefit(id, player.extragalactic.galacticstudy.studies[id] + 1);
      document.getElementById('gs' + id + 'desc').innerHTML = whatGS(id) + ':<br/>' + smartShortenMoney(oldBenefit) + 'x -> ' + smartShortenMoney(newBenefit) + 'x';
    }
  }
}

function buyGalacticTheoremUpgrade (id) {
    if (player.extragalactic.extragalacticPoints.gte(player.extragalactic.galacticstudy.upgradeCosts[id])) {
        player.extragalactic.extragalacticPoints = player.extragalactic.extragalacticPoints.minus(player.extragalactic.galacticstudy.upgradeCosts[id]);
        player.extragalactic.galacticstudy.upgradeCosts[id] = player.extragalactic.galacticstudy.upgradeCosts[id].times(player.extragalactic.galacticstudy.upgradeCostMults[id])
    }
}

// Soft reset (or dimboost).

function getDimensionBoostPower(num) {
    if (num === undefined) {
        num = player.timestudy.studies[4];
    }
    if (player.currentChallenge == "challenge11" || player.currentChallenge == "postc1") return 1;

    var ret = 2
    if (player.infinityUpgrades.includes("resetMult")) ret = 2.5
    if (player.challenges.includes("postc7")) ret = 4
    if (player.currentChallenge == "postc7") ret = 10

    // Be nice to the player; multiply before adding rather than vice versa.

    ret += num;

    /*
    // EC11 reward handled
    ret = Math.pow(ret, ecNumReward(11));
    */

    return ret
}

function hideLowDims () {
  document.getElementById("secondRow").style.display = "none";
  document.getElementById("thirdRow").style.display = "none";
  document.getElementById("tickSpeed").style.visibility = "hidden";
  document.getElementById("tickSpeedMax").style.visibility = "hidden";
  document.getElementById("tickLabel").style.visibility = "hidden";
  document.getElementById("tickSpeedAmount").style.visibility = "hidden";
  document.getElementById("fourthRow").style.display = "none";
}

function hideHighDims () {
  document.getElementById("fifthRow").style.display = "none";
  document.getElementById("sixthRow").style.display = "none";
  document.getElementById("seventhRow").style.display = "none";
  document.getElementById("eightRow").style.display = "none";
}

function hideDims () {
  hideLowDims();
  hideHighDims();
}



function softReset(bulk, reallyZero) {
    if (bulk < 1 && !reallyZero) bulk = 1
    player.resets += bulk;
    if (bulk >= 750) giveAchievement("Costco sells Dimboosts now");
    player = {
        money: player.achievements.includes("r111") ? player.money : new Decimal(10),
        tickSpeedCost: new Decimal(1000),
        tickspeed: new Decimal(1000),
        firstCost: new Decimal(10),
        secondCost: new Decimal(100),
        thirdCost: new Decimal(10000),
        fourthCost: new Decimal(1000000),
        fifthCost: new Decimal(1e9),
        sixthCost: new Decimal(1e13),
        seventhCost: new Decimal(1e18),
        eightCost: new Decimal(1e24),
        firstAmount: new Decimal(0),
        secondAmount: new Decimal(0),
        thirdAmount: new Decimal(0),
        fourthAmount: new Decimal(0),
        firstBought: 0,
        secondBought: 0,
        thirdBought: 0,
        fourthBought: 0,
        fifthAmount: new Decimal(0),
        sixthAmount: new Decimal(0),
        seventhAmount: new Decimal(0),
        eightAmount: new Decimal(0),
        fifthBought: 0,
        sixthBought: 0,
        seventhBought: 0,
        eightBought: 0,
        sacrificed: new Decimal(0),
        boughtDims: player.boughtDims,
        achievements: player.achievements,
        challenges: player.challenges,
        currentChallenge: player.currentChallenge,
        infinityUpgrades: player.infinityUpgrades,
        infinityPoints: player.infinityPoints,
        infinitied: player.infinitied,
        bankedInfinities: player.bankedInfinities,
        bankedEternities: player.bankedEternities,
        totalTimePlayed: player.totalTimePlayed,
        bestInfinityTime: player.bestInfinityTime,
        thisInfinityTime: player.thisInfinityTime,
        firstPow: getDimensionBoostMultiplierOn(1),
        secondPow: getDimensionBoostMultiplierOn(2),
        thirdPow: getDimensionBoostMultiplierOn(3),
        fourthPow: getDimensionBoostMultiplierOn(4),
        fifthPow: getDimensionBoostMultiplierOn(5),
        sixthPow: getDimensionBoostMultiplierOn(6),
        seventhPow: getDimensionBoostMultiplierOn(7),
        eightPow: getDimensionBoostMultiplierOn(8),
        resets: player.resets,
        galaxies: player.galaxies,
        tickDecrease: player.tickDecrease,
        totalmoney: player.totalmoney,
        interval: null,
        lastUpdate: player.lastUpdate,
        achPow: player.achPow,
	      newsArray: player.newsArray,
        autobuyers: player.autobuyers,
        costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
        tickspeedMultiplier: new Decimal(10),
        chall2Pow: player.chall2Pow,
        chall3Pow: new Decimal(0.01),
        matter: new Decimal(0),
        chall11Pow: new Decimal(1),
        partInfinityPoint: player.partInfinityPoint,
        partInfinitied: player.partInfinitied,
        break: player.break,
        challengeTimes: player.challengeTimes,
        infchallengeTimes: player.infchallengeTimes,
        lastTenRuns: player.lastTenRuns,
        lastTenEternities: player.lastTenEternities,
        lastTenExtragalaxies: player.lastTenExtragalaxies,
        infMult: player.infMult,
        infMultCost: player.infMultCost,
        tickSpeedMultDecrease: player.tickSpeedMultDecrease,
        tickSpeedMultDecreaseCost: player.tickSpeedMultDecreaseCost,
        dimensionMultDecrease: player.dimensionMultDecrease,
        dimensionMultDecreaseCost: player.dimensionMultDecreaseCost,
        version: player.version,
        overXGalaxies: player.overXGalaxies,
        infDimensionsUnlocked: player.infDimensionsUnlocked,
        infinityPower: player.infinityPower,
        spreadingCancer: player.spreadingCancer,
        postChallUnlocked: player.postChallUnlocked,
        postC4Tier: 1,
        postC3Reward: new Decimal(1),
        infinityDimension1: player.infinityDimension1,
        infinityDimension2: player.infinityDimension2,
        infinityDimension3: player.infinityDimension3,
        infinityDimension4: player.infinityDimension4,
        infinityDimension5: player.infinityDimension5,
        infinityDimension6: player.infinityDimension6,
        infinityDimension7: player.infinityDimension7,
        infinityDimension8: player.infinityDimension8,
        infDimBuyers: player.infDimBuyers,
        timeShards: player.timeShards,
        eternityChallenges: player.eternityChallenges,
        tickThreshold: player.tickThreshold,
        timeDimension1: player.timeDimension1,
        timeDimension2: player.timeDimension2,
        timeDimension3: player.timeDimension3,
        timeDimension4: player.timeDimension4,
        timeDimBuyers: player.timeDimBuyers,
        eternityPoints: player.eternityPoints,
        eternities: player.eternities,
        thisEternity: player.thisEternity,
        bestEternity: player.bestEternity,
        eternityUpgrades: player.eternityUpgrades,
        epmult: player.epmult,
        epmultCost: player.epmultCost,
        totalTickGained: player.totalTickGained,
        offlineProd: player.offlineProd,
        offlineProdCost: player.offlineProdCost,
        challengeTarget: player.challengeTarget,
        autoSacrifice: player.autoSacrifice,
        replicanti: player.replicanti,
        timestudy: player.timestudy,
        autoIP: player.autoIP,
        autoTime: player.autoTime,
        infMultBuyer: player.infMultBuyer,
        eterMultBuyer: player.eterMultBuyer,
        autoCrunchMode: player.autoCrunchMode,
        autoEterMode: player.autoEterMode,
        respec: player.respec,
        eternityBuyer: player.eternityBuyer,
        extragalactic: player.extragalactic,
        peaks: player.peaks,
        options: player.options
    };
    if (player.currentChallenge === "challenge10" || player.currentChallenge == "postc1") {
      chall10AlterCosts();
    }
    giveInfPurchaseResets();
	  if (player.currentChallenge == "postc2") {
        player.eightAmount = new Decimal(1);
        player.eightBought = 1;
    }


    if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r66")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r83")) player.tickspeed = player.tickspeed.times(Decimal.pow(0.95, player.galaxies));






    clearInterval(player.interval);
    //updateInterval();
    if (player.eternities < 30) {
      hideDims();
    }

    giveBoostFromTDTickSpeedUpgrades(player.totalTickGained)
    updateTickSpeed();
    updateInitialMoney();

    if (player.resets >= 10) {
        giveAchievement("Boosting to the max");
    }
}

function updateInitialMoney () {
  if (player.achievements.includes("r21")) player.money = player.money.max(100);
  if (player.achievements.includes("r37")) player.money = player.money.max(1000);
  if (player.achievements.includes("r54")) player.money = player.money.max(2e5);
  if (player.achievements.includes("r55")) player.money = player.money.max(1e10);
  if (player.achievements.includes("r78")) player.money = player.money.max(1e25);
}

MoneyFormat = ['K', 'M', 'B', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QdDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QdVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QdTg', 'QtTg', 'SxTg', 'SpTg', 'OTg', 'NTg', 'Qa', 'UQa', 'DQa', 'TQa', 'QdQa', 'QtQa', 'SxQa', 'SpQa', 'OQa', 'NQa', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QdOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QdNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn', 'Ce', 'UCe'];
MoneyFormat.reverse();

shorten = function (money) {
    return formatValue(player.options.notation, money, 2, 2);
};

shortenCosts = function (money) {
    return formatValue(player.options.notation, money, 0, 0);
};

shortenDimensions = function (money) {
    return formatValue(player.options.notation, money, 2, 0);
};

shortenMoney = function (money) {
    return formatValue(player.options.notation, money, 2, 1);
};

function canBuyTickSpeed() {
    return canBuyDimension(3);
}

function getGalaxyMultiplier () {
  let galaxy = 1;
  if (player.infinityUpgrades.includes("galaxyBoost")) galaxy *= 2;
  if (player.infinityUpgrades.includes("postGalaxy")) galaxy *= 1.5;
  if (player.challenges.includes("postc5")) galaxy *= 1.1;
  if (player.achievements.includes("r86")) galaxy *= 1.01;
  if (player.achievements.includes("r136")) galaxy *= 1.001;
  return galaxy;
}

function getReplicantiGalaxyPower (limit) {
  return Math.log2(limit.log(2)) / 10;
}

function getNormalGalaxyMultiplier () {
  if (player.achievements.includes('r132')) {
      return 1.002;
  } else {
      return 1;
  }
}

function postExtragalacticNerf (ret) {
    let exp = Math.min(1, Math.max(0.9, 26 / 25 + ret.log(Number.MAX_VALUE) / 25));
    return ret.pow(exp);
}

function extraTickSpeedMultiplier() {
    return ecNumReward(5);
}

function getRegularGalaxiesNumber() {
    return player.galaxies + player.replicanti.galaxies + player.extragalactic.galaxies;
}

function getTickSpeedMultiplier() {
    if (player.currentChallenge == "postc3") return new Decimal(1);
    let totalGalaxies = (player.galaxies * getNormalGalaxyMultiplier() + player.replicanti.galaxies * getReplicantiGalaxyPower(player.replicanti.limit) + player.extragalactic.galaxies - player.extragalactic.antigalaxies) * getGalaxyMultiplier();
    let baseMultiplier = 0.9;
    // Be nice: give the extra 1% as long as the number of galaxies is at most 0.
    if (totalGalaxies <= 0) baseMultiplier = 0.89;
    // So 7% with 0 galaxies, 10% with 1 galaxy, 14% with two galaxies. That seems right.
    if (player.currentChallenge == "challenge6" || player.currentChallenge == "postc1") baseMultiplier += 0.04;
    let linearGalaxies = Math.min(totalGalaxies, 5);
    baseMultiplier -= linearGalaxies * 0.02;
    totalGalaxies -= linearGalaxies;
    let ret = Decimal.pow(0.965, totalGalaxies).times(baseMultiplier);
    // EC5 reward handled
    ret = ret.div(extraTickSpeedMultiplier());
    ret = postExtragalacticNerf(ret);
    return ret;
}

function getPostC3Multiplier () {
  let ret = 1.05+(player.galaxies*0.005);
  if (player.achievements.includes('r138')) {
    ret *= 1.1;
  }
  return ret;
}

function getPostC3Multiplier () {
  if (!player.challenges.includes("postc3") && player.currentChallenge !== "postc3") return 1;
  let ret = 1.05+(player.galaxies*0.005);
  if (player.achievements.includes('r138')) {
    ret *= 1.1;
  }
  return ret;
}

function giveBoostFromTickSpeedUpgrades (n) {
  player.tickspeed = player.tickspeed.times(Decimal.pow(getTickSpeedMultiplier(), n));
  player.postC3Reward = player.postC3Reward.times(Decimal.pow(getPostC3Multiplier(), n));
}

function buyTickSpeed() {
    if (!canBuyTickSpeed()) {
        return false;
    }

    if (!canAfford(player.tickSpeedCost)) {
        return false;
    }

    player.money = player.money.minus(player.tickSpeedCost);
    if (player.currentChallenge != "challenge5" && player.currentChallenge != "postc5") player.tickSpeedCost = player.tickSpeedCost.times(player.tickspeedMultiplier);
    else multiplySameCosts(player.tickSpeedCost)
    if (player.tickSpeedCost.gte(Number.MAX_VALUE)) player.tickspeedMultiplier = player.tickspeedMultiplier.times(player.tickSpeedMultDecrease);
    if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") player.chall2Pow = 0
    giveBoostFromTickSpeedUpgrades(1);
    postc8Mult = new Decimal(1)
    return true;
}

document.getElementById("tickSpeed").onclick = function () {
    buyTickSpeed();

    updateTickSpeed();
};

function timeDisplay(time) {
    if (time <= 100) return (time/10).toFixed(2) + " seconds"
    time = Decimal.floor(time / 10)



    if (time >= 31536000) {
        return Decimal.floor(time / 31536000) + " years, " + Decimal.floor((time % 31536000) / 86400) + " days, " + Decimal.floor((time % 86400) / 3600) + " hours, " + Decimal.floor((time % 3600) / 60) + " minutes and " + Decimal.floor(time % 60) + " seconds"
    } else if (time >= 86400) {
        return Decimal.floor(time / 86400) + " days, " + Decimal.floor((time % 86400) / 3600) + " hours, " + Decimal.floor((time % 3600) / 60) + " minutes and " + Decimal.floor(time % 60) + " seconds"
    } else if (time >= 3600) {
        return Decimal.floor(time / 3600) + " hours, " + Decimal.floor((time % 3600) / 60) + " minutes and " + Decimal.floor(time % 60) + " seconds"
    } else if (time >= 60) {
        return Decimal.floor(time / 60) + " minutes and " + Decimal.floor(time % 60) + " seconds"
    } else return Decimal.floor(time % 60) + " seconds"
}

function preformat(int) {
    if (int.toString().length == 1) return "0"+int
    else return int
}

function timeDisplayShort(time) {
    if (time <= 600) return (time/10).toFixed(2) + " seconds"
    time = Decimal.floor(time / 10)
    return preformat(Decimal.floor((time) / 3600)) + ":" + preformat(Decimal.floor((time % 3600) / 60)) + ":" + preformat(Decimal.floor(time % 60))
}

const allAchievements = {
  r11 : "You gotta start somewhere",
  r12 : "100 antimatter is a lot",
  r13 : "Half life 3 confirmed",
  r14 : "L4D: Left 4 Dimensions",
  r15 : "5 Dimension Antimatter Punch",
  r16 : "We couldn't afford 9",
  r17 : "Not a luck related achievement",
  r18 : "90 degrees to infinity",
  r21 : "To infinity!",
  r22 : "Fake News",
  r23 : "The 9th Dimension is a lie",
  r24 : "Antimatter Apocalypse",
  r25 : "Boosting to the max",
  r26 : "You got past The Big Wall",
  r27 : "Double Galaxy",
  r28 : "There's no point in doing that",
  r31 : "I forgot to nerf that",
  r32 : "The Gods are pleased",
  r33 : "That's a lot of infinites",
  r34 : "You didn't need it anyway",
  r35 : "Don't you dare sleep",
  r36 : "Claustrophobic",
  r37 : "That's fast!",
  r38 : "I don't believe in Gods",
  r41 : "Spreading Cancer",
  r42 : "Supersanic",
  r43 : "Zero Deaths",
  r44 : "Over in 30 seconds",
  r45 : "Faster than a potato",
  r46 : "Multidimensional",
  r47 : "Daredevil",
  r48 : "AntiChallenged",
  r51 : "Limit Break",
  r52 : "Age of Automation",
  r53 : "Definitely not worth it",
  r54 : "That's faster!",
  r55 : "Forever isn't that long",
  r56 : "Many Deaths",
  r57 : "Gift from the Gods",
  r58 : "Is this hell?",
  r61 : "Bulked up",
  r62 : "Oh hey, you're still here",
  r63 : "A new beginning.",
  r64 : "1 million is a lot",
  r65 : "Not-so-challenging",
  r66 : "Faster than a squared potato",
  r67 : "Infinitely Challenging",
  r68 : "You did this again just for the achievement right?",
  r71 : "ERROR 909: Dimension not found",
  r72 : "Can't hold all these infinities",
  r73 : "This achievement doesn't exist",
  r74 : "End me",
  r75 : "NEW DIMENSIONS???",
  r76 : "One for each dimension",
  r77 : "How the antitables have turned",
  r78 : "Blink of an eye",
  r81 : "Hevipelle did nothing wrong",
  r82 : "Anti-antichallenged",
  r83 : "YOU CAN GET 50 GALAXIES!??",
  r84 : "I got a few to spare",
  r85 : "All your IP are belong to us",
  r86 : "Do you even bend time bro?",
  r87 : "2 Million Infinities",
  r88 : "Yet another infinity reference",
  r91 : "Ludicrous Speed",
  r92 : "I brake for nobody",
  r93 : "MAXIMUM OVERDRIVE",
  r94 : "4.33 minutes of Infinity",
  r95 : "Is this safe?",
  r96 : "Time is relative",
  r97 : "Yes. This is hell.",
  r98 : "0 degrees from infinity",
  r101 : "Costco sells dimboosts now",
  r102 : "This mile took an eternity",
  r103 : "This achievement doesn't exist II",
  r104 : "That wasn't an eternity",
  r105 : "8 nobody got time for that",
  r106 : "The swarm",
  r107 : "1e(1 million) is a lot",
  r108 : "We could afford 9",
  r111 : "Yo dawg, I heard you liked infinities...",
  r112 : "Infinite time",
  r113 : "Do you really need a guide for this?",
  r114 : "You're a mistake",
  r115 : "I wish I had gotten 7 eternities",
  r116 : "Do I really need to infinity?",
  r117 : "I thought it would be harder...",
  r118 : "IT'S OVER 9000",
  r121 : "Can you get infinite IP?",
  r122 : "You're already dead.",
  r123 : "Now actually go study",
  r124 : "Eternities are the new infinity",
  r125 : "Like feasting on a behind",
  r126 : "Popular music",
  r127 : "But I wanted another prestige layer...",
  r128 : "What do I have to do to get rid of you",
  r131 : "I decided to grind",
  r132 : "Unique snowflakes",
  r133 : "I never liked this infinity stuff anyway",
  r134 : "Definitely not safe",
  r135 : "The void",
  r136 : "Universal harmony",
  r137 : "24 dimensions and none of them ninth...",
  r138 : "This is what I have to do to get rid of you."
};
// to retrieve by value: Object.keys(allAchievements).find(key => allAchievements[key] === "L4D: Left 4 Dimensions");

function clearOldAchieves(){
  console.log("clearOldAchieves running")
    var toRemove = [];
    var achieveKey;
    for (var i = 0; i < player.achievements.length; i++) {
      if (Object.values(allAchievements).indexOf(player.achievements[i]) !== -1 ) {  // does index[i] exist in allAchievements as a value?
        console.log("removing index: " +i+ ", value: " + player.achievements[i] )
        toRemove.push(i); // mark it for removal
        achieveKey = Object.keys(allAchievements).find(function(key){ return allAchievements[key] === player.achievements[i];});
        console.log("achievekey: "+ achieveKey);
        console.log("achievekey exists: " + player.achievements.includes(achieveKey));
        if (!player.achievements.includes(achieveKey)) { // check if new key already exists as well
            player.achievements.push(achieveKey); // if not... add it
        }
      } else if (allAchievements[player.achievements[i]] === undefined){
        toRemove.push(i);
      }
    }


    toRemove.reverse();
    for (var i = 0; i < toRemove.length; i++) {
      player.achievements.splice(toRemove[i], 1);
    }




}

function setReplicantiNewGalaxyStrength () {
  let galPower = +document.getElementById('galStrength').value;
  if (galPower >= 0) {
    player.replicanti.newLimit = Decimal.pow(2, Math.pow(2, galPower * 10));
    document.getElementById('replLimit').value = player.replicanti.newLimit.toExponential(3);
  }
}

function setReplicantiNewLimit () {
  let newLimit = new Decimal(document.getElementById('replLimit').value);
  if (newLimit.gte(2)) {
    player.replicanti.newLimit = new Decimal(document.getElementById('replLimit').value);
    document.getElementById('galStrength').value = getReplicantiGalaxyPower(player.replicanti.newLimit).toFixed(3);
  }
}

function updateReplicantiGalaxyPowerControl () {
  document.getElementById('replLimit').value = player.replicanti.newLimit.toExponential(3);
  document.getElementById('galStrength').value = getReplicantiGalaxyPower(player.replicanti.newLimit).toFixed(3);
}

function giveAchievement(name) {

    if (player.achievements.includes(name)){ clearOldAchieves(); }

    if (player.achievements.includes(Object.keys(allAchievements).find(function(key){ return allAchievements[key] === name;}))) {
        return
    }

    $.notify(name, "success");
    player.achievements.push((Object.keys(allAchievements).find(key => allAchievements[key] === name)));
    document.getElementById(name).className = "achievementunlocked"
    if (name === "All your IP are belong to us" || name === "MAXIMUM OVERDRIVE") {
        player.autoIP = player.autoIP.times(4);
        if (player.autoCrunchMode == "amount" && player.autobuyers[11].priority !== undefined) player.autobuyers[11].priority = player.autobuyers[11].priority.times(4);
    }
    if (name === "The swarm") {
        player.replicanti.galaxyPowerUnl = true;
        document.getElementById("replicantigalaxypowerdiv").style.display = "inline-block";
    }
    if (name === "I decided to grind") {
        document.getElementById("eterrow3").style.display = "";
    }
    updateAchPow();
}

var TIER_NAMES = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];
var DISPLAY_NAMES = [ null, "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth" ];

function canAfford(cost) {
    return ((cost.lt(new Decimal("1.79e308")) && !player.break) || player.break) && cost.lte(player.money);
}



function multiplySameCosts(cost) {
    var tiers = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];
    var tierCosts = [ null, new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15) ];

    for (let i = 1; i <= 8; ++i) {
        if (player[tiers[i] + "Cost"].e == cost.e) player[tiers[i] + "Cost"] = player[tiers[i] + "Cost"].times(tierCosts[i])

    }
    if (player.tickSpeedCost.e == cost.e) player.tickSpeedCost = player.tickSpeedCost.times(player.tickspeedMultiplier)
    }


function multiplyPC5Costs(cost, tier) {
    var tiers = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];

    if (tier < 5) {
        for (var i = 1; i<9; i++) {
            if (player[tiers[i] + "Cost"].e <= cost.e) {
                player[tiers[i] + "Cost"] = player[tiers[i] + "Cost"].times(player.costMultipliers[i-1])
                if (player[tiers[i] + "Cost"].gte(Number.MAX_VALUE)) player.costMultipliers[i-1] = player.costMultipliers[i-1].times(10)
            }
        }
    } else {
        for (var i = 1; i<9; i++) {
            if (player[tiers[i] + "Cost"].e >= cost.e) {
                player[tiers[i] + "Cost"] = player[tiers[i] + "Cost"].times(player.costMultipliers[i-1])
               if (player[tiers[i] + "Cost"].gte(Number.MAX_VALUE)) player.costMultipliers[i-1] = player.costMultipliers[i-1].times(10)
            }
        }
    }
}


function canBuyDimension(tier) {
    if (tier == 9 ) {
        if (player.secondAmount.equals(0)) {
          return false;
        } else {
          return true;
        }
    }

    if (!player.break && player.money.gt(Number.MAX_VALUE)) {
      return false;
    }
    if (tier > player.resets + 4) {
        return false;
    }

    if (tier > 1 && player[TIER_NAMES[tier - 1] + 'Amount'] == 0 && player.eternities < 30) {
        return false;
    }

    if (player.currentChallenge == "challenge4" || player.currentChallenge == "postc1") {
        if (tier == 7 || tier == 8) {
          return false;
        }
    }

    return true;
}

// This is for buying a dimension.
// tier is ignored
function getDimensionPowerMultiplier (tier) {
    let dimMult = 2;

    if (player.currentChallenge == "challenge9" || player.currentChallenge == "postc1") {
      dimMult = Math.pow(10/0.30,Math.random())*0.30;
    }

    // EC3 reward handled (made far stronger)
    dimMult *= getEC3RewardDimensionPowerMultiplier();

    if (player.infinityUpgrades.includes('dimMult')) dimMult *= 1.1;
    // Reward for "Is this hell?"
    if (player.achievements.includes("r58")) dimMult *= 1.01;

    return dimMult;
}


function clearDimensions(amount) {
	var tiers = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];

    for (i = 1; i <= amount; i++) {
        player[tiers[i] + "Amount"] = new Decimal(0)
    }
}


function getDimensionCostMultiplier(tier) {
    // For some unfathomable reason there was a special case for challenge 6 here,
    // but not for postc1. Challenge 6 is now handled just like postc1.
    return player.costMultipliers[tier - 1];
}

function onBuyDimension(tier) {
    if (player.achievements.length < 20) {
        switch (tier) {
            case 1: giveAchievement("You gotta start somewhere"); break;
            case 2: giveAchievement("100 antimatter is a lot"); break;
            case 3: giveAchievement("Half life 3 confirmed"); break;
            case 4: giveAchievement("L4D: Left 4 Dimensions"); break;
            case 5: giveAchievement("5 Dimension Antimatter Punch"); break;
            case 6: giveAchievement("We couldn't afford 9"); break;
            case 7: giveAchievement("Not a luck related achievement"); break;
            case 8: giveAchievement("90 degrees to infinity"); break;
        }
    }

    if (tier == 8 && player.eightAmount.mantissa.toFixed(1) == 9.9 && player.eightAmount.exponent == 1) {
        giveAchievement("The 9th Dimension is a lie");
    }

    player.postC4Tier = tier;
    postc8Mult = new Decimal(1)


    if (!player.boughtDims.includes(tier)) {
      player.boughtDims.push(tier);
    }
}

function buyOneDimension(tier) {
    var name = TIER_NAMES[tier];
    var cost = player[name + 'Cost'];
    auto = false;

    if (player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") {
        if (!canBuyDimension(tier)) {
            return false;
        }
    } else {
        if (tier >= 3) {
            if (player[TIER_NAMES[tier-2] + 'Amount'].lt(cost)) return false
        }
        else if (!canBuyDimension(tier)) {
            return false;
        } else if (tier < 3 && !canAfford(cost)){
            return false;
        }
    }



    if (player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") {
        if (!canAfford(cost)) {
            return false;
        }
    }


    if ((player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") || tier < 3) {
        player.money = player.money.minus(cost);
    } else {
        player[TIER_NAMES[tier-2] + 'Amount'] = player[TIER_NAMES[tier-2] + 'Amount'].minus(cost)
    }

    player[name + 'Amount'] = player[name + 'Amount'].plus(1);
    player[name + 'Bought']++;

    if (player[name + 'Bought'] === 10) {
        player[name + 'Bought'] = 0;
        player[name + 'Pow']  = player[name + 'Pow'].times(getDimensionPowerMultiplier(tier));
        if (player.currentChallenge != "challenge5" && player.currentChallenge != "postc5") player[name + 'Cost'] = player[name + 'Cost'].times((getDimensionCostMultiplier(tier)));
        else if (player.currentChallenge == "postc5") multiplyPC5Costs(player[name + 'Cost'], tier)
        else multiplySameCosts(cost);
        if (player[name + 'Cost'].gte(Number.MAX_VALUE)) player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease)

    }

    if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") player.chall2Pow = 0;
    if (player.currentChallenge == "challenge8" || player.currentChallenge == "postc1") clearDimensions(tier-1);

    onBuyDimension(tier);

    return true;
}

function buyManyDimension(tier) {
    var name = TIER_NAMES[tier];
    var cost = player[name + 'Cost'].times(10 - player[name + 'Bought']);
    auto = false;

    if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") && player.matter.equals(0)) player.matter = new Decimal(1);
    if (player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") {
        if (!canBuyDimension(tier)) {
            return false;
        }
    } else {
        if (tier >= 3) {
            if (!canBuyDimension(tier)) return false
            if (player[TIER_NAMES[tier-2] + 'Amount'].lt(cost)) return false
        }
        else if (!canBuyDimension(tier)) {
            return false;
        } else if (!canAfford(cost)) {
            return false;
        }
    }



    if (player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") {
        if (!canAfford(cost)) {
            return false;
        }
    }

    if ((player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") || tier < 3) {
        player.money = player.money.minus(cost);
    } else {
        player[TIER_NAMES[tier-2] + 'Amount'] = player[TIER_NAMES[tier-2] + 'Amount'].minus(cost)
    }

    player[name + 'Amount'] = player[name + 'Amount'].plus(10 - player[name + 'Bought']);
    player[name + 'Bought'] = 0;
    player[name + 'Pow'] = player[name + 'Pow'].times(getDimensionPowerMultiplier(tier));
    if (player.currentChallenge != "challenge5" && player.currentChallenge != "postc5" ) player[name + 'Cost'] = player[name + 'Cost'].times((getDimensionCostMultiplier(tier)));
    else if (player.currentChallenge == "postc5") multiplyPC5Costs(player[name + 'Cost'], tier)
    else multiplySameCosts(player[name + 'Cost']);
    if (player[name + 'Cost'].gte(Number.MAX_VALUE)) player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease)
    if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") player.chall2Pow = 0;
    if (player.currentChallenge == "challenge8" || player.currentChallenge == "postc1") clearDimensions(tier-1);

    onBuyDimension(tier);

    return true;
}

function buyManyDimensionAuto(tier, bulk) {
    let x = bulk;
    var name = TIER_NAMES[tier];
    if (player.currentChallenge == "challenge10" || player.currentChallenge == "postc1" || player.currentChallenge == "postc5" || player.currentChallenge == "challenge5") {
      while (buyManyDimension(tier) && x > 0) {
        x--;
      }
      return;
    }
    while ((player[name + "Cost"].lt(Number.MAX_VALUE) || player[name + 'Bought'] !== 0) && buyManyDimension(tier) && x > 0) {
      x--;
    }
    // we can buy it at most x more times, maybe not even that
    if (!canBuyDimension(tier)) {
        return x !== bulk;
    }
    if (!canAfford(player[name + 'Cost'].times(10))) {
        return x !== bulk;
    }

    // so we have a quadratic
    let a1 = Math.log10(player.dimensionMultDecrease);
    let b1 = getDimensionCostMultiplier(tier).log(10);
    let c1 = player.money.log(10) - player[name + 'Cost'].times(10).log(10);
    let toBuy = arithmeticSequencePurchases(a1, b1, c1, -1, x);
    // note that the amount returned is one less than the actual number to buy
    // that is, if we get -1, that means buy 0.
    if (toBuy < 0) {
        return x !== bulk;
    }
    player[name + 'Cost'] = player[name + 'Cost'].times(Decimal.pow(10, toBuy.cost));
    player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(Decimal.pow(player.dimensionMultDecrease, toBuy.amount));
    player[name + 'Amount'] = player[name + 'Amount'].plus(10 * (toBuy.amount + 1));
    player[name + 'Pow']  = player[name + 'Pow'].times(Decimal.pow(getDimensionPowerMultiplier(tier), toBuy.amount + 1));
    player.money = player.money.minus(player[name + 'Cost'].times(10))
    player[name + 'Cost'] = player[name + 'Cost'].times(getDimensionCostMultiplier(tier));
    player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease);

    // this is all that we need to do when we buy a dimension
    onBuyDimension(tier);
    return true;
}

function buyMaxTickSpeed() {
    let bought = false;
    if (player.currentChallenge == "postc5" || player.currentChallenge == "challenge5") {
      while (buyTickSpeed()) {
        bought = true;
      }
      return bought;
    }
    while (player.tickSpeedCost.lt(Number.MAX_VALUE) && buyTickSpeed()) {
      bought = true;
    }
    if (!canBuyTickSpeed()) {
      return bought;
    }
    if (!canAfford(player.tickSpeedCost)) {
      return bought;
    }

    // so we have a quadratic
    let a1 = Math.log10(player.tickSpeedMultDecrease);
    let b1 = player.tickspeedMultiplier.log(10);
    let c1 = player.money.log(10) - player.tickSpeedCost.log(10);
    let toBuy = arithmeticSequencePurchases(a1, b1, c1, -1);
    if (toBuy.amount < 0) {
        return bought;
    }
    player.tickSpeedCost = player.tickSpeedCost.times(Decimal.pow(10, toBuy.cost));
    player.tickspeedMultiplier = player.tickspeedMultiplier.times(Decimal.pow(player.tickSpeedMultDecrease, toBuy.amount));
    giveBoostFromTickSpeedUpgrades(toBuy.amount + 1)
    player.money = player.money.minus(player.tickSpeedCost)
    player.tickSpeedCost = player.tickSpeedCost.times(player.tickspeedMultiplier);
    player.tickspeedMultiplier = player.tickspeedMultiplier.times(player.tickSpeedMultDecrease);
    updateTickSpeed();
    return true;
}












function toggleChallengeRetry() {
    if (player.options.retryChallenge) {
        player.options.retryChallenge = false
        document.getElementById("retry").innerHTML = "Automatically retry challenges OFF"
    } else {
        player.options.retryChallenge = true
        document.getElementById("retry").innerHTML = "Automatically retry challenges ON"
    }
}




document.getElementById("first").onclick = function () {
    if (buyOneDimension(1)) {
        // This achievement is granted only if the buy one button is pressed.
        if (player.firstAmount >= 1e150) {
            giveAchievement("There's no point in doing that");
        }
        if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1") && player.matter.equals(0)) player.matter = new Decimal(1);
    }
};



function glowText(id) {
  var text = document.getElementById(id);
  text.style.setProperty("-webkit-animation", "glow 1s");
  text.style.setProperty("animation", "glow 1s");
}



document.getElementById("second").onclick = function () {
    buyOneDimension(2);
    if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") && player.matter.equals(0)) player.matter = new Decimal(1);
};

document.getElementById("third").onclick = function () {
    buyOneDimension(3);
    if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") && player.matter.equals(0))player.matter = new Decimal(1);
};

document.getElementById("fourth").onclick = function () {
    buyOneDimension(4);
    if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") && player.matter.equals(0)) player.matter = new Decimal(1);
};

document.getElementById("fifth").onclick = function () {
    buyOneDimension(5);
};

document.getElementById("sixth").onclick = function () {
    buyOneDimension(6);
};

document.getElementById("seventh").onclick = function () {
    buyOneDimension(7);
};

document.getElementById("eight").onclick = function () {
    buyOneDimension(8);
};

document.getElementById("firstMax").onclick = function () {
    buyManyDimension(1);
    if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1") && player.matter.equals(0)) player.matter = new Decimal(1);
};

document.getElementById("secondMax").onclick = function () {
    buyManyDimension(2);
    if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1") && player.matter.equals(0)) player.matter = new Decimal(1);
};

document.getElementById("thirdMax").onclick = function () {
    buyManyDimension(3);
};

document.getElementById("fourthMax").onclick = function () {
    buyManyDimension(4);
};

document.getElementById("fifthMax").onclick = function () {
    buyManyDimension(5);
};

document.getElementById("sixthMax").onclick = function () {
    buyManyDimension(6);
};

document.getElementById("seventhMax").onclick = function () {
    buyManyDimension(7);
};

document.getElementById("eightMax").onclick = function () {
    buyManyDimension(8);
};

document.getElementById("softReset").onclick = function () {
  auto = false;
  var name = TIER_NAMES[getShiftRequirement(0).tier]
  if (player[name + "Amount"] >= getShiftRequirement(0).amount) {
      softReset(1)
  }
};

document.getElementById("maxall").onclick = function () {
    buyMaxTickSpeed();

    for (var tier=1; tier<9;tier++) {
        buyManyDimensionAuto(tier, Infinity)
    }
}




document.getElementById("challengeconfirmation").onclick = function () {
    if (!player.options.challConf) {
        player.options.challConf = true;
        document.getElementById("challengeconfirmation").innerHTML = "Challenge confirmation off"
    } else {
        player.options.challConf = false;
        document.getElementById("challengeconfirmation").innerHTML = "Challenge confirmation on"
    }
}




function buyInfinityUpgrade(name, cost) {
    if (player.infinityPoints.gte(cost) && !player.infinityUpgrades.includes(name)) {
        player.infinityUpgrades.push(name);
        player.infinityPoints = player.infinityPoints.minus(cost);
        return true
    } else return false
}

function canGetInfMult () {
  return player.infinityUpgrades.includes("skipResetGalaxy") && player.infinityUpgrades.includes("passiveGen") && player.infinityUpgrades.includes("galaxyBoost") && player.infinityUpgrades.includes("resetBoost") && player.infinityPoints.gte(player.infMultCost);
}

function buyInfMult(x, cost) {
    player.infinityPoints = player.infinityPoints.minus(cost)
    player.infMult = player.infMult.times(Decimal.pow(2, x));
    player.autoIP = player.autoIP.times(Decimal.pow(2, x));
    if (player.autobuyers[11].priority !== undefined && player.autobuyers[11].priority !== null && player.autoCrunchMode == "amount") player.autobuyers[11].priority = player.autobuyers[11].priority.times(Decimal.pow(2, x));
    if (player.autoCrunchMode == "amount") document.getElementById("priority12").value = player.autobuyers[11].priority
    player.infMultCost = player.infMultCost.times(Decimal.pow(10, x))
    document.getElementById("infiMult").innerHTML = "Multiply infinity points from all sources by 2 <br>currently: "+shorten(getIPMult()) +"x<br>Cost: "+shortenCosts(player.infMultCost)+" IP"
}

document.getElementById("infiMult").onclick = function() {
    if (canGetInfMult()) {
        buyInfMult(1, player.infMultCost);
    }
}

function buyMaxInfMult () {
    if (canGetInfMult()) {
        let buy = makePurchase(player.infinityPoints, player.infMultCost, 10);
        if (buy.amount > 0) {
            buyInfMult(buy.amount, buy.cost);
        }
    }
}


function updateEternityUpgrades() {
    document.getElementById("eter1").className = (player.eternityUpgrades.includes(1)) ? "eternityupbtnbought" : (player.eternityPoints.gte(5)) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter2").className = (player.eternityUpgrades.includes(2)) ? "eternityupbtnbought" : (player.eternityPoints.gte(10)) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter3").className = (player.eternityUpgrades.includes(3)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e4)) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter4").className = (player.eternityUpgrades.includes(4)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e6)) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter5").className = (player.eternityUpgrades.includes(5)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e9)) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter6").className = (player.eternityUpgrades.includes(6)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e12)) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter7").className = (player.eternityUpgrades.includes(7)) ? "eternityupbtnbought" : (player.eternityPoints.gte(new Decimal('1e1000'))) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter8").className = (player.eternityUpgrades.includes(8)) ? "eternityupbtnbought" : (player.eternityPoints.gte(new Decimal('1e1500'))) ? "eternityupbtn" : "eternityupbtnlocked";
    document.getElementById("eter9").className = (player.eternityUpgrades.includes(9)) ? "eternityupbtnbought" : (player.eternityPoints.gte(new Decimal('1e2000'))) ? "eternityupbtn" : "eternityupbtnlocked";
}


function buyEternityUpgrade(name, cost) {
    if (player.eternityPoints.gte(cost) && !player.eternityUpgrades.includes(name)) {
        player.eternityUpgrades.push(name)
        player.eternityPoints = player.eternityPoints.minus(cost)
        updateEternityUpgrades()
    }
}

function updateEPMultStuff () {
    let count = player.epmult.log(5);
    player.epmultCost = new Decimal(500).times(Decimal.pow(50, count))
    document.getElementById("epmult").innerHTML = "You gain 5 times more EP<p>Currently: "+shortenDimensions(player.epmult)+"x<p>Cost: "+shortenDimensions(player.epmultCost)+" EP"
}

function buyEPMult() {
    if (player.eternityPoints.gte(player.epmultCost)) {
        player.epmult = player.epmult.times(5)
        player.eternityPoints = player.eternityPoints.minus(player.epmultCost)
        updateEPMultStuff();
    }
}

function buyMaxEPMult() {
    let purchase = makePurchase(player.eternityPoints, player.epmultCost, 50)
    player.epmult = player.epmult.times(Decimal.pow(5, purchase.amount));
    player.eternityPoints = player.eternityPoints.minus(purchase.cost);
    updateEPMultStuff();
}




function updateAchPow() {
    var amount = 0;
    for (let i = 1; i <= 13; i++) {
      let rowCompleted = true;
      for (let j = 1; j <= 8; j++) {
        if (!player.achievements.includes(("r" + i) + j)) {
          rowCompleted = false;
        }
      }
      if (rowCompleted) {
        amount++;
        document.getElementById("achRow" + i).className = "completedrow"
      }
    }

    player.achPow = Decimal.pow(1.5, amount)

    document.getElementById("achmultlabel").innerHTML = "Current achievement multiplier on each Dimension: " + player.achPow.toFixed(1) + "x"
}



function timeMult() {
    var mult = new Decimal(1)
    if (player.infinityUpgrades.includes("timeMult")) mult = mult.times(Math.pow(player.totalTimePlayed / 1200, 0.15));
    if (player.infinityUpgrades.includes("timeMult2")) mult = mult.times(Decimal.max(Math.pow(player.thisInfinityTime / 2400, 0.25), 1));
    if (player.achievements.includes("r76")) mult = mult.times(Math.pow(player.totalTimePlayed / (600*60*48), 0.05));
    return mult;
}

function getInfinitied () {
    return player.infinitied + player.bankedInfinities;
}

function dimMults() {
    return new Decimal(1 + (getInfinitied() * 0.2))
}

function playerInfinityUpgradesOnEternity() {
    if (player.eternities < 4) player.infinityUpgrades = []
    else if (player.eternities < 20) player.infinityUpgrades = ["timeMult", "dimMult", "timeMult2", "skipReset1", "skipReset2", "unspentBonus", "27Mult", "18Mult", "36Mult", "resetMult", "skipReset3", "passiveGen", "45Mult", "resetBoost", "galaxyBoost", "skipResetGalaxy"]
    else player.infinityUpgrades = player.infinityUpgrades
}



document.getElementById("infi11").onclick = function () {
    buyInfinityUpgrade("timeMult",1);
}

document.getElementById("infi21").onclick = function () {
    buyInfinityUpgrade("dimMult",1);
}

document.getElementById("infi12").onclick = function () {
    if (player.infinityUpgrades.includes("timeMult")) buyInfinityUpgrade("18Mult",1);
}

document.getElementById("infi22").onclick = function () {
    if (player.infinityUpgrades.includes("dimMult")) buyInfinityUpgrade("27Mult",1);
}

document.getElementById("infi13").onclick = function () {
    if (player.infinityUpgrades.includes("18Mult")) buyInfinityUpgrade("36Mult",1);
}
document.getElementById("infi23").onclick = function () {
    if (player.infinityUpgrades.includes("27Mult")) buyInfinityUpgrade("45Mult",1);
}

document.getElementById("infi14").onclick = function () {
    if (player.infinityUpgrades.includes("36Mult")) buyInfinityUpgrade("resetBoost",1);
}

document.getElementById("infi24").onclick = function () {
    if (player.infinityUpgrades.includes("45Mult")) buyInfinityUpgrade("galaxyBoost",2);
}

document.getElementById("infi31").onclick = function() {
    buyInfinityUpgrade("timeMult2",3);
}

document.getElementById("infi32").onclick = function() {
    if (player.infinityUpgrades.includes("timeMult2")) buyInfinityUpgrade("unspentBonus",5);
}

document.getElementById("infi33").onclick = function() {
    if (player.infinityUpgrades.includes("unspentBonus")) buyInfinityUpgrade("resetMult",7);
}

document.getElementById("infi34").onclick = function() {
    if (player.infinityUpgrades.includes("resetMult")) buyInfinityUpgrade("passiveGen",10);
}

document.getElementById("infi41").onclick = function() {
    buyInfinityUpgrade("skipReset1",20);
}

document.getElementById("infi42").onclick = function() {
    if (player.infinityUpgrades.includes("skipReset1")) buyInfinityUpgrade("skipReset2", 40)
}

document.getElementById("infi43").onclick = function() {
    if (player.infinityUpgrades.includes("skipReset2")) buyInfinityUpgrade("skipReset3", 80)
}

document.getElementById("infi44").onclick = function() {
    if (player.infinityUpgrades.includes("skipReset3")) buyInfinityUpgrade("skipResetGalaxy", 500)
}


document.getElementById("postinfi11").onclick = function() {
    buyInfinityUpgrade("totalMult",1e4);
}

document.getElementById("postinfi21").onclick = function() {
    buyInfinityUpgrade("currentMult",5e4);
}

document.getElementById("postinfi31").onclick = function() {
    if (player.infinityPoints.gte(player.tickSpeedMultDecreaseCost) && player.tickSpeedMultDecrease != 2) {
        player.infinityPoints = player.infinityPoints.minus(player.tickSpeedMultDecreaseCost)
        player.tickSpeedMultDecreaseCost *= 5
        player.tickSpeedMultDecrease--;
        document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>"+player.tickSpeedMultDecrease+"x -> "+(player.tickSpeedMultDecrease-1)+"x<br>Cost: "+shortenCosts(player.tickSpeedMultDecreaseCost) +" IP"
        if (player.tickSpeedMultDecrease == 2) document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>"+player.tickSpeedMultDecrease+"x"
    }
}

document.getElementById("postinfi41").onclick = function() {
    buyInfinityUpgrade("postGalaxy",5e11);
}

document.getElementById("postinfi12").onclick = function() {
    buyInfinityUpgrade("infinitiedMult",1e5);
}

document.getElementById("postinfi22").onclick = function() {
    buyInfinityUpgrade("achievementMult",1e6);
}

document.getElementById("postinfi32").onclick = function() {
    buyInfinityUpgrade("challengeMult",1e7);
}

document.getElementById("postinfi42").onclick = function() {
    if (player.infinityPoints.gte(player.dimensionMultDecreaseCost) && player.dimensionMultDecrease != 3) {
        player.infinityPoints = player.infinityPoints.minus(player.dimensionMultDecreaseCost)
        player.dimensionMultDecreaseCost *= 5000
        player.dimensionMultDecrease--;
        document.getElementById("postinfi42").innerHTML = "Dimension cost multiplier increase <br>"+player.dimensionMultDecrease+"x -> "+(player.dimensionMultDecrease-1)+"x<br>Cost: "+shortenCosts(player.dimensionMultDecreaseCost) +" IP"
        if (player.dimensionMultDecrease == 3) document.getElementById("postinfi42").innerHTML = "Dimension cost multiplier increase <br>"+player.dimensionMultDecrease+"x"
    }
}

document.getElementById("offlineProd").onclick = function() {
    if (player.infinityPoints.gte(player.offlineProdCost) && player.offlineProd < 50) {
        player.infinityPoints = player.infinityPoints.minus(player.offlineProdCost)
        player.offlineProdCost *= 10
        player.offlineProd += 5

    }
}

let getReplicantiIntervalBonus = function (amount) {
  if (amount === undefined) {
    amount = player.replicanti.amount;
  }
  if (player.achievements.includes('r107')) {
    return Math.pow(Math.max(amount.log(2) / 1024, 1), .25);
  } else {
    return 1;
  }
}

function getReplicantiSpeedup (amount) {
  if (amount === undefined) {
    amount = player.replicanti.amount;
  }
  // start with no speedup
  let ret = 1;
  // do we need both these functions? I am not sure.
  ret *= getReplicantiIntervalBonus(amount);
  /*
  // EC12 reward handled
  ret *= ecNumReward(12);
  */
  return ret;
}

let getReplicantiInterval = function (amount) {
  let ret = player.replicanti.interval;
  ret /= getReplicantiSpeedup(amount);
  return ret;
}

let getNewReplicantiInterval = function () {
  let ret = player.replicanti.interval * .9;
  if (!player.achievements.includes('r106')) {
    ret = Math.max(ret, 1);
  }
  // same as above function
  ret /= getReplicantiSpeedup();
  return ret;
}

function updateReplicantiInterval (places) {
  if (player.replicanti.interval !== 1 || player.achievements.includes('r106')) {
    document.getElementById("replicantiinterval").innerHTML = "Interval: "+getReplicantiInterval().toFixed(places)+"ms<br>-> "+getNewReplicantiInterval().toFixed(places)+" Costs: "+shortenCosts(player.replicanti.intervalCost)+" IP";
  } else {
    document.getElementById("replicantiinterval").innerHTML = "Interval: "+getReplicantiInterval().toFixed(places)+"ms";
  }
}

function updateInfCosts() {
    var places = Math.floor(Math.log10(getReplicantiInterval()/1000)) * (-1);
    if (player.replicanti.chance < 1 || player.achievements.includes('r106')) document.getElementById("replicantichance").innerHTML = "Replicate chance: "+Math.round(player.replicanti.chance*100)+"%<br>+"+1+"% Costs: "+shortenCosts(player.replicanti.chanceCost)+" IP"
    else document.getElementById("replicantichance").innerHTML = "Replicate chance: "+Math.round(player.replicanti.chance*100)+"%"
    updateReplicantiInterval(places);
    document.getElementById("replicantimax").innerHTML = "Max Replicanti galaxies: "+player.replicanti.gal+"<br>+1 Costs: "+shortenCosts(player.replicanti.galCost)+" IP"
    document.getElementById("replicantiunlock").innerHTML = "Unlock Replicantis<br>Cost: "+shortenCosts(1e140)+" IP"
    document.getElementById("replicantireset").innerHTML = "Reset replicanti amount, but get a free galaxy<br>"+player.replicanti.galaxies + " replicated galaxies created."


    document.getElementById("replicantichance").className = canGetReplChance() ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantiinterval").className = canGetReplInterval() ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantimax").className = canGetReplGal() ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantireset").className = (player.replicanti.galaxies < player.replicanti.gal && player.replicanti.amount.gte(player.replicanti.limit)) ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantiunlock").className = (player.infinityPoints.gte(1e140)) ? "storebtn" : "unavailablebtn"


    document.getElementById("infiMult").innerHTML = "Multiply infinity points from all sources by 2 <br>currently: "+shorten(getIPMult()) +"x<br>Cost: "+shortenCosts(player.infMultCost)+" IP"
}

function isTSMultiplier (i) {
  return [1, 3, 5, 6].includes(i);
}

function isTSPercentage (i) {
  return [7, 8].includes(i);
}

let whatTS = {
  1: 'Total sacrifice multiplier',
  2: 'Current tickspeed upgrades',
  3: 'Replicanti multiplier',
  4: 'Multiplier per dimension boost',
  5: 'Current IP multiplier',
  6: 'Current IP multiplier',
  7: 'Current percentage',
  8: 'Current percentage',
  9: 'Power',
  10: 'Power'
}

function getTSBenefit (i, num) {
  // We want seconds in infinity, not in eternity.
  let secondsInInfinity = Math.max(player.thisInfinityTime / 10, 1);
  if (i === 1) {
    return preTSCalcTotalSacrificeBoost().pow(getTimeStudySacrificePow(num));
  } else if (i === 2) {
    return getTotalTickGained(player.timeShards, num);
  } else if (i === 3) {
    return getReplMult(num);
  } else if (i === 4) {
    return getDimensionBoostPower(num);
  } else if (i === 5) {
    return Decimal.pow(Math.max(1e5 / secondsInInfinity, 1), num);
  } else if (i === 6) {
    return Decimal.pow(secondsInInfinity, num);
  } else if (i === 7) {
    return num;
  } else if (i === 8) {
    return num;
  } else if (i === 9) {
    return 1 + Math.log(num + 1) * Math.log10(Math.max(1, player.replicanti.amount.log(10))) / 1000;
  } else if (i === 10) {
    let x = Math.max(0, player.extragalactic.galacticPower.log(10));
    if (x > 100) {
       x = (1 + Math.ln(x / 100)) * 100;
    }
    return 1 + Math.log(num + 1) * Math.sqrt(x) / 1000;
  }
}

function smartShortenMoney (x) {
  return (typeof x === 'number' && Math.floor(x) === x) ? addCommas(x) : shortenMoney(x);
}

function smartShortenCosts (x) {
  return (typeof x === 'number' && Math.floor(x) === x) ? addCommas(x) : shortenCosts(x);
}

function updateTSDescs () {
  for (let i = 1; i <= numTimeStudies; i++) {
    let oldBenefit = getTSBenefit(i, player.timestudy.studies[i]);
    let newBenefit  = getTSBenefit(i, player.timestudy.studies[i] + 1);
    let x = isTSMultiplier(i) ? 'x' : (isTSPercentage(i) ? '%' : '');
    document.getElementById('ts' + i + 'desc').innerHTML = whatTS[i] + ':<br/>' + smartShortenMoney(oldBenefit) + x + ' -> ' + smartShortenMoney(newBenefit) + x;
  }
}



// Replicanti stuff

function unlockReplicantis() {
    if (player.infinityPoints.gte(1e140)) {
        document.getElementById("replicantidiv").style.display="inline-block"
        document.getElementById("replicantiunlock").style.display="none"
        player.replicanti.unl = true
        player.replicanti.amount = new Decimal(1);
        player.infinityPoints = player.infinityPoints.minus(1e140)
    }
}

function canGetReplChance () {
  return player.replicanti.unl && player.infinityPoints.gte(player.replicanti.chanceCost) && (player.replicanti.chance < 1 || player.achievements.includes('r106'));
  // && !ec8noMorePurchases('repl');
}

function canGetReplInterval () {
  return player.replicanti.unl && player.infinityPoints.gte(player.replicanti.intervalCost) && (player.replicanti.interval > 1 || player.achievements.includes('r106'));
  // && !ec8noMorePurchases('repl');
}

function canGetReplGal () {
  return player.replicanti.unl && player.infinityPoints.gte(player.replicanti.galCost);
  // && !ec8noMorePurchases('repl');
}

function upgradeReplicantiChance() {
    if (canGetReplChance()) {
        player.infinityPoints = player.infinityPoints.minus(player.replicanti.chanceCost)
        player.replicanti.chanceCost = player.replicanti.chanceCost.times(1e15)
        player.replicanti.chance += 0.01
        updateInfCosts()
        // player.ec8.PurchasesMade.repl++;
        // ec8Update('repl');
    }
}

function maxUpgradeReplicantiChance() {
    if (canGetReplChance()) {
        let max;
        if (!player.achievements.includes('r106')) {
            max = Math.round(100 * (1 - player.replicanti.chance));
        }
        let buy = makePurchase(player.infinityPoints, player.replicanti.chanceCost, 1e15, max);
        player.infinityPoints = player.infinityPoints.minus(buy.cost);
        player.replicanti.chanceCost = player.replicanti.chanceCost.times(Decimal.pow(1e15, buy.amount));
        player.replicanti.chance += 0.01 * buy.amount;
        updateInfCosts()
        // player.ec8.PurchasesMade.repl++;
        // ec8Update('repl');
    }
}



function upgradeReplicantiInterval() {
    if (canGetReplInterval()) {
        player.infinityPoints = player.infinityPoints.minus(player.replicanti.intervalCost)
        player.replicanti.intervalCost = player.replicanti.intervalCost.times(Decimal.pow(1e10, Math.max(Math.pow(player.replicanti.interval, -3), 1)))
        player.replicanti.interval *= 0.9
        if (player.replicanti.interval < 1 && !player.achievements.includes('r106')) player.replicanti.interval = 1
        updateInfCosts()
        // player.ec8.PurchasesMade.repl++;
        // ec8Update('repl');
    }
}

function getInitialReplicantiGalaxyCost () {
  /*
  if (player.eternityChallenges.current === 6) {
    return new Decimal(1e3);
  } else {
    return new Decimal(1e170);
  }
  */
  return new Decimal(1e170);
}

function getReplicantiGalaxyCostIncrease () {
  /*
  if (player.eternityChallenges.current === 6) {
    return Decimal.pow(10, player.replicanti.gal).times(1e3);
  } else {
    return Decimal.pow(1e5, player.replicanti.gal).times(1e25);
  }
  */
  return Decimal.pow(1e5, player.replicanti.gal).times(1e20);
}

function upgradeReplicantiGalaxy() {
    if (canGetReplGal()) {
        player.infinityPoints = player.infinityPoints.minus(player.replicanti.galCost)
        player.replicanti.gal += 1;
        player.replicanti.galCost = player.replicanti.galCost.times(getReplicantiGalaxyCostIncrease());
        updateInfCosts()
        // player.ec8.PurchasesMade.repl++;
        // ec8Update('repl');
    }
}

function maxUpgradeReplicantiGalaxy() {
    if (canGetReplGal()) {
        let a1 = 5;
        let b1 = getReplicantiGalaxyCostIncrease().log(10);
        let c1 = player.infinityPoints.log(10) - player.replicanti.galCost.log(10);
        let toBuy = arithmeticSequencePurchases(a1, b1, c1, -1);
        if (toBuy < 0) {
            return;
        }
        player.replicanti.galCost = player.replicanti.galCost.times(Decimal.pow(10, toBuy.cost))
        player.infinityPoints = player.infinityPoints.minus(player.replicanti.galCost);
        player.replicanti.gal += toBuy.amount + 1;
        player.replicanti.galCost = player.replicanti.galCost.times(getReplicantiGalaxyCostIncrease());
        updateInfCosts()
        // player.ec8.PurchasesMade.repl++;
        // ec8Update('repl');
    }
}

function getReplicantiGalaxyBuyerBulk () {
    let ret = player.replicanti.galaxybuyer.bulk;
    if (ret === 'max') {
        ret = player.replicanti.gal - player.replicanti.galaxies
    }
    return ret;
}

function getCurrentReplicantiGalaxyGain () {
    let bulkGain = Math.floor(player.replicanti.amount.ln() / (player.replicanti.limit.ln() * 5));
    if (!player.achievements.includes('r134')) {
        bulkGain = 0;
    }
    let singleGain = player.replicanti.amount.gte(player.replicanti.limit) ? 1 : 0;
    let maxGain = player.replicanti.gal - player.replicanti.galaxies
    return Math.min(maxGain, Math.max(bulkGain, singleGain));
}

function replicantiGalaxy() {
    if (player.replicanti.amount.gte(player.replicanti.limit) && player.replicanti.galaxies < player.replicanti.gal) {
        player.replicanti.galaxies += getCurrentReplicantiGalaxyGain();
        player.replicanti.amount = new Decimal(1)
        player.galaxies -= 1
        galaxyReset()
        updateInfCosts()
    }
}


function getReplMult (num) {
  if (num === undefined) {
    num = player.timestudy.studies[3];
  }
  let exp = 2 + num / 2;
  if (player.achievements.includes('r108')) {
    exp *= 1.09;
  }
  return Decimal.pow(Math.max(player.replicanti.amount.log(2), 1), exp);
}

// end of replicanti stuff

// eternity challenge stuff (including startEternityChallenge, not including bonuses and challenge effects scattered around the code)

// notes: the reduced effect in challenge 7 is (natural logarithm^7)

function ecCompletions (x) {
  return player.eternityChallenges.done[x] || 0;
}

function updateTotalTiersDone () {
  let res = 0;
  for (let i in player.eternityChallenges.done) {
    res += player.eternityChallenges.done[i];
  }
  player.eternityChallenges.totalTiersDone = res;
}

let initialECCosts = {
  1: 2000,
  2: 250,
  3: 20000,
  4: 2000000,
  5: 400
  /*
  6: 150,
  7: new Decimal('1e20000000'),
  8: new Decimal('1e100000')
  9: new Decimal('1e18000'),
  10: new Decimal('1e100'),
  11: new Decimal('1e500000'),
  12: new Decimal('1e1000'),
  13: new Decimal('1e2000000')
  */
}

let incrementECCosts = {
  1: 2000,
  2: 50,
  3: 4000,
  4: 500000,
  5: 100
  /*
  6: 50,
  7: new Decimal('1e5000000'),
  8: new Decimal('1e20000'),
  9: new Decimal('1e2000'),
  10: new Decimal('1e20'),
  11: new Decimal('1e100000'),
  12: new Decimal('1e200'),
  13: new Decimal('1e1000000')
  */
}

let initialECGoals = {
  1: new Decimal('1e1200'),
  2: new Decimal('1e350'),
  3: new Decimal('1e700'),
  4: new Decimal('1e10000'),
  5: new Decimal('1e3600')
  /*
  6: new Decimal('1e1800'),
  7: new Decimal('1e30000'),
  8: new Decimal('1e1500'),
  9: new Decimal('1e1500'),
  10: new Decimal('1e1000'),
  11: new Decimal('1e500'),
  12: new Decimal('1e100000'),
  13: new Decimal('1e700')
  */
}

let incrementECGoals = {
  1: new Decimal('1e200'),
  2: new Decimal('1e50'),
  3: new Decimal('1e200'),
  4: new Decimal('1e1000'),
  5: new Decimal('1e1200')
  /*
  6: new Decimal('1e600'),
  7: new Decimal('1e5000'),
  8: new Decimal('1e500'),
  9: new Decimal('1e250'),
  10: new Decimal('1e200'),
  11: new Decimal('1e200'),
  12: new Decimal('1e10000'),
  13: new Decimal('1e300')
  */
}

function ecCost (x) {
  return initialECCosts[x] + incrementECCosts[x] * ecCompletions(x);
  /*
  if (x <= 6) {
    return initialECCosts[x] + incrementECCosts[x] * ecCompletions(x);
  } else {
    return initialECCosts[x].times(Decimal.pow(incrementECCosts[x], ecCompletions(x)));
  }
  */
}

function ecGoal (x) {
  return initialECGoals[x].times(Decimal.pow(incrementECGoals[x], ecCompletions(x)));
}

function infinityMultAndGenEnabled () {
  return player.eternityChallenges.current !== 4;
}

function ec4InfinitiedLimit() {
  return Math.max(16 - 4 * ecCompletions(4), 0);
}

/*
function ec12TimeLimit() {
  return 2 * Math.max(5 - ecCompletions(12), 1) / Math.pow(2, Math.max(ecCompletions(12) - 4, 0))
}
*/

function checkForEternityChallengeFailure () {
  if (player.eternityChallenges.current === 4) {
    // do not count banked infinities
    if (player.infinitied > ec4InfinitiedLimit()) {
      failEternityChallenge(4);
    }
  }
  /*
  if (player.eternityChallenges.current === 12) {
    if (player.thisEternity > ec12TimeLimit()) {
      failEternityChallenge(12);
    }
  }
  */
}

function getEC3RewardDimensionPowerMultiplier () {
  return Math.pow(1 + player.eternities / 1e5, ecCompletions(3))
}

/*
function ec8UpdateAll() {
  ec8Update('ids');
  ec8Update('repl');
}

function ec8Update (x) {
  if (player.eternityChallenges.current === 8) {
    document.getElementById('eterc8' + x).style.display = 'block';
    document.getElementById('eterc8' + x + 'left').textContent = 50 - player.ec8.PurchasesMade[x];
  } else {
    document.getElementById('eterc8' + x).style.display = 'none';
  }
}

function ec8noMorePurchases (x) {
  return player.eternityChallenges.current === 8 && player.ec8.PurchasesMade[x] === 50;
}
*/

function hasInfiniteTime () {
  return player.achievements.includes("r112");
}

function infiniteTimeEffect () {
  /*
  if (c === undefined) {
    c = ecCompletions(13);
  }
  */
  if (hasInfiniteTime()) {
    return player.tickspeed.dividedBy(1000).pow(-1e-5);
  } else {
    return 1;
  }
}

function ecNumReward (x) {
  let c = ecCompletions(x);
  if (x === 1) {
    return Math.pow(Math.max(player.thisEternity / 10, 1), 2 * c / 5);
  } else if (x === 2) {
    return Decimal.pow(Math.max(player.infinityPower.ln(), 1), 2 * c / 5);
  } else if (x === 3) {
    return getEC3RewardDimensionPowerMultiplier();
  } else if (x === 4) {
    return Math.pow(Math.max(getInfinitied(), 1), 2 * c);
  } else if (x === 5) {
    return Math.pow(Math.max(player.galaxies, 1), c / 10);
  }
  /*
  else if (x === 6) {
    return Decimal.pow(10, c * Math.cbrt(player.replicanti.amount.max(1).log(10)));
  } else if (x === 7) {
    return Math.pow(Math.max(player.money.ln(), 1), 2 * c / 5);
  } else if (x === 8) {
    return Decimal.pow(1.2, c * player.replicanti.galaxies);
  } else if (x === 9) {
    return player.infinityPower.max(1).pow(.001 * c);
  } else if (x === 10) {
    return Decimal.pow(Math.max(getInfinitied(), 1), 1000 * c);
  } else if (x === 11) {
    return 1 + .01 * c;
  } else if (x === 12) {
    return 1 + c;
  } else if (x === 13) {
    return infiniteTimeEffect(c);
  }
  */
}

function ecDisplayReward (x) {
  let n = ecNumReward(x);
  return shortenMoney(n) + 'x';
}

function currentEternityRequirement () {
  if (player.eternityChallenges.current === null) {
    return Number.MAX_VALUE;
  } else {
    return ecGoal(player.eternityChallenges.current);
  }
}

let ecTTCosts = [null, 30, 40, 50, 60, 80, 1000, 1200, 1500]
// let's require some more TT for EC6-8, shall we?
// 200, 240, 300, 400, 500;

let ecReqProps = {
  1: function () {return player.eternities},
  2: function () {return player.totalTickGained},
  3: function () {return player.eightAmount},
  4: function () {return getInfinitied()},
  5: function () {return player.galaxies}
  /*
  6: function () {return player.replicanti.galaxies},
  7: function () {return player.money},
  8: function () {return player.infinityPoints},
  9: function () {return player.infinityPower},
  10: function () {return player.eternityPoints},
  11: function () {return getDimensionFinalMultiplier(1)},
  12: function () {return player.timeShards},
  13: function () {return player.tickspeed.pow(-1)}
  */
}

function canUnlockEterChall (x) {
  return player.eternityChallenges.unlocked === null &&
  player.timestudy.theorem >= ecTTCosts[x] &&
  Decimal.gte(ecReqProps[x](), ecCost(x))
}

function attemptEterChallUnlock (x) {
  if (canUnlockEterChall(x)) {
    player.timestudy.theorem -= ecTTCosts[x];
    player.eternityChallenges.unlocked = x;
    updateTheoremButtons()
    updateTimeStudyButtons()
    updateECDisplay(x);
    return true;
  } else {
    return false;
  }
}

function startEternityChallenge (x) {
  if (player.eternityChallenges.unlocked === x) {
    player.eternityChallenges.current = x;
    eternity(true, true);
  }
}

function failEternityChallenge (x) {
  if (player.eternityChallenges.unlocked === x) {
    giveAchievement("You're a mistake");
    alert('You failed your current eternity challenge, and thus you will now exit it.');
    player.eternityChallenges.current = x;
    eternity(true, false);
  }
}

let numOfECs = 5;

function initAllECs () {
  displayAllECRewards();
  checkAllECUnlockStatuses();
  for (let i = 1; i <= numOfECs; i++) {
    updateECDisplay(i);
  }
}

function updateECDisplay (x) {
  let c = ecCompletions(x);
  let plural = (c === 1) ? '' : 's';
  let period = (x === 4) ? '' : '.';
  document.getElementById('ec' + x + 'completions').innerHTML = 'Completed ' + c + ' time' + plural + '.';
  document.getElementById('ec' + x + 'cost').innerHTML = smartShortenCosts(ecCost(x));
  document.getElementById('ec' + x + 'goal').innerHTML = 'Goal: ' + shortenCosts(ecGoal(x)) + ' Infinity Points' + period;
  if (x === 4) {
    document.getElementById('ec' + x + 'constraint').innerHTML = ec4InfinitiedLimit();
  }
  /*
  if (x === 12) {
    document.getElementById('ec' + x + 'constraint').innerHTML = (ec12TimeLimit() / 10).toFixed(2);
  }
  */
  // show the cost no matter what
  document.getElementById('eterc' + x + 'costdiv').style.display = 'block';
  // locked vs unlocked
  if (player.eternityChallenges.unlocked === x) {
    document.getElementById('eterc' + x).style.display = 'inline-block';
    document.getElementById('eterc' + x + 'unlockbtn').style.display = 'none';
  } else {
    document.getElementById('eterc' + x).style.display = 'none';
    document.getElementById('eterc' + x + 'unlockbtn').style.display = 'inline-block';
  }
  if (player.eternityChallenges.unlocked === x || ecCompletions(x) > 0) {
    document.getElementById('eterc' + x + 'conditionsdiv').style.display = 'block';
    document.getElementById('eterc' + x + 'goaldiv').style.display = 'block';
  } else {
    document.getElementById('eterc' + x + 'conditionsdiv').style.display = 'none';
    document.getElementById('eterc' + x + 'goaldiv').style.display = 'none';
  }
  // start vs running vs completed
  if (player.eternityChallenges.current === x) {
    document.getElementById('eterc' + x).className = 'onchallengebtn'
    document.getElementById('eterc' + x).innerHTML = 'Running';
  } else if (ecCompletions(x) === 5) {
    document.getElementById('eterc' + x).className = 'completedchallengesbtn'
    document.getElementById('eterc' + x).innerHTML = 'Completed';
  } else {
    document.getElementById('eterc' + x).className = 'challengesbtn'
    document.getElementById('eterc' + x).innerHTML = 'Start';
  }
}

function displayAllECRewards () {
  for (let i = 1; i <= numOfECs; i++) {
    document.getElementById('ec' + i + 'reward').innerHTML = ecDisplayReward(i);
  }
}

function checkAllECUnlockStatuses () {
  for (let i = 1; i <= numOfECs; i++) {
    if (canUnlockEterChall(i)) {
      document.getElementById('eterc' + i + 'unlockbtn').className = 'challengesbtn'
      document.getElementById('eterc' + i + 'unlockbtn').innerHTML = 'Unlock';
    } else {
      document.getElementById('eterc' + i + 'unlockbtn').className = 'lockedchallengesbtn'
      document.getElementById('eterc' + i + 'unlockbtn').innerHTML = 'Locked';
    }
  }
}

// end of EC stuff

function galaxyModeCrunch () {
  let neededGalaxies = (player.autobuyers[11].priority === 'max') ?
  new Decimal(player.replicanti.gal) : player.autobuyers[11].priority;
  return neededGalaxies.lte(player.replicanti.galaxies) && (
    !player.autobuyers[11].requireMaxReplicanti ||
    player.replicanti.amount.gte(player.replicanti.limit))
}

function updateMilestones() {
  let milestoneRequirements = [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 30, 40, 50, 60, 80, 100]
  for (let i=0; i<milestoneRequirements.length; i++) {
      let name = 'reward' + i;
      if (player.eternities >= milestoneRequirements[i]) {
        document.getElementById(name).className = 'milestonereward';
      } else {
        document.getElementById(name).className = 'milestonerewardlocked';
      }
  }
}

function replicantiGalaxyAutoToggle() {
    if (player.replicanti.galaxybuyer.on) {
        player.replicanti.galaxybuyer.on = false
    } else {
        player.replicanti.galaxybuyer.on = true
    }
}

function infMultAutoToggle() {
    if (player.infMultBuyer) {
        player.infMultBuyer = false
        document.getElementById("infmultbuyer").innerHTML = "Autobuy IP mult OFF"
    } else {
        player.infMultBuyer = true
        document.getElementById("infmultbuyer").innerHTML = "Autobuy IP mult ON"
    }
}


function toggleCrunchMode() {
    if (player.autoCrunchMode == "amount") {
        player.autoCrunchMode = "time"
        document.getElementById("togglecrunchmode").innerHTML = "Auto crunch mode: time"
        document.getElementById("limittext").innerHTML = "Seconds between crunches:"
        document.getElementById("maxReplicantiCrunchSwitchDiv").style.display = 'none';
    } else if (player.autoCrunchMode == "time") {
        player.autoCrunchMode = "relative"
        document.getElementById("togglecrunchmode").innerHTML = "Auto crunch mode: X times last crunch"
        document.getElementById("limittext").innerHTML = "X times last crunch:"
        document.getElementById("maxReplicantiCrunchSwitchDiv").style.display = 'none';
    } else if (player.autoCrunchMode == "relative") {
        player.autoCrunchMode = "replicanti"
        document.getElementById("togglecrunchmode").innerHTML = "Auto crunch mode: replicanti galaxies"
        document.getElementById("limittext").innerHTML = "Replicanti galaxies needed for crunch:"
        document.getElementById("maxReplicantiCrunchSwitchDiv").style.display = 'inline';
    } else {
        player.autoCrunchMode = "amount"
        document.getElementById("togglecrunchmode").innerHTML = "Auto crunch mode: amount"
        document.getElementById("limittext").innerHTML = "Amount of IP to wait until reset:"
        document.getElementById("maxReplicantiCrunchSwitchDiv").style.display = 'none';
    }
    if (player.autobuyers[11].priority === 'max' || document.getElementById('priority12').value.slice(0, 3) === 'max') {
        if (player.autoCrunchMode !== 'replicanti') {
          player.autobuyers[11].priority = new Decimal(Infinity);
        }
        updatePriorities();
    }
}

function toggleEternityConf() {
    if (player.options.eternityconfirm) {
        player.options.eternityconfirm = false
        document.getElementById("eternityconf").innerHTML = "Eternity confimation OFF"
    } else {
        player.options.eternityconfirm = true
        document.getElementById("eternityconf").innerHTML = "Eternity confimation ON"
    }
}

function toggleExtragalaxyConf() {
    if (player.options.extragalaxyconfirm) {
        player.options.extragalaxyconfirm = false
        document.getElementById("extragalaxyconf").innerHTML = "Extragalactic confimation OFF"
    } else {
        player.options.extragalaxyconfirm = true
        document.getElementById("extragalaxyconf").innerHTML = "Extragalactic confimation ON"
    }
}


function toggleReplAuto(i) {
    if (i == "chance") {
        if (player.replicanti.auto[0]) {
            player.replicanti.auto[0] = false
            document.getElementById("replauto1").innerHTML = "Auto: OFF"
        } else {
            player.replicanti.auto[0] = true
            document.getElementById("replauto1").innerHTML = "Auto: ON"
        }
    } else if (i == "interval") {
        if (player.replicanti.auto[1]) {
            player.replicanti.auto[1] = false
            document.getElementById("replauto2").innerHTML = "Auto: OFF"
        } else {
            player.replicanti.auto[1] = true
            document.getElementById("replauto2").innerHTML = "Auto: ON"
        }
    } else if (i == "galaxy") {
        if (player.replicanti.auto[2]) {
            player.replicanti.auto[2] = false
            document.getElementById("replauto3").innerHTML = "Auto: OFF"
        } else {
            player.replicanti.auto[2] = true
            document.getElementById("replauto3").innerHTML = "Auto: ON"
        }
    }
}




function toggleCommas() {
    player.options.commas = !player.options.commas

    if (player.options.commas) document.getElementById("commas").innerHTML = "Commas on large exponents ON"
    else document.getElementById("commas").innerHTML = "Commas on large exponents OFF"
}






buyAutobuyer = function(id) {
    if (player.infinityPoints.lt(player.autobuyers[id].cost)) return false;
    player.infinityPoints = player.infinityPoints.minus(player.autobuyers[id].cost);
    if (player.autobuyers[id].interval <= 100) {
        player.autobuyers[id].bulk = Math.min(player.autobuyers[id].bulk * 2, Number.MAX_VALUE);
        player.autobuyers[id].cost = Math.ceil(2.4*player.autobuyers[id].cost);
        var b1 = true;
	    for (let i=0;i<8;i++) {
            if (player.autobuyers[i].bulk < 512) b1 = false;
        }
        if (b1) giveAchievement("Bulked up");
    } else {
        player.autobuyers[id].interval = Math.max(player.autobuyers[id].interval*0.6, 100);
        if (player.autobuyers[id].interval > 120) player.autobuyers[id].cost *= 2; //if your last purchase wont be very strong, dont double the cost
    }
    updateAutobuyers();
}

document.getElementById("buyerBtn1").onclick = function () {
    buyAutobuyer(0);
}

document.getElementById("buyerBtn2").onclick = function () {

    buyAutobuyer(1);
}

document.getElementById("buyerBtn3").onclick = function () {
    buyAutobuyer(2);
}

document.getElementById("buyerBtn4").onclick = function () {
    buyAutobuyer(3);
}

document.getElementById("buyerBtn5").onclick = function () {
    buyAutobuyer(4);
}

document.getElementById("buyerBtn6").onclick = function () {
    buyAutobuyer(5);
}

document.getElementById("buyerBtn7").onclick = function () {
    buyAutobuyer(6);
}

document.getElementById("buyerBtn8").onclick = function () {
    buyAutobuyer(7);
}

document.getElementById("buyerBtnTickSpeed").onclick = function () {
    buyAutobuyer(8);
}

document.getElementById("buyerBtnDimBoost").onclick = function () {
    buyAutobuyer(9);
}

document.getElementById("buyerBtnGalaxies").onclick = function () {
    buyAutobuyer(10);
}

document.getElementById("buyerBtnInf").onclick = function () {
    buyAutobuyer(11);
}

toggleAutobuyerTarget = function(id) {
    if (player.autobuyers[id-1].target == id) {
        player.autobuyers[id-1].target = 10 + id
        document.getElementById("toggleBtn" + id).innerHTML="Buys until 10"
    } else {
        player.autobuyers[id-1].target = id
        document.getElementById("toggleBtn" + id).innerHTML="Buys singles"
    }
}

document.getElementById("toggleBtn1").onclick = function () {
    toggleAutobuyerTarget(1)
}

document.getElementById("toggleBtn2").onclick = function () {
    toggleAutobuyerTarget(2)
}

document.getElementById("toggleBtn3").onclick = function () {
    toggleAutobuyerTarget(3)
}

document.getElementById("toggleBtn4").onclick = function () {
    toggleAutobuyerTarget(4)
}

document.getElementById("toggleBtn5").onclick = function () {
    toggleAutobuyerTarget(5)
}

document.getElementById("toggleBtn6").onclick = function () {
    toggleAutobuyerTarget(6)
}

document.getElementById("toggleBtn7").onclick = function () {
    toggleAutobuyerTarget(7)
}

document.getElementById("toggleBtn8").onclick = function () {
    toggleAutobuyerTarget(8)
}

document.getElementById("toggleBtnTickSpeed").onclick = function () {
    if (player.autobuyers[8].target == 1) {
        player.autobuyers[8].target = 10
        document.getElementById("toggleBtnTickSpeed").innerHTML="Buys max"
    } else {
        player.autobuyers[8].target = 1
        document.getElementById("toggleBtnTickSpeed").innerHTML="Buys singles"
    }
}

document.getElementById("secondSoftReset").onclick = function() {
    var bool = player.currentChallenge != "challenge11" && player.currentChallenge != "postc1" && player.currentChallenge != "postc7"
    if (player.currentChallenge == "challenge4" ? player.sixthAmount >= getGalaxyRequirement() && bool : player.eightAmount >= getGalaxyRequirement() && bool) {
        galaxyReset()
    }
}

function getDimensionBoostMultiplierOn (i) {
  return Decimal.pow(getDimensionBoostPower(), player.resets - i + 1).max(1);
}

function resetDimPow () {
  for (let i = 1; i < 8; i++) {
    let tier = TIER_NAMES[i];
    player[tier + 'Pow'] = getDimensionBoostMultiplierOn(i);
  }
}

function giveInfPurchaseResets () {
  if (player.currentChallenge === "") {
      if (player.infinityUpgrades.includes("skipReset1")) player.resets = Math.max(player.resets, 1);
      if (player.infinityUpgrades.includes("skipReset2")) player.resets = Math.max(player.resets, 2);
      if (player.infinityUpgrades.includes("skipReset3")) player.resets = Math.max(player.resets, 3);
      if (player.infinityUpgrades.includes("skipResetGalaxy")) {
          player.resets = Math.max(player.resets, 4);
          player.galaxies = Math.max(player.galaxies, 1);
      }
  }
}


function galaxyReset() {
    if (autoS) auto = false;
    autoS = true;
    if (player.sacrificed == 0) giveAchievement("I don't believe in Gods");
    player = {
        money: player.achievements.includes("r111") ? player.money : new Decimal(10),
        tickSpeedCost: new Decimal(1000),
        tickspeed: new Decimal(1000),
        firstCost: new Decimal(10),
        secondCost: new Decimal(100),
        thirdCost: new Decimal(10000),
        fourthCost: new Decimal(1000000),
        fifthCost: new Decimal(1e9),
        sixthCost: new Decimal(1e13),
        seventhCost: new Decimal(1e18),
        eightCost: new Decimal(1e24),
        firstAmount: new Decimal(0),
        secondAmount: new Decimal(0),
        thirdAmount: new Decimal(0),
        fourthAmount: new Decimal(0),
        firstBought: 0,
        secondBought: 0,
        thirdBought: 0,
        fourthBought: 0,
        fifthAmount: new Decimal(0),
        sixthAmount: new Decimal(0),
        seventhAmount: new Decimal(0),
        eightAmount: new Decimal(0),
        fifthBought: 0,
        sixthBought: 0,
        seventhBought: 0,
        eightBought: 0,
        firstPow: new Decimal(1),
        secondPow: new Decimal(1),
        thirdPow: new Decimal(1),
        fourthPow: new Decimal(1),
        fifthPow: new Decimal(1),
        sixthPow: new Decimal(1),
        seventhPow: new Decimal(1),
        eightPow: new Decimal(1),
        sacrificed: new Decimal(0),
        boughtDims: player.boughtDims,
        achievements: player.achievements,
        challenges: player.challenges,
        currentChallenge: player.currentChallenge,
        infinityUpgrades: player.infinityUpgrades,
        infinityPoints: player.infinityPoints,
        infinitied: player.infinitied,
        bankedInfinities: player.bankedInfinities,
        bankedEternities: player.bankedEternities,
        totalTimePlayed: player.totalTimePlayed,
        bestInfinityTime: player.bestInfinityTime,
        thisInfinityTime: player.thisInfinityTime,
        resets: 0,
        galaxies: player.galaxies + 1,
        totalmoney: player.totalmoney,
        tickDecrease: player.tickDecrease - 0.03,
        interval: null,
        lastUpdate: player.lastUpdate,
        achPow: player.achPow,
        newsArray: player.newsArray,
        autobuyers: player.autobuyers,
        costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
        tickspeedMultiplier: new Decimal(10),
        chall2Pow: player.chall2Pow,
        chall3Pow: new Decimal(0.01),
        matter: new Decimal(0),
        chall11Pow: new Decimal(1),
        partInfinityPoint: player.partInfinityPoint,
        partInfinitied: player.partInfinitied,
        break: player.break,
        challengeTimes: player.challengeTimes,
        infchallengeTimes: player.infchallengeTimes,
        lastTenRuns: player.lastTenRuns,
        lastTenEternities: player.lastTenEternities,
        lastTenExtragalaxies: player.lastTenExtragalaxies,
        infMult: player.infMult,
        infMultCost: player.infMultCost,
        tickSpeedMultDecrease: player.tickSpeedMultDecrease,
        tickSpeedMultDecreaseCost: player.tickSpeedMultDecreaseCost,
        dimensionMultDecrease: player.dimensionMultDecrease,
        dimensionMultDecreaseCost: player.dimensionMultDecreaseCost,
        version: player.version,
        overXGalaxies: player.overXGalaxies,
        spreadingCancer: player.spreadingCancer,
        infDimensionsUnlocked: player.infDimensionsUnlocked,
        infinityPower: player.infinityPower,
        postChallUnlocked: player.postChallUnlocked,
        postC4Tier: 1,
        postC3Reward: new Decimal(1),
        infinityDimension1: player.infinityDimension1,
        infinityDimension2: player.infinityDimension2,
        infinityDimension3: player.infinityDimension3,
        infinityDimension4: player.infinityDimension4,
        infinityDimension5: player.infinityDimension5,
        infinityDimension6: player.infinityDimension6,
        infinityDimension7: player.infinityDimension7,
        infinityDimension8: player.infinityDimension8,
        infDimBuyers: player.infDimBuyers,
        timeShards: player.timeShards,
        eternityChallenges: player.eternityChallenges,
        tickThreshold: player.tickThreshold,
        timeDimension1: player.timeDimension1,
        timeDimension2: player.timeDimension2,
        timeDimension3: player.timeDimension3,
        timeDimension4: player.timeDimension4,
        timeDimBuyers: player.timeDimBuyers,
        eternityPoints: player.eternityPoints,
        eternities: player.eternities,
        thisEternity: player.thisEternity,
        bestEternity: player.bestEternity,
        eternityUpgrades: player.eternityUpgrades,
        epmult: player.epmult,
        epmultCost: player.epmultCost,
        totalTickGained: player.totalTickGained,
        offlineProd: player.offlineProd,
        offlineProdCost: player.offlineProdCost,
        challengeTarget: player.challengeTarget,
        autoSacrifice: player.autoSacrifice,
        replicanti: player.replicanti,
        timestudy: player.timestudy,
        autoIP: player.autoIP,
        autoTime: player.autoTime,
        infMultBuyer: player.infMultBuyer,
        eterMultBuyer: player.eterMultBuyer,
        autoCrunchMode: player.autoCrunchMode,
        autoEterMode: player.autoEterMode,
        respec: player.respec,
        eternityBuyer: player.eternityBuyer,
        extragalactic: player.extragalactic,
        peaks: player.peaks,
        options: player.options
    };

    if (player.currentChallenge == "challenge10" || player.currentChallenge == "postc1") {
        chall10AlterCosts();
    }

    giveInfPurchaseResets();

    if (player.currentChallenge == "postc2") {
        player.eightAmount = new Decimal(1);
        player.eightBought = 1;
        player.resets = 4;
    }

    resetDimPow();


    if (player.options.notation == "Emojis") player.spreadingCancer+=1;
    if (player.spreadingCancer >= 10) giveAchievement("Spreading Cancer")
    if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r83")) player.tickspeed = player.tickspeed.times(Decimal.pow(0.95,player.galaxies));
    clearInterval(player.interval);
    //updateInterval();
    if (player.eternities < 30) {
      hideDims();
    }

    if (player.galaxies >= 50) giveAchievement("YOU CAN GET 50 GALAXIES!??")
    if (player.galaxies >= 2) giveAchievement("Double Galaxy");
    if (player.galaxies >= 1) giveAchievement("You got past The Big Wall");

    if (player.replicanti.galaxies >= player.galaxies * 180 && player.galaxies > 0) giveAchievement("Popular music")
    if (player.galaxies >= 2000 && player.replicanti.galaxies === 0) giveAchievement("Unique snowflakes")
    updateInitialMoney();
    giveBoostFromTDTickSpeedUpgrades(player.totalTickGained);
    updateTickSpeed()
    if (player.achievements.includes("r66")) player.tickspeed = player.tickspeed.times(0.98);


};

function copyToClipboard (x) {
  let output = document.getElementById('exportOutput');
  let parent = output.parentElement;

  parent.style.display = "";
  output.value = x;

  output.onblur = function() {
      parent.style.display = "none";
  }

  output.focus();
  output.select();

  try {
      if (document.execCommand('copy')) {
          $.notify("exported to clipboard", "info");
          output.blur();
      }
  } catch(ex) {
      // well, we tried.
  }
}

document.getElementById("exportbtn").onclick = function () {
    copyToClipboard(btoa(JSON.stringify(player, function(k, v) { return (v === Infinity) ? "Infinity" : v; })));
};


document.getElementById("save").onclick = function () {
    save_game();
};

function verify_save(obj) {
    if (typeof obj != 'object') return false;


    return true;
}

document.getElementById("importbtn").onclick = function () {
    var save_data = prompt("Input your save.");
    // Those secret themes aren't secrets. The cheat code, on the other hand, is a secret.
    if (sha512_256(save_data.replace(/\s/g, '').toUpperCase()) === 'a0c89703576f66e78cd3f48f8442aad424cd3b1f01d0a6281cda21628697a13b') {
        player.options.cheat = !player.options.cheat;
        alert('Switched cheat mode to ' + player.options.cheat);
        save_game();
        load_game();
    } else if (sha512_256(save_data.replace(/\s/g, '').toUpperCase()) === 'fe89aef2d6c0f56082b20a6fcac75a1952bcf8aa9df17bcea745e238f20d38bb') {
        player = eternityPlayer;
        save_game();
        load_game();
    } else if (sha512_256(save_data.replace(/\s/g, '').toUpperCase()) === '20f908bdcda66c8d99af767c0667ff3c9b2777dfed0a131293fcdddf1789b30a') {
        player.options.paused = !player.options.paused;
    } else if (sha512_256(save_data.replace(/\s/g, '').toUpperCase()) === '1913fca7ec9cd646e0737f9ca4f282069ed68f69d802cc526ab1fc463956eca2') {
        player.options.offlineProgressDisabled = !player.options.offlineProgressDisabled;
    } else if (save_data.toUpperCase() === "CHRISTMAS") {
        player.options.theme = "Christmas";
        setTheme(player.options.theme);
    } else if (save_data.toUpperCase() === "FINLAND") {
        player.options.theme = "Finnish";
        setTheme(player.options.theme);
    } else {
        save_data = JSON.parse(atob(save_data), function(k, v) { return (v === Infinity) ? "Infinity" : v; });
        if (!save_data || !verify_save(save_data)) {
            alert('could not load the save..');
            load_custom_game();
            return;
        }
        if ('notation' in save_data) {
            player.options.customNotation = save_data['notation'];
            player.options.customNotationName = save_data['name'];
            setCustomNotation();
        } else {
            player = save_data;
            save_game();
            load_game();
            updateChallenges()
            transformSaveToDecimal()
        }
    }
};




document.getElementById("reset").onclick = function () {
    if (confirm("Do you really want to erase all your progress?")) {
        set_save('dimensionSave', defaultStart);
        player = defaultStart
        save_game();
        load_game();
        updateCosts();
        clearInterval(player.interval);
        //updateInterval();

        hideDims();
        updateTickSpeed();
        updateDimensions();
        updateChallenges();
        updateAutobuyers();
        updateReplicantiGalaxyPowerControl();
        updateAntigalaxyBulk();
        updateInfCosts();
    }
};


function breakInfinity() {
    if (player.autobuyers[11]%1 === 0 || player.autobuyers[11].interval>100) return false
    if (player.break && !player.currentChallenge.includes("post")) {
        player.break = false
        document.getElementById("break").innerHTML = "BREAK INFINITY"
    } else {
        player.break = true
        document.getElementById("break").innerHTML = "FIX INFINITY"
        giveAchievement("Limit Break")
    }
}

function gainedInfinityPoints() {
    var ret = Decimal.floor(Decimal.pow(10, player.money.e / 308 - 0.75).times(getIPMult()))
    if (player.achievements.includes("r103")) {
      ret = Decimal.floor(Decimal.pow(10, player.money.e / 307.8 - 0.75).times(getIPMult()));
    }
    if (player.achievements.includes("r116")) {
      ret = ret.times(Math.pow(getInfinitied() + 1, 2));
    } else if (player.achievements.includes("r113")) {
      ret = ret.times(getInfinitied() + 1);
    }
    if (player.achievements.includes("r133")) {
      ret = ret.times(Math.max(player.infinityPower.ln(), 1))
    }
    ret = ret.times(getTSBenefit(5, player.timestudy.studies[5]));
    ret = ret.times(getTSBenefit(6, player.timestudy.studies[6]));
    ret = ret.pow(getTSBenefit(9, player.timestudy.studies[9]));
    return ret
}

function gainedEternityPoints() {
    let ret = Decimal.floor(Decimal.pow(5, player.infinityPoints.e/308 -0.7).times(player.epmult));
    if (player.eternityUpgrades.includes(6)) {
      ret = ret.times(1 + Math.pow(Math.max(player.timeShards.log(10), 0), 0.3));
    }
    ret = ret.pow(getTSBenefit(9, player.timestudy.studies[9]));
    return ret;
}


function setAchieveTooltip() {
    var apocAchieve = document.getElementById("Antimatter Apocalypse");
    var noPointAchieve = document.getElementById("There's no point in doing that");
    var sanic = document.getElementById("Supersanic")
    var forgotAchieve = document.getElementById("I forgot to nerf that")
    var potato = document.getElementById("Faster than a potato")
    var potato2 = document.getElementById("Faster than a squared potato")
    var dimensional = document.getElementById("Multidimensional")
    var IPBelongs = document.getElementById("All your IP are belong to us")
    var reference = document.getElementById("Yet another infinity reference")
    var aMillion = document.getElementById("1 million is a lot")
    let blink = document.getElementById("Blink of an eye")
    let spare = document.getElementById("I got a few to spare")
    let speed = document.getElementById("Ludicrous Speed")
    let speed2 = document.getElementById("I brake for nobody")
    let overdrive = document.getElementById("MAXIMUM OVERDRIVE")
    let minute = document.getElementById("4.33 minutes of Infinity")
    let aLot = document.getElementById("1e(1 million) is a lot")
    let infiniteIP = document.getElementById("Can you get infinite IP?")
    let over9000 = document.getElementById("IT'S OVER 9000")
    let dawg = document.getElementById("Yo dawg, I heard you liked infinities...")
    let layer = document.getElementById("But I wanted another prestige layer...")
    let infstuff = document.getElementById("I never liked this infinity stuff anyway")
    let fkoff = document.getElementById("What do I have to do to get rid of you")
    let goaway = document.getElementById("This is what I have to do to get rid of you.")

    apocAchieve.setAttribute('ach-tooltip', "Get over " + formatValue(player.options.notation, 1e80, 0, 0) + " antimatter");
    noPointAchieve.setAttribute('ach-tooltip', "Buy a single First Dimension when you have over " + formatValue(player.options.notation, 1e150, 0, 0) + " of them. Reward: First Dimensions are 10% stronger");
    sanic.setAttribute('ach-tooltip', "Have antimatter/sec exceed your current antimatter above " + formatValue(player.options.notation, 1e63, 0, 0));
    forgotAchieve.setAttribute('ach-tooltip', "Get any Dimension multiplier over " + formatValue(player.options.notation, 1e31, 0, 0)) + ". Reward: First Dimensions are 5% stronger";
    potato.setAttribute('ach-tooltip', "Get more than " + formatValue(player.options.notation, 1e26, 0, 0) + " ticks per second. Reward: Reduces starting tick interval by 2%");
    potato2.setAttribute('ach-tooltip', "Get more than " + formatValue(player.options.notation, 1e52, 0, 0) + " ticks per second. Reward: Reduces starting tick interval by another 2%");
    dimensional.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, 1e12, 0, 0) + " of all dimensions except 8th");
    IPBelongs.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e150)+" IP. Reward: Additional 4x multiplier to IP")
    reference.setAttribute('ach-tooltip', "Get a x"+shortenDimensions(Number.MAX_VALUE)+" multiplier in a single sacrifice. Reward: Sacrifice is slightly stronger.")
    aMillion.setAttribute('ach-tooltip', "Reach "+shortenCosts(1e6)+" infinity power.");
    blink.setAttribute('ach-tooltip', "Get to Infinity in under 200 milliseconds. Reward: Start with " + formatValue(player.options.notation, 1e25, 0, 0) + " antimatter and all dimensions are stronger in first 300ms of Infinity.");
    spare.setAttribute('ach-tooltip', "Reach " +formatValue(player.options.notation, new Decimal("1e35000"), 0, 0)+" antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have.");
    speed.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e200)+" IP in 2 seconds or less. Reward: All dimensions are significantly stronger in first 5 seconds of infinity.")
    speed2.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e250)+" IP in 20 seconds or less. Reward: All dimensions are significantly stronger in first 60 seconds of infinity.")
    overdrive.setAttribute('ach-tooltip', "Big Crunch with " + shortenCosts(1e300) + " IP/min. Reward: Additional 4x multiplier to IP.")
    minute.setAttribute('ach-tooltip', "Reach " + shortenCosts(1e260) + " infinity power. Reward: Double infinity power gain.")
    aLot.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal('1e1000000')) + " replicanti. Reward: Replicanti increase faster the more you have.")
    infiniteIP.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e30008"))+" IP.")
    over9000.setAttribute('ach-tooltip', "Get a total sacrifice multiplier of "+shortenCosts(new Decimal("1e9000"))+". Reward: Sacrifice doesn't reset your dimensions.")
    dawg.setAttribute('ach-tooltip', "Have each infinity be at least "+shortenMoney(Number.MAX_VALUE)+" times higher IP than the previous one within your past 10 infinities. Reward: Your antimatter doesn't reset on dimension boost or galaxy, and your infinity gain is boosted by your unspent IP.")
    layer.setAttribute('ach-tooltip', "Reach "+shortenMoney(Number.MAX_VALUE)+" EP. Reward: Time dimensions get a multiplier based on EP.")
    infstuff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e14000"))+" IP without buying IDs or IP multipliers.  Reward: Multiplier to IP based on infinity power.")
    fkoff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e66600"))+" IP without any time studies. Reward: Time dimensions are multiplied by the total number of time theorems you have.")
    goaway.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e66600"))+" IP without any time studies, galactic studies, or eternity challenge completions. Reward: Each eternity challenge completion gives a 1.2x multiplier to time dimensions.")
}

document.getElementById("notation").onclick = function () {
    player.options.scientific = !player.options.scientific;
    if (player.options.notation === "Logarithm") {
        player.options.notation = "Mysterious";
        document.getElementById("notation").innerHTML = ("Notation: Mysterious")
    } else if (player.options.notation === "Mysterious") {
        player.options.notation = "Custom";
        document.getElementById("notation").innerHTML = ("Notation: " + player.options.customNotationName);
    } else if (player.options.notation === "Custom") {
        player.options.notation = "Scientific";
        document.getElementById("notation").innerHTML = ("Notation: Scientific")
    } else if (player.options.notation === "Scientific") {
        player.options.notation = "Engineering";
        document.getElementById("notation").innerHTML = ("Notation: Engineering")
    } else if (player.options.notation === "Engineering") {
        player.options.notation = "Letters";
        document.getElementById("notation").innerHTML = ("Notation: Letters")
    } else if (player.options.notation === "Letters") {
        player.options.notation = "Standard";
        document.getElementById("notation").innerHTML = ("Notation: Standard")
    } else if (player.options.notation === "Standard") {
        player.options.notation = "Emojis";
        document.getElementById("notation").innerHTML = ("Notation: Cancer")
    } else if (player.options.notation === "Emojis") {
        player.options.notation = "Mixed scientific";
        document.getElementById("notation").innerHTML = ("Notation: Mixed scientific")
    } else if (player.options.notation === "Mixed scientific") {
        player.options.notation = "Mixed engineering";
        document.getElementById("notation").innerHTML = ("Notation: Mixed engineering")
    } else if (player.options.notation === "Mixed engineering") {
        player.options.notation = "Logarithm";
        document.getElementById("notation").innerHTML = ("Notation: Logarithm")
    }
    setAchieveTooltip();
    updateCosts();
    updateInfCosts()
};


document.getElementById("newsbtn").onclick = function() {
  if (!player.options.newsHidden) {
    document.getElementById("game").style.display = "none";
    player.options.newsHidden = true
  } else {
    document.getElementById("game").style.display = "block";
    player.options.newsHidden = false
    scrollNextMessage()
  }
}


function resetDimensions() {
    var tiers = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];

    for (i = 1; i <= 8; i++) {
        player[tiers[i] + "Amount"] = new Decimal(0)
        player[tiers[i] + "Pow"] = new Decimal(1)
    }
    player.firstCost = new Decimal(10)
    player.secondCost = new Decimal(100)
    player.thirdCost = new Decimal(10000)
    player.fourthCost = new Decimal(1e6)
    player.fifthCost = new Decimal(1e9)
    player.sixthCost = new Decimal(1e13)
    player.seventhCost = new Decimal(1e18)
    player.eightCost = new Decimal(1e24)
    player.eightPow = new Decimal(player.chall11Pow)
}

function preTSCalcSacrificeBoost() {
    if (player.firstAmount == 0) return new Decimal(1);
    if (player.challenges.includes("postc2")) {
        if (player.achievements.includes("r97")) return player.firstAmount.pow(0.012).dividedBy(player.sacrificed.pow(0.012).max(1)).max(1)
        if (player.achievements.includes("r88")) return player.firstAmount.pow(0.011).dividedBy(player.sacrificed.pow(0.011).max(1)).max(1)
        return player.firstAmount.pow(0.01).dividedBy(player.sacrificed.pow(0.01).max(1)).max(1)
    }
    if (player.currentChallenge != "challenge11") {
        var sacrificePow=2;
        if (player.achievements.includes("r32")) sacrificePow += 0.2;
        if (player.achievements.includes("r57")) sacrificePow += 0.3;
        return Decimal.pow((player.firstAmount.e/10.0), sacrificePow).dividedBy(((Decimal.max(player.sacrificed.e, 1)).dividedBy(10.0)).pow(sacrificePow).max(1)).max(1);
    } else {
        return player.firstAmount.pow(0.05).dividedBy(player.sacrificed.pow(0.04).max(1)).max(1);
    }
}

function calcSacrificeBoost () {
  return preTSCalcSacrificeBoost().pow(getTimeStudySacrificePow());
}

function preTSCalcTotalSacrificeBoost() {
    if (player.sacrificed == 0) return new Decimal(1);
    if (player.challenges.includes("postc2")) {
        if (player.achievements.includes("r97")) return player.sacrificed.pow(0.012)
        else if (player.achievements.includes("r88")) return player.sacrificed.pow(0.011)
        else return player.sacrificed.pow(0.01)
    }
    if (player.currentChallenge != "challenge11") {
        var sacrificePow=2;
        if (player.achievements.includes("r32")) sacrificePow += 0.2;
        if (player.achievements.includes("r57")) sacrificePow += 0.3;
        return Decimal.pow((player.sacrificed.e/10.0), sacrificePow);
    } else {
        return player.sacrificed.pow(0.05)
    }
}

function calcTotalSacrificeBoost () {
  return preTSCalcTotalSacrificeBoost().pow(getTimeStudySacrificePow());
}

function getTimeStudySacrificePow (num) {
  if (num === undefined) {
    num = player.timestudy.studies[1];
  }
  return 1 + Math.log(1 + Math.log(1 + num / 5))
}

function canSacrifice () {
    return player.eightAmount.gt(0) && player.resets >= 5 && player.eternityChallenges.current !== 3;
}

function sacrifice() {
    if (!canSacrifice()) return false;
    player.eightPow = player.eightPow.times(calcSacrificeBoost())
    player.sacrificed = player.sacrificed.plus(player.firstAmount);
    if (player.currentChallenge != "challenge11") {
        // for safety, only give these outside of the troublesome challenge
        if (calcSacrificeBoost().gte(Number.MAX_VALUE)) giveAchievement("Yet another infinity reference");
        if (calcTotalSacrificeBoost().gte(new Decimal('1e9000'))) giveAchievement("IT'S OVER 9000");
        if (!player.achievements.includes('r118')) {
            if (player.currentChallenge == "challenge7") clearDimensions(6);
            else clearDimensions(7);
        }
    } else if (player.chall11Pow.lte(new Decimal(Number.MAX_VALUE))) {
        // challenge 11 ignores sacrifice being over 9000
        player.chall11Pow = player.chall11Pow.times(calcSacrificeBoost());
        resetDimensions();
        player.money = new Decimal(100)
    }
    if (calcTotalSacrificeBoost() >= 600) giveAchievement("The Gods are pleased");
}




document.getElementById("sacrifice").onclick = function () {
    if (!document.getElementById("confirmation").checked) {
        if (!confirm("Dimensional Sacrifice will remove all of your first to seventh dimensions (with the cost and multiplier unchanged) for a boost to Eighth Dimension. It will take time to regain production.")) {
            return false;
        }
    }
    auto = false;
    return sacrifice();
}


function updateAutobuyers() {
    var autoBuyerDim1 = new Autobuyer (1)
    var autoBuyerDim2 = new Autobuyer (2)
    var autoBuyerDim3 = new Autobuyer (3)
    var autoBuyerDim4 = new Autobuyer (4)
    var autoBuyerDim5 = new Autobuyer (5)
    var autoBuyerDim6 = new Autobuyer (6)
    var autoBuyerDim7 = new Autobuyer (7)
    var autoBuyerDim8 = new Autobuyer (8)
    var autoBuyerDimBoost = new Autobuyer (9)
    var autoBuyerGalaxy = new Autobuyer (document.getElementById("secondSoftReset"))
    // The tickspeed autobuyer target code is weird.
    var autoBuyerTickspeed = new Autobuyer (1)
    var autoBuyerInf = new Autobuyer (document.getElementById("bigcrunch"))
    var autoSacrifice = new Autobuyer(13)


    autoBuyerDim1.interval = 3000
    autoBuyerDim2.interval = 4000
    autoBuyerDim3.interval = 5000
    autoBuyerDim4.interval = 6000
    autoBuyerDim5.interval = 8000
    autoBuyerDim6.interval = 10000
    autoBuyerDim7.interval = 12000
    autoBuyerDim8.interval = 15000
    autoBuyerDimBoost.interval = 16000
    autoBuyerGalaxy.interval = 300000
    autoBuyerTickspeed.interval = 10000
    autoBuyerInf.interval = 300000

    // should we do this? or should we default to not buying tickspeed
    // when the multiplier would increase?
    autoBuyerTickspeed.buyTickspeedWhenMultIncreases = true;

    autoSacrifice.interval = 100
    autoSacrifice.priority = 5

    autoBuyerInf.priority = new Decimal(1)

    autoBuyerDim1.tier = 1
    autoBuyerDim2.tier = 2
    autoBuyerDim3.tier = 3
    autoBuyerDim4.tier = 4
    autoBuyerDim5.tier = 5
    autoBuyerDim6.tier = 6
    autoBuyerDim7.tier = 7
    autoBuyerDim8.tier = 8
    autoBuyerTickSpeed.tier = 9

    if (player.challenges.includes("challenge1") && player.autobuyers[0] == 1) {
        player.autobuyers[0] = autoBuyerDim1
        document.getElementById("autoBuyer1").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge2") && player.autobuyers[1] == 2) {
        player.autobuyers[1] = autoBuyerDim2
        document.getElementById("autoBuyer2").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge3") && player.autobuyers[2] == 3) {
        player.autobuyers[2] = autoBuyerDim3
        document.getElementById("autoBuyer3").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge4") && player.autobuyers[9] == 10) {
        player.autobuyers[9] = autoBuyerDimBoost
        document.getElementById("autoBuyerDimBoost").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge5") && player.autobuyers[8] == 9) {
        player.autobuyers[8] = autoBuyerTickspeed
        document.getElementById("autoBuyerTickSpeed").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge6") && player.autobuyers[4] == 5) {
        player.autobuyers[4] = autoBuyerDim5
        document.getElementById("autoBuyer5").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge7") && player.autobuyers[11] == 12) {
        player.autobuyers[11] = autoBuyerInf
        document.getElementById("autoBuyerInf").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge8") && player.autobuyers[3] == 4) {
        player.autobuyers[3] = autoBuyerDim4
        document.getElementById("autoBuyer4").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge9") && player.autobuyers[6] == 7) {
        player.autobuyers[6] = autoBuyerDim7
        document.getElementById("autoBuyer7").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge10") && player.autobuyers[5] == 6) {
        player.autobuyers[5] = autoBuyerDim6
        document.getElementById("autoBuyer6").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge11") && player.autobuyers[7] == 8) {
        player.autobuyers[7] = autoBuyerDim8
        document.getElementById("autoBuyer8").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge12") && player.autobuyers[10] == 11) {
        player.autobuyers[10] = autoBuyerGalaxy
        document.getElementById("autoBuyerGalaxies").style.display = "inline-block"
    }

    if (player.challenges.includes("postc2") && player.autoSacrifice == 1) {
        player.autoSacrifice = autoSacrifice
        document.getElementById("autoBuyerSac").style.display = "inline-block"
    }

    if (player.infinityUpgrades.includes("autoBuyerUpgrade")) {
      document.getElementById("interval1").innerHTML = "Current interval: " + (player.autobuyers[0].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval2").innerHTML = "Current interval: " + (player.autobuyers[1].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval3").innerHTML = "Current interval: " + (player.autobuyers[2].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval4").innerHTML = "Current interval: " + (player.autobuyers[3].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval5").innerHTML = "Current interval: " + (player.autobuyers[4].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval6").innerHTML = "Current interval: " + (player.autobuyers[5].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval7").innerHTML = "Current interval: " + (player.autobuyers[6].interval/2000).toFixed(2) + " seconds";
      document.getElementById("interval8").innerHTML = "Current interval: " + (player.autobuyers[7].interval/2000).toFixed(2) + " seconds";
      document.getElementById("intervalTickSpeed").innerHTML = "Current interval: " + (player.autobuyers[8].interval/2000).toFixed(2) + " seconds";
      document.getElementById("intervalDimBoost").innerHTML = "Current interval: " + (player.autobuyers[9].interval/2000).toFixed(2) + " seconds";
      document.getElementById("intervalGalaxies").innerHTML = "Current interval: " + (player.autobuyers[10].interval/2000).toFixed(2) + " seconds";
      document.getElementById("intervalInf").innerHTML = "Current interval: " + (player.autobuyers[11].interval/2000).toFixed(2) + " seconds";
    } else {
      document.getElementById("interval1").innerHTML = "Current interval: " + (player.autobuyers[0].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval2").innerHTML = "Current interval: " + (player.autobuyers[1].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval3").innerHTML = "Current interval: " + (player.autobuyers[2].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval4").innerHTML = "Current interval: " + (player.autobuyers[3].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval5").innerHTML = "Current interval: " + (player.autobuyers[4].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval6").innerHTML = "Current interval: " + (player.autobuyers[5].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval7").innerHTML = "Current interval: " + (player.autobuyers[6].interval/1000).toFixed(2) + " seconds";
      document.getElementById("interval8").innerHTML = "Current interval: " + (player.autobuyers[7].interval/1000).toFixed(2) + " seconds";
      document.getElementById("intervalTickSpeed").innerHTML = "Current interval: " + (player.autobuyers[8].interval/1000).toFixed(2) + " seconds";
      document.getElementById("intervalDimBoost").innerHTML = "Current interval: " + (player.autobuyers[9].interval/1000).toFixed(2) + " seconds";
      document.getElementById("intervalGalaxies").innerHTML = "Current interval: " + (player.autobuyers[10].interval/1000).toFixed(2) + " seconds";
      document.getElementById("intervalInf").innerHTML = "Current interval: " + (player.autobuyers[11].interval/1000).toFixed(2) + " seconds";
    }


    var maxedAutobuy = 0;
    for (let tier = 1; tier <= 8; ++tier) {
        document.getElementById("toggleBtn" + tier).style.display = "inline-block";
        if (player.autobuyers[tier-1].interval <= 100) {
            document.getElementById("buyerBtn" + tier).innerHTML = shortenDimensions(player.autobuyers[tier-1].bulk*2)+"x bulk purchase<br>Cost: " + shortenDimensions(player.autobuyers[tier-1].cost) + " IP"
            maxedAutobuy++;
        }
        else document.getElementById("buyerBtn" + tier).innerHTML = "40% smaller interval <br>Cost: " + shortenDimensions(player.autobuyers[tier-1].cost) + " IP"

    }

    if (player.autobuyers[8].interval <= 100) {
        document.getElementById("buyerBtnTickSpeed").style.display = "none"
        document.getElementById("toggleBtnTickSpeed").style.display = "inline-block"
        maxedAutobuy++;
    }
    if (player.autobuyers[9].interval <= 100) {
        document.getElementById("buyerBtnDimBoost").style.display = "none"
        maxedAutobuy++;
    }
    if (player.autobuyers[10].interval <= 100) {
        document.getElementById("buyerBtnGalaxies").style.display = "none"
        maxedAutobuy++;
    }
    if (player.autobuyers[11].interval <= 100) {
        document.getElementById("buyerBtnInf").style.display = "none"
        maxedAutobuy++;
    }
    if (maxedAutobuy >= 9) giveAchievement("Age of Automation");
    if (maxedAutobuy >= 12) giveAchievement("Definitely not worth it");

    document.getElementById("buyerBtnTickSpeed").innerHTML = "40% smaller interval <br>Cost: " + player.autobuyers[8].cost + " IP"
    document.getElementById("buyerBtnDimBoost").innerHTML = "40% smaller interval <br>Cost: " + player.autobuyers[9].cost + " IP"
    document.getElementById("buyerBtnGalaxies").innerHTML = "40% smaller interval <br>Cost: " + player.autobuyers[10].cost + " IP"
    document.getElementById("buyerBtnInf").innerHTML = "40% smaller interval <br>Cost: " + player.autobuyers[11].cost + " IP"


    for (var i=0; i<8; i++) {
        if (player.autobuyers[i]%1 !== 0) {
            document.getElementById("autoBuyer"+(i+1)).style.display = "inline-block"
        } else {
            document.getElementById("autoBuyer"+(i+1)).style.display = "none"
        }
    }
    if (player.autobuyers[8]%1 !== 0) {
        document.getElementById("autoBuyerTickSpeed").style.display = "inline-block"
    } else {
        document.getElementById("autoBuyerTickSpeed").style.display = "none"
    }
    if (player.autobuyers[9]%1 !== 0) {
        document.getElementById("autoBuyerDimBoost").style.display = "inline-block"
    } else {
        document.getElementById("autoBuyerDimBoost").style.display = "none"
    }
    if (player.autobuyers[10]%1 !== 0) {
        document.getElementById("autoBuyerGalaxies").style.display = "inline-block"
    } else {
        document.getElementById("autoBuyerGalaxies").style.display = "none"
    }
    if (player.autobuyers[11]%1 !== 0) {
        document.getElementById("autoBuyerInf").style.display = "inline-block"
    } else {
        document.getElementById("autoBuyerInf").style.display = "none"
    }
    if (player.autoSacrifice%1 !== 0) {
        document.getElementById("autoBuyerSac").style.display = "inline-block"
    } else {
        document.getElementById("autoBuyerSac").style.display = "none"
    }

    for (var i=1; i<=12; i++) {
        player.autobuyers[i-1].isOn = document.getElementById(i + "ison").checked;
    }

    player.autoSacrifice.isOn = document.getElementById("13ison").checked
    player.eternityBuyer.isOn = document.getElementById("eternityison").checked
    player.replicanti.galaxybuyer.on = document.getElementById("replgalaxyison").checked
    priorityOrder();
}


function autoBuyerArray() {
    var tempArray = []
    for (var i=0; i<player.autobuyers.length && i<9; i++) {
        if (player.autobuyers[i]%1 !== 0 ) {
            tempArray.push(player.autobuyers[i])
        }
    }
    return tempArray;
}


var priority = []


function priorityOrder() {
    var tempArray = []
    var i = 1;
    while(tempArray.length != autoBuyerArray().length) {

        for (var x=0 ; x< autoBuyerArray().length; x++) {
            if (autoBuyerArray()[x].priority == i) tempArray.push(autoBuyerArray()[x])
        }
        i++;
    }
    priority = tempArray;
}


function updatePriorities() {
    for (var x=0 ; x < autoBuyerArray().length; x++) {
        if (x < 9) autoBuyerArray()[x].priority = parseInt(document.getElementById("priority" + (x+1)).value)
    }
    player.autobuyers[8].buyTickspeedWhenMultIncreases = document.getElementById('buyTickspeedWhenMultIncreases').checked;
    player.autobuyers[9].priority = parseInt(document.getElementById("priority10").value)
    player.autobuyers[10].priority = parseInt(document.getElementById("priority11").value)
    var infvalue = document.getElementById("priority12").value
    if (infvalue.slice(0, 3) === 'max' && player.autoCrunchMode === 'replicanti') {
      infvalue = 'max';
    } else if (infvalue.slice(0, 3) === 'max' || infvalue.slice(0, 3) === 'inf' || '' + infvalue === undefined || Number.isNaN(new Decimal(infvalue).mantissa)) {
      infvalue = new Decimal(Infinity);
    } else {
      infvalue = new Decimal(infvalue);
    }
    player.autobuyers[11].priority = infvalue
    player.autobuyers[11].requireMaxReplicanti = document.getElementById('maxReplicantiCrunchSwitch').checked;
    player.autobuyers[11].requireIPPeak = document.getElementById('requireIPPeak').checked;
    var bulk = Math.max(parseFloat(document.getElementById("bulkDimboost").value), 0.05)
    if (isNaN(bulk)) bulk = 1
    player.autobuyers[9].bulk = bulk
    player.overXGalaxies = parseInt(document.getElementById("overGalaxies").value)
    var sacValue = document.getElementById("prioritySac").value
    if (sacValue.includes("e")) sacValue = parseFloat(sacValue.split("e")[0]) * Math.pow(10, parseInt(sacValue.split("e")[1]))
    else sacValue = parseFloat(sacValue)
    player.autoSacrifice.priority = isNaN(sacValue) ? 10 : sacValue
    if (player.autoSacrifice.priority === null) player.autoSacrifice.priority = 10
    if (player.autoSacrifice.priority == 1) player.autoSacrifice.priority = 1.5
    player.autobuyers[10].bulk = parseFloat(document.getElementById("bulkgalaxy").value)

    var replBulk = document.getElementById("bulkreplgalaxy").value
    if (replBulk.slice(0, 3) === 'max') {
      replBulk = 'max';
    } else {
      replBulk = parseInt(replBulk);
      if (isNaN(replBulk)) {
        replBulk = 1;
      }
    }
    if (!player.achievements.includes('r134')) {
      replBulk = 1;
    }

    var replWait = parseFloat(document.getElementById("bulkreplgalaxy").value)
    if (!player.achievements.includes('r134') || isNaN(replWait)) {
      replWait = 0;
    }
    player.replicanti.galaxybuyer.bulk = replBulk;
    player.replicanti.galaxybuyer.wait = replWait;
    var eterValue = new Decimal(document.getElementById("priority13").value)
    if (!isNaN(eterValue)) player.eternityBuyer.limit = eterValue

    priorityOrder()
}

function updateCheckBoxes() {
    for (var i = 0; i < 12; i++) {
        if (player.autobuyers[i]%1 !== 0) {
            if (player.autobuyers[i].isOn) document.getElementById((i+1) + "ison").checked = "true";
            else document.getElementById((i+1) + "ison").checked = ""
        }
    }
    if (player.autoSacrifice.isOn) document.getElementById("13ison").checked = "true"
    else document.getElementById("13ison").checked = ""
    document.getElementById("eternityison").checked = player.eternityBuyer.isOn;
    document.getElementById("replgalaxyison").checked = player.replicanti.galaxybuyer.on;
}


function toggleAutoBuyers() {
    var bool = player.autobuyers[0].isOn
    for (var i = 0; i<12; i++) {
        if (player.autobuyers[i]%1 !== 0) {
            player.autobuyers[i].isOn = !bool
        }
    }
    player.autoSacrifice.isOn = !bool
    player.eternityBuyer.isOn = !bool
    player.replicanti.galaxybuyer.on = !bool
    updateCheckBoxes()
    updateAutobuyers()
}

function toggleBulk() {

    if (player.options.bulkOn) {
        player.options.bulkOn = false
        document.getElementById("togglebulk").innerHTML = "Enable bulk buy"
    } else {
        player.options.bulkOn = true
        document.getElementById("togglebulk").innerHTML = "Disable bulk buy"
    }
}

function toggleHotkeys() {
    if (player.options.hotkeys) {
        player.options.hotkeys = false
        document.getElementById("hotkeys").innerHTML = "Enable hotkeys"
    } else {
        player.options.hotkeys = true
        document.getElementById("hotkeys").innerHTML = "Disable hotkeys"
    }
}








function updateChallengeTimes() {
    // make sure that our total challenge time variables are up to date
    checkForEndMe();
    document.getElementById("challengetime2").innerHTML = "Challenge  " + 2 + " time record " + timeDisplayShort(player.challengeTimes[0])
    document.getElementById("challengetime3").innerHTML = "Challenge  " + 3 + " time record " + timeDisplayShort(player.challengeTimes[1])
    document.getElementById("challengetime4").innerHTML = "Challenge  " + 4 + " time record " + timeDisplayShort(player.challengeTimes[6])
    document.getElementById("challengetime5").innerHTML = "Challenge  " + 5 + " time record " + timeDisplayShort(player.challengeTimes[4])
    document.getElementById("challengetime6").innerHTML = "Challenge  " + 6 + " time record " + timeDisplayShort(player.challengeTimes[8])
    document.getElementById("challengetime7").innerHTML = "Challenge  " + 7 + " time record " + timeDisplayShort(player.challengeTimes[7])
    document.getElementById("challengetime8").innerHTML = "Challenge  " + 8 + " time record " + timeDisplayShort(player.challengeTimes[9])
    document.getElementById("challengetime9").innerHTML = "Challenge  " + 9 + " time record " + timeDisplayShort(player.challengeTimes[3])
    document.getElementById("challengetime10").innerHTML = "Challenge " + 10 + " time record " + timeDisplayShort(player.challengeTimes[2])
    document.getElementById("challengetime11").innerHTML = "Challenge " + 11 + " time record " + timeDisplayShort(player.challengeTimes[10])
    document.getElementById("challengetime12").innerHTML = "Challenge " + 12 + " time record " + timeDisplayShort(player.challengeTimes[5])
    document.getElementById("challengetimetotal").innerHTML = "Sum of challenge time records " + timeDisplayShort(challengeTimes)

    for (var i=0; i<8; i++) {
        document.getElementById("infchallengetime"+(i+1)).innerHTML = "Infinity Challenge " + (i+1) + " time record " + timeDisplayShort(player.infchallengeTimes[i])
    }
    document.getElementById("infchallengetimetotal").innerHTML = "Sum of infinity challenge time records " + timeDisplayShort(infchallengeTimes)
    updateWorstChallengeTime();
}

var bestRunIppm = new Decimal(0)
function updateLastTenRuns() {
    let tempBest = 0
    var tempTime = new Decimal(0)
    var tempIP = new Decimal(0)
    for (var i=0; i<10;i++) {
        tempTime = tempTime.plus(player.lastTenRuns[i][0])
        tempIP = tempIP.plus(player.lastTenRuns[i][1])
    }
    tempTime = tempTime.dividedBy(10)
    tempIP = tempIP.dividedBy(10)
    for (var i=0; i<10; i++) {
        var ippm = player.lastTenRuns[i][1].dividedBy(player.lastTenRuns[i][0]/600)
        if (ippm.gt(tempBest)) tempBest = ippm
        var tempstring = shorten(ippm) + " IP/min"
        if (ippm<1) tempstring = shorten(ippm*60) + " IP/hour"
        document.getElementById("run"+(i+1)).innerHTML = "The infinity "+(i+1)+" infinities ago took " + timeDisplayShort(player.lastTenRuns[i][0]) + " and gave " + shortenDimensions(player.lastTenRuns[i][1]) +" IP. "+ tempstring
    }

    var ippm = tempIP.dividedBy(tempTime/600)
    var tempstring = shorten(ippm) + " IP/min"
    if (ippm<1) tempstring = shorten(ippm*60) + " IP/hour"
    document.getElementById("averagerun").innerHTML = "Last 10 infinities average time: "+ timeDisplayShort(tempTime)+" Average IP gain: "+shortenDimensions(tempIP)+" IP. "+tempstring

    if (tempBest.gte(1e8)) giveAchievement("Oh hey, you're still here");
    if (tempBest.gte(1e300)) giveAchievement("MAXIMUM OVERDRIVE");

    bestRunIppm = tempBest
}

var averageEp = new Decimal(0)
function updateLastTenEternities() {
    let tempBest = 0
    var tempTime = new Decimal(0)
    var tempEP = new Decimal(0)
    for (var i=0; i<10;i++) {
        tempTime = tempTime.plus(player.lastTenEternities[i][0])
        tempEP = tempEP.plus(player.lastTenEternities[i][1])
    }
    tempTime = tempTime.dividedBy(10)
    tempEP = tempEP.dividedBy(10)
    for (var i=0; i<10; i++) {
        var eppm = player.lastTenEternities[i][1].dividedBy(player.lastTenEternities[i][0]/600)
        if (eppm.gt(tempBest)) tempBest = eppm
        var tempstring = shorten(eppm) + " EP/min"
        if (eppm<1) tempstring = shorten(eppm*60) + " EP/hour"
        document.getElementById("eternityrun"+(i+1)).innerHTML = "The Eternity "+(i+1)+" eternities ago took " + timeDisplayShort(player.lastTenEternities[i][0]) + " and gave " + shortenDimensions(player.lastTenEternities[i][1]) +" EP. "+ tempstring
    }

    var eppm = tempEP.dividedBy(tempTime/600)
    var tempstring = shorten(eppm) + " EP/min"
    averageEp = tempEP
    if (eppm<1) tempstring = shorten(eppm*60) + " EP/hour"
    document.getElementById("averageEternityRun").innerHTML = "Last 10 eternities average time: "+ timeDisplayShort(tempTime)+" Average EP gain: "+shortenDimensions(tempEP)+" EP. "+tempstring
}

function addEternityTime(time, ep) {
    for (var i=player.lastTenEternities.length-1; i>0; i--) {
        player.lastTenEternities[i] = player.lastTenEternities[i-1]
    }
    player.lastTenEternities[0] = [time, ep]
}

var averageGp = new Decimal(0)
function updateLastTenExtragalaxies() {
    let tempBest = 0
    var tempTime = new Decimal(0)
    var tempGP = new Decimal(0)
    for (var i=0; i<10;i++) {
        tempTime = tempTime.plus(player.lastTenExtragalaxies[i][0])
        tempGP = tempGP.plus(player.lastTenExtragalaxies[i][1])
    }
    tempTime = tempTime.dividedBy(10)
    tempGP = tempGP.dividedBy(10)
    for (var i=0; i<10; i++) {
        var gppm = player.lastTenExtragalaxies[i][1].dividedBy(player.lastTenExtragalaxies[i][0]/600)
        if (gppm.gt(tempBest)) tempBest = gppm
        var tempstring = shorten(gppm) + " GP/min"
        if (gppm<1) tempstring = shorten(gppm*60) + " GP/hour"
        document.getElementById("extragalaxyrun"+(i+1)).innerHTML = "The Extragalaxy "+(i+1)+" extragalaxies ago took " + timeDisplayShort(player.lastTenExtragalaxies[i][0]) + " and gave " + shortenDimensions(player.lastTenExtragalaxies[i][1]) +" GP. "+ tempstring
    }

    var gppm = tempGP.dividedBy(tempTime/600)
    var tempstring = shorten(gppm) + " IP/min"
    averageGp = tempGP
    if (gppm<1) tempstring = shorten(gppm*60) + " IP/hour"
    document.getElementById("averageExtragalaxyRun").innerHTML = "Last 10 extragalaxies average time: "+ timeDisplayShort(tempTime)+" Average GP gain: "+shortenDimensions(tempGP)+" GP. "+tempstring
}

function addExtragalacticTime(time, gp) {
    for (var i=player.lastTenExtragalaxies.length-1; i>0; i--) {
        player.lastTenExtragalaxies[i] = player.lastTenExtragalaxies[i-1]
    }
    player.lastTenExtragalaxies[0] = [time, gp]
}


document.getElementById("postInfinityButton").onclick = function() {document.getElementById("bigcrunch").click()}

function addTime(time, ip) {
    for (var i=player.lastTenRuns.length-1; i>0; i--) {
        player.lastTenRuns[i] = player.lastTenRuns[i-1]
    }
    player.lastTenRuns[0] = [time, ip]
}

var challengeTimes = 999999999

var infchallengeTimes = 999999999

function checkForEndMe() {
    var temp = 0
    for (var i=0; i<11; i++) {
        temp += player.challengeTimes[i]
    }
    challengeTimes = temp
    if (temp <= 1800) giveAchievement("Not-so-challenging")
    if (temp <= 50) giveAchievement("End me")
    var temp2 = 0
    for (var i=0; i<8;i++) {
        temp2 += player.infchallengeTimes[i]
    }
    infchallengeTimes = temp2
    if (temp2 <= 50) giveAchievement("Yes. This is hell.")
}


document.getElementById("bigcrunch").onclick = function () {
    var challNumber = parseInt(player.currentChallenge[player.currentChallenge.length-1])
    if (player.currentChallenge.length == 11) challNumber = parseInt("1"+player.currentChallenge[player.currentChallenge.length-1])
    if ((player.money.gte(Number.MAX_VALUE) && !player.currentChallenge.includes("post")) || (player.currentChallenge !== "" && player.money.gte(player.challengeTarget))) {
        if (player.thisInfinityTime <= 72000) giveAchievement("That's fast!");
        if (player.thisInfinityTime <= 6000) giveAchievement("That's faster!")
        if (player.thisInfinityTime <= 600) giveAchievement("Forever isn't that long")
        if (player.thisInfinityTime <= 2) giveAchievement("Blink of an eye")
        if (!player.achievements.includes("r34") && player.eightAmount == 0) giveAchievement("You didn't need it anyway");
        if (!player.achievements.includes("r36") && player.galaxies == 1) giveAchievement("Claustrophobic");
        if (!player.achievements.includes("r43") && player.galaxies == 0 && player.resets == 0) giveAchievement("Zero Deaths")
        if (player.currentChallenge == "challenge2" && player.thisInfinityTime <= 1800) giveAchievement("Many Deaths")
        if (player.currentChallenge == "challenge11" && player.thisInfinityTime <= 1800) giveAchievement("Gift from the Gods")
        if (player.currentChallenge == "challenge5" && player.thisInfinityTime <= 1800) giveAchievement("Is this hell?")
        if (player.currentChallenge == "challenge3" && player.thisInfinityTime <= 100) giveAchievement("You did this again just for the achievement right?");
        if (player.firstAmount == 1 && player.resets == 0 && player.galaxies == 0 && player.currentChallenge == "challenge12") giveAchievement("ERROR 909: Dimension not found")
        if (player.currentChallenge != "" && player.challengeTimes[challNumber-2] > player.thisInfinityTime) player.challengeTimes[challNumber-2] = player.thisInfinityTime
        if (player.currentChallenge.includes("post") && player.infchallengeTimes[challNumber-1] > player.thisInfinityTime) player.infchallengeTimes[challNumber-1] = player.thisInfinityTime
        if (player.currentChallenge == "postc5" && player.thisInfinityTime <= 100) giveAchievement("Hevipelle did nothing wrong")
        if ((player.bestInfinityTime > 600 && !player.break) || (player.currentChallenge != "" && !player.options.retryChallenge)) showTab("dimensions")
        if (player.currentChallenge != "" && !player.challenges.includes(player.currentChallenge)) {
            player.challenges.push(player.currentChallenge);
        }
        if (player.challenges.length > 12) giveAchievement("Infinitely Challenging");
        if (player.challenges.length == 20) giveAchievement("Anti-antichallenged");
        let infinityGain = getInfinitiedGain(player.thisInfinityTime);
        if (!player.break || player.currentChallenge != "") {
            var add = getIPMult();
            player.infinityPoints = player.infinityPoints.plus(add);
            addTime(player.thisInfinityTime, add)
        }
        else {
            player.infinityPoints = player.infinityPoints.plus(gainedInfinityPoints())
            addTime(player.thisInfinityTime, gainedInfinityPoints())
            if (gainedInfinityPoints().gte(1e150)) giveAchievement("All your IP are belong to us")
            if (gainedInfinityPoints().gte(1e200) && player.thisInfinityTime <= 20) giveAchievement("Ludicrous Speed")
            if (gainedInfinityPoints().gte(1e250) && player.thisInfinityTime <= 200) giveAchievement("I brake for nobody")
        }
        if (!player.achievements.includes("r111") && player.lastTenRuns[9][1] != 1) {
            var n = 0;
            for (i=0; i<9; i++) {
                if (player.lastTenRuns[i][1].gte(player.lastTenRuns[i+1][1].times(Number.MAX_VALUE))) n++;
            }
            if (n == 9) giveAchievement("Yo dawg, I heard you liked infinities...")
        }
        if (autoS && auto) {
          if (gainedInfinityPoints().dividedBy(player.thisInfinityTime).gt(player.autoIP)) player.autoIP = gainedInfinityPoints().dividedBy(player.thisInfinityTime);
          if (player.thisInfinityTime<player.autoTime) player.autoTime = player.thisInfinityTime;
        }
        auto = !autoS; //only allow autoing if prev crunch was autoed
        autoS = true;
        player = {
        money: new Decimal(10),
        tickSpeedCost: new Decimal(1000),
        tickspeed: new Decimal(1000),
        firstCost: new Decimal(10),
        secondCost: new Decimal(100),
        thirdCost: new Decimal(10000),
        fourthCost: new Decimal(1000000),
        fifthCost: new Decimal(1e9),
        sixthCost: new Decimal(1e13),
        seventhCost: new Decimal(1e18),
        eightCost: new Decimal(1e24),
        firstAmount: new Decimal(0),
        secondAmount: new Decimal(0),
        thirdAmount: new Decimal(0),
        fourthAmount: new Decimal(0),
        firstBought: 0,
        secondBought: 0,
        thirdBought: 0,
        fourthBought: 0,
        fifthAmount: new Decimal(0),
        sixthAmount: new Decimal(0),
        seventhAmount: new Decimal(0),
        eightAmount: new Decimal(0),
        fifthBought: 0,
        sixthBought: 0,
        seventhBought: 0,
        eightBought: 0,
        firstPow: new Decimal(1),
        secondPow: new Decimal(1),
        thirdPow: new Decimal(1),
        fourthPow: new Decimal(1),
        fifthPow: new Decimal(1),
        sixthPow: new Decimal(1),
        seventhPow: new Decimal(1),
        eightPow: new Decimal(1),
        sacrificed: new Decimal(0),
        boughtDims: player.boughtDims,
        achievements: player.achievements,
        challenges: player.challenges,
        currentChallenge: player.currentChallenge,
        infinityUpgrades: player.infinityUpgrades,
        infinityPoints: player.infinityPoints,
        infinitied: player.infinitied + infinityGain,
        bankedInfinities: player.bankedInfinities,
        bankedEternities: player.bankedEternities,
        totalTimePlayed: player.totalTimePlayed,
        bestInfinityTime: Math.min(player.bestInfinityTime, player.thisInfinityTime),
        thisInfinityTime: 0,
        resets: 0,
        galaxies: 0,
        tickDecrease: 0.9,
        totalmoney: player.totalmoney,
        interval: null,
        lastUpdate: player.lastUpdate,
        achPow: player.achPow,
        autobuyers: player.autobuyers,
        costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
        tickspeedMultiplier: new Decimal(10),
        chall2Pow: 1,
        chall3Pow: new Decimal(0.01),
        newsArray: player.newsArray,
        matter: new Decimal(0),
        chall11Pow: new Decimal(1),
        partInfinityPoint: player.partInfinityPoint,
        partInfinitied: player.partInfinitied,
        break: player.break,
        challengeTimes: player.challengeTimes,
        infchallengeTimes: player.infchallengeTimes,
        lastTenRuns: player.lastTenRuns,
        lastTenEternities: player.lastTenEternities,
        lastTenExtragalaxies: player.lastTenExtragalaxies,
        infMult: player.infMult,
        infMultCost: player.infMultCost,
        tickSpeedMultDecrease: player.tickSpeedMultDecrease,
        tickSpeedMultDecreaseCost: player.tickSpeedMultDecreaseCost,
        dimensionMultDecrease: player.dimensionMultDecrease,
        dimensionMultDecreaseCost: player.dimensionMultDecreaseCost,
        version: player.version,
        postChallUnlocked: player.postChallUnlocked,
        postC4Tier: 1,
        postC3Reward: new Decimal(1),
        overXGalaxies: player.overXGalaxies,
        spreadingCancer: player.spreadingCancer,
        infDimensionsUnlocked: player.infDimensionsUnlocked,
        infinityPower: player.infinityPower,
        infinityDimension1: player.infinityDimension1,
        infinityDimension2: player.infinityDimension2,
        infinityDimension3: player.infinityDimension3,
        infinityDimension4: player.infinityDimension4,
        infinityDimension5: player.infinityDimension5,
        infinityDimension6: player.infinityDimension6,
        infinityDimension7: player.infinityDimension7,
        infinityDimension8: player.infinityDimension8,
        infDimBuyers: player.infDimBuyers,
        timeShards: player.timeShards,
        eternityChallenges: player.eternityChallenges,
        tickThreshold: player.tickThreshold,
        timeDimension1: player.timeDimension1,
        timeDimension2: player.timeDimension2,
        timeDimension3: player.timeDimension3,
        timeDimension4: player.timeDimension4,
        timeDimBuyers: player.timeDimBuyers,
        eternityPoints: player.eternityPoints,
        eternities: player.eternities,
        thisEternity: player.thisEternity,
        bestEternity: player.bestEternity,
        eternityUpgrades: player.eternityUpgrades,
        epmult: player.epmult,
        epmultCost: player.epmultCost,
        totalTickGained: player.totalTickGained,
        offlineProd: player.offlineProd,
        offlineProdCost: player.offlineProdCost,
        challengeTarget: player.challengeTarget,
        autoSacrifice: player.autoSacrifice,
        replicanti: player.replicanti,
        timestudy: player.timestudy,
        autoIP: player.autoIP,
        autoTime: player.autoTime,
        infMultBuyer: player.infMultBuyer,
        eterMultBuyer: player.eterMultBuyer,
        autoCrunchMode: player.autoCrunchMode,
        autoEterMode: player.autoEterMode,
        respec: player.respec,
        eternityBuyer: player.eternityBuyer,
        extragalactic: player.extragalactic,
        peaks: {
          ip: {
            perMin: new Decimal(0),
            total: new Decimal(0)
          },
          ep: player.peaks.ep,
          gp: player.peaks.gp
        },
        options: player.options
        };

        if (!player.options.retryChallenge) player.currentChallenge = ""

        giveInfPurchaseResets();

        if (player.replicanti.unl && !player.achievements.includes("r95")) player.replicanti.amount = new Decimal(1);
        player.replicanti.galaxies = 0;

        resetDimPow();


        setMatterDisplay();
        setQuickResetDisplay();

        document.getElementById("replicantireset").innerHTML = "Reset replicanti amount, but get a free galaxy<br>"+player.replicanti.galaxies + " replicated galaxies created."

        if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r66")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r83")) player.tickspeed = player.tickspeed.times(Decimal.pow(0.95,player.galaxies));
        clearInterval(player.interval);
        //updateInterval();
        if (player.eternities < 30) {
          hideDims();
        }

        checkForEndMe()

        if (!player.achievements.includes("r21")) giveAchievement("To infinity!");
        if (!player.achievements.includes("r33") && getInfinitied() >= 10) giveAchievement("That's a lot of infinites");
        if (player.infinitied >= 1 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1");


        updateAutobuyers();
        updateInitialMoney();
        if (player.challenges.length >= 2 && !player.achievements.includes("r47")) giveAchievement("Daredevil");
        if (player.challenges.length == 12 && !player.achievements.includes("r48")) giveAchievement("AntiChallenged");
        resetInfDimensions();
        giveBoostFromTDTickSpeedUpgrades(player.totalTickGained);
        updateTickSpeed();
        if (player.challenges.length == 20) giveAchievement("Anti-antichallenged");
        updateInfCosts()

        if (player.eternities > 10) {
            for (var i=1;i<player.eternities-9 && i < 9; i++) {
                if (player.infDimBuyers[i-1]) {
                    buyMaxInfDims(i)
                    buyManyInfinityDimension(i)
                }
            }
        }

        if (player.eternities >= 40 && player.replicanti.auto[0]) {
            maxUpgradeReplicantiChance();
        }

        if (player.eternities >= 60 && player.replicanti.auto[1]) {
            while (canGetReplInterval()) upgradeReplicantiInterval()
        }

        if (player.eternities >= 80 && player.replicanti.auto[2]) {
            maxUpgradeReplicantiGalaxy();
        }

        if (player.eternityChallenges.current === 4) {
          checkForEternityChallengeFailure();
        }
    }
  updateChallenges();
  updateChallengeTimes()
  updateLastTenRuns()


}


function respecToggle() {
    if (player.respec) {
        player.respec = false
        document.getElementById("respec").className = "storebtn"
    } else {
        player.respec = true
        document.getElementById("respec").className = "timestudybought"
    }
}

function eter7Upg () {
  return 7 + Math.max(0, Math.min(0.1, Math.log10(Math.log10(Math.max(getInfinitied() / 2e7, 1) + 9)) / 2));
}

function eter8Upg () {
  return 1 + Math.max(0, Math.min(0.1, Math.log10(Math.log10(Math.max(player.eternities / 2e7, 1) + 9)) / 2));
}

function eter9Upg () {
  return Math.max(1, Math.floor(Math.pow(Math.max((getInfinitied() + player.eternities) / 2e7, 1), 0.5)));
}

function getInfinitiedGain (time) {
  if (time === undefined || time === null) {
    throw new Error('Undefined time in infinity');
  }
  ret = 1;
  if (time > 50 && player.achievements.includes("r87") && infinityMultAndGenEnabled()) {
    ret *= 250;
  }
  if (player.achievements.includes("r111") && infinityMultAndGenEnabled()) {
    ret *= Math.floor(1 + player.infinityPoints.max(1).log(Number.MAX_VALUE));
  }
  if (player.eternityUpgrades.includes(9)) {
    ret *= eter9Upg();
  }
  return ret;
}

function getEternityGain () {
  ret = 1;
  if (player.eternityUpgrades.includes(4)) {
    ret *= 1 + Math.floor(player.eternityPoints.max(1).log(10) / 4);
  }
  if (player.eternityUpgrades.includes(9)) {
    ret *= eter9Upg();
  }
  return ret;
}

function eternity(force, enteringChallenge) {
    if (force || (player.infinityPoints.gte(currentEternityRequirement()) &&
    (!player.options.eternityconfirm ||
      confirm("Eternity will reset everything except achievements " +
      "and challenge records. You will also gain an Eternity Point " +
      "and unlock various upgrades.")))) {
        if (!force) {
          if (player.thisEternity < player.bestEternity) {
              player.bestEternity = player.thisEternity
              if (player.bestEternity < 300) giveAchievement("That wasn't an eternity");
              if (player.bestEternity < 2) giveAchievement("Eternities are the new infinity");
          }
          if (player.boughtDims.every((i) => i === 8)) giveAchievement("8 nobody got time for that");
          if (player.boughtDims.every((i) => i === 1)) giveAchievement("You're already dead.");
          if (player.boughtDims.length === 0) giveAchievement("Like feasting on a behind");
          // don't count banked here
          if (player.infinitied <= 10) giveAchievement("Do you really need a guide for this?");
          if (player.infinitied <= 1) giveAchievement("Do I really need to infinity?");
          // This .toFixed(0) is, it seems, just what is done in display.
          // the lt 100 is for avoiding memory issues.
          if (player.replicanti.amount.lt(100) && player.replicanti.amount.toFixed(0) === '9') giveAchievement("We could afford 9");
          player.eternityPoints = player.eternityPoints.plus(gainedEternityPoints())
          addEternityTime(player.thisEternity, gainedEternityPoints())
        }
        let temp = [];

        if (player.eternities > 1) {
          for (var i=1; i<=12; i++) {
            temp.push('challenge' + i)
          }
        }
        player.challenges = temp

        if (player.eternityChallenges.current) {
          updateECDisplay(player.eternityChallenges.current);
        }

        let ec = player.eternityChallenges.current;
        if (!enteringChallenge) {
          if (ec) {
            if (!force) {
              // The player actually reached eternity in a challenge. Good for the player, I guess.
              // However, we can't let them access the next tier too early, so we need to lock the challenge again.
              player.eternityChallenges.done[ec] = Math.min(ecCompletions(ec) + 1, 5);
              player.eternityChallenges.everDone[ec] = Math.max(
                player.eternityChallenges.everDone[ec], player.eternityChallenges.done[ec]);
              updateTotalTiersDone();
            }
            player.eternityChallenges.current = null;
            if (!force) {
              // We can only lock the challenge when the player is not in it.
              lockEternityChallenge();
            }
            updateECDisplay(ec);
          }
        }

        if (force) {
          // to compensate, as late as possible
          player.eternities -= getEternityGain();
        }
        player = {
            money: new Decimal(10),
            tickSpeedCost: new Decimal(1000),
            tickspeed: new Decimal(1000),
            firstCost: new Decimal(10),
            secondCost: new Decimal(100),
            thirdCost: new Decimal(10000),
            fourthCost: new Decimal(1000000),
            fifthCost: new Decimal(1e9),
            sixthCost: new Decimal(1e13),
            seventhCost: new Decimal(1e18),
            eightCost: new Decimal(1e24),
            firstAmount: new Decimal(0),
            secondAmount: new Decimal(0),
            thirdAmount: new Decimal(0),
            fourthAmount: new Decimal(0),
            firstBought: 0,
            secondBought: 0,
            thirdBought: 0,
            fourthBought: 0,
            fifthAmount: new Decimal(0),
            sixthAmount: new Decimal(0),
            seventhAmount: new Decimal(0),
            eightAmount: new Decimal(0),
            fifthBought: 0,
            sixthBought: 0,
            seventhBought: 0,
            eightBought: 0,
            firstPow: new Decimal(1),
            secondPow: new Decimal(1),
            thirdPow: new Decimal(1),
            fourthPow: new Decimal(1),
            fifthPow: new Decimal(1),
            sixthPow: new Decimal(1),
            seventhPow: new Decimal(1),
            eightPow: new Decimal(1),
            sacrificed: new Decimal(0),
            boughtDims: [],
            achievements: player.achievements,
            challenges: player.challenges,
            currentChallenge: "",
            infinityUpgrades: player.infinityUpgrades,
            infinityPoints: new Decimal(0),
            infinitied: 0,
            bankedInfinities: player.bankedInfinities + Math.floor(player.infinitied * getTSBenefit(8, player.timestudy.studies[8]) / 100),
            bankedEternities: player.bankedEternities,
            totalTimePlayed: player.totalTimePlayed,
            bestInfinityTime: 9999999999,
            thisInfinityTime: 0,
            resets: 0,
            galaxies: 0,
            tickDecrease: 0.9,
            totalmoney: player.totalmoney,
            interval: null,
            lastUpdate: player.lastUpdate,
            achPow: player.achPow,
            autobuyers: (player.eternities > 0) ? player.autobuyers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            partInfinityPoint: 0,
            partInfinitied: 0,
            break: player.eternities > 0 ? player.break : false,
            costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
            tickspeedMultiplier: new Decimal(10),
            chall2Pow: 1,
            chall3Pow: new Decimal(0.01),
            newsArray: player.newsArray,
            matter: new Decimal(0),
            chall11Pow: new Decimal(1),
            challengeTimes: player.challengeTimes,
            infchallengeTimes: player.infchallengeTimes,
            lastTenRuns: [[600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)]],
            lastTenEternities: player.lastTenEternities,
            lastTenExtragalaxies: player.lastTenExtragalaxies,
            infMult: new Decimal(1),
            infMultCost: new Decimal(10),
            tickSpeedMultDecrease: player.eternities > 18 ? player.tickSpeedMultDecrease : 10,
            tickSpeedMultDecreaseCost: player.eternities > 18 ? player.tickSpeedMultDecreaseCost : 3e6,
            dimensionMultDecrease: player.eternities > 18 ? player.dimensionMultDecrease : 10,
            dimensionMultDecreaseCost: player.eternities > 18 ? player.dimensionMultDecreaseCost : 1e8,
            version: player.version,
            postChallUnlocked: 0,
            postC4Tier: 1,
            postC3Reward: new Decimal(1),
            overXGalaxies: player.overXGalaxies,
            spreadingCancer: player.spreadingCancer,
            infDimensionsUnlocked: [false, false, false, false, false, false, false, false],
            infinityPower: new Decimal(1),
            infinityDimension1 : {
                cost: new Decimal(1e8),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension2 : {
                cost: new Decimal(1e9),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension3 : {
                cost: new Decimal(1e10),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension4 : {
                cost: new Decimal(1e20),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension5 : {
                cost: new Decimal(1e140),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension6 : {
                cost: new Decimal(1e200),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension7 : {
                cost: new Decimal(1e250),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension8 : {
                cost: new Decimal(1e280),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infDimBuyers: player.infDimBuyers,
            timeShards: new Decimal(0),
            eternityChallenges: player.eternityChallenges,
            tickThreshold: new Decimal(1),
            totalTickGained: 0,
            timeDimension1: player.timeDimension1,
            timeDimension2: player.timeDimension2,
            timeDimension3: player.timeDimension3,
            timeDimension4: player.timeDimension4,
            timeDimBuyers: player.timeDimBuyers,
            eternityPoints: player.eternityPoints,
            eternities: player.eternities + getEternityGain(),
            thisEternity: 0,
            bestEternity: player.bestEternity,
            eternityUpgrades: player.eternityUpgrades,
            epmult: player.epmult,
            epmultCost: player.epmultCost,
            totalTickGained: 0,
            offlineProd: player.eternities > 18 ? player.offlineProd : 0,
            offlineProdCost: player.eternities > 18 ? player.offlineProdCost : 1e7,
            challengeTarget: 0,
            autoSacrifice: player.eternities > 5 ? player.autoSacrifice : 1,
            replicanti: {
                // if it was over 48, it is now at least 50
                amount: player.eternities > 48 ? new Decimal(1) : new Decimal(0),
                unl: player.eternities > 48,
                galaxyPowerUnl: player.achievements.includes('r106'),
                chance: 0.01,
                chanceCost: new Decimal(1e150),
                interval: 1000,
                intervalCost: new Decimal(1e160),
                gal: 0,
                galaxies: 0,
                galCost: getInitialReplicantiGalaxyCost(),
                galaxybuyer: player.replicanti.galaxybuyer,
                auto: player.replicanti.auto,
                // we're eternitying, so maybe change this?
                limit: player.replicanti.newLimit,
                newLimit: player.replicanti.newLimit
            },
            timestudy: player.timestudy,
            autoIP: new Decimal(0),
            autoTime: 1e300,
            infMultBuyer: player.infMultBuyer,
            eterMultBuyer: player.eterMultBuyer,
            autoCrunchMode: player.autoCrunchMode,
            autoEterMode: player.autoEterMode,
            respec: player.respec,
            eternityBuyer: player.eternityBuyer,
            extragalactic: player.extragalactic,
            peaks: {
              ip: {
                perMin: new Decimal(0),
                total: new Decimal(0)
              },
              ep: {
                perMin: new Decimal(0),
                total: new Decimal(0)
              },
              gp: player.peaks.gp
            },
            options: player.options
        };
        if (player.respec) respecTimeStudies()
        player.respec = false
        if (!force) {
          giveAchievement("Time is relative")
          if (player.eternities >= 100) giveAchievement("This mile took an eternity");
          if (player.eternities >= 2000) giveAchievement("I thought it would be harder...");
          if (getInfinitied() >= 2e7 && player.eternities >= 2e7) giveAchievement("I decided to grind")
          if (player.eternityPoints.gte(Number.MAX_VALUE)) giveAchievement("But I wanted another prestige layer...");
        }
        if (player.replicanti.unl) player.replicanti.amount = new Decimal(1);
        player.replicanti.galaxies = 0
        document.getElementById("respec").className = "storebtn"
        if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
        clearInterval(player.interval);
        //updateInterval();
        // If we have 30 eternities already we shouldn't hide dimensions.
        if (player.eternities < 30) {
          hideDims();
        }
        setMatterDisplay();
        setQuickResetDisplay();
        // setDarkMatterDisplay();
        // ec8UpdateAll();
        if (player.infinitied >= 1 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1");
        var autobuyers = document.getElementsByClassName('autoBuyerDiv')
        if (player.eternities < 2) {
            for (var i=0; i<autobuyers.length;i++) autobuyers.item(i).style.display = "none"
            document.getElementById("buyerBtnDimBoost").style.display = "inline-block"
            document.getElementById("buyerBtnGalaxies").style.display = "inline-block"
            document.getElementById("buyerBtnInf").style.display = "inline-block"
            document.getElementById("buyerBtnTickSpeed").style.display = "inline-block"
        }
        updateAutobuyers();
        updateReplicantiGalaxyPowerControl();
        updateAntigalaxyBulk();
        updateInitialMoney();
        if (player.achievements.includes("r104")) player.infinityPoints = new Decimal(2e25);
        resetInfDimensions();
        updateTickSpeed();
        updateChallenges();
        updateChallengeTimes()
        updateLastTenRuns()
        updateLastTenEternities()
        updateLastTenExtragalaxies()
        var infchalls = Array.from(document.getElementsByClassName('infchallengediv'))
        for (var i = 0; i< infchalls.length; i++) infchalls[i].style.display = "none"
        updateMilestones()
        resetTimeDimensions()
        if (player.eternities < 20) player.autobuyers[9].bulk = 1
        document.getElementById("bulkDimboost").value = player.autobuyers[9].bulk
        if (player.eternities < 50) {
            document.getElementById("replicantidiv").style.display="none"
            document.getElementById("replicantiunlock").style.display="inline-block"
        } else {
            document.getElementById("replicantidiv").style.display="inline-block"
            document.getElementById("replicantiunlock").style.display="none"
        }
        if (player.eternities > 2 && !player.replicanti.galaxybuyer.unl) {
          player.replicanti.galaxybuyer = {
              unl: true,
              on: false,
              bulk: 1,
              wait: 0,
              lastTick: Date.now()
          }
        }
        let ipPlural = player.infinityPoints.equals(1) ? '' : 's';
        document.getElementById("infinityPoints1").innerHTML = "You have <span class=\"IPAmount1\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + "."
        document.getElementById("infinityPoints2").innerHTML = "You have <span class=\"IPAmount2\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + "."
        if (player.eternities < 2) document.getElementById("break").innerHTML = "BREAK INFINITY"
        document.getElementById("replicantireset").innerHTML = "Reset replicanti amount, but get a free galaxy<br>"+player.replicanti.galaxies + " replicated galaxies created."
        document.getElementById("eternitybtn").style.display = player.infinityPoints.gte(currentEternityRequirement()) ? "inline-block" : "none"
        document.getElementById("eternityPoints2").style.display = "inline-block"
        document.getElementById("eternitystorebtn").style.display = "inline-block"
        document.getElementById("infiMult").innerHTML = "Multiply infinity points from all sources by 2 <br>currently: "+shorten(getIPMult()) +"x<br>Cost: "+shortenCosts(player.infMultCost)+" IP"
        updateEternityUpgrades()
        updateInfCosts()
        playerInfinityUpgradesOnEternity()
        // give the player resets if they have the upgrade needed
        giveInfPurchaseResets()
        let epPlural = player.eternityPoints.equals(1) ? '' : 's';
        document.getElementById("eternityPoints2").innerHTML = "You have <span class=\"EPAmount2\">"+shortenDimensions(player.eternityPoints)+"</span> Eternity Point" + epPlural + "."
    }
}

function getExtragalacticPointBase (x) {
    if (x === undefined) {
      x = 0;
    }
    x += player.extragalactic.galacticDimensionUpgrades[3];
    return 256 + x * player.extragalactic.galaxies / 16
}

function gainedExtragalacticPoints() {
    let base = getExtragalacticPointBase();
    return Decimal.floor(Decimal.pow(base, getTickSpeedMultiplier().pow(-1).e/308 - 1));
}

function extragalaxy(force) {
    if (force || (getTickSpeedMultiplier().pow(-1).gte(Number.MAX_VALUE) &&
    (!player.options.extragalaxyconfirm ||
      confirm("Going extragalactic will reset everything except achievements " +
      "and challenge records. You will also gain an Extragalactic Point " +
      "and unlock various upgrades.")))) {
        if (!force) {
          if (player.extragalactic.thisExtragalaxy < player.extragalactic.bestExtragalaxy) {
              player.extragalactic.bestExtragalaxy = player.extragalactic.thisExtragalaxy;
          }
          // maybe add some new achievements here later
          player.extragalactic.points = player.extragalactic.points.plus(gainedExtragalacticPoints())
          addExtragalacticTime(player.extragalactic.thisExtragalaxy, gainedExtragalacticPoints())
        }

        // going extragalactic in a challenge should push you out of it without a new completion

        // for now just reset everything, don't worry about it, that will automatically have the desired effect

        if (force) {
          // to compensate, as late as possible
          player.extragalactic.extragalaxies -= 1;
        }
        // put this here so we can keep stuff that works based on milestones,
        // but do it in a non-hacky way.
        let hasEternityMilestones = false;
        player.eternities = 0;
        player = {
            money: new Decimal(10),
            tickSpeedCost: new Decimal(1000),
            tickspeed: new Decimal(1000),
            firstCost: new Decimal(10),
            secondCost: new Decimal(100),
            thirdCost: new Decimal(10000),
            fourthCost: new Decimal(1000000),
            fifthCost: new Decimal(1e9),
            sixthCost: new Decimal(1e13),
            seventhCost: new Decimal(1e18),
            eightCost: new Decimal(1e24),
            firstAmount: new Decimal(0),
            secondAmount: new Decimal(0),
            thirdAmount: new Decimal(0),
            fourthAmount: new Decimal(0),
            firstBought: 0,
            secondBought: 0,
            thirdBought: 0,
            fourthBought: 0,
            fifthAmount: new Decimal(0),
            sixthAmount: new Decimal(0),
            seventhAmount: new Decimal(0),
            eightAmount: new Decimal(0),
            fifthBought: 0,
            sixthBought: 0,
            seventhBought: 0,
            eightBought: 0,
            firstPow: new Decimal(1),
            secondPow: new Decimal(1),
            thirdPow: new Decimal(1),
            fourthPow: new Decimal(1),
            fifthPow: new Decimal(1),
            sixthPow: new Decimal(1),
            seventhPow: new Decimal(1),
            eightPow: new Decimal(1),
            sacrificed: new Decimal(0),
            boughtDims: [],
            achievements: player.achievements,
            challenges: player.challenges,
            currentChallenge: "",
            infinityUpgrades: player.infinityUpgrades,
            infinityPoints: new Decimal(0),
            infinitied: 0,
            bankedInfinities: 0,
            bankedEternities: player.bankedEternities,
            totalTimePlayed: player.totalTimePlayed,
            bestInfinityTime: 9999999999,
            thisInfinityTime: 0,
            resets: 0,
            galaxies: 0,
            tickDecrease: 0.9,
            totalmoney: player.totalmoney,
            interval: null,
            lastUpdate: player.lastUpdate,
            achPow: player.achPow,
            autobuyers: hasEternityMilestones ? player.autobuyers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            partInfinityPoint: 0,
            partInfinitied: 0,
            break: hasEternityMilestones ? player.break : false,
            costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
            tickspeedMultiplier: new Decimal(10),
            chall2Pow: 1,
            chall3Pow: new Decimal(0.01),
            newsArray: player.newsArray,
            matter: new Decimal(0),
            chall11Pow: new Decimal(1),
            challengeTimes: player.challengeTimes,
            infchallengeTimes: player.infchallengeTimes,
            lastTenRuns: [[600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)]],
            lastTenEternities: [[600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)]],
            lastTenExtragalaxies: player.lastTenExtragalaxies,
            infMult: new Decimal(1),
            infMultCost: new Decimal(10),
            tickSpeedMultDecrease: hasEternityMilestones ? player.tickSpeedMultDecrease : 10,
            tickSpeedMultDecreaseCost: hasEternityMilestones ? player.tickSpeedMultDecreaseCost : 3e6,
            dimensionMultDecrease: hasEternityMilestones ? player.dimensionMultDecrease : 10,
            dimensionMultDecreaseCost: hasEternityMilestones ? player.dimensionMultDecreaseCost : 1e8,
            version: player.version,
            postChallUnlocked: 0,
            postC4Tier: 1,
            postC3Reward: new Decimal(1),
            overXGalaxies: player.overXGalaxies,
            spreadingCancer: player.spreadingCancer,
            infDimensionsUnlocked: [false, false, false, false, false, false, false, false],
            infinityPower: new Decimal(1),
            infinityDimension1 : {
                cost: new Decimal(1e8),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension2 : {
                cost: new Decimal(1e9),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension3 : {
                cost: new Decimal(1e10),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension4 : {
                cost: new Decimal(1e20),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension5 : {
                cost: new Decimal(1e140),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension6 : {
                cost: new Decimal(1e200),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension7 : {
                cost: new Decimal(1e250),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension8 : {
                cost: new Decimal(1e280),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infDimBuyers: hasEternityMilestones ? player.infDimBuyers : [false, false, false, false, false, false, false, false],
            timeShards: new Decimal(0),
            eternityChallenges: {
                done: {},
                unlocked: null,
                current: null,
                totalTiersDone: 0,
                everDone: player.eternityChallenges.everDone
            },
            tickThreshold: new Decimal(1),
            totalTickGained: 0,
            timeDimension1: {
                cost: new Decimal(1),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            timeDimension2: {
                cost: new Decimal(10),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            timeDimension3: {
                cost: new Decimal(100),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            timeDimension4: {
                cost: new Decimal(1000),
                amount: new Decimal(0),
                power: new Decimal(1),
                bought: 0
            },
            timeDimBuyers: player.timeDimBuyers,
            eternityPoints: 0,
            eternities: player.eternities,
            thisEternity: 0,
            bestEternity: 999999999,
            eternityUpgrades: [],
            epmult: new Decimal(1),
            epmultCost: new Decimal(500),
            totalTickGained: 0,
            offlineProd: hasEternityMilestones ? player.offlineProd : 0,
            offlineProdCost: hasEternityMilestones ? player.offlineProdCost : 1e7,
            challengeTarget: 0,
            autoSacrifice: hasEternityMilestones ? player.autoSacrifice : 1,
            replicanti: {
                // if it was over 48, it is now at least 50
                amount: hasEternityMilestones ? new Decimal(1) : new Decimal(0),
                unl: hasEternityMilestones > 48,
                galaxyPowerUnl: player.achievements.includes('r106'),
                chance: 0.01,
                chanceCost: new Decimal(1e150),
                interval: 1000,
                intervalCost: new Decimal(1e160),
                gal: 0,
                galaxies: 0,
                galCost: getInitialReplicantiGalaxyCost(),
                galaxybuyer: hasEternityMilestones ? player.replicanti.galaxybuyer : {
                    unl: false,
                    on: false,
                    bulk: 1,
                    wait: 0,
                    lastTick: Date.now()
                },
                auto: player.replicanti.auto,
                limit: player.replicanti.newLimit,
                newLimit: player.replicanti.newLimit
            },
            timestudy: initTimeStudy(),
            autoIP: new Decimal(0),
            autoTime: 1e300,
            infMultBuyer: hasEternityMilestones ? player.infMultBuyer: false,
            eterMultBuyer: player.eterMultBuyer,
            autoCrunchMode: hasEternityMilestones ? player.autoCrunchMode : 'amount',
            autoEterMode: player.autoEterMode,
            respec: false,
            eternityBuyer: hasEternityMilestones ? player.eternityBuyer : {
                limit: new Decimal(0),
                isOn: false
            },
            extragalactic: {
                points: player.extragalactic.points,
                extragalaxies: player.extragalactic.extragalaxies + 1,
                galacticPower: new Decimal(0),
                galacticDimension1: player.extragalactic.galacticDimension1,
                galacticDimension2: player.extragalactic.galacticDimension2,
                galacticDimension3: player.extragalactic.galacticDimension3,
                galacticDimension4: player.extragalactic.galacticDimension4,
                galacticDimensionUpgrades: player.extragalactic.galacticDimensionUpgrades,
                galacticDimensionUpgradeCosts: player.extragalactic.galacticDimensionUpgradeCosts,
                galacticDimensionUpgradeCostMults: player.extragalactic.galacticDimensionUpgradeCostMults,
                totalGalacticDimensionUpgrades: player.extragalactic.totalGalacticDimensionUpgrades,
                galaxies: 0,
                antigalaxies: player.extragalactic.antigalaxies,
                galacticstudy: player.extragalactic.galacticstudy,
                thisExtragalaxy: 0,
                bestExtragalaxy: player.extragalactic.bestExtragalaxy,
                extragalaxyBuyer: player.extragalactic.extragalaxyBuyer
            },
            peaks: {
              ip: {
                perMin: new Decimal(0),
                total: new Decimal(0)
              },
              ep: {
                perMin: new Decimal(0),
                total: new Decimal(0)
              },
              gp: {
                perMin: new Decimal(0),
                total: new Decimal(0)
              }
            },
            options: player.options
        };
        if (player.respec) respecTimeStudies()
        player.respec = false
        if (!force) {
          giveAchievement("The void")
        }
        if (player.replicanti.unl) player.replicanti.amount = new Decimal(1);
        player.replicanti.galaxies = 0
        document.getElementById("respec").className = "storebtn"
        if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
        clearInterval(player.interval);
        //updateInterval();
        // If we have 30 eternities already we shouldn't hide dimensions.
        if (!hasEternityMilestones) {
          hideDims();
        }
        setMatterDisplay();
        setQuickResetDisplay();
        // setDarkMatterDisplay();
        // ec8UpdateAll();
        if (player.infinitied >= 1 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1");
        var autobuyers = document.getElementsByClassName('autoBuyerDiv')
        if (!hasEternityMilestones) {
            for (var i=0; i<autobuyers.length;i++) autobuyers.item(i).style.display = "none"
            document.getElementById("buyerBtnDimBoost").style.display = "inline-block"
            document.getElementById("buyerBtnGalaxies").style.display = "inline-block"
            document.getElementById("buyerBtnInf").style.display = "inline-block"
            document.getElementById("buyerBtnTickSpeed").style.display = "inline-block"
        }
        updateAutobuyers();
        updateReplicantiGalaxyPowerControl();
        updateAntigalaxyBulk();
        updateInitialMoney();
        if (player.achievements.includes("r104")) player.infinityPoints = new Decimal(2e25);
        resetInfDimensions();
        updateTickSpeed();
        updateChallenges();
        updateChallengeTimes()
        updateLastTenRuns()
        updateLastTenEternities()
        updateLastTenExtragalaxies()
        var infchalls = Array.from(document.getElementsByClassName('infchallengediv'))
        for (var i = 0; i< infchalls.length; i++) infchalls[i].style.display = "none"
        // added some more peaks
        // this means eternity milestones
        updateMilestones()
        resetTimeDimensions()
        // add reset galactic dimensions here at some point
        if (!hasEternityMilestones) player.autobuyers[9].bulk = 1
        document.getElementById("bulkDimboost").value = player.autobuyers[9].bulk
        if (!hasEternityMilestones) {
            document.getElementById("replicantidiv").style.display="none"
            document.getElementById("replicantiunlock").style.display="inline-block"
        } else {
            document.getElementById("replicantidiv").style.display="inline-block"
            document.getElementById("replicantiunlock").style.display="none"
        }
        if (hasEternityMilestones && !player.replicanti.galaxybuyer.unl) {
          player.replicanti.galaxybuyer = {
              unl: true,
              on: false,
              bulk: 1,
              wait: 0,
              lastTick: Date.now()
          }
        }
        let ipPlural = player.infinityPoints.equals(1) ? '' : 's';
        document.getElementById("infinityPoints1").innerHTML = "You have <span class=\"IPAmount1\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + "."
        document.getElementById("infinityPoints2").innerHTML = "You have <span class=\"IPAmount2\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + "."
        if (!hasEternityMilestones) document.getElementById("break").innerHTML = "BREAK INFINITY"
        document.getElementById("replicantireset").innerHTML = "Reset replicanti amount, but get a free galaxy<br>"+player.replicanti.galaxies + " replicated galaxies created."
        document.getElementById("eternitybtn").style.display = player.infinityPoints.gte(currentEternityRequirement()) ? "inline-block" : "none"
        document.getElementById("eternityPoints2").style.display = "inline-block"
        document.getElementById("eternitystorebtn").style.display = "inline-block"
        document.getElementById("infiMult").innerHTML = "Multiply infinity points from all sources by 2 <br>currently: "+shorten(getIPMult()) +"x<br>Cost: "+shortenCosts(player.infMultCost)+" IP"
        updateEternityUpgrades()
        updateInfCosts()
        playerInfinityUpgradesOnEternity()
        // give the player resets if they have the upgrade needed
        giveInfPurchaseResets()
        let epPlural = player.eternityPoints.equals(1) ? '' : 's';
        document.getElementById("eternityPoints2").innerHTML = "You have <span class=\"EPAmount2\">"+shortenDimensions(player.eternityPoints)+"</span> Eternity Point" + epPlural + "."
    }
}

function exitChallenge() {
  if (player.currentChallenge) {
    document.getElementById(player.currentChallenge).innerHTML = "Start"
    startChallenge("");
    updateChallenges();
  } else if (player.eternityChallenges.current) {
    // as if we failed
    eternity(true, false);
  }
}

function chall10AlterCosts () {
    player.thirdCost = new Decimal(100)
    player.fourthCost = new Decimal(500)
    player.fifthCost = new Decimal(2500)
    player.sixthCost = new Decimal(2e4)
    player.seventhCost = new Decimal(2e5)
    player.eightCost = new Decimal(4e6)
    player.costMultipliers = [new Decimal(1e3),new Decimal(5e3),new Decimal(1e4),new Decimal(1.2e4),new Decimal(1.8e4),new Decimal(2.6e4),new Decimal(3.2e4),new Decimal(4.2e4)];
}

function giveBoostFromTDTickSpeedUpgrades (x) {
  if (player.eternityUpgrades.includes(8)) {
    x *= eter8Upg();
  }
  giveBoostFromTickSpeedUpgrades(x);
}

function startChallenge(name, target) {
  if(player.options.challConf || name == "" ? true : confirm("You will start over with just your infinity upgrades and achievements. You need to reach infinity with special conditions. NOTE: The rightmost infinity upgrade column doesn't work on challenges.")) {
    if (player.currentChallenge != "") document.getElementById(player.currentChallenge).innerHTML = "Start"
    player = {
        money: new Decimal(10),
        tickSpeedCost: new Decimal(1000),
        tickspeed: new Decimal(1000),
        firstCost: new Decimal(10),
        secondCost: new Decimal(100),
        thirdCost: new Decimal(10000),
        fourthCost: new Decimal(1000000),
        fifthCost: new Decimal(1e9),
        sixthCost: new Decimal(1e13),
        seventhCost: new Decimal(1e18),
        eightCost: new Decimal(1e24),
        firstAmount: new Decimal(0),
        secondAmount: new Decimal(0),
        thirdAmount: new Decimal(0),
        fourthAmount: new Decimal(0),
        firstBought: 0,
        secondBought: 0,
        thirdBought: 0,
        fourthBought: 0,
        fifthAmount: new Decimal(0),
        sixthAmount: new Decimal(0),
        seventhAmount: new Decimal(0),
        eightAmount: new Decimal(0),
        fifthBought: 0,
        sixthBought: 0,
        seventhBought: 0,
        eightBought: 0,
        firstPow: new Decimal(1),
        secondPow: new Decimal(1),
        thirdPow: new Decimal(1),
        fourthPow: new Decimal(1),
        fifthPow: new Decimal(1),
        sixthPow: new Decimal(1),
        seventhPow: new Decimal(1),
        eightPow: new Decimal(1),
        sacrificed: new Decimal(0),
      boughtDims: player.boughtDims,
      achievements: player.achievements,
      challenges: player.challenges,
      currentChallenge: name,
      infinityUpgrades: player.infinityUpgrades,
      infinityPoints: player.infinityPoints,
      infinitied: player.infinitied,
      bankedInfinities: player.bankedInfinities,
      bankedEternities: player.bankedEternities,
      totalTimePlayed: player.totalTimePlayed,
      bestInfinityTime: player.bestInfinityTime,
      thisInfinityTime: 0,
      resets: 0,
      galaxies: 0,
      tickDecrease: 0.9,
      totalmoney: player.totalmoney,
      interval: null,
      lastUpdate: player.lastUpdate,
      achPow: player.achPow,
      autobuyers: player.autobuyers,
      costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
      tickspeedMultiplier: new Decimal(10),
      chall2Pow: 1,
      chall3Pow: new Decimal(0.01),
      matter: new Decimal(0),
      newsArray: player.newsArray,
      chall11Pow: new Decimal(1),
      partInfinityPoint: player.partInfinityPoint,
      partInfinitied: player.partInfinitied,
      break: player.break,
      challengeTimes: player.challengeTimes,
      infchallengeTimes: player.infchallengeTimes,
      lastTenRuns: player.lastTenRuns,
      lastTenEternities: player.lastTenEternities,
      lastTenExtragalaxies: player.lastTenExtragalaxies,
      infMult: player.infMult,
      infMultCost: player.infMultCost,
      tickSpeedMultDecrease: player.tickSpeedMultDecrease,
      tickSpeedMultDecreaseCost: player.tickSpeedMultDecreaseCost,
      dimensionMultDecrease: player.dimensionMultDecrease,
      dimensionMultDecreaseCost: player.dimensionMultDecreaseCost,
      version: player.version,
      postChallUnlocked: player.postChallUnlocked,
      postC4Tier: 1,
      postC3Reward: new Decimal(1),
      overXGalaxies: player.overXGalaxies,
      spreadingCancer: player.spreadingCancer,
      infDimensionsUnlocked: player.infDimensionsUnlocked,
      infinityPower: player.infinityPower,
      infinityDimension1: player.infinityDimension1,
      infinityDimension2: player.infinityDimension2,
      infinityDimension3: player.infinityDimension3,
      infinityDimension4: player.infinityDimension4,
      infinityDimension5: player.infinityDimension5,
      infinityDimension6: player.infinityDimension6,
      infinityDimension7: player.infinityDimension7,
      infinityDimension8: player.infinityDimension8,
      infDimBuyers: player.infDimBuyers,
      timeShards: player.timeShards,
      eternityChallenges: player.eternityChallenges,
      timeDimension1: player.timeDimension1,
      timeDimension2: player.timeDimension2,
      timeDimension3: player.timeDimension3,
      timeDimension4: player.timeDimension4,
      timeDimBuyers: player.timeDimBuyers,
      eternityPoints: player.eternityPoints,
      eternities: player.eternities,
      thisEternity: player.thisEternity,
      bestEternity: player.bestEternity,
      eternityUpgrades: player.eternityUpgrades,
      epmult: player.epmult,
      epmultCost: player.epmultCost,
      totalTickGained: player.totalTickGained,
      offlineProd: player.offlineProd,
      offlineProdCost: player.offlineProdCost,
      challengeTarget: target,
      autoSacrifice: player.autoSacrifice,
      replicanti: player.replicanti,
      timestudy: player.timestudy,
      autoIP: player.autoIP,
      autoTime: player.autoTime,
      infMultBuyer: player.infMultBuyer,
      eterMultBuyer: player.eterMultBuyer,
      autoCrunchMode: player.autoCrunchMode,
      autoEterMode: player.autoEterMode,
      respec: player.respec,
      eternityBuyer: player.eternityBuyer,
      extragalactic: player.extragalactic,
      peaks: {
        ip: {
          perMin: new Decimal(0),
          total: new Decimal(0)
        },
        ep: player.peaks.ep,
        gp: player.peaks.gp
      },
      options: player.options
    };
	  if (player.currentChallenge === "challenge10" || player.currentChallenge === "postc1") {
        chall10AlterCosts();
    }
    if (player.currentChallenge == "postc2") {
        player.eightAmount = new Decimal(1);
        player.eightBought = 1;
        player.resets = 4;
    }

    if (player.replicanti.unl) player.replicanti.amount = new Decimal(1);
    player.replicanti.galaxies = 0;
    if (player.currentChallenge.includes("post")) player.break = true
    if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r66")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r83")) player.tickspeed = player.tickspeed.times(Decimal.pow(0.95,player.galaxies));
    clearInterval(player.interval);
    //updateInterval();
    if (player.eternities < 30) {
      hideLowDims();
    }
    hideHighDims();
    setMatterDisplay();
    setQuickResetDisplay();

    showTab('dimensions');
    updateChallenges();
    updateInitialMoney();
    showTab("dimensions")

    if (getInfinitied() >= 10) giveAchievement("That's a lot of infinites");

    document.getElementById("replicantireset").innerHTML = "Reset replicanti amount, but get a free galaxy<br>"+player.replicanti.galaxies + " replicated galaxies created."

    resetInfDimensions();
    giveBoostFromTDTickSpeedUpgrades(player.totalTickGained);
    updateTickSpeed();

    // if we're now out of a challenge this function will do stuff, otherwise it won't
    giveInfPurchaseResets();

    if (player.currentChallenge.includes("post") && player.eternityChallenges.current) giveAchievement("I wish I had gotten 7 eternities");
  }
}

function getDimensionProductionPerSecond(tier) {
    let ret = Decimal.floor(player[TIER_NAMES[tier] + 'Amount']).times(getDimensionFinalMultiplier(tier)).times(1000).dividedBy(player.tickspeed)
    if (player.currentChallenge == "challenge7") {
        if (tier == 4) ret = player[TIER_NAMES[tier] + 'Amount'].floor().pow(1.4).times(getDimensionFinalMultiplier(tier)).dividedBy(player.tickspeed.dividedBy(1000))
        else if (tier == 2) ret = player[TIER_NAMES[tier] + 'Amount'].floor().pow(1.6).times(getDimensionFinalMultiplier(tier)).dividedBy(player.tickspeed.dividedBy(1000))
    }
    if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") ret = ret.times(player.chall2Pow)
    return ret;
}

document.getElementById("quickReset").onclick = function () {
    if (player.resets == 0) player.resets--;
    else player.resets -= 2;
    softReset(1);
}


function updateInfPower() {
    document.getElementById("infPowAmount").innerHTML = shortenMoney(player.infinityPower)
    if (player.eternityChallenges.current !== 2) {
        document.getElementById("infDimMultAmount").innerHTML = shortenMoney(getInfinityPowerNDMultiplier())
        document.getElementById("infDimMultDimType").innerHTML = 'normal'
    } else {
        document.getElementById("infDimMultAmount").innerHTML = shortenMoney(getInfinityPowerTDMultiplier())
        document.getElementById("infDimMultDimType").innerHTML = 'time'
    }
    document.getElementById("infPowPerSec").innerHTML = "You are getting " +shortenDimensions(DimensionProduction(1))+" Infinity Power per second."
}

function getIPMult () {
  ret = player.infMult;
  if (player.achievements.includes("r85")) ret = ret.times(4);
  if (player.achievements.includes("r93")) ret = ret.times(4);
  return ret;
}

// timeshard stuff

function get_c (num) {
  if (num === undefined) {
    num = player.timestudy.studies[2];
  }
  return Math.pow(4 / 3, 1 / (1 + num / 10))
}

function getTickThreshold (timeshards, num) {
  return tickCost(getTotalTickGained(timeshards, num) + 1)
}

function tickCost (x) {
  return Decimal.pow(get_c(), x - 1).times(Decimal.pow(1.001, (x - 1) * (x - 2) / 2));
}

function getTotalTickGained (timeshards, num) {
  if (timeshards.lt(1)) {
    return 0;
  }
  // the way this works: act as if we were buying everything from scratch. say
  // "how many could we buy? OK, we've already bought some, but just add 1."
  let a1 = Math.log10(1.001);
  let b1 = Math.log10(get_c());
  let c1 = timeshards.log(10);
  return arithmeticSequencePurchases(a1, b1, c1, -1).amount + 1;
}

function updateTimeShards() {
    document.getElementById("timeShardAmount").innerHTML = shortenMoney(player.timeShards)
    document.getElementById("tickThreshold").innerHTML = shortenMoney(getTickThreshold(player.timeShards))
    document.getElementById("timeShardsPerSec").innerHTML = "You are getting "+shortenDimensions(getTimeDimensionProduction(1))+" Timeshards per second."
}

// some more galactic dimension stuff

function getExtragalacticGalaxyThreshold (num) {
  return extragalacticGalaxyCost(getTotalExtragalacticGalaxiesGained(num) + 1, num)
}

function getExtragalacticGalaxyCostBase (num) {
  if (num === undefined) {
      num = 0;
  }
  num += player.extragalactic.galacticDimensionUpgrades[1];
  return Math.pow(2, 1 / 16 + (1 / Math.log2(4 + num)) * 7 / 8);
}

function extragalacticGalaxyCost (x, num) {
  let base = getExtragalacticGalaxyCostBase(num);
  return Decimal.pow(base, x - 1);
}

function getTotalExtragalacticGalaxiesGained (num) {
  if (player.extragalactic.galacticPower.lt(1)) {
      return 0;
  }
  let base = getExtragalacticGalaxyCostBase(num);
  return Math.floor(player.extragalactic.galacticPower.log(base) + 1);
}

function updateExtragalacticGalaxies() {
    document.getElementById("galacticPowerAmount").innerHTML = shortenMoney(player.extragalactic.galacticPower)
    document.getElementById("galaxyThreshold").innerHTML = shortenMoney(getExtragalacticGalaxyThreshold())
    document.getElementById("galacticPowerPerSec").innerHTML = "You are getting "+shortenDimensions(getGalacticDimensionProduction(1))+" Galactic Power per second."
}

function getNewInfReq() {
    if (!player.infDimensionsUnlocked[0]) return new Decimal("1e1100")
    else if (!player.infDimensionsUnlocked[1]) return new Decimal("1e1900")
    else if (!player.infDimensionsUnlocked[2]) return new Decimal("1e2400")
    else if (!player.infDimensionsUnlocked[3]) return new Decimal("1e10500")
    else if (!player.infDimensionsUnlocked[4]) return new Decimal("1e30000")
    else if (!player.infDimensionsUnlocked[5]) return new Decimal("1e45000")
    else if (!player.infDimensionsUnlocked[6]) return new Decimal("1e54000")
    else return new Decimal("1e60000")
}


function newDimension() {
    if (player.money.gte(getNewInfReq())) {
        if (!player.infDimensionsUnlocked[0]) player.infDimensionsUnlocked[0] = true
        else if (!player.infDimensionsUnlocked[1]) player.infDimensionsUnlocked[1] = true
        else if (!player.infDimensionsUnlocked[2]) player.infDimensionsUnlocked[2] = true
        else if (!player.infDimensionsUnlocked[3]) {
            player.infDimensionsUnlocked[3] = true
            giveAchievement("NEW DIMENSIONS???")
        }
        else if (!player.infDimensionsUnlocked[4]) player.infDimensionsUnlocked[4] = true
        else if (!player.infDimensionsUnlocked[5]) player.infDimensionsUnlocked[5] = true
        else if (!player.infDimensionsUnlocked[6]) player.infDimensionsUnlocked[6] = true
        else if (!player.infDimensionsUnlocked[7]) {
            player.infDimensionsUnlocked[7] = true
            giveAchievement("0 degrees from infinity")
        }
    }
}

let savefix = function () {
  let oldPlayer = {};
  for (let i in player) {
    oldPlayer[i] = player[i];
  }
  let nan = false;
  if (Number.isNaN(currentMult)) {
    nan = true;
    console.log('currentMult is buggy');
    currentMult = 1;
  }
  if (Number.isNaN(mult18)) {
    nan = true;
    console.log('mult18 is buggy');
    mult18 = 1;
  }
  for (let i in player) {
    if (player[i] && Number.isNaN(player[i].e)) {
      nan = true;
      console.log(i + ' is buggy');
      if (i === 'money') {
        player.money = new Decimal(10);
        updateInitialMoney();
      } else if (i === 'tickspeed') {
        player.tickspeed = new Decimal(1000);
      } else {
        player[i] = new Decimal(0);
      }
    }
    if (player.tickspeed.eq(0)) {
      player.tickspeed = new Decimal(1000);
    }
    for (let j in player[i]) {
      if (player[i][j] && Number.isNaN(player[i][j].e)) {
        nan = true;
        console.log(i + '.' + j + ' is buggy');
        player[i][j] = new Decimal(0);
      }
    }
  }
  if (nan) {
    showMults = false
    alert('There is a bug in the game and your save was just fixed. If this message shows up, and especially if it shows up multiple times, tell me.')
  }
}


var blink = true;


setInterval(savefix, 1000);

setInterval(function() {
    updateDimensions();
}, 50)

function setInfAndEterPointDisplay () {
  if (player.infinitied == 0 && player.eternities === 0) document.getElementById("infinityPoints2").style.display = "none"
  else document.getElementById("infinityPoints2").style.display = "inline-block"
  if (player.eternities == 0) document.getElementById("eternityPoints2").style.display = "none"
  else document.getElementById("eternityPoints2").style.display = "inline-block"
}

var nextAt = [new Decimal("1e2000"), new Decimal("1e5000"), new Decimal("1e12000"), new Decimal("1e14000"), new Decimal("1e18000"), new Decimal("1e20000"), new Decimal("1e23000"), new Decimal("1e28000")]

var goals = [new Decimal("1e850"), new Decimal("1e10500"), new Decimal("1e5000"), new Decimal("1e13000"), new Decimal("1e11111"), new Decimal("2e22222"), new Decimal("1e10000"), new Decimal("1e27000")]
setInterval(function() {
    if (getDimensionFinalMultiplier(1).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(2).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(3).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(4).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(5).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(6).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(7).gte(new Decimal("1e308")) &&
        getDimensionFinalMultiplier(8).gte(new Decimal("1e308"))) {
        giveAchievement("Can't hold all these infinities")
    }

    if (getDimensionFinalMultiplier(1).lt(getDimensionFinalMultiplier(2)) &&
        getDimensionFinalMultiplier(2).lt(getDimensionFinalMultiplier(3)) &&
        getDimensionFinalMultiplier(3).lt(getDimensionFinalMultiplier(4)) &&
        getDimensionFinalMultiplier(4).lt(getDimensionFinalMultiplier(5)) &&
        getDimensionFinalMultiplier(5).lt(getDimensionFinalMultiplier(6)) &&
        getDimensionFinalMultiplier(6).lt(getDimensionFinalMultiplier(7)) &&
        getDimensionFinalMultiplier(7).lt(getDimensionFinalMultiplier(8))) {
        giveAchievement("How the antitables have turned")
    }

    if (player.infinityDimension1.baseAmount == 0 &&
        player.infinityDimension2.baseAmount == 0 &&
        player.infinityDimension3.baseAmount == 0 &&
        player.infinityDimension4.baseAmount == 0 &&
        player.infinityDimension5.baseAmount == 0 &&
        player.infinityDimension6.baseAmount == 0 &&
        player.infinityDimension7.baseAmount == 0 &&
        player.infinityDimension8.baseAmount == 0 &&
        player.infMultCost.equals(10) &&
        player.infinityPoints.gte(new Decimal("1e14000"))) {
        giveAchievement("I never liked this infinity stuff anyway")
    }

    // here we actually want infinitied, so not banked
    setInfAndEterPointDisplay();

    if (blink && !player.achievements.includes("r78")) {
        document.getElementById("Blink of an eye").style.display = "none"
        blink = false
    }
    else {
        document.getElementById("Blink of an eye").style.display = "block"
        blink = true
    }
    if (nextAt[player.postChallUnlocked] === undefined) {
        document.getElementById("nextchall").innerHTML = ""
    }
    else {
        document.getElementById("nextchall").innerHTML = "Next challenge unlocks at "+ shortenCosts(nextAt[player.postChallUnlocked]) + " antimatter."
        if (player.money.gte(nextAt[player.postChallUnlocked])) {
            player.postChallUnlocked += 1
            if (player.eternities > 6) player.challenges.push("postc"+player.postChallUnlocked)
            updateChallenges()
        }
    }

    let temp = 1
    for (var i=0; i < player.challenges.length; i++) {
        if (player.challenges[i].includes("post")) {
            temp *= 1.3
            document.getElementById("infchallengesbtn").style.display = "inline-block"
        }
    }
    infDimPow = temp

    if (player.postChallUnlocked > 0 || player.eternities > 0) {
      document.getElementById("challTabButtons").style.display = "table"
    }

    let epPlural = player.eternityPoints.equals(1) ? '' : 's';
    document.getElementById("eternityPoints2").innerHTML = "You have <span class=\"EPAmount2\">"+shortenDimensions(player.eternityPoints)+"</span> Eternity Point" + epPlural + "."

    document.getElementById("eternitybtn").style.display = player.infinityPoints.gte(currentEternityRequirement()) ? "inline-block" : "none"


    if (player.eternities !== 0) {
      document.getElementById("eternitystorebtn").style.display = "inline-block"
    }
    for (var i=1; i <=8; i++) {
        document.getElementById("postc"+i+"goal").innerHTML = "Goal: "+shortenCosts(goals[i-1])
    }

    if (player.eternities > 0) document.getElementById("infmultbuyer").style.display = "inline-block"
    if (player.eternities > 4) document.getElementById("togglecrunchmode").style.display = "inline-block"
    if (player.eternities > 8) document.getElementById("galaxybulk").style.display = "inline-block"
    if (player.achievements.includes('r134')) document.getElementById("replgalaxybulk").style.display = "inline-block"

    document.getElementById("replicantichance").className = canGetReplChance() ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantiinterval").className = canGetReplInterval() ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantimax").className = canGetReplGal() ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantireset").className = (player.replicanti.galaxies < player.replicanti.gal && player.replicanti.amount.gte(player.replicanti.limit)) ? "storebtn" : "unavailablebtn"
    document.getElementById("replicantiunlock").className = (player.infinityPoints.gte(1e140)) ? "storebtn" : "unavailablebtn"
    updateTheoremButtons()

    if (getTickSpeedMultiplier() < 0.001) giveAchievement("Do you even bend time bro?")

    if (player.eternities > 9) document.getElementById("bulklabel").innerHTML="Max dimboost interval:"

    if (player.eternities > 10) {
        for (var i=1;i<player.eternities-9 && i < 9; i++) {
            document.getElementById("infauto"+i).style.visibility = "visible"
        }
        document.getElementById("toggleallinfdims").style.visibility = "visible"
    }

    if (player.eternities !== 0) document.getElementById("eternityconf").style.display = "inline-block"
    if (player.eternities >= 3) document.getElementById("autoBuyerReplicantiGalaxies").style.display = "inline-block"
    if (player.eternities >= 40) document.getElementById("replauto1").style.visibility = "visible"
    if (player.eternities >= 60) document.getElementById("replauto2").style.visibility = "visible"
    if (player.eternities >= 80) document.getElementById("replauto3").style.visibility = "visible"
    if (player.eternities >= 100) document.getElementById("autoBuyerEter").style.display = "inline-block"

    if (player.eternities == 0) document.getElementById("pasteternities").style.display = "none"
    else document.getElementById("pasteternities").style.display = "inline-block"
    if (player.challenges.length > 1) document.getElementById("challengetimesbtn").style.display = "inline-block"
    // here also not banked
    if (player.infinities == 0) document.getElementById("pastinfs").style.display = "none"
    else document.getElementById("pastinfs").style.display = "inline-block"
    if (player.extragalactic.extragalaxies == 0) document.getElementById("pastextragalaxies").style.display = "none"
    else document.getElementById("pastextragalaxies").style.display = "inline-block"

    if (player.eternities > 10) {
        for (var i=1;i<player.eternities-9 && i < 9; i++) {
            if (player.infDimBuyers[i-1]) {
                buyMaxInfDims(i)
                buyManyInfinityDimension(i)
            }
        }
    }

    if (player.eternities >= 40 && player.replicanti.auto[0]) {
        while (canGetReplChance()) upgradeReplicantiChance()
    }

    if (player.eternities >= 60 && player.replicanti.auto[1]) {
        while (canGetReplInterval()) upgradeReplicantiInterval()
    }

    if (player.eternities >= 80 && player.replicanti.auto[2]) {
        while (canGetReplGal()) upgradeReplicantiGalaxy()
    }
}, 1000)




var postC2Count = 0;
var replicantiTicks = 0

function getReplicantiETA (amount, limit) {
  if (amount === undefined) {
    amount = player.replicanti.amount;
  }
  if (limit === undefined) {
    limit = player.replicanti.limit;
  }
  let interval = getReplicantiInterval(amount);
  let growthTime = getReplicantiInterval(amount) / Math.log2(1 + player.replicanti.chance) / 100;
  if (!player.achievements.includes('r107')) {
    // replicanti aren't quicker yet
    return (limit.log(2) - amount.log(2)) * growthTime;
  }
  let preInf;
  let infAmount = Decimal.min(limit, Number.MAX_VALUE);
  if (amount.lt(infAmount)) {
    preInf = (infAmount.log(2) - amount.log(2)) * growthTime;
  } else {
    preInf = 0;
  }
  // post infinity we go like x^(4/3) up to constant, so overall it takes ((4 / 3) * (goal / current)^(3 / 4) - 1) * growth / current.
  let current = amount.max(new Decimal(Number.MAX_VALUE));
  let postInf;
  if (limit.gt(current)) {
    postInf = ((4 / 3) * (Math.pow(limit.log(2) / current.log(2), 3 / 4) - 1)) * growthTime * current.log(2);
  } else {
    postInf = 0;
  }
  return preInf + postInf;
}

function getPerMin (amount, time) {
  return amount.dividedBy(time/600);
}

function updatePeaks (object, amount, time) {
  if (amount.gt(object.total)) object.total = amount;
  let perMin = getPerMin(amount, time);
  if (perMin.gt(object.perMin)) object.perMin = perMin;
}

function startInterval() {
    setInterval(function () {
        var thisUpdate = new Date().getTime();
        if (thisUpdate - player.lastUpdate >= 21600000) giveAchievement("Don't you dare sleep")
        var diff = Math.min(thisUpdate - player.lastUpdate, 21600000);
        if (player.options.offlineProgressDisabled) {
          diff = Math.min(diff, 1000);
        }
        if (player.options.paused) {
          diff = 0;
        }
        diff /= 100;
        /*
        if (player.eternityChallenges.current === 12) {
          diff /= 1000;
        }
        */
        if (diff < 0) diff = 1;
        if (player.thisInfinityTime < -10) player.thisInfinityTime = Infinity
        if (player.bestInfinityTime < -10) player.bestInfinityTime = Infinity
        if (diff > player.autoTime && !player.break) player.infinityPoints = player.infinityPoints.plus(player.autoIP.times(diff -player.autoTime))
        player.matter = player.matter.times(Decimal.pow((1.03 + player.resets/200 + player.galaxies/100), diff));
        // Make dark matter actually something the player might care about, doubling roughly every second. Severe on timeshards, not that bad on ND,
        // but in the sweet spot on ID.
        // player.darkMatter = player.darkMatter.times(Decimal.pow(1.1, diff));
        if (player.matter.gt(player.money) && (player.currentChallenge == "challenge12" || player.currentChallenge == "postc1")) {
            if (player.resets > 0) player.resets--;
            softReset(0);
        }

        if (player.currentChallenge == "postc8") postc8Mult = postc8Mult.times(Math.pow(0.000000046416, diff))

        if (player.currentChallenge == "challenge3" || player.matter.gte(1)) player.chall3Pow = player.chall3Pow.times(Decimal.pow(1.00038, diff));
        player.chall2Pow = Math.min(player.chall2Pow + diff/1800, 1);
        if (player.currentChallenge == "postc2") {
        postC2Count++;
        if (postC2Count >= 8 || diff > 300) {
            sacrifice();
            postC2Count = 0;
        }}
        if (player.infinityUpgrades.includes("passiveGen")) player.partInfinityPoint += diff / player.bestInfinityTime;
        if (player.partInfinityPoint >= 100) {
            player.infinityPoints = player.infinityPoints.plus(getIPMult().times(player.partInfinityPoint/10));
            player.partInfinityPoint = 0;
        }

        if (player.partInfinityPoint >= 10) {
            player.partInfinityPoint -= 10;
            player.infinityPoints = player.infinityPoints.plus(getIPMult());
        }

        if (player.infinityPoints.gte('9.99999e999')) giveAchievement("This achievement doesn't exist II");
        if (player.infinityPoints.gte('1e30008')) giveAchievement("Can you get infinite IP?");
        if (player.infinityPoints.gte(new Decimal("1e66600")) && player.timestudy.studies.every((i) => i === null || i === 0)) giveAchievement("What do I have to do to get rid of you")

        if (infinityMultAndGenEnabled()) {
            if (player.infinityUpgrades.includes("infinitiedGeneration")) player.partInfinitied += diff / player.bestInfinityTime;
            if (player.partInfinitied >= 50) {
                player.infinitied += Math.floor(player.partInfinitied/5)
                player.partInfinitied = 0;
            }

            if (player.partInfinitied >= 5) {
                player.partInfinitied -= 5;
                player.infinitied++;
            }
        }
        if (getInfinitied() >= 2e6) giveAchievement("2 Million Infinities")
        if (getInfinitied() >= 2e7 && player.eternities >= 2e7) giveAchievement("I decided to grind")
        player.infinityPoints = player.infinityPoints.plus(bestRunIppm.times(player.offlineProd/100).times(diff/600))

        if (player.currentChallenge != "challenge7") {
            for (let tier = 7; tier >= 1; --tier) {
                var name = TIER_NAMES[tier];

                player[name + 'Amount'] = player[name + 'Amount'].plus(getDimensionProductionPerSecond(tier + 1).times(diff / 100));
        }
        } else {
            for (let tier = 6; tier >= 1; --tier) {
                var name = TIER_NAMES[tier];

                player[name + 'Amount'] = player[name + 'Amount'].plus(getDimensionProductionPerSecond(tier + 2).times(diff / 100));
            }
        }

        if (player.money.lte(Number.MAX_VALUE) || (player.break && player.currentChallenge == "") || (player.currentChallenge != "" && player.money.lte(player.challengeTarget))) {
            player.money = player.money.plus(getAntimatterPerSecond().times(diff/10));
            player.totalmoney = player.totalmoney.plus(getAntimatterPerSecond().times(diff/10));
            if (player.eternityChallenges.current === 13) {
                let gain = new Decimal(1).dividedBy(player.tickspeed.dividedBy(1000)).times(diff/10);
                player.money = player.money.plus(gain);
                player.totalmoney = player.totalmoney.plus(gain);
                player.infinityPoints = player.infinityPoints.plus(Decimal.floor(gain));
            }
        }

        document.getElementById("dimTabButtons").style.display = "none"

        player.totalTimePlayed += diff
        player.thisInfinityTime += diff
        player.thisEternity += diff
        player.extragalactic.thisExtragalaxy += diff
        /*
        // We're adding time in the eternity.
        if (player.eternityChallenges.current === 12) {
          checkForEternityChallengeFailure();
        }
        */

        if (player.eternities > 0) document.getElementById("tdtabbtn").style.display = "inline-block"

        for (let tier=1;tier<9;tier++) {
            if (tier != 8 && player.infDimensionsUnlocked[tier-1]) player["infinityDimension"+tier].amount = player["infinityDimension"+tier].amount.plus(DimensionProduction(tier+1).times(diff/100))
            if (player.infDimensionsUnlocked[tier-1]) {
                document.getElementById("infRow"+tier).style.display = "inline-block"
                document.getElementById("dimTabButtons").style.display = "inline-block"
            }
            else document.getElementById("infRow"+tier).style.display = "none"

            if (tier <4) player["timeDimension"+tier].amount = player["timeDimension"+tier].amount.plus(getTimeDimensionProduction(tier+1).times(diff/100))
            if (tier <4) player.extragalactic["galacticDimension"+tier].amount = player.extragalactic["galacticDimension"+tier].amount.plus(getGalacticDimensionProduction(tier+1).times(diff/100))
        }

        if (player.eternities > 0) document.getElementById("dimTabButtons").style.display = "inline-block"


        if (player.money.gte("9.9999e9999")) giveAchievement("This achievement doesn't exist")
        if (player.money.gte("1e35000")) giveAchievement("I got a few to spare")
        player.infinityPower = player.infinityPower.plus(DimensionProduction(1).times(diff/10))

        if (player.infinityPower.gt(1)) giveAchievement("A new beginning.");
        if (player.infinityPower.gt(1e6)) giveAchievement("1 million is a lot"); //TBD
        if (player.infinityPower.gt(1e260)) giveAchievement("4.33 minutes of Infinity"); //TBD

        player.timeShards = player.timeShards.plus(getTimeDimensionProduction(1).times(diff/10))

        let newTotalTickGained = getTotalTickGained(player.timeShards);
        let newTickGained = newTotalTickGained - player.totalTickGained;
        player.totalTickGained = newTotalTickGained
        giveBoostFromTDTickSpeedUpgrades(newTickGained)
        if (player.totalTickGained >= 308) giveAchievement("Infinite time");
        document.getElementById("totaltickgained").innerHTML = "You've gained "+shortenDimensions(player.totalTickGained)+" tickspeed upgrades."
        updateTickSpeed();

        player.extragalactic.galacticPower = player.extragalactic.galacticPower.plus(getGalacticDimensionProduction(1).times(diff/10))

        let newTotalGalaxiesGained = getTotalExtragalacticGalaxiesGained();
        player.extragalactic.galaxies = newTotalGalaxiesGained;
        document.getElementById("totalgalaxiesgained").innerHTML = "You've gained "+shortenDimensions(newTotalGalaxiesGained)+" extragalactic galaxies."

        if (player.eternities == 0) {
            document.getElementById("eternityPoints2").style.display = "none"
            document.getElementById("eternitystorebtn").style.display = "none"
        }

        let broken = player.break && player.currentChallenge === "";

        let canInfinity = (player.money.gte(Number.MAX_VALUE) && !player.currentChallenge.includes("post")) || (player.currentChallenge !== "" && player.money.gte(player.challengeTarget));

        if (!broken && canInfinity) {
            document.getElementById("bigcrunch").style.display = 'inline-block';
            if ((player.currentChallenge == "" || player.options.retryChallenge) && (player.bestInfinityTime <= 600 || player.break)) {}
            else showTab('emptiness');
        } else document.getElementById("bigcrunch").style.display = 'none';

        if (broken && canInfinity) {
            document.getElementById("postInfinityButton").style.display = "inline-block"
        } else {
            document.getElementById("postInfinityButton").style.display = "none"
        }


        if (player.break) {
          document.getElementById("iplimit").style.display = "inline";
          document.getElementById("IPPeakDiv").style.display = "inline";
        } else {
          document.getElementById("iplimit").style.display = "none";
          document.getElementById("IPPeakDiv").style.display = "none";
        }

        if (player.extragalactic.extragalaxies > 0) {
            document.getElementById('tickspeedinc').style.display = "inline";
        } else {
            document.getElementById('tickspeedinc').style.display = "none";
        }

        if (canInfinity) {
          updatePeaks(player.peaks.ip, gainedInfinityPoints(), player.thisInfinityTime);
        }

        let main = "<b>Big Crunch for "+shortenDimensions(gainedInfinityPoints())+" Infinity Points</b>"
        let extra = "<br>"+shortenDimensions(getPerMin(gainedInfinityPoints(), player.thisInfinityTime)) + " IP/min<br>Peaked at "+shortenDimensions(player.peaks.ip.perMin)+" IP/min";
        if (gainedInfinityPoints().lt(new Decimal('1e100000'))) main += extra;
        document.getElementById("postInfinityButton").innerHTML = main;

        // very quick, very dirty
        replicantiTicks += diff * 100;
        var interval = getReplicantiInterval();
        var doublings = Math.log2(1 + player.replicanti.chance) * Math.floor(replicantiTicks / interval);
        replicantiTicks %= interval;
        player.replicanti.amount = player.replicanti.amount.times(Decimal.pow(2, doublings));
        if (!player.achievements.includes('r126')) {
            player.replicanti.amount = player.replicanti.amount.min(player.replicanti.limit)
        }

        if (player.replicanti.amount.gte(Decimal.pow(10, 1e6))) {
          giveAchievement("1e(1 million) is a lot");
        }


        if (player.replicanti.amount.gte(player.replicanti.limit) && player.thisInfinityTime < 600*30) {
          giveAchievement("Is this safe?");
        }
        if (player.replicanti.galaxies >= 10 && player.thisInfinityTime < 150) {
          giveAchievement("The swarm");
          updateInfCosts();
        }

        if (player.replicanti.galaxybuyer.unl && player.replicanti.galaxybuyer.on &&
          player.replicanti.amount.gte(player.replicanti.limit) &&
          getCurrentReplicantiGalaxyGain() >= getReplicantiGalaxyBuyerBulk() &&
          Date.now() - player.replicanti.galaxybuyer.lastTick >= player.replicanti.galaxybuyer.wait * 1000) {
            replicantiGalaxy();
            player.replicanti.galaxybuyer.lastTick = Date.now();
        }


        if (player.infMultBuyer) {
            buyMaxInfMult();
        }

        if (player.achievements.includes('r134') && player.achievements.includes('r126') && player.replicanti.amount.gte(player.replicanti.limit)) {
            let currentGalGain = getCurrentReplicantiGalaxyGain();
            let maxGalGain = player.replicanti.gal - player.replicanti.galaxies;
            let newGalGain = Math.min(currentGalGain + 1, maxGalGain);
            let estimate = getReplicantiETA(player.replicanti.amount, player.replicanti.limit.pow(newGalGain * 5));
            let galGainDisplay = (newGalGain === maxGalGain) ? 'maximum' : newGalGain;
            document.getElementById("replicantiapprox").innerHTML = "Approximately " + timeDisplay(estimate) + " until gain of " + galGainDisplay + ' replicanti galaxies';
        } else {
            let estimate = getReplicantiETA();
            document.getElementById("replicantiapprox").innerHTML = "Approximately " + timeDisplay(estimate) + " until infinite replicanti"
        }

        document.getElementById("replicantiamount").innerHTML = shortenDimensions(player.replicanti.amount)
        var replmult = getReplMult();
        document.getElementById("replicantimult").innerHTML = shorten(replmult);

        var places = Math.floor(Math.log10(getReplicantiInterval()/1000)) * (-1);
        updateReplicantiInterval(places);

        if (player.infinityPoints.gte(currentEternityRequirement())) {
          updatePeaks(player.peaks.ep, gainedEternityPoints(), player.thisEternity);
        }

        let eterButtonStart = (player.eternities === 0) ? "<b>Other times await.. I need to become Eternal</b><br/>" : "<b>I need to become Eternal.</b><br/>";
        if (gainedEternityPoints().gte(1e3)) {
          eterButtonStart = '';
        }
        if (player.eternityChallenges.current) {
          eterButtonStart = '<b>Other challenges await.. I need to become Eternal</b><br/>';
        }
        let eterButtonEnd = "<br>" + shortenDimensions(getPerMin(gainedEternityPoints(), player.thisEternity)) + " EP/min<br>Peaked at " + shortenDimensions(player.peaks.ep.perMin) + " EP/min";
        if (player.eternities === 0 || player.eternityChallenges.current) {
          eterButtonEnd = '';
        }
        let epPlural = gainedEternityPoints().eq(1) ? '' : 's';
        document.getElementById("eternitybtn").innerHTML = eterButtonStart + "<b>Gain " + shortenDimensions(gainedEternityPoints()) + " Eternity Point" + epPlural + ".</b>" + eterButtonEnd;

        updateMoney();
        updateCoinPerSec();

        // here we add infinitypoints2 and eternitypoints2
        if (player.infinitied > 0 || player.eternities > 0) {
          let ipPlural = player.infinityPoints.equals(1) ? '' : 's';
          document.getElementById("infinityPoints2").innerHTML = "You have <span class=\"IPAmount2\">"+shortenDimensions(player.infinityPoints)+"</span> Infinity Point" + ipPlural + ".";
        }
        if (player.eternities > 0) {
          let epPlural = player.eternityPoints.equals(1) ? '' : 's';
          document.getElementById("eternityPoints2").innerHTML = "You have <span class=\"EPAmount2\">"+shortenDimensions(player.eternityPoints)+"</span> Eternity Point" + epPlural + ".";
        }

        updateInfinityDimensions();
        updateInfPower();
        updateTSDescs();
        updateTimeDimensions()
        updateTimeShards()
        if (getAntimatterPerSecond().gt(player.money)) {
          if (player.money.gt(Math.pow(10,63)) && !player.achievements.includes("r42")) {
            giveAchievement("Supersanic");
          }
          Marathon += diff;
          if (Marathon >= 300 && !player.achievements.includes("r44")) giveAchievement("Over in 30 seconds");
        } else {
          Marathon = 0;
        }

        for (let tier = 1; tier <= 8; ++tier) {
            var name = TIER_NAMES[tier];
            if (player.currentChallenge != "challenge10" && player.currentChallenge != "postc1") {
                document.getElementById(name).className = canAfford(player[name + 'Cost']) ? 'storebtn' : 'unavailablebtn';
                document.getElementById(name + 'Max').className = canAfford(player[name + 'Cost'].times(10 - player[name + 'Bought'])) ? 'storebtn' : 'unavailablebtn';
            } else {
                if (tier >= 3) {
                    document.getElementById(name).className = player[TIER_NAMES[tier-2] + 'Amount'].gte(player[name + 'Cost']) ? 'storebtn' : 'unavailablebtn';
                    document.getElementById(name + 'Max').className = player[TIER_NAMES[tier-2] + 'Amount'].gte(player[name + 'Cost'].times(10 - player[name + 'Bought'])) ? 'storebtn' : 'unavailablebtn';
                } else {
                    document.getElementById(name).className = canAfford(player[name + 'Cost']) ? 'storebtn' : 'unavailablebtn';
                    document.getElementById(name + 'Max').className = canAfford(player[name + 'Cost'].times(10 - player[name + 'Bought'])) ? 'storebtn' : 'unavailablebtn';
                }
            }
        }

        for (var tier = 1; tier < 9; tier++) {
            let dim = player["infinityDimension"+tier];
            if (canBuyInfDim(tier, dim)) document.getElementById("infMax"+tier).className = "storebtn"
            else document.getElementById("infMax"+tier).className = "unavailablebtn"
        }

        for (var tier = 1; tier < 5; tier++) {
            if (player.eternityPoints.gte(player["timeDimension"+tier].cost)) document.getElementById("timeMax"+tier).className = "storebtn"
            else document.getElementById("timeMax"+tier).className = "unavailablebtn"
        }




        if (canAfford(player.tickSpeedCost)) {
            document.getElementById("tickSpeed").className = 'storebtn';
            document.getElementById("tickSpeedMax").className = 'storebtn';
        } else {
            document.getElementById("tickSpeed").className = 'unavailablebtn';
            document.getElementById("tickSpeedMax").className = 'unavailablebtn';
        }

        if (player.infinitied > 0 || player.eternities > 0) {
            document.getElementById("infinitybtn").style.display = "block";
            document.getElementById("challengesbtn").style.display = "block";
            if (player.infinityPoints.gte(1)) document.getElementById("infi11").className = "infinistorebtn1"
            else document.getElementById("infi11").className = "infinistorebtnlocked"
            if (player.infinityPoints.gte(1)) document.getElementById("infi21").className = "infinistorebtn2"
            else document.getElementById("infi21").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("timeMult") && player.infinityPoints.gte(1)) document.getElementById("infi12").className = "infinistorebtn1"
            else document.getElementById("infi12").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("dimMult") && player.infinityPoints.gte(1)) document.getElementById("infi22").className = "infinistorebtn2"
            else document.getElementById("infi22").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("18Mult") && player.infinityPoints.gte(1)) document.getElementById("infi13").className = "infinistorebtn1"
            else document.getElementById("infi13").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("27Mult") && player.infinityPoints.gte(1)) document.getElementById("infi23").className = "infinistorebtn2"
            else document.getElementById("infi23").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("36Mult") && player.infinityPoints.gte(1)) document.getElementById("infi14").className = "infinistorebtn1"
            else document.getElementById("infi14").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("45Mult") && player.infinityPoints.gte(1)) document.getElementById("infi24").className = "infinistorebtn2"
            else document.getElementById("infi24").className = "infinistorebtnlocked"
            if (player.infinityPoints.gte(3)) document.getElementById("infi31").className = "infinistorebtn3"
            else document.getElementById("infi31").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("timeMult2") && player.infinityPoints.gte(5)) document.getElementById("infi32").className = "infinistorebtn3"
            else document.getElementById("infi32").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("unspentBonus") && player.infinityPoints.gte(7)) document.getElementById("infi33").className = "infinistorebtn3"
            else document.getElementById("infi33").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("resetMult") && player.infinityPoints.gte(10)) document.getElementById("infi34").className = "infinistorebtn3"
            else document.getElementById("infi34").className = "infinistorebtnlocked"
            if (player.infinityPoints.gte(20)) document.getElementById("infi41").className = "infinistorebtn4"
            else document.getElementById("infi41").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("skipReset1") && player.infinityPoints.gte(40)) document.getElementById("infi42").className = "infinistorebtn4"
            else document.getElementById("infi42").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("skipReset2") && player.infinityPoints.gte(80)) document.getElementById("infi43").className = "infinistorebtn4"
            else document.getElementById("infi43").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("skipReset3") && player.infinityPoints.gte(500)) document.getElementById("infi44").className = "infinistorebtn4"
            else document.getElementById("infi44").className = "infinistorebtnlocked"
            if (player.infinityUpgrades.includes("skipResetGalaxy") && player.infinityUpgrades.includes("passiveGen") && player.infinityUpgrades.includes("galaxyBoost") && player.infinityUpgrades.includes("resetBoost") && player.infinityPoints.gte(player.infMultCost)) {
                document.getElementById("infiMult").className = "infinimultbtn"
            } else document.getElementById("infiMult").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(1e4)) document.getElementById("postinfi11").className = "infinistorebtn1"
            else document.getElementById("postinfi11").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(5e4)) document.getElementById("postinfi21").className = "infinistorebtn1"
            else document.getElementById("postinfi21").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(player.tickSpeedMultDecreaseCost)) document.getElementById("postinfi31").className = "infinimultbtn"
            else document.getElementById("postinfi31").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(5e11)) document.getElementById("postinfi41").className = "infinistorebtn1"
            else document.getElementById("postinfi41").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(1e5)) document.getElementById("postinfi12").className = "infinistorebtn1"
            else document.getElementById("postinfi12").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(1e6)) document.getElementById("postinfi22").className = "infinistorebtn1"
            else document.getElementById("postinfi22").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(1e7)) document.getElementById("postinfi32").className = "infinistorebtn1"
            else document.getElementById("postinfi32").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(player.dimensionMultDecreaseCost)) document.getElementById("postinfi42").className = "infinimultbtn"
            else document.getElementById("postinfi42").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(20e6)) document.getElementById("postinfi13").className = "infinistorebtn1"
            else document.getElementById("postinfi13").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(5e9)) document.getElementById("postinfi23").className = "infinistorebtn1"
            else document.getElementById("postinfi23").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(1e15)) document.getElementById("postinfi33").className = "infinistorebtn1"
            else document.getElementById("postinfi33").className = "infinistorebtnlocked"

            if (player.infinityPoints.gte(player.offlineProdCost)) document.getElementById("offlineProd").className = "infinistorebtn1"
            else document.getElementById("offlineProd").className = "infinistorebtnlocked"
        }

        if (player.autobuyers[11]%1 === 0 || player.autobuyers[11].interval>100) document.getElementById("break").className = "infinistorebtnlocked"
        else document.getElementById("break").className = "infinistorebtn2"


        if (canSacrifice() || player.infinitied > 0 || player.eternities > 0) {
            document.getElementById("confirmation").style.display = "inline-block";
            document.getElementById("sacrifice").style.display = "inline-block";
        } else {
            document.getElementById("confirmation").style.display = "none";
            document.getElementById("sacrifice").style.display = "none";
        }
        if (canSacrifice()) {
            document.getElementById("sacrifice").className = "storebtn";
        } else {
            document.getElementById("sacrifice").className = "unavailablebtn";
        }

        if (player.autobuyers[11]%1 !== 0 && player.autobuyers[11].interval == 100) {
            document.getElementById("postinftable").style.display = "inline-block"
            document.getElementById("postinftable2").style.display = "inline-block"
        } else {
            document.getElementById("postinftable").style.display = "none"
            document.getElementById("postinftable2").style.display = "none"
        }

        if (player.autobuyers[11].interval == 100) document.getElementById("abletobreak").style.display = "none"


        document.getElementById("infinitybtn").style.display = "none";
        document.getElementById("challengesbtn").style.display = "none";

        if (player.money.gte(Number.MAX_VALUE) && (((player.currentChallenge != "" && player.money.gte(player.challengeTarget)) && !player.options.retryChallenge) || (player.bestInfinityTime > 600 && !player.break))) {
            document.getElementById("dimensionsbtn").style.display = "none";
            document.getElementById("optionsbtn").style.display = "none";
            document.getElementById("statisticsbtn").style.display = "none";
            document.getElementById("achievementsbtn").style.display = "none";
            document.getElementById("challengesbtn").style.display = "none";
            document.getElementById("infinitybtn").style.display = "none";
            document.getElementById("tickSpeed").style.visibility = "hidden";
            document.getElementById("tickSpeedMax").style.visibility = "hidden";
            document.getElementById("tickLabel").style.visibility = "hidden";
            document.getElementById("tickSpeedAmount").style.visibility = "hidden";
        } else {
            document.getElementById("dimensionsbtn").style.display = "inline-block";
            document.getElementById("optionsbtn").style.display = "inline-block";
            document.getElementById("statisticsbtn").style.display = "inline-block";
            document.getElementById("achievementsbtn").style.display = "inline-block";
            if (player.infinitied > 0 || player.eternities > 0) {
                document.getElementById("infinitybtn").style.display = "inline-block";
                document.getElementById("challengesbtn").style.display = "inline-block";
            }

        }

        document.getElementById("epmult").className = player.eternityPoints.gte(player.epmultCost) ? "eternityupbtn" : "eternityupbtnlocked"

        if (player.infinityUpgrades.includes("bulkBoost")) document.getElementById("bulkdimboost").style.display = "inline"
        else document.getElementById("bulkdimboost").style.display = "none"

        if (player.infinityUpgrades.includes("timeMult")) document.getElementById("infi11").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("dimMult")) document.getElementById("infi21").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("18Mult")) document.getElementById("infi12").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("27Mult")) document.getElementById("infi22").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("36Mult")) document.getElementById("infi13").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("45Mult")) document.getElementById("infi23").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("resetBoost")) document.getElementById("infi14").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("galaxyBoost")) document.getElementById("infi24").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("timeMult2")) document.getElementById("infi31").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("unspentBonus")) document.getElementById("infi32").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("resetMult")) document.getElementById("infi33").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("passiveGen")) document.getElementById("infi34").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("skipReset1")) document.getElementById("infi41").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("skipReset2")) document.getElementById("infi42").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("skipReset3")) document.getElementById("infi43").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("skipResetGalaxy")) document.getElementById("infi44").className = "infinistorebtnbought"

        if (player.infinityUpgrades.includes("totalMult")) document.getElementById("postinfi11").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("currentMult")) document.getElementById("postinfi21").className = "infinistorebtnbought"
        if (player.tickSpeedMultDecrease == 2) document.getElementById("postinfi31").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("achievementMult")) document.getElementById("postinfi22").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("infinitiedMult")) document.getElementById("postinfi12").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("postGalaxy")) document.getElementById("postinfi41").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("challengeMult")) document.getElementById("postinfi32").className = "infinistorebtnbought"
        if (player.dimensionMultDecrease == 3) document.getElementById("postinfi42").className = "infinistorebtnbought"
        if (player.offlineProd == 50) document.getElementById("offlineProd").className = "infinistorebtnbought"


        if (player.infinityUpgrades.includes("infinitiedGeneration")) document.getElementById("postinfi13").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("bulkBoost")) document.getElementById("postinfi23").className = "infinistorebtnbought"
        if (player.infinityUpgrades.includes("autoBuyerUpgrade")) document.getElementById("postinfi33").className = "infinistorebtnbought"

        if (player.currentChallenge !== "") {
            document.getElementById("progressbar").style.width = Decimal.min((Decimal.log10(player.money.plus(1)) / Decimal.log10(player.challengeTarget) * 100), 100).toFixed(2) + "%"
            document.getElementById("progressbar").innerHTML = Decimal.min((Decimal.log10(player.money.plus(1)) / Decimal.log10(player.challengeTarget) * 100), 100).toFixed(2) + "%"
            document.getElementById("progress").setAttribute('ach-tooltip',"Percentage to challenge goal")
        } else if (!player.break) {
            document.getElementById("progressbar").style.width = Decimal.min((Decimal.log10(player.money.plus(1)) / Decimal.log10(Number.MAX_VALUE) * 100), 100).toFixed(2) + "%"
            document.getElementById("progressbar").innerHTML = Decimal.min((Decimal.log10(player.money.plus(1)) / Decimal.log10(Number.MAX_VALUE) * 100), 100).toFixed(2) + "%"
            document.getElementById("progress").setAttribute('ach-tooltip',"Percentage to Infinity")
        } else if (player.infDimensionsUnlocked.includes(false)) {
            document.getElementById("progressbar").style.width = Decimal.min(player.money.e / getNewInfReq().e * 100, 100).toFixed(2) + "%"
            document.getElementById("progressbar").innerHTML = Decimal.min(player.money.e / getNewInfReq().e * 100, 100).toFixed(2) + "%"
            document.getElementById("progress").setAttribute('ach-tooltip',"Percentage to next dimension unlock")
        } else {
            document.getElementById("progressbar").style.width = Decimal.min(Decimal.log10(player.infinityPoints.plus(1)) / Decimal.log10(currentEternityRequirement())  * 100, 100).toFixed(2) + "%"
            document.getElementById("progressbar").innerHTML = Decimal.min(Decimal.log10(player.infinityPoints.plus(1)) / Decimal.log10(currentEternityRequirement())  * 100, 100).toFixed(2) + "%"
            if (player.eternityChallenges.current === null) {
              document.getElementById("progress").setAttribute('ach-tooltip',"Percentage to Eternity")
            } else {
              document.getElementById("progress").setAttribute('ach-tooltip',"Percentage to Eternity Challenge completion")
            }
        }

        var scale1 = [2.82e-45,1e-42,7.23e-30,5e-21,9e-17,6.2e-11,5e-8,3.555e-6,7.5e-4,1,2.5e3,2.6006e6,3.3e8,5e12,4.5e17,1.08e21,1.53e24,1.41e27,5e32,8e36,1.7e45,1.7e48,3.3e55,3.3e61,5e68,1e73,3.4e80,1e113,Number.MAX_VALUE];
        var scale2 = [" protons."," nucleuses."," Hydrogen atoms."," viruses."," red blood cells."," grains of sand."," grains of rice."," teaspoons."," wine bottles."," fridge-freezers."," Olympic-sized swimming pools."," Great Pyramids of Giza."," Great Walls of China."," large asteroids.",
                    " dwarf planets."," Earths."," Jupiters."," Suns."," red giants."," hypergiant stars."," nebulas."," Oort clouds."," Local Bubbles."," galaxies."," Local Groups."," Sculptor Voids."," observable universes."," Dimensions.", " Infinity Dimensions."];
        var id = 0;
        if (player.money.times(4.22419e-105).gt(2.82e-45)) {
            if (player.money.times(4.22419e-105).gt(scale1[scale1.length - 1])) id = scale1.length - 1;
            else {
                while (player.money.times(4.22419e-105).gt(scale1[id])) id++;
                if (id > 0) id--;
            }
            if (id >= 7 && id < 11) document.getElementById("infoScale").innerHTML = "If every antimatter were a planck volume, you would have enough to fill " + formatValue(player.options.notation, player.money * 4.22419e-105 / scale1[id], 2, 1) + scale2[id];
            else document.getElementById("infoScale").innerHTML = "If every antimatter were a planck volume, you would have enough to make " + formatValue(player.options.notation, player.money.times(4.22419e-105).dividedBy(scale1[id]), 2, 1) + scale2[id];
        } else {
            //does this part work correctly? i doubt it does - hevipelle
            //you and me both - dan-simon
            if (player.money.times(1e-54).lt(2.82e-45)) document.getElementById("infoScale").innerHTML = "If every antimatter were " + formatValue(player.options.notation,2.82e-45 / 1e-54 / player.money, 2, 1) + " attometers cubed, you would have enough to make a proton.";
            else if (player.money.times(1e-63).lt(2.82e-45)) document.getElementById("infoScale").innerHTML = "If every antimatter were " + formatValue(player.options.notation,2.82e-45 / 1e-63 / player.money, 2, 1) + " zeptometers cubed, you would have enough to make a proton.";
            else if (player.money.times(1e-72).lt(2.82e-45)) document.getElementById("infoScale").innerHTML = "If every antimatter were " + formatValue(player.options.notation,2.82e-45 / 1e-72 / player.money, 2, 1) + " yoctometers cubed, you would have enough to make a proton.";
            else document.getElementById("infoScale").innerHTML = "If every antimatter were " + formatValue(player.options.notation,2.82e-45 / 4.22419e-105 / player.money, 2, 1) + " planck volumes, you would have enough to make a proton.";
        }

        var shiftRequirement = getShiftRequirement(0);

        if (player[TIER_NAMES[shiftRequirement.tier] + 'Amount'] >= shiftRequirement.amount) {
            document.getElementById("softReset").className = 'storebtn';
        } else {
            document.getElementById("softReset").className = 'unavailablebtn';
        }

        if (player.eightAmount >= getGalaxyRequirement()) {
            document.getElementById("secondSoftReset").className = 'storebtn';
        } else {
            document.getElementById("secondSoftReset").className = 'unavailablebtn';
        }

        if (player.currentChallenge == "challenge4" && player.sixthAmount >= getGalaxyRequirement()) {
            document.getElementById("secondSoftReset").className = 'storebtn';
        }

        if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") document.getElementById("chall2Pow").style.display = "inline-block"
        else document.getElementById("chall2Pow").style.display = "none"
        if (player.currentChallenge == "challenge3" || player.currentChallenge == "postc1") document.getElementById("chall3Pow").style.display = "inline-block"
        else document.getElementById("chall3Pow").style.display = "none"

        document.getElementById("chall2Pow").innerHTML = (player.chall2Pow*100).toFixed(2) + "%"
        document.getElementById("chall3Pow").innerHTML = shorten(player.chall3Pow*100) + "%"


        if (player.infDimensionsUnlocked.includes(false) && player.break && player.infinityPoints.lt(currentEternityRequirement())) {
            document.getElementById("newDimensionButton").style.display = "inline-block"
        } else document.getElementById("newDimensionButton").style.display = "none"

        if (player.money.gte(getNewInfReq())) document.getElementById("newDimensionButton").className = "newdim"
        else document.getElementById("newDimensionButton").className = "newdimlocked"

        while (player.eternities > 24 && !player.infDimensionsUnlocked[7] && getNewInfReq().lt(player.money)) newDimension()

        document.getElementById("newDimensionButton").innerHTML = "Get " + shortenCosts(getNewInfReq()) + " antimatter to unlock a new Dimension."

        document.getElementById("sacrifice").setAttribute('ach-tooltip', "Boosts 8th Dimension by " + formatValue(player.options.notation, calcSacrificeBoost(), 2, 2) + "x");

        document.getElementById("sacrifice").innerHTML = "Dimensional Sacrifice ("+formatValue(player.options.notation, calcSacrificeBoost(), 2, 2)+"x)";

        player.infinityPoints = player.infinityPoints.plus(gainedInfinityPoints().times(diff/1000).times(getTSBenefit(7, player.timestudy.studies[7])))

        if (player.firstPow >= 10e30) giveAchievement("I forgot to nerf that")
        if (player.money >= 10e79) giveAchievement("Antimatter Apocalypse")
        if (player.totalTimePlayed >= 10 * 60 * 60 * 24 * 8) giveAchievement("One for each dimension")
        if (player.seventhAmount > 1e12) giveAchievement("Multidimensional");
        if (getReplicantiInterval() < 1e-3) giveAchievement("Definitely not safe");
        if (isNaN(player.totalmoney)) player.totalmoney = new Decimal(10)

        player.lastUpdate = thisUpdate;
    }, 50);
}


function dimBoolean() {
    var name = TIER_NAMES[getShiftRequirement(0).tier]
    if (!player.autobuyers[9].isOn) return false
    if (player.autobuyers[9].ticks*100 < player.autobuyers[9].interval) return false
    if (player.eternities < 10 && player[name + "Amount"] < getShiftRequirement(player.autobuyers[9].bulk-1).amount) return false
    if (player.overXGalaxies <= player.galaxies) return true
    if ((player.currentChallenge =="challenge4" || player.currentChallenge == "postc1") && player.autobuyers[9].priority < getShiftRequirement(0).amount && getShiftRequirement(0).tier == 6) return false
    if (player.autobuyers[9].priority < getShiftRequirement(0).amount && getShiftRequirement(0).tier == 8) return false
    return true
}


function maxBuyGalaxies() {
    // the two off-by-one errors cancel each other out
    let amount = player[TIER_NAMES[maxTier()]+"Amount"];
    let galaxyChange = Math.floor((amount - getGalaxyRequirement()) / galaxyIncrement);
    if (galaxyChange < 0) {
        return false;
    }
    player.galaxies += galaxyChange;
    galaxyReset();
    return true;
}

function maxBuyDimBoosts() {
    var r = 0;
    let max = maxTier();
    while (true) {
        let req = getShiftRequirement(0);
        let amount = Math.round(player[TIER_NAMES[req.tier]+"Amount"].toNumber());
        if (req.tier === max) {
            newResets = 1 + Math.floor((amount - req.amount) / getDimboostCostIncrease());
            player.resets += newResets;
            r += newResets;
        }
        if (amount <= req.amount) {
            break;
        }
        player.resets++;
        r++;
    }
    if (r === 0) {
        return false;
    }
    if (r >= 750) giveAchievement("Costco sells dimboosts now")
    softReset(0, true);
    return true;
}

var timer = 0
function autoBuyerTick() {
    if (player.eternities >= 100 && player.eternityBuyer.isOn && gainedEternityPoints().gte(player.eternityBuyer.limit)) eternity()

    if (player.autobuyers[11]%1 !== 0) {
    if (player.autobuyers[11].ticks*100 >= player.autobuyers[11].interval && player.money.gte(Number.MAX_VALUE)) {
        if (player.autobuyers[11].isOn && (!player.autobuyers[11].requireIPPeak || gainedInfinityPoints().gte(player.peaks.ip.total))) {
            if (player.autoCrunchMode === "amount") {
                if (!player.break || player.currentChallenge != "" || player.autobuyers[11].priority.lt(gainedInfinityPoints())) {
                    autoS = false;
                    document.getElementById("bigcrunch").click()
                }
            } else if (player.autoCrunchMode === "time"){
                if (!player.break || player.currentChallenge != "" || player.autobuyers[11].priority.lt(player.thisInfinityTime/10)) {
                    autoS = false;
                    document.getElementById("bigcrunch").click()
                }
            } else if (player.autoCrunchMode === "relative") {
                if (!player.break || player.currentChallenge != "" || gainedInfinityPoints().gte(player.lastTenRuns[0][1].times(player.autobuyers[11].priority))) {
                    autoS = false;
                    document.getElementById("bigcrunch").click()
                }
            } else {
                if (!player.break || player.currentChallenge != "" || galaxyModeCrunch()) {
                    autoS = false;
                    document.getElementById("bigcrunch").click()
                }
            }
            player.autobuyers[11].ticks = 1;
        }
    } else player.autobuyers[11].ticks += 1;

    }


    if (player.autobuyers[10]%1 !== 0) {
        if (player.autobuyers[10].ticks*100 >= player.autobuyers[10].interval && (player.currentChallenge == "challenge4" ? player.sixthAmount >= getGalaxyRequirement() : player.eightAmount >= getGalaxyRequirement())) {
            if (player.eternities < 9 || player.autobuyers[10].bulk == 0) {
                if (player.autobuyers[10].isOn && player.autobuyers[10].priority > player.galaxies) {
                    autoS = false;
                    document.getElementById("secondSoftReset").click()
                    player.autobuyers[10].ticks = 1;
                }
            } else if (player.autobuyers[10].isOn && (Math.round(timer * 100))%(Math.round(player.autobuyers[10].bulk * 100)) == 0){
                maxBuyGalaxies()
            }
        } else player.autobuyers[10].ticks += 1;
    }


    if (player.autobuyers[9]%1 !== 0) {
        if (player.autobuyers[9].isOn && dimBoolean()) {
            if (player.resets < 4) softReset(1)
            else if (player.eternities < 10) softReset(player.autobuyers[9].bulk)
            else if ((Math.round(timer * 100))%(Math.round(player.autobuyers[9].bulk * 100)) == 0 && player.eightAmount >= getShiftRequirement(0).amount) maxBuyDimBoosts()
            player.autobuyers[9].ticks = 0
        }
        player.autobuyers[9].ticks += 1;
    }

    if (player.autoSacrifice%1 !== 0) {
        if (calcSacrificeBoost().gte(player.autoSacrifice.priority) && player.autoSacrifice.isOn) {
            sacrifice()
        }
    }




    for (var i=0; i<priority.length; i++) {
        if (priority[i].ticks*100 >= priority[i].interval || priority[i].interval == 100) {
            if ((priority[i].isOn && canBuyDimension(priority[i].tier)) ) {
                if (priority[i] == player.autobuyers[8] && (player.autobuyers[8].buyTickspeedWhenMultIncreases || getTickSpeedMultiplier().lte(1))) {
                    if (priority[i].target == 10) buyMaxTickSpeed()
                    else buyTickSpeed()
                } else {
                    if (priority[i].target > 10) {
                        if (player.options.bulkOn) buyManyDimensionAuto(priority[i].target - 10, priority[i].bulk)
                        else buyManyDimensionAuto(priority[i].target - 10, 1)
                    }
                    else {
                        buyOneDimension(priority[i].target)
                    }
                }
                priority[i].ticks = 0;
            }
        } else priority[i].ticks += 1;
    }
    updateCosts()

}


setInterval(function() {
    timer += 0.05
    if (!player.infinityUpgrades.includes("autoBuyerUpgrade")) autoBuyerTick()
}, 100)

setInterval(function() {
    if (player.infinityUpgrades.includes("autoBuyerUpgrade")) autoBuyerTick()
}, 50)

var newsArray = ["You just made your 1,000,000,000,000,000 antimatter. This one tastes like chicken", "Nerf the galaxies please.", "9th Dimension is a lie.",
"The cookie is a lie.", "Antimatter cookies have been confirmed to not exist, whoever claims that, stop.", "Antimatter ghosts do not exist. Just like matter ghosts. They don't have any matter, for that matter.",
"Nuclear power plants have been abandoned in favor of antimatter power.", "What do you mean, more than two dimensions??? We're on a screen, clearly there are only 2 dimensions.",
"Antimatter prices have drastically dropped due to newfound abundance.", "In the news today, humans make a antimatter animal sacrifice to the antimatter god.", "You made one antimatter! Whatever that means.",
"Scientists confirm that the colour of antimatter is Blurple", "How does it matter if its antimatter?", "None of this matters", "IN THE END, IT DOESN'T ANTIMATTER -hevipelle",
"New news company has become rivals with us. They are made entirely of antimatter.", "How much is Infinity? -literally everyone at least once", "How does NASA organise a party? They planet.",
"The square root of 9 is 3, therefore the 9th dimension can't exist.", "Electrons are now seeing the happy things in life. We're calling these happy electrons 'Positrons.' Wait, that's taken?",
"This completely useless sentence will get you nowhere and you know it. What a horrible obnoxious man would come up with it, he will probably go to hell, and why would the developer even implement it? Even if you kept reading it you wouldn't be able to finish it (the first time).",
"GHOST SAYS HELLO -Boo-chan", "Can someone tell hevi to calm down? -Mee6", "Due to Antimatter messing with physics, a creature that was once a moose is now a human", "!hi", "Eh, the Fourth Dimension is alright...",
"Alright -Alright", "The English greeting is not present in Antimatter speak.", "To buy max or not to buy max, that is the question", "You do know that you won't reach Infinity in -1 seconds, right?", "This antimatter triggers me",
"No, mom, I can't pause this game.", "Import \"I can pause this game\" to pause the game, or \"offline is offline\" to toggle offline progress.", "Scientific notation has entered the battlefield.", "Make the Universe Great Again! -Tronald Dump", "#dank-maymays",
"A new religion has been created, and it's spreading like wildfire. The believers of this religion worship the Heavenly Pelle, the goddess of antimatter. They also believe that 10^308 is infinite.",
"Someone has just touched a blob, and blown up. Was the blob antimatter, or was the guy made of Explodium?", "Antimatter people seem to be even more afraid of 13 then we are. They destroyed entire galaxies just to remove 13 from their percents.",
"You are playing a mod of AD with slightly different gameplay, especially lategame. The original AD has a news message \"If you are not playing on Kongregate or ivark.github.io, the site is bootleg.\" And I guess since Hevipelle hasn't approved this mod the news message is sort of correct. But Hevipelle will betray you so who cares anyway?",
"If you are not playing on games.celestai.qx or examples.memetics.nonanomalous.scp, please report the containment breach.",
"Rate 5 on Kongregate so more people can experience this 5 star Rating", "BOO!", "You ate for too long. -hevipelle", "I hate myself. -Boo-chan",
"Gee golly -Xandawesome", "Need more quotes! -hevipelle", "Above us, there is nothing above, But the stars, above.", "If black lives matter, do white lives antimatter?", "Somebody wasn't nice, he got an antimatter-storm.",
"You are living, you occupy space, you have a mass, you matter... unless you antimatter.", "I clicked too fast... my PC is now dematerialised.",
"If an alien lands on your front lawn and extends an appendage as a gesture of greeting, before you get friendly, toss it an eightball. If the appendage explodes, then the alien was probably made of antimatter. If not, then you can proceed to take it to your leader. -Neil deGrasse Tyson",
"There always must be equal matter than there is antimatter, I guess your mom balances that a bit", "Nothing is created, nothing is destroyed.", "We dug a big hole to store this antimatter... Adele's rolling in it.",
"If everything is antimatter, how can you see yourself?", "The stock markets have crashed due to antimatter beings somehow knowing what they will be tomorrow.", "My dog ate too much antimatter, now he is doing 'meow!'", "If you put infinity into your calculator it will result in 42!",
"To understand dimensional sacrifice, you do actually need a PhD in theoretical physics. Sorry!", "You have found the rarest antimatter pepe, it's ultra rare!", "Can we get 1e169 likes on this video??? Smash that like button!!",
"You got assimilated by the 9th dimension? Just call your doctor for mental illness!", "The smell of antimatter has been revealed. It smells like kittens", "Just another antimatter in the wall", "GET SNIPED, WEAKLING", "Thanks a lot -dankesehr",
"This world situation is a SOS situation to the world!! MAYDAY, MAYDAY!!", "As for sure as the sun rises in the west, of all the singers and poets on earth, I am the bestest. - hevipelle", "I'm good at using github -hevipelle",
"A new chat server has been created for Antimatter people to spy on Matter people, and the world has fallen into chaos and discord", "A new study has come out linking the consumption of potatoes with increased risk of Antimatter implosion.  Scientists suggest eating more.",
"A new group for the standardisation of numbers have come forward with a novel new format involving emoji's.", "I thought that I fixed that bug but apparently some update broke it again -hevipelle",
"Maybe I'm gay then -Bootato", "Breaking news! Hevipelle has just announced that the buy max button is in fact going to be removed!", "I dedicate this game to my girlfriend",
"Antimatter guns don't kill antimatter people, antimatter people kill antimatter people but does that mean that antimatter toaster doesn't toast antimatter toasts, antimatter toast toasts antimatter toasts?",
"But to an antimatter person, wouldn't they be matter and us antimatter?", "And nothing Antimatters", "Why is there no 9th dimension? Because 7 8 9.",
"School starting up strikes fear in students universe-wide, as schools are no longer segregated between Matter and antimatter. Annihilation is prominent.",
"Why does no one talk about the 0th dimension?", "Antimatter ice cream stand has recently opened- they have octillions of flavors!", "The 9th dimension cannot exist because the Nein-speaking nazis died in WW2.",
"The fatter catter satter on the antimatter.", "Who let the DOgs out?", "I've got 1.79e308 problems, but none of them antimatters", "If you can't read this you disabled the news.",
"Doesn't leave, just mutes the server so he doesn't receive notifications", "Most quotes found online are falsely atributed -Abraham Lincoln", "It should work now, but it doesn't -hevipelle",
"This game doesn't have any errors... they're alternative successes.", "A third type of matter has been discovered: null matter. It doesn't do anything and is basically useless. The scientists who discovered it were fired.",
"Where does Antimatter Nemo live? In a NNnNeMI-NNnNe.", "Your Mother-in-Law keeps nagging you about all these antimatter colliders.", "If matter exists, then does antimatter not exist?", "Does Hevi just pick quotes to put into the game?",
"If you break the fourth wall... well, there's still the fifth, sixth, seventh, and eighth to get through before you encounter bad things, so you should be fine", "Antimatter=Life. Not cobblestone, not dirt, nothing like that. Antimatter.",
"Breaking News: Error Error Error", "Anti Emoji Movie a huge hit", "How much antiwood could an antiwoodchuck chuck if an antiwoodchuck could chuck antiwood?", "Chaos isnt a pit, chaos is a matter",
"That's because I'm a good game developer and pushed some code that totally works -hevipelle", "What's the matter with anti matter?", "If this game was made by Valve, Zero Deaths would be impossible.",
"Florida man attempts to get Zero Deaths on first run, is stopped by heat death of the universe.", "Asian man trys to steal the trophy of fastest infinty of -1 seconds, AND HE DOES IT!",
"Doesn't it annoy you when people don't finish their", "Having done half the achievements isn't much of an achievement -Boo", "Don't anti-quote me on this", "Antimatter is honest, matter makes up everything",
"According to no known laws of aviation, there are multiple ways a bee should be able to be swallowed up by antimatter", "You either die as matter or live long enough to be consumed by the antimatter, and then die again",
"If you gaze long enough into the antimatter, the antimatter gazes back into you", "Always gonna give you up. Always gonna let you down. - anti-Rick Astley",
"Antimatter Dimensions: the next update is always 5 hours away. Always.", "#DimensionLivesAntimatter", "How many times can we use \"Anti\" in a row before people stop listening?",
"Do antimatter people with suicidal thoughts get depressants?", "To matter or to antimatter, that is the question.", "Why is everything so Hevi?",
"It has been scientifically proven ages ago, that cats made of matter are assholes. We have good news, because cats made of antimatter are still assholes",
"Nobody once told me the anti-world wasn’t gonna roll me", "Antimatter is like internet. If you're reading this, you can't have enough of it.",
"Antimatter has made time travel possible and I'm here to make the past great again. - 2nd President of the World",
"The Heavenly Pelle has generated too much antimatter and needed to create another galaxy. This one can be seen in the southwestern sky.",
"Please insert Disc -1 to continue playing  Antimatter Dimensions ™.", "I broke the 8th wall, there is only chaos, Slabdrill is ritually sacrificing antimatter to the 9th dimension. This will be my last entry, may Hevipelle have mercy on our souls, we didn't listen, We should have listened.",
"Lore - coming soon ™", "I thought the update was 5 hours away... -new players after more than 5 hours of gameplay",
"I was a part of antimatter like you once. But then I got matter in my knee.", "Antimatter... antimatter never changes... until you get to quantum physics of antimatter, but we don't have enough tachyon particles for that.",
"Conditions must be met for Hevipelle to sleep. First, it needs to be a blue moon. Second, a specific town in the arctic must have not seen light for a month. Third, he needs to release an AD update. And finally, no one on the discord can be on dimension 9. Only then can he rest, for up to 6 hours, before waking up forcefully to avoid getting the offline achievement.",
"There is no war in Antimatter Dimensions. Here we are safe. Here we are free.", "Antimatter has solved global warming.  In unrelated news, the Earth no longer exists.",
"Anti-water, anti-Earth, anti-fire, anti-air. Long ago, the four anti-nations lived together in harmony. Then, everything changed when the anti-Fire Nation attacked. Only the anti-Avatar, the master of all 4 anti-elements could bring balance to the anti-world, but when the world needed him most, he accidentally touched some regular matter and exploded.",
"If you open an anti-lootbox, are you selling random possessions for in-game currency?", "People are beginning to question Hevipelle's existence.",
"Somebody told me to wait five hours for the update yesterday but it's today and it still hasn't come! What do I do?", "Antimatter Dimensions is proud to be sponsored by Lehmä! Now offering - grass eating lessons! Learn what grass is safe to eat and what grass isn't.",
"It is the year 2422. The update still isn't out. Hevi is working on balancing unfunity dimension dimensions and challenges for the 38th layer of prestige. There are over 100 rows of achievements. They're getting ready to start using breaking_breaking_breaking_infinity.js",
"Thanos is gonna be super dissapointed when he shows up with a fully powered infinity gauntlet, and Hevi has a fully powered eternity gauntlet", "If the 9th dimension is all evil, then is 3 the root of all evil?",
"Import Christmas for a secret theme", "Technically speaking, all your galaxies are extragalactic. Either that or the Milky Way is in for a big surprise when you go infinite.",
"The hardest part of the extragalactic update was finding somewhere to put the \"Go extragalactic\" button. Not to say that the rest was easy, but that was the hardest part.",
"If you haven't unlocked antipichus yet, you're playing the game wrong. How in the world are you supposed to finish this two-hour long game in any reasonable amount of time without figuring out antipichus? I guess it might be possible if you're the type of crazy person willing to spend weeks or even months on the game, but I doubt it."]


var conditionalNewsArray = ["Our universe is falling apart. We are all evacuating. This is the last news cast", "THIS NEWS STATION HAS SHUT DOWN DUE TO COLLAPSING UNIVERSE",
"Researchers have confirmed that there is another dimension to this world. However, only antimatter beings can interact with it",
"Studies show a massive problem with the time-space continuum. In other words, a large amount of antimatter has dissapeared from the cosmos",
"Should we call antimatter Matter now? There seems to be more of it."]

var cheatCodeNewsArray = [
  "-2: All kinds of points are less than 1e100. If not, you or I made a mistake.",
  "-1: I initially understood letter notation incorrectly, but I don't want to fix it, so I'm instead putting in this disclaimer. For the purposes of these messages about points, all numbers in letter notation are 1000 times what they are in the regular game (so 1a is a million, not a thousand).",
  "0: The numbered messages about the sixteen different types of points can give a cheat code when considered correctly.",
  "1: Your alternative points are your exponential points or your logarithmic points, whichever is greater.",
  "2: Your binary points are 2^bits rounded to the nearest power of 10. The formula for bits is 2^8 - greatest number of dragons you ever had - 2 * log10(overflow points)",
  "3: Your cheat-code points are 10 to the power of the autobuyer setting needed for 'Nice'.",
  "4: You get one draconic point per dragon per second. You had 100 dragons for about 300 million years, but no others.",
  "5: Your exponential points are 10 to the power of the fourth root (rounded up) of 10 times your logarithmic points.",
  "6: Your fractional points are one billionth of the type of points you have the most of.",
  "7: You have one ghostly point per unit of hypervolume in a hypercube with side length 100 and the dimension that does not exist",
  "8: Your hyper points are the geometric mean of the square of your logarithmic points and one-tenth of the cube root of your exponential points.",
  "9: Your imaginary points are tied for the type of point you have second least of.",
  "10: Your jump points are roughly double the difference beween 2^99 and 3^61.",
  "11: Your k points are supposed to be 1k in letter notation, but for some reason you have (and have always had) 1000 times more than that.",
  "12: Your logarithmic points are the sixth power of one-third of the base-10 logarithm of your numerical points.",
  "13: Your meta points are the initial cost in antimatter of the 60th 6th dimension you buy.",
  "14: Your number of numerical points is the same as your number of another type of point, is the square of your number of another type of point, and is the square root of your number of another type of point.",
  "15: Your overflow points are your partial points times 1000.",
  "16: You get one thousandth of a partial point per k point per second. You have been getting partial points in this way for about 30 years, and before that you had no partial points."
]

var s = document.getElementById('news');
document.addEventListener("visibilitychange", function() {if (!document.hidden) {scrollNextMessage();}}, false);
var scrollTimeouts = [];

function scrollNextMessage() {
  //select a message at random
  let idx;
  let msg;
  if (Math.random() < .01) {
    idx = Math.floor(Math.random() * cheatCodeNewsArray.length);
    msg = {msg: cheatCodeNewsArray[idx], index: idx};
  } else {
    idx = Math.floor(Math.random() * newsArray.length)
    msg = {msg: newsArray[idx], index: idx};
  }

  scrollTimeouts.forEach(function(v) {clearTimeout(v);});
  scrollTimeouts = [];

  //set the text
  s.innerHTML = msg.msg;

  //get the parent width so we can start the message beyond it
  let parentWidth = s.parentElement.clientWidth;

  //set the transition to blank so the move happens immediately
  s.style.transition = '';
  //move div_text to the right, beyond the edge of the div_container
  s.style.transform = 'translateX('+parentWidth+'px)';

  //we need to use a setTimeout here to allow the browser time to move the div_text before we start the scrolling
  scrollTimeouts.push(setTimeout( function() {
    //distance to travel is s.parentElement.clientWidth + s.clientWidth + parent padding
    //we want to travel at rate pixels per second so we need to travel for (distance / rate) seconds
    let dist = s.parentElement.clientWidth + s.clientWidth + 20; //20 is div_container padding
    let rate = 100; //change this value to change the scroll speed
    let transformDuration = dist / rate;

    if (!player.options.newsHidden) {
        if (!player.newsArray.includes(msg.index)) player.newsArray.push(msg.index);
        if (player.newsArray.length>=50 && !player.achievements.includes("r41")) giveAchievement("Fake News")
    }

    if (player.achievements.includes("r41")) player.newsArray = []


    //set the transition duration
    s.style.transition = 'transform '+transformDuration+'s linear';
    let textWidth = s.clientWidth;
    //we need to move it to -(width+parent padding) before it won't be visible
    s.style.transform = 'translateX(-'+(textWidth+5)+'px)';
    //automatically start the next message scrolling after this one finishes
    //you could add more time to this timeout if you wanted to have some time between messages
    scrollTimeouts.push(setTimeout(scrollNextMessage, Math.ceil(transformDuration * 1000)));
  }, 100));
}

  //start scrolling
  scrollNextMessage();

document.getElementById("challenge2").onclick = function () {
  startChallenge("challenge2", Number.MAX_VALUE)
}

document.getElementById("challenge3").onclick = function () {
  startChallenge("challenge3", Number.MAX_VALUE)
}

document.getElementById("challenge4").onclick = function () {
  startChallenge("challenge4", Number.MAX_VALUE)
}

document.getElementById("challenge5").onclick = function () {
  startChallenge("challenge5", Number.MAX_VALUE);
}

document.getElementById("challenge6").onclick = function () {
  startChallenge("challenge6", Number.MAX_VALUE);
}

document.getElementById("challenge7").onclick = function () {
  startChallenge("challenge7", Number.MAX_VALUE);
}

document.getElementById("challenge8").onclick = function () {
  startChallenge("challenge8", Number.MAX_VALUE);
}

document.getElementById("challenge9").onclick = function () {
  startChallenge("challenge9", Number.MAX_VALUE);
}

document.getElementById("challenge10").onclick = function () {
  startChallenge("challenge10", Number.MAX_VALUE);
}

document.getElementById("challenge11").onclick = function () {
    startChallenge("challenge11", Number.MAX_VALUE);
  }

document.getElementById("challenge12").onclick = function () {
  startChallenge("challenge12", Number.MAX_VALUE);
}



function showInfTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('inftab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}

function showStatsTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('statstab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}

function showDimTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('dimtab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}

function showChallengesTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('challengeTab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}

function showEternityTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('eternitytab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}




function init() {
    console.log('init');

    //setup the onclick callbacks for the buttons
    document.getElementById('dimensionsbtn').onclick = function () {
        showTab('dimensions');
    };
    document.getElementById('optionsbtn').onclick = function () {
        showTab('options');
    };
    document.getElementById('statisticsbtn').onclick = function () {
        showTab('statistics');
    };
    document.getElementById('achievementsbtn').onclick = function () {
        showTab('achievements');
    };
    document.getElementById('challengesbtn').onclick=function () {
      showTab('challenges');
    };
    document.getElementById('infinitybtn').onclick = function () {
        showTab('infinity');
    };
    document.getElementById("eternitystorebtn").onclick = function () {
        showTab('eternitystore')
    }
    document.getElementById("cheatbtn").onclick = function () {
        showTab('cheat')
    }
    //show one tab during init or they'll all start hidden
    showTab('dimensions')
    showInfTab('preinf')
    showStatsTab('stats')
    showDimTab('antimatterdimensions')
    showChallengesTab('challenges')
    showEternityTab('timestudies')
    load_game();
    updateTickSpeed();
    updateAutobuyers();
    updateReplicantiGalaxyPowerControl();
    updateAntigalaxyBulk();
    updateChallengeTimes()
}

// begin cheats (not purchases)

function skipTime (seconds) {
  if (seconds <= 21600) {
    player.lastUpdate -= seconds * 1000;
    return seconds;
  } else {
    alert('Skipped too far!');
    return false;
  }
}

function skipOneRG () {
  let time = getReplicantiETA() / 10;
  if (skipTime(time)) {
    player.replicanti.amount = player.replicanti.limit;
    return time;
  }
}

function skipRG () {
  let time = (getReplicantiETA() + (player.replicanti.gal - player.replicanti.galaxies) * getReplicantiETA(new Decimal(1))) / 10;
  if (skipTime(time)) {
    player.replicanti.amount = player.replicanti.limit;
    player.replicanti.galaxies = player.replicanti.gal;
    updateInfCosts();
    return time;
  }
}

function farmInf (seconds) {
  let lastInf = player.lastTenRuns[0];
  let secondsPerRun = lastInf[0] / 10;
  let IPPerRun = lastInf[1];
  let infinitiesPerRun = getInfinitiedGain(lastInf[0])
  let numRuns = Math.floor(seconds / secondsPerRun);
  if (skipTime(secondsPerRun * numRuns)) {
    player.infinityPoints = player.infinityPoints.plus(IPPerRun.times(numRuns));
    player.infinitied += infinitiesPerRun * numRuns;
    if (player.eternityChallenges.current === 4) {
      checkForEternityChallengeFailure();
    }
    setTimeout(function () {startChallenge('')}, 1000);
    return secondsPerRun * numRuns;
  }
}

function farmEter (seconds) {
  let lastEter = player.lastTenEternities[0];
  let secondsPerEter = lastEter[0] / 10;
  let EPPerEter = lastEter[1];
  let eternitiesPerEter = getEternityGain();
  let numEters = Math.floor(seconds / secondsPerEter);
  if (skipTime(secondsPerEter * numEters)) {
    player.eternityPoints = player.eternityPoints.plus(EPPerEter.times(numEters));
    player.eternities += eternitiesPerEter * numEters;
    setTimeout(function () {eternity(true)}, 1000);
    return secondsPerEter * numEters;
  }
}

function autoPlay () {
  let seconds = (+prompt('How many seconds would you like to autoplay for?')) || 10;
  let timeAutoplayed = 0;
  let timeSinceLastAction = 0;
  let last = Date.now() / 1000;
  let lastIP = new Decimal(0);
  let needReplicantiGalaxies = false;
  let checkForTheBigCrunch = function () {
    let g = gainedInfinityPoints();
    if (timeSinceLastAction > 15 && g.gte(player.peaks.ip.total)) {
      document.getElementById('bigcrunch').onclick();
      timeSinceLastAction = 0;
      if (g < lastIP.times(1e10)) {
        needReplicantiGalaxies = true;
      }
      lastIP = g;
    }
  }
  let exitAuto = function () {
    alert('Done autoplaying!');
    clearInterval(intervalNumber);
  }
  let intervalNumber = setInterval(function () {
    increment = Date.now() / 1000 - last;
    timeAutoplayed += increment;
    timeSinceLastAction += increment;
    last = Date.now() / 1000;
    if (timeAutoplayed > seconds) {
      exitAuto();
    }
    if (!needReplicantiGalaxies) {
      checkForTheBigCrunch();
    } else {
      if (player.replicanti.galaxies !== player.replicanti.gal) {
        let s = skipRG();
        if (!s) {
          exitAuto();
        }
        timeAutoplayed += s;
        timeSinceLastAction = 0;
      } else {
        checkForTheBigCrunch()
      }
    }
  }, 1000);
}

// end cheats


setInterval(function () {
    save_game()
}, 30000);

var totalMult = 1
var currentMult = 1
var infinitiedMult = 1
var achievementMult = 1
var challengeMult = 1
var unspentBonus = 1
var postc8Mult = new Decimal(0)
var mult18 = 1
var lastF = Date.now()
var lastFstreak = 0;

updateCosts();
//updateInterval();
updateDimensions();
document.getElementById("hiddenheader").style.display = "none";


window.onload = function() {
    startInterval()
    setTimeout(function() {
        document.getElementById("container").style.display = "block"
        document.getElementById("loading").style.display = "none"
    }, 1000)
}

window.addEventListener('keydown', function (event) {
    if (!player.options.hotkeys || document.activeElement.type === 'text') return false
    switch (event.keyCode) {
        case 65: // A
            toggleAutoBuyers();
        break;

        case 68: // D
            var name = TIER_NAMES[getShiftRequirement(0).tier]
            if (player[name + "Amount"] >= getShiftRequirement(0).amount) {
                softReset(1)
            }
        break;

        case 71: // G
            document.getElementById("secondSoftReset").onclick();
        break;

        case 77: // M
            document.getElementById("maxall").onclick()
        break;

        case 83: // S
            document.getElementById("sacrifice").onclick()
        break;

        case 84: // T
            buyMaxTickSpeed()
        break;

        case 49: // 1
            buyManyDimension(1)
        break;

        case 50: // 2
            buyManyDimension(2)
        break;

        case 51: // 3
            buyManyDimension(3)
        break;

        case 52: // 4
            buyManyDimension(4)
        break;

        case 53: // 5
            buyManyDimension(5)
        break;

        case 54: // 6
            buyManyDimension(6)
        break;

        case 55: // 7
            buyManyDimension(7)
        break;

        case 56: // 8
            buyManyDimension(8)
        break;
    }
  }, false);

  window.addEventListener('keyup', function(event) {
    if (!player.options.hotkeys || document.activeElement.type === 'text') return false
    switch (event.keyCode) {
      case 67: // C
      document.getElementById("bigcrunch").onclick()
      break;

      case 69: // E, also, nice.
      document.getElementById("eternitybtn").onclick();
      break;

      case 70: // F
      let diff = Date.now() - lastF;
      if (Math.abs(diff - 0xfff) < 1000) {
        lastFstreak++;
      } else {
        lastFstreak = 0;
      }
      lastF = Date.now();
      $.notify("Paying respects", "info")
      break;
    }
  }, false);

init();

setInterval( function() {
    totalMult = Math.pow(player.totalmoney.e+1, 0.5)
    currentMult = Math.pow(player.money.e+1, 0.5)
    infinitiedMult = 1+Math.log10(getInfinitied()+1)*10
    achievementMult = Math.max(Math.pow((player.achievements.length-30), 3)/40,1)
    challengeMult = Decimal.max(10*3000/worstChallengeTime, 1)
    unspentBonus = player.infinityPoints.dividedBy(2).pow(1.5).plus(1)
    mult18 = getDimensionFinalMultiplier(1).max(1).times(getDimensionFinalMultiplier(8).max(1)).pow(0.02)
}, 500)











function generateLookUps(mode, amount) {
    if (mode == "tick") {
        let cost = new Decimal(1000)
        let multi = new Decimal(10)
        let string = "["
        for (var i=0; i<amount; i++) {
            string+= "'"+cost.toString()+"',"
            cost = cost.times(multi)
            if (cost.gte(Number.MAX_VALUE)) multi = multi.times(2)
        }
        string+= "]"
        console.log(string)
    } else if (mode == "dim") {
        let costs = [null, new Decimal(10),
        new Decimal(100),
        new Decimal(10000),
        new Decimal(1000000),
        new Decimal(1e9),
        new Decimal(1e13),
        new Decimal(1e18),
        new Decimal(1e24)]
        let multis = [null, new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)]
        let string = "["
        for (var tier=1; tier <9; tier++) {
            string+="["
            for (var i=0; i<amount; i++) {
                string+= "'"+costs[tier].toString()+"',"
                costs[tier] = costs[tier].times(multis[tier])
                if (costs[tier].gte(Number.MAX_VALUE)) multis[tier] = multis[tier].times(3)
            }
            string+="],"
        }
        string+= "]"
        console.log(string)
    } else console.log("Input either 'tick' or 'dim' to the first parameter")
}
