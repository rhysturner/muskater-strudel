// 🚀 Left Field Trance - Strudel.cc
// Tiesto-style progressive trance with unconventional leftfield sounds
// High-energy anthemic trance with weird, unexpected samples and textures
// Press Ctrl+Enter to play!

setcpm(138/4) // Trance tempo (138 BPM)

// === MAIN TRANCE KICK ===

// Four-on-the-floor driving kick
$: s("bd*4")
.bank("RolandTR909")
.gain(1.1)
.distort(0.1)
.orbit(1)

// === LEFTFIELD BASS (USING INSECT SAMPLES) ===

// Unconventional bass using pitched-down insect sounds
$: s("insect*16")
.n("<0 1 2 3>")
.speed("<0.5 0.4 0.45 0.42>")
.lpf(sine.range(200, 600).slow(4))
.lpq(8)
.gain(0.8)
.distort(0.3)
.orbit(2)

// === TRANCE BASS STABS ===

// Classic trance bass hits
$: note("[c2 ~ ~ ~]*4")
.s("sawtooth")
.lpf(400)
.lpq(15)
.attack(0.001)
.decay(0.3)
.sustain(0)
.release(0)
.gain(0.9)
.orbit(3)

// === OFF-BEAT HATS (USING METAL SAMPLES) ===

// Using metal samples as hi-hats for leftfield texture
$: s("[~ metal:2]*8")
.speed(4)
.gain(0.4)
.hpf(8000)
.crush(8)
.pan(sine.slow(4))
.orbit(4)

// === TRANCE PLUCK (USING CROW SAMPLES) ===

// Melodic pluck using pitched crow sounds
$: s("[crow*8]")
.n("<0 2 4 7 4 2 5 7>")
.speed("<2 2.5 3 2.8>")
.lpf(2500)
.attack(0.01)
.decay(0.2)
.sustain(0)
.gain(0.5)
.delay(0.4)
.delaytime(0.375)
.delayfb(0.5)
.room(0.4)
.orbit(5)

// === ANTHEMIC LEAD (USING SPACE SAMPLES) ===

// Soaring lead using space samples pitched and filtered
$: s("~ ~ ~ ~ space:1*4")
.speed("<1.5 2 1.8 2.2>")
.lpf(sine.range(1000, 5000).fast(2))
.lpq(12)
.gain(0.6)
.delay(0.5)
.delaytime(0.5)
.delayfb(0.7)
.room(0.6)
.orbit(6)

// === ROLLING PERCUSSION (USING JAZZ SAMPLES) ===

// Percussive elements from jazz kit samples
$: s("jazz:2*16")
.speed("<4 6 8 10>")
.gain("<0.3 0.4 0.5 0.6>")
.hpf(2000)
.crush(6)
.pan(rand.range(0, 1))
.orbit(7)

// === TRANCE SNARE ===

// Classic trance snare on 2 and 4
$: s("[~ sd]*2")
.bank("RolandTR909")
.gain(0.9)
.room(0.5)
.orbit(8)

// === ATMOSPHERIC PAD (USING WIND) ===

// Wind samples as pad texture
$: s("wind:0 wind:1 wind:2 wind:3")
.speed(0.5)
.lpf(1200)
.gain(0.35)
.room(1)
.size(15)
.orbit(9)

// === TRANCE CHORD STABS (USING CASIO) ===

// Chord stabs using retro casio samples
$: s("~ ~ casio:0 ~")
.speed("<1 1.2 0.8 1.5>")
.lpf(3000)
.lpq(6)
.gain(0.7)
.room(0.6)
.delay(0.3)
.delaytime(0.25)
.delayfb(0.4)
.orbit(10)

// === RISER EFFECTS ===

// Build-up using numbers sample pitched up
$: s("~ ~ ~ ~ ~ ~ ~ numbers:3")
.speed(sine.range(1, 8).slow(2))
.hpf(sine.range(100, 10000).slow(2))
.gain(0.5)
.room(0.9)
.orbit(11)

// === GLITCH PERCUSSION (USING EAST SAMPLES) ===

// Glitchy percussion from east samples
$: s("[~ ~ east:2 ~]*2")
.speed("<3 4 5 6>")
.gain(0.4)
.crush(4)
.pan(rand)
.delay(0.3)
.delaytime(0.125)
.delayfb(0.6)
.orbit(12)

// === SUB BASS ===

// Deep sine wave sub bass
$: note("c1*4")
.s("sine")
.attack(0.01)
.decay(0.2)
.sustain(0.3)
.release(0.1)
.gain(0.7)
.orbit(13)

// === VOCAL CHOPS (USING NUMBERS) ===

// Chopped vocal-like sounds from numbers sample
$: s("[~ ~ ~ ~] [~ numbers:1 ~ numbers:2]")
.speed("<1.5 2 1.8 2.5>")
.gain(0.5)
.delay(0.4)
.delaytime(0.375)
.delayfb(0.6)
.crush(6)
.room(0.5)
.orbit(14)

// === SWEEP EFFECTS (USING INSECT) ===

// Sweeping effects using insect samples
$: s("~ ~ ~ ~ ~ ~ insect:3 ~")
.speed(sine.range(0.5, 4).slow(4))
.lpf(sine.range(500, 5000).slow(2))
.gain(0.4)
.room(0.8)
.orbit(15)

// === SYNTH BASS PAD ===

// Deep pad for thickness
$: note("<c2 bb1 ab1 bb1>/4")
.s("sawtooth")
.lpf(300)
.lpq(4)
.attack(1)
.decay(0.5)
.sustain(0.8)
.release(2)
.gain(0.4)
.room(0.6)
.orbit(16)

// === RIDE CYMBAL ===

// Driving ride for trance energy
$: s("~ ~ ~ ~ [~ ~ ~ rd]")
.bank("RolandTR909")
.gain(0.5)
.hpf(6000)
.room(0.4)
.orbit(17)

// === BREAKDOWN PAD (USING SPACE) ===

// Breakdown atmospheric element
$: s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ space:4 ~ ~ ~")
.speed(0.8)
.lpf(2000)
.gain(0.5)
.room(1)
.size(20)
.orbit(18)

// === TRANCE LEAD STABS (USING METAL) ===

// Lead stabs using metal samples
$: s("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [metal:0 ~ metal:1 ~]")
.speed("<2 2.5 3 2.8>")
.lpf(4000)
.lpq(10)
.gain(0.6)
.delay(0.5)
.delaytime(0.5)
.delayfb(0.6)
.orbit(19)

// === OPEN HI-HAT ACCENTS ===

// Classic trance open hat
$: s("~ ~ ~ oh")
.bank("RolandTR909")
.gain(0.6)
.room(0.5)
.orbit(20)
