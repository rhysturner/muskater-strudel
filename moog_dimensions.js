// 🎛️ Moog Dimensions - Strudel.cc
// Ambient atmospheric soundscape with a rolling Moog-style bass synthesizer
// Deep, warm analog bass over ethereal textures
// Press Ctrl+Enter to play!

setcpm(52/4) // Slow but with more movement than pure ambient

// === ROLLING MOOG BASS ===

// Classic Moog-style rolling bass with movement and character
$: note("<[c2 c2 eb2 g2 c2 eb2 g2 bb2]*2 [c2 c2 eb2 g2 c2 eb2 g2 ab2]*2 [bb1 bb1 d2 f2 bb1 d2 f2 ab2]*2 [bb1 bb1 d2 f2 bb1 d2 f2 g2]*2>")
.s("sawtooth")
.lpf(sine.range(300, 800).slow(8))
.lpq(sine.range(4, 12).slow(6))
.attack(0.01)
.decay(0.3)
.sustain(0.4)
.release(0.2)
.gain(0.65)
.room(0.3)
.orbit(1)

// === MOOG BASS OCTAVE LAYER ===

// Sub-octave of the Moog bass for extra depth
$: note("<[c1 c1 eb1 g1 c1 eb1 g1 bb1]*2 [c1 c1 eb1 g1 c1 eb1 g1 ab1]*2 [bb0 bb0 d1 f1 bb0 d1 f1 ab1]*2 [bb0 bb0 d1 f1 bb0 d1 f1 g1]*2>")
.s("triangle")
.lpf(200)
.lpq(2)
.attack(0.01)
.decay(0.2)
.sustain(0.5)
.release(0.15)
.gain(0.5)
.orbit(2)

// === DEEP SUB BASS DRONE ===

// Extremely low foundation underneath everything
$: note("<c0 c0 bb-1 bb-1>/16")
.s("sine")
.attack(8)
.release(10)
.gain(0.45)
.room(0.9)
.size(15)
.orbit(3)

// === DARK EVOLVING PAD ===

// Slowly morphing pad with filter automation
$: n("<[0,3,7,10,12] [0,3,7,10,12] [-2,2,5,9,12] [-2,2,5,9,12]>/16")
.scale("C2:minor")
.s("sawtooth")
.lpf(sine.range(200, 700).slow(32))
.lpq(sine.range(2, 6).slow(24))
.attack(6)
.decay(2)
.sustain(0.9)
.release(8)
.gain(0.35)
.room(0.8)
.size(12)
.orbit(4)

// === ETHEREAL HIGH PAD ===

// Bright, distant pad in the upper register
$: n("<[7,10,12,15] [7,10,12,15] [5,9,12,14] [5,9,12,14]>/16")
.scale("C4:minor")
.s("triangle")
.lpf(sine.range(1200, 3000).slow(40))
.attack(8)
.decay(3)
.sustain(0.8)
.release(10)
.gain(0.22)
.room(1)
.size(15)
.delay(0.6)
.delaytime(0.667)
.delayfb(0.7)
.orbit(5)

// === MOOG COUNTER MELODY ===

// Sparse melodic phrases in Moog style
$: note("~ ~ ~ ~ <c4 ~ eb4 ~ g4 ~ ~ ~ bb4 ~ ab4 ~ ~ ~ ~ ~ g4 ~ f4 ~ eb4 ~ ~ ~ ~ ~ ~ ~>")
.s("sawtooth")
.lpf(1200)
.lpq(8)
.attack(0.05)
.decay(0.4)
.sustain(0.5)
.release(0.8)
.gain(0.5)
.delay(0.5)
.delaytime(0.5)
.delayfb(0.6)
.room(0.6)
.orbit(6)

// === AMBIENT NOISE LAYER ===

// Wind and atmospheric textures
$: s("~ ~ ~ wind:4 ~ ~ ~ ~ ~ ~ ~ wind:2 ~ ~ ~ ~")
.gain(0.18)
.lpf(600)
.hpf(80)
.room(1)
.size(15)
.orbit(7)

// === GHOSTLY WHISPER SYNTH ===

// High frequency shimmer
$: note("~ ~ ~ ~ ~ ~ ~ ~ <~ ~ ~ c6 ~ ~ ~ ~ ~ ~ ~ ~ eb6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>")
.s("triangle")
.attack(2)
.decay(3)
.sustain(0.4)
.release(6)
.gain(0.18)
.lpf(sine.range(2000, 5000).slow(48))
.delay(0.8)
.delaytime(0.5)
.delayfb(0.8)
.room(1)
.orbit(8)

// === BREATHING PAD ===

// Slowly pulsing mid-range pad
$: n("<[3,7] [3,7] [2,5] [2,5]>/8")
.scale("C3:minor")
.s("sawtooth")
.lpf(sine.range(350, 650).slow(20))
.attack(4)
.decay(2)
.sustain(0.7)
.release(6)
.gain(sine.range(0.22, 0.32).slow(16))
.room(0.7)
.size(8)
.orbit(9)

// === MOOG BASS HARMONIC ===

// Fifth harmonic of the bass for richness
$: note("<[g3 g3 bb3 d4 g3 bb3 d4 f4] [g3 g3 bb3 d4 g3 bb3 d4 eb4] [f3 f3 ab3 c4 f3 ab3 c4 eb4] [f3 f3 ab3 c4 f3 ab3 c4 d4]>")
.s("square")
.lpf(sine.range(800, 1600).slow(10))
.lpq(4)
.attack(0.02)
.decay(0.25)
.sustain(0.3)
.release(0.2)
.gain(0.3)
.room(0.4)
.orbit(10)

// === DISTANT ECHO ===

// Far away melodic fragments
$: note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ <~ ~ ~ c5 ~ ~ ~ ~ ~ ~ ~ ~>")
.s("sine")
.attack(1.5)
.release(5)
.gain(0.2)
.delay(0.9)
.delaytime(1)
.delayfb(0.85)
.room(1)
.size(20)
.orbit(11)
