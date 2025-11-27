// 🌑 Upside Down - Strudel.cc
// Pure ambient atmospheric soundscape inspired by the dark parallel dimension
// No drums - just haunting synths, drones, and eerie textures
// Press Ctrl+Enter to play!

setcpm(48/4) // Very slow, dreamlike tempo

// === DEEP SUB BASS DRONE ===

// Extremely low foundation - felt more than heard
$: note("<c0 c0 c0 bb-1>/16")
.s("sine")
.attack(8)
.release(10)
.gain(0.5)
.room(0.9)
.size(15)
.orbit(1)

// === DARK EVOLVING PAD ===

// Slowly morphing pad with filter automation
$: n("<[0,3,7,10,12] [0,3,7,10,12] [-2,2,5,9,12] [-2,2,5,9,12]>/16")
.scale("C2:minor")
.s("sawtooth")
.lpf(sine.range(200, 800).slow(32))
.lpq(sine.range(2, 8).slow(24))
.attack(6)
.decay(2)
.sustain(0.9)
.release(8)
.gain(0.4)
.room(0.8)
.size(12)
.orbit(2)

// === ETHEREAL HIGH PAD ===

// Bright, distant pad in the upper register
$: n("<[7,10,12,15] [7,10,12,15] [5,9,12,14] [5,9,12,14]>/16")
.scale("C4:minor")
.s("triangle")
.lpf(sine.range(1000, 3000).slow(40))
.attack(8)
.decay(3)
.sustain(0.8)
.release(10)
.gain(0.25)
.room(1)
.size(15)
.delay(0.6)
.delaytime(0.667)
.delayfb(0.7)
.orbit(3)

// === SLOW MYSTERIOUS ARPEGGIO ===

// Very sparse, glacial arpeggios
$: n("~ ~ ~ ~ <0 ~ ~ 3 ~ ~ 7 ~ ~ 12 ~ ~ 15 ~ ~ 12 ~ ~ 7 ~ ~ 3 ~ ~ ~ ~>")
.scale("C4:minor")
.s("sine")
.attack(1)
.decay(2)
.sustain(0.6)
.release(3)
.gain(0.45)
.delay(0.7)
.delaytime(0.75)
.delayfb(0.75)
.room(0.7)
.orbit(4)

// === REVERSE TEXTURE ===

// Eerie swelling sounds
$: note("~ ~ ~ ~ ~ ~ ~ ~ <c3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>")
.s("sawtooth")
.attack(3)
.decay(1)
.sustain(0.5)
.release(5)
.gain(0.35)
.lpf(1200)
.room(0.9)
.size(10)
.orbit(5)

// === AMBIENT NOISE LAYER ===

// Wind and atmospheric textures
$: s("~ ~ ~ wind:4 ~ ~ ~ ~ ~ ~ ~ wind:2 ~ ~ ~ ~")
.gain(0.2)
.lpf(600)
.hpf(80)
.room(1)
.size(15)
.orbit(6)

// === GHOSTLY WHISPER SYNTH ===

// High frequency shimmer
$: note("~ ~ ~ ~ ~ ~ ~ ~ <~ ~ ~ c6 ~ ~ ~ ~ ~ ~ ~ ~ eb6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>")
.s("triangle")
.attack(2)
.decay(3)
.sustain(0.4)
.release(6)
.gain(0.2)
.lpf(sine.range(2000, 5000).slow(48))
.delay(0.8)
.delaytime(0.5)
.delayfb(0.8)
.room(1)
.orbit(7)

// === SUBTLE METALLIC RESONANCE ===

// Occasional metallic tones
$: note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ <~ ~ ~ ~ ~ ~ ~ ~ g2 ~ ~ ~ ~ ~ ~ ~>")
.s("square")
.lpf(400)
.lpq(15)
.attack(0.01)
.decay(4)
.sustain(0.2)
.release(6)
.gain(0.3)
.room(0.9)
.orbit(8)

// === BREATHING PAD ===

// Slowly pulsing mid-range pad
$: n("<[3,7] [3,7] [2,5] [2,5]>/8")
.scale("C3:minor")
.s("sawtooth")
.lpf(sine.range(300, 600).slow(20))
.attack(4)
.decay(2)
.sustain(0.7)
.release(6)
.gain(sine.range(0.25, 0.35).slow(16))
.room(0.7)
.size(8)
.orbit(9)

// === DISTANT ECHO ===

// Far away melodic fragments
$: note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ <~ ~ ~ c5 ~ ~ ~ ~ ~ ~ ~ ~>")
.s("sine")
.attack(1.5)
.release(5)
.gain(0.25)
.delay(0.9)
.delaytime(1)
.delayfb(0.85)
.room(1)
.size(20)
.orbit(10)
