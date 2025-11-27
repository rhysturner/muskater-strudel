// 🏙️ Detroit Minimal - Strudel.cc
// Clean minimal Detroit-style progressive house with rolling bassline
// Stripped-back, hypnotic, deep grooves
// Press Ctrl+Enter to play!

setcpm(126 / 4); // House tempo (126 BPM)

// === TIGHT KICK ===

// Clean, punchy four-on-the-floor kick with subtle variation
$: s("bd*4").bank("RolandTR909").gain("<0.85 0.9 0.85 0.95>").lpf(80).orbit(1);

// === ROLLING BASS LINE ===

// Deep, hypnotic rolling bass - the centerpiece
$: note("[c2 ~ eb2 ~ g2 ~ eb2 ~]*2")
  .s("sawtooth")
  .lpf(sine.range(250, 450).slow(8))
  .lpq(3)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.15)
  .gain(0.75)
  .orbit(2);

// === SUB BASS ===

// Deep sub foundation for weight
$: note("c1*2 ~ ~")
  .s("sine")
  .attack(0.01)
  .decay(0.3)
  .sustain(0)
  .release(0)
  .gain(0.6)
  .orbit(3);

// === MINIMAL HI-HATS ===

// Crisp, clean hi-hats with swing and pattern variation
// $: s("<hh*8 [hh*4] hh:2*8 [hh*6 hh hh]>")
// $: s("<hh:1*8>")
//   .bank("RolandTR909")
//   .gain("<0.3 0.25 0.35 0.25 0.3 0.25 0.4 0.25>")
//   .hpf(10000)
//   .orbit(4);

// === OPEN HAT ACCENT ===

// Sparse open hat for groove with variation
// $: s("~ ~ ~ <oh [~ oh]>").bank("RolandTR909").gain(0.35).room(0.3).orbit(5);

// === CLAP ===

// Minimal clap on the 2 and 4 with variation
// $: s("~ cp ~ <cp [cp ~]>")
//   .bank("RolandTR909")
//   .gain("<0.5 0.55 0.5 0.6>")
//   .room(0.4)
//   .orbit(6);

// === ATMOSPHERIC CHORD ===

// Sparse, deep chord stabs
// $: note("~ ~ ~ ~ ~ ~ <c3 eb3 g3> ~")
//   .s("triangle")
//   .lpf(800)
//   .attack(0.5)
//   .decay(1)
//   .sustain(0.4)
//   .release(2)
//   .gain(0.3)
//   .room(0.6)
//   .orbit(7);

// === MINIMAL PERCUSSION ===

// Subtle percussion for texture with variation
$: s("<~ ~ rim ~ [~ rim ~ ~] [~ ~ rim rim]>")
  .bank("RolandTR909")
  .gain(0.3)
  .hpf(2000)
  .orbit(8);

// === DEEP PAD ===

// Very subtle atmospheric pad
$: n("<[0,3,7] [0,3,7] [-4,0,3] [-4,0,3]>/8")
  .scale("C2:minor")
  .s("sine")
  .attack(4)
  .decay(2)
  .sustain(0.8)
  .release(6)
  .gain(0.2)
  .lpf(400)
  .room(0.8)
  .orbit(9);

// === BASS HARMONIC ===

// Fifth harmonic for bass richness
$: note("[g3 ~ bb3 ~ d4 ~ bb3 ~]*2")
  .s("triangle")
  .lpf(sine.range(600, 1000).slow(16))
  .lpq(2)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .release(0.1)
  .gain(0.25)
  .orbit(10);

// === SUBTLE DELAY FX ===

// Occasional delayed click for space
$: s("~ ~ ~ ~ ~ ~ ~ cp:2")
  .bank("RolandTR909")
  .gain(0.3)
  .delay(0.6)
  .delaytime(0.375)
  .delayfb(0.7)
  .hpf(4000)
  .orbit(11);

// === RIDE CYMBAL ===

// Subtle ride for groove with variation
$: s("~ ~ ~ ~ ~ ~ <bd:3 [bd:4 ~]> ~")
  .bank("RolandTR909")
  .gain(0.2)
  .hpf(8000)
  .room(0.3)
  .orbit(12);
