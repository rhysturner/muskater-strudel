// 🌀 Dimensional Shift - Strudel.cc
// Evolution from ambient Moog atmospheres into driving psytrance
// Progressive build with rolling bass transitioning into psychedelic rhythms
// Press Ctrl+Enter to play!

setcpm(138/4) // Psytrance tempo (138 BPM) but feels slower due to pattern structure

// === ROLLING MOOG BASS (AMBIENT SECTION) ===

// Classic Moog-style rolling bass with evolving complexity
$: note("<[c2 c2 eb2 g2 c2 eb2 g2 bb2]*<2 2 4 4> [c2 c2 eb2 g2 c2 eb2 g2 ab2]*<2 2 4 4> [bb1 bb1 d2 f2 bb1 d2 f2 ab2]*<2 4 4 8> [bb1 bb1 d2 f2 bb1 d2 f2 g2]*<2 4 8 8>>")
.s("sawtooth")
.lpf(sine.range(300, 1200).slow(8))
.lpq(sine.range(4, 16).slow(6))
.attack(0.01)
.decay(0.3)
.sustain(0.4)
.release(0.2)
.gain(0.65)
.room(0.3)
.orbit(1)

// === PSYTRANCE KICK (PROGRESSIVE ENTRY) ===

// Starts sparse, builds to four-on-the-floor
$: s("<~ ~ ~ ~ ~ ~ ~ bd*4>")
.bank("RolandTR909")
.gain(1)
.lpf(100)
.orbit(2)

// === ROLLING BASS (PSYTRANCE STYLE) ===

// Evolves from Moog to psytrance bass
$: note("<~ ~ ~ [c2 eb2 g2 bb2 c3 bb2 g2 eb2]*4>")
.s("sawtooth")
.lpf(sine.range(400, 2000).slow(4))
.lpq(12)
.attack(0.001)
.decay(0.15)
.sustain(0.2)
.release(0.1)
.gain(0.7)
.distort(0.3)
.orbit(3)

// === PSYTRANCE HI-HATS ===

// Progressive hi-hat pattern building from sparse to dense
$: s("<~ ~ [hh*4] [hh*8] [hh*16]>")
.bank("RolandTR909")
.gain("<0.3 0.4 0.5 0.6>")
.hpf(8000)
.orbit(4)

// === OFF-BEAT HATS ===

// Psytrance signature off-beat pattern
$: s("<~ ~ ~ [~ hh ~ hh]*4>")
.bank("RolandTR909")
.gain(0.5)
.hpf(10000)
.orbit(5)

// === PSYTRANCE BASS DRUM FILLS ===

// Occasional kick fills for energy
$: s("<~ ~ ~ [bd ~ ~ bd ~ bd ~ ~ ~]>")
.bank("RolandTR909")
.gain(0.9)
.orbit(6)

// === ATMOSPHERIC PAD (CONTINUOUS) ===

// Dark pad underneath everything
$: n("<[0,3,7,10] [0,3,7,10] [-2,2,5,9] [-2,2,5,9]>/8")
.scale("C2:minor")
.s("sawtooth")
.lpf(sine.range(200, 600).slow(32))
.lpq(sine.range(2, 6).slow(24))
.attack(6)
.decay(2)
.sustain(0.9)
.release(8)
.gain(0.3)
.room(0.8)
.size(12)
.orbit(7)

// === ETHEREAL HIGH PAD ===

// Bright, spacey pad for psychedelic atmosphere
$: n("<[7,10,12,15] [7,10,12,15] [5,9,12,14] [5,9,12,14]>/8")
.scale("C4:minor")
.s("triangle")
.lpf(sine.range(1500, 4000).slow(20))
.attack(4)
.decay(2)
.sustain(0.8)
.release(6)
.gain(0.25)
.room(1)
.size(15)
.delay(0.6)
.delaytime(0.375)
.delayfb(0.7)
.orbit(8)

// === PSYCHEDELIC LEAD ===

// Acid-style lead with filter modulation
$: note("<~ ~ ~ [c5 eb5 g5 bb5 c6 bb5 g5 eb5]*2>")
.s("square")
.lpf(sine.range(800, 3500).fast(4))
.lpq(sine.range(8, 20).fast(2))
.attack(0.01)
.decay(0.2)
.sustain(0.3)
.release(0.15)
.gain(0.5)
.delay(0.4)
.delaytime(0.375)
.delayfb(0.6)
.distort(0.2)
.orbit(9)

// === PERCUSSIVE ELEMENTS ===

// Psytrance percussion fills
$: s("<~ ~ ~ [cp ~ perc ~ cp perc ~ ~]>")
.bank("RolandTR909")
.gain(0.6)
.room(0.4)
.orbit(10)

// === RISER EFFECTS ===

// Noise sweeps for build-ups
$: s("~ ~ ~ ~ ~ ~ ~ <~ ~ ~ wind:3>")
.gain(0.3)
.hpf(sine.range(200, 8000).slow(4))
.room(0.9)
.orbit(11)

// === MOOG SUB BASS ===

// Deep sub foundation
$: note("<c1 c1 bb0 bb0>/4")
.s("sine")
.attack(0.01)
.decay(0.4)
.sustain(0.6)
.release(0.3)
.gain(0.6)
.orbit(12)

// === TRIBAL PERCUSSION ===

// Psytrance tribal drums (progressive entry)
$: s("<~ ~ ~ [~ rim ~ rim ~ ~ rim ~]>")
.bank("RolandTR909")
.gain(0.5)
.room(0.3)
.orbit(13)

// === GLITCH EFFECTS ===

// Random glitchy elements
$: s("<~ ~ ~ [~ ~ casio:4 ~]>")
.gain(0.4)
.delay(0.5)
.delaytime(0.125)
.delayfb(0.7)
.crush(8)
.orbit(14)

// === ATMOSPHERE SWEEPS ===

// Slow evolving textures
$: note("~ ~ ~ ~ ~ ~ ~ ~ <c3 ~ ~ ~ ~ ~ ~ ~>")
.s("sawtooth")
.attack(8)
.release(10)
.gain(0.3)
.lpf(sine.range(300, 1500).slow(16))
.room(1)
.size(15)
.orbit(15)

// === SNARE BUILDS ===

// Progressive snare patterns (psytrance style)
$: s("<~ ~ [~ sd] [~ sd ~ sd] [~ sd]*2>")
.bank("RolandTR909")
.gain(0.7)
.room(0.5)
.orbit(16)
