
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)]
}
function generate() {
    var args = []
    args = getParams(args, "commonQty", "common")
    args = getParams(args, "uncommonQty", "uncommon")
    args = getParams(args, "rareQty", "rare")
    args = getParams(args, "veryRareQty", "very-rare")
    args = getParams(args, "legendaryQty", "legendary")
    args = getParams(args, "artifactQty", "artifact")
    if (args.length > 0) {
        window.history.pushState({},'',location.protocol + '//' + location.host + location.pathname + "?" + args.join("&"))
    } else {
        window.history.pushState({},'', location.protocol + '//' + location.host + location.pathname)
    }
    gen("commonQty", "commons", commons, "Common")    
    gen("uncommonQty", "uncommons", uncommons, "Uncommon")    
    gen("rareQty", "rares", rares, "Rare")    
    gen("veryRareQty", "veryRares", veryRares, "Very Rare")    
    gen("legendaryQty", "legendary", legendary, "Legendary")    
    gen("artifactQty", "artifacts", artifacts, "Artifact")    
}

function getParams(args, qty, name) {
    var v = document.getElementById(qty).value
    if (v === "") {
        return args
    }
    var q = parseInt(v, 10)
    if (q === 0) {
        return args
    } 
    args.push(name+"="+document.getElementById(qty).value)
    return args
}

function gen(qty, output, list, name) {
    var q = parseInt(document.getElementById(qty).value, 10)
    if (q > 0) {
        var el = document.getElementById(output)
        el.innerHTML = "<h3>"+name+"</h3>"
        for (i = 0; i < q; i++) { 
            var item = list.sample()
            el.innerHTML += "<a href=\"https://dndbeyond.com/magic-items/" + item + "\" style=\"text-transform: capitalize\" >" + item.replace(/-/g, " ") + "</a><br>\n"
        }  
    }
}

artifacts = ["axe-of-the-dwarvish-lords","book-of-exalted-deeds","book-of-vile-darkness","draakhorn","eye-and-hand-of-vecna","eye-of-vecna","hand-of-vecna","orb-of-dragonkind","ring-of-winter","staff-of-the-forgotten-one","stone-of-golorr","sword-of-kas","wand-of-orcus","wyrmskull-throne"]

commons = ["armblade","armor-of-gleaming","armor-of-gleaming-breastplate","armor-of-gleaming-chain-mail","armor-of-gleaming-chain-shirt","armor-of-gleaming-half-plate","armor-of-gleaming-hide","armor-of-gleaming-plate","armor-of-gleaming-ring-mail","armor-of-gleaming-scale-mail","armor-of-gleaming-spiked-armor","armor-of-gleaming-splint","band-of-loyalty","bead-of-nourishment","bead-of-refreshment","boots-of-false-tracks","candle-of-the-deep","cast-off-armor","cast-off-armor-breastplate","cast-off-armor-chain-mail","cast-off-armor-chain-shirt","cast-off-armor-half-plate","cast-off-armor-hide","cast-off-armor-leather","cast-off-armor-padded","cast-off-armor-plate","cast-off-armor-ring-mail","cast-off-armor-scale-mail","cast-off-armor-spiked-armor","cast-off-armor-splint","cast-off-armor-studded-leather","charlatans-die","chest-of-preserving","cleansing-stone","cloak-of-billowing","cloak-of-many-fashions","clockwork-amulet","clothes-of-mending","dark-shard-amulet","dread-helm","ear-horn-of-hearing","enduring-spellbook","ersatz-eye","everbright-lantern","feather-token-feather-fall","fernian-ash-focus","glamerweave","hat-of-vermin","hat-of-wizardry","hewards-handy-spice-pouch","horn-of-silent-alarm","imbued-wood","instrument-of-illusions","instrument-of-scribing","irian-rosewood-focus","keycharm","kythrian-manchineel-focus","lamannian-oak-focus","lock-of-trickery","mabaran-ebony-focus","moodmark-paint","moon-touched-sword","moon-touched-sword-greatsword","moon-touched-sword-longsword","moon-touched-sword-scimitar","moon-touched-sword-shortsword","moon-touched-rapier","mystery-key","orb-of-direction","orb-of-gonging","orb-of-shielding","orb-of-shielding-acid-and-poison","orb-of-shielding-cold","orb-of-shielding-fire","orb-of-shielding-force","orb-of-shielding-lightning-and-thunder","orb-of-shielding-necrotic","orb-of-shielding-psychic","orb-of-shielding-radiant","orb-of-shielding-thunder","orb-of-time","perfume-of-bewitching","pipe-of-smoke-monsters","pole-of-angling","pole-of-collapsing","pot-of-awakening","potion-of-climbing","potion-of-healing","quori-beech-focus","revenant-double-bladed-scimitar","risian-pine-focus","rope-of-mending","ruby-of-the-war-mage","scribes-pen","shavaran-birch-focus","shield-of-expression","shiftweave","smoldering-armor","smoldering-armor-breastplate","smoldering-armor-chain-mail","smoldering-armor-chain-shirt","smoldering-armor-half-plate","smoldering-armor-hide","smoldering-armor-leather","smoldering-armor-padded","smoldering-armor-plate","smoldering-armor-ring-mail","smoldering-armor-scale-mail","smoldering-armor-spiked-armor","smoldering-armor-splint","smoldering-armor-studded-leather","spell-scroll","spellshard","staff-of-adornment","staff-of-birdcalls","staff-of-flowers","talking-doll","tankard-of-sobriety","unbreakable-arrow","veterans-cane","walloping-ammunition","wand-of-conducting","wand-of-pyrotechnics","wand-of-scowls","wand-of-smiles","wand-sheath","xorian-wenge-focus"]

