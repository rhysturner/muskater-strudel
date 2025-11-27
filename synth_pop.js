// 🎵 Synth Pop Song - Strudel.cc
// A simple 80s-inspired synth pop track at 120 BPM
// Press Ctrl+Enter to play!

setcpm(120/4)

// === DRUMS ===

// Four-on-the-floor kick drum (classic dance beat)
$: s("bd*4")
.bank("RolandTR909")
.gain(1)

// Snare on beats 2 and 4
$: s("~ sd ~ sd")
.bank("RolandTR909")
.gain(0.8)

// Hi-hats on eighth notes
$: s("hh*8")
.bank("RolandTR909")
.gain(0.5)

// Open hi-hat accents
$: s("~ ~ ~ oh")
.bank("RolandTR909")
.gain(0.4)

// === BASS SYNTH ===

// Deep synth bass with classic progression
$: note("<[c2 c3]*4 [ab1 ab2]*4 [f2 f3]*4 [g2 g3]*4>")
.s("sawtooth")
.lpf(400)
.lpq(3)
.release(0.2)
.gain(0.8)
.orbit(1)

// === PAD CHORDS ===

// Warm synth pad chords with reverb
$: n("<[0,3,7] [-4,0,3] [-7,-3,0] [-5,-2,2]>/4")
.scale("C4:minor")
.s("sawtooth")
.lpf(1200)
.lpq(2)
.attack(0.3)
.release(0.5)
.gain(0.35)
.room(0.5)
.size(4)
.orbit(2)

// === ARPEGGIO ===

// Bright arpeggiated synth for movement
$: n("<[0 3 7 10 12 10 7 3]*2 [-4 0 3 7 8 7 3 0]*2 [-7 -3 0 3 5 3 0 -3]*2 [-5 -2 2 5 7 5 2 -2]*2>")
.scale("C5:minor")
.s("square")
.lpf(3000)
.lpq(4)
.attack(0.01)
.decay(0.1)
.sustain(0.3)
.release(0.1)
.gain(0.45)
.delay(0.3)
.delaytime(0.375)
.delayfb(0.4)
.orbit(3)

// === LEAD MELODY ===

// Melodic lead synth with delay
$: note("<~ ~ ~ ~ c5 eb5 g5 f5 eb5 d5 ~ ~ c5 g4 c5 eb5>")
.s("sawtooth")
.lpf(2000)
.lpq(5)
.attack(0.02)
.decay(0.3)
.sustain(0.6)
.release(0.3)
.gain(0.55)
.delay(0.4)
.delaytime(0.25)
.delayfb(0.5)
.room(0.3)
.orbit(4)

// === MASTER ===
// Add some compression and reverb to glue everything together
