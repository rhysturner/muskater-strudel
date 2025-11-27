// 🎹 Stranger Synths - Strudel.cc
// Dark atmospheric 80s sci-fi horror soundtrack inspired by Stranger Things
// Featuring ominous synth drones, pulsing bass, and eerie melodies
// Press Ctrl+Enter to play!

setcpm(72/4) // Slower, more ominous tempo

// === DARK BASS DRONE ===

// Deep rumbling bass foundation - ominous and unsettling
$: note("<c1 c1 bb0 bb0>/8")
.s("sawtooth")
.lpf(150)
.lpq(8)
.attack(2)
.release(3)
.gain(0.7)
.room(0.6)
.size(8)
.orbit(1)

// === PULSING SYNTH BASS ===

// Rhythmic pulsing bass - signature 80s synth sound
$: note("<c2*8 c2*8 bb1*8 bb1*8>")
.s("triangle")
.lpf(300)
.lpq(2)
.attack(0.01)
.decay(0.15)
.sustain(0.2)
.release(0.1)
.gain("<0.6 0.7 0.6 0.8>")
.orbit(2)

// === ARPEGGIO TENSION ===

// Ascending/descending arpeggios for tension
$: n("<[0 3 7 12 15 12 7 3]*2 [0 3 7 12 15 12 7 3]*2 [-2 2 5 10 14 10 5 2]*2 [-2 2 5 10 14 10 5 2]*2>")
.scale("C3:minor")
.s("square")
.lpf(1800)
.lpq(6)
.attack(0.02)
.decay(0.2)
.sustain(0.1)
.release(0.15)
.gain(0.4)
.delay(0.35)
.delaytime(0.375)
.delayfb(0.45)
.room(0.4)
.orbit(3)

// === ATMOSPHERIC PAD ===

// Dark, evolving pad with slow filter movement
$: n("<[0,3,7,10] [0,3,7,10] [-2,2,5,9] [-2,2,5,9]>/8")
.scale("C3:minor")
.s("sawtooth")
.lpf(sine.range(400, 1200).slow(16))
.lpq(4)
.attack(3)
.decay(1)
.sustain(0.8)
.release(4)
.gain(0.35)
.room(0.7)
.size(10)
.orbit(4)

// === EERIE LEAD MELODY ===

// Sparse, haunting melody
$: note("~ ~ ~ ~ <c5 ~ eb5 ~ ~ g5 ~ ~ f5 ~ eb5 ~>")
.s("sine")
.attack(0.1)
.decay(0.3)
.sustain(0.7)
.release(1.5)
.gain(0.5)
.delay(0.5)
.delaytime(0.5)
.delayfb(0.6)
.room(0.5)
.orbit(5)
.lpf(2500)

// === DARK AMBIENT TEXTURE ===

// Noise-based texture for atmosphere
$: s("~ ~ wind:2 ~")
.gain(0.25)
.lpf(800)
.hpf(100)
.room(0.8)
.size(12)
.orbit(6)

// === SUBTLE PERCUSSION ===

// Minimal, electronic percussion
$: s("~ ~ ~ ~ ~ ~ cp:2 ~")
.bank("RolandTR808")
.gain(0.4)
.room(0.6)
.hpf(200)

// === SYNTH STABS ===

// Occasional dramatic stabs
$: note("~ ~ ~ ~ ~ ~ <~ ~ ~ c3 ~ ~ ~ ~>")
.s("sawtooth")
.lpf(600)
.lpq(10)
.attack(0.001)
.decay(0.3)
.sustain(0.1)
.release(0.4)
.gain(0.9)
.room(0.5)
.orbit(7)

// === LOW PULSE ===

// Sub-bass pulse for extra depth
$: note("<c1 c1 bb0 bb0>*4")
.s("sine")
.attack(0.01)
.decay(0.2)
.sustain(0)
.release(0)
.gain("<0.5 0.6 0.5 0.7>")
.orbit(8)