legendary = ["apparatus-of-kwalish","apparatus-of-the-crab","armor-of-invulnerability","armor-3","azuredge","belt-of-giant-strength","black-crystal-tablet","black-dragon-mask","blackrazor","blackstaff","blue-dragon-mask","bookmark","cloak-of-invisibility","crystal-ball-of-mind-reading","crystal-ball-of-telepathy","crystal-ball-of-true-seeing","cubic-gate","dawnbringer","deck-of-many-things","deck-of-several-things","defender","dimensional-seal","dragonstaff-of-ahghairon","drown","efreeti-chain","greater-silver-sword","green-dragon-mask","gurts-greataxe","hammer-of-thunderbolts","hazirawn","helm-of-the-scavenger","holy-avenger","holy-symbol-of-ravenkind","horn-of-valhalla","icon-of-ravenloft","infernal-tack","ioun-stone","iron-flask","ironfang","korolnor-scepter","lost-crown-of-besilmer","luck-blade","mabaran-resonator","mask-of-the-dragon-queen","masters-call","moonblade","ollamh-harp","orcsplitter","plate-armor-of-etherealness","potion-of-giant-size","potion-of-giant-strength","powered-armor","rakdos-riteknife","red-dragon-mask","ring-of-air-elemental-command","ring-of-djinni-summoning","ring-of-earth-elemental-command","ring-of-elemental-command","ring-of-fire-elemental-command","ring-of-invisibility","ring-of-spell-turning","ring-of-three-wishes","ring-of-water-elemental-command","robe-of-the-archmagi","rod-of-lordly-might","rod-of-resurrection","scarab-of-protection","sovereign-glue","spell-gem-diamond","spell-gem-ruby","spell-gem-star-ruby","spell-scroll","spell-sink","sphere-of-annihilation","staff-of-the-magi","storm-spire","sunsword","sword-of-answering","talisman-of-pure-good","talisman-of-the-sphere","talisman-of-ultimate-evil","tinderstrike","tome-of-the-stilled-tongue","universal-solvent","vorpal-sword","wave","waythe","well-of-many-worlds","whelm","white-dragon-mask","windvane"]

rares = ["ammunition-2","amulet-of-health","amulet-of-protection-from-turning","arcanomechanical-armor","armor-of-resistance","armor-of-vulnerability","armor-1","arrow-catching-shield","badge-of-the-watch","bag-of-beans","banner-of-the-krig-rune","bead-of-force","belt-of-dwarvenkind","belt-of-giant-strength","berserker-axe","blod-stone","boots-of-levitation","boots-of-speed","bowl-of-commanding-water-elementals","bracer-of-flying-daggers","bracers-of-defense","brazier-of-commanding-fire-elementals","canaith-mandolin","cape-of-the-mountebank","censer-of-controlling-air-elementals","chime-of-opening","claw-of-the-wyrm-rune","claws-of-the-umber-hulk","cli-lyre","cloak-of-displacement","cloak-of-the-bat","cube-of-force","daerns-instant-fortress","dagger-of-blindsight","dagger-of-venom","devastation-orb","dimensional-shackles","docent","dodecahedron-of-doom","dragon-slayer","dragonguard","dragontooth-dagger","eagle-whistle","elixir-of-health","elven-chain","feather-of-diatryma-summoning","feather-token","figurine-of-wondrous-power","flame-tongue","folding-boat","galders-bubble-pipe","gamblers-blade","gavel-of-the-venn-rune","gem-of-seeing","ghost-lantern","giant-slayer","glamoured-studded-leather","guild-keyrune","gulthias-staff","handy-haversack","hell-hound-cloak","helm-of-teleportation","hewards-handy-haversack","horn-of-blasting","horn-of-the-endless-maze","horn-of-valhalla","horseshoes-of-speed","instant-fortress","ioun-stone","ioun-stone-of-historical-knowledge","ioun-stone-of-language-knowledge","ioun-stone-of-natural-knowledge","ioun-stone-of-religious-knowledge","ioun-stone-of-self-preservation","ioun-stone-of-supreme-intellect","iron-bands-of-bilarro","iron-bands-of-binding","knaves-eye-patch","leather-golem-armor","loadstone","mace-of-disruption","mace-of-smiting","mace-of-terror","mantle-of-spell-resistance","masters-amulet","mind-blade","mind-blade-greatsword","mind-blade-longsword","mind-blade-rapier","mind-blade-scimitar","mind-blade-shortsword","mind-lash","mirror-of-the-past","mizzium-armor","mizzium-mortar","necklace-of-fireballs","necklace-of-prayer-beads","oil-of-etherealness","opal-of-the-ild-rune","orb-of-the-stein-rune","pariahs-shield","periapt-of-proof-against-poison","piwafwi-of-fire-resistance","portable-hole","potion-of-clairvoyance","potion-of-diminution","potion-of-gaseous-form","potion-of-giant-strength","potion-of-healing","potion-of-heroism","potion-of-invulnerability","potion-of-mind-control","potion-of-mind-reading","professor-orb","quaals-feather-token","ring-of-animal-influence","ring-of-evasion","ring-of-feather-falling","ring-of-free-action","ring-of-protection","ring-of-resistance","ring-of-spell-storing","ring-of-the-ram","ring-of-x-ray-vision","robe-of-eyes","robe-of-summer","rod-of-rulership","rod-of-the-pact-keeper","rod-of-the-vonindod","rope-of-entanglement","saint-markovias-thighbone","scorpion-armor","scroll-of-protection","shield-of-far-sight","shield-of-missile-attraction","shield-2","spell-gem-bloodstone","spell-gem-quartz","spell-scroll","spider-staff","staff-of-charming","staff-of-defense","staff-of-healing","staff-of-swarming-insects","staff-of-the-woodlands","staff-of-withering","stone-of-controlling-earth-elementals","stonespeaker-crystal","sun-blade","sunforger","sword-of-life-stealing","sword-of-wounding","tentacle-rod","vicious-weapon","wand-of-binding","wand-of-enemy-detection","wand-of-fear","wand-of-fireballs","wand-of-lightning-bolts","wand-of-paralysis","wand-of-the-war-mage","wand-of-viscid-globs","wand-of-winter","wand-of-wonder","weapon-2","wings-of-flying","yklwa-2"]

uncommons = ["adamantine-armor","alchemy-jug","ammunition-1","amulet-of-proof-against-detection-and-location","bag-of-bounty","bag-of-holding","bag-of-tricks","balance-of-harmony","balloon-pack","blood-spear","boots-of-elvenkind","boots-of-striding-and-springing","boots-of-the-winterlands","bottled-breath","bracers-of-archery","brooch-of-shielding","broom-of-flying","cap-of-water-breathing","circlet-of-blasting","circlet-of-human-perfection","cloak-of-elvenkind","cloak-of-protection","cloak-of-the-manta-ray","decanter-of-endless-water","deck-of-illusions","doss-lute","driftglobe","dust-of-disappearance","dust-of-dryness","dust-of-sneezing-and-choking","efficient-quiver","elemental-gem","eversmoking-bottle","eyes-of-charming","eyes-of-minute-seeing","eyes-of-the-eagle","figurine-of-wondrous-power","fochlucan-bandore","gauntlets-of-ogre-power","gem-of-brightness","gloves-of-missile-snaring","gloves-of-swimming-and-climbing","gloves-of-thievery","goggles-of-night","guild-keyrune","guild-signet","hat-of-disguise","headband-of-intellect","helm-of-comprehending-languages","helm-of-telepathy","hew","immovable-rod","inquisitives-goggles","insignia-of-claws","javelin-of-lightning","keoghtoms-ointment","lantern-of-revealing","lightbringer","mac-fuirmidh-cittern","mariners-armor","mask-of-the-beast","medallion-of-thoughts","mind-carapace-armor","mind-carapace-chain-mail","mind-carapace-plate","mind-carapace-ring-mail","mind-carapace-splint","mithral-armor","mizzium-apparatus","necklace-of-adaptation","night-caller","oil-of-slipperiness","paper-bird","pearl-of-power","periapt-of-health","periapt-of-wound-closure","philter-of-love","pipes-of-haunting","pipes-of-the-sewers","piwafwi-cloak-of-elvenkind","potion-of-animal-friendship","potion-of-fire-breath","potion-of-giant-strength","potion-of-growth","potion-of-healing","potion-of-poison","potion-of-resistance","potion-of-water-breathing","pyroconverger","quiver-of-ehlonna","restorative-ointment","ring-of-jumping","ring-of-mind-shielding","ring-of-swimming","ring-of-truth-telling","ring-of-warmth","ring-of-water-walking","rings-of-shared-suffering","robe-of-serpents","robe-of-useful-items","rod-of-the-pact-keeper","rope-of-climbing","saddle-of-the-cavalier","seeker-dart","sending-stones","sentinel-shield","shatterspike","shield-1","skyblinder-staff","slippers-of-spider-climbing","smokepowder","speaking-stone","spell-gem-lapis-lazuli","spell-gem-obsidian","spell-scroll","spies-murmur","staff-of-the-adder","staff-of-the-python","stone-of-good-luck-luckstone","stone-of-ill-luck","storm-boomerang","sword-of-vengeance","trident-of-fish-command","wand-of-entangle","wand-of-magic-detection","wand-of-magic-missiles","wand-of-secrets","wand-of-the-war-mage","wand-of-web","weapon-of-warning","weapon-1","weird-tank","wheel-of-wind-and-water","wind-fan","winged-boots","wingwear","yklwa-1"]

veryRares = ["ammunition-3","amulet-of-the-black-skull","amulet-of-the-planes","animated-shield","anstruth-harp","armor-2","arrow-of-slaying","bag-of-devouring","belt-of-giant-strength","blade-of-the-medusa","blast-scepter","bracelet-of-rock-magic","candle-of-invocation","carpet-of-flying","cloak-of-arachnida","conch-of-teleportation","crystal-ball","dancing-sword","demon-armor","dragon-scale-mail","dwarven-plate","dwarven-thrower","efreeti-bottle","figurine-of-wondrous-power","frost-brand","guild-keyrune","helm-of-brilliance","hewards-hireling-armor","horn-of-valhalla","horned-ring","horseshoes-of-a-zephyr","illusionists-bracers","ingot-of-the-skold-rune","ioun-stone","javelin-of-backbiting","lords-ensemble","manual-of-bodily-health","manual-of-gainful-exercise","manual-of-golems","manual-of-quickness-of-action","marvelous-pigments","mirror-of-life-trapping","navigation-orb","nine-lives-stealer","nolzurs-marvelous-pigments","oathbow","oil-of-sharpness","pennant-of-the-vind-rune","peregrine-mask","polymorph-blade","potion-of-flying","potion-of-giant-strength","potion-of-healing","potion-of-invisibility","potion-of-longevity","potion-of-mind-control","potion-of-speed","potion-of-vitality","ring-of-regeneration","ring-of-shooting-stars","ring-of-telekinesis","robe-of-scintillating-colors","robe-of-stars","rod-of-absorption","rod-of-alertness","rod-of-security","rod-of-the-pact-keeper","scimitar-of-speed","shard-of-the-ise-rune","shield-of-the-uven-rune","shield-3","spear-of-backbiting","spell-gem-amber","spell-gem-jade","spell-gem-topaz","spell-scroll","spellguard-shield","staff-of-fire","staff-of-frost","staff-of-power","staff-of-striking","staff-of-thunder-and-lightning","sword-of-sharpness","sword-of-the-paruns","tome-of-clear-thought","tome-of-leadership-and-influence","tome-of-understanding","voyager-staff","wand-of-polymorph","wand-of-the-war-mage","weapon-3","yklwa-3"]



loadParams("common", "commonQty")
loadParams("uncommon", "uncommonQty")
loadParams("rare", "rareQty")
loadParams("very-rare", "veryRareQty")
loadParams("legendary", "legendaryQty")
loadParams("artifact", "artifactQty")

function loadParams(name, target) {
    var url = new URL(window.location)
    var c = url.searchParams.get(name)
    if (c === null) {
        return
    }
    var val = parseInt(c, 10)
    if (val === null) {
        return
    }
    document.getElementById(target).value = val
}

generate()