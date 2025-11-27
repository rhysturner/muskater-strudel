# muskater-strudel

A collection of music compositions created with [Strudel.cc](https://strudel.cc/) - a live coding environment for making music with code.

## What is Strudel?

Strudel is a JavaScript port of TidalCycles, a pattern language for live coding music. With Strudel, you can create dynamic, algorithmic music using code patterns.

## Songs

### 🎹 Synth Pop (`synth_pop.js`)

A simple 80s-inspired synth pop track featuring:

- **Tempo**: 120 BPM
- **Key**: C minor
- **Drum Machine**: Roland TR-909
- **Elements**:
  - Four-on-the-floor kick pattern
  - Classic snare on beats 2 and 4
  - Driving hi-hat patterns
  - Deep synth bass with chord progression (Cm → Abm → Fm → Gm)
  - Warm pad chords with reverb
  - Bright 16th note arpeggios with delay
  - Melodic lead synth

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `synth_pop.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Change tempo: Modify `setcpm(120/4)` (e.g., `setcpm(90/4)` for 90 BPM)
- Try different drum machines: `RolandTR808`, `AkaiLinn`, `RhythmAce`, etc.
- Mute parts: Change `$:` to `_$:` on any line
- Adjust effects: Modify `.delay()`, `.room()`, `.lpf()` values
- Change the scale: Try different scales like `C:major`, `D:dorian`, etc.

### 🌌 Stranger Synths (`stranger_synths.js`)

A dark, atmospheric 80s sci-fi horror soundtrack inspired by Stranger Things:

- **Tempo**: 72 BPM (slow and ominous)
- **Key**: C minor
- **Mood**: Dark, suspenseful, eerie
- **Elements**:
  - Deep rumbling bass drone foundation
  - Pulsing rhythmic synth bass (classic 80s signature sound)
  - Tension-building ascending/descending arpeggios
  - Dark evolving pad with slow filter modulation
  - Sparse, haunting lead melody
  - Ambient noise textures for atmosphere
  - Minimal electronic percussion
  - Dramatic synth stabs
  - Sub-bass pulse for extra depth

**Sound characteristics:**
- Heavy use of reverb and delay for spaciousness
- Low-pass filtered synths for warmth and mystery
- Multiple layers creating depth and tension
- Slow attack/release envelopes for atmospheric sounds
- Each element on separate orbit for independent processing

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `stranger_synths.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Make it darker: Lower the tempo with `setcpm(60/4)` or slower
- Add more tension: Increase `.lpq()` values on filters for more resonance
- More spacious: Increase `.room()` and `.size()` values
- Mute layers: Change `$:` to `_$:` to hear individual elements
- Experiment with scales: Try `C:phrygian` or `C:locrian` for even darker moods

### 🌑 Upside Down (`upside_down.js`)

A pure ambient atmospheric soundscape with no drums - inspired by the eerie parallel dimension:

- **Tempo**: 48 BPM (very slow and dreamlike)
- **Key**: C minor
- **Mood**: Haunting, ethereal, otherworldly
- **Elements**:
  - Deep sub-bass drone (felt more than heard)
  - Slowly morphing dark pad with automated filter modulation
  - Ethereal high-register pad with extensive reverb
  - Glacially slow, sparse arpeggios
  - Eerie swelling reverse-like textures
  - Ambient wind and atmospheric noise layers
  - Ghostly high-frequency whisper synth
  - Subtle metallic resonances
  - Breathing pad with slow pulsing
  - Distant echo fragments

**Sound characteristics:**
- **NO percussion or drums** - pure ambient soundscape
- Extremely slow tempo creates a sense of timelessness
- Very long attack/release envelopes (6-10 seconds)
- Heavy reverb (.8-1.0) for vast, spacious sound
- Automated filter modulation using `sine.range()` for organic movement
- Multiple delay layers with high feedback for endless echoes
- 10 separate orbits for maximum spatial depth
- Sparse note placement with lots of silence for tension

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `upside_down.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Even slower: Try `setcpm(36/4)` or `setcpm(24/4)` for glacial pacing
- More mysterious: Increase filter resonance with higher `.lpq()` values
- Deeper space: Increase all `.room()` values to 1 and `.size()` to 20
- Isolate layers: Mute different `$:` lines to hear individual elements
- Darker tone: Try `C:phrygian` or add more dissonant intervals to chords
- More sparse: Add more `~` rests to the melodic patterns

## Resources

- [Strudel Workshop](https://strudel.cc/workshop/getting-started/) - Learn the basics
- [Strudel REPL](https://strudel.cc/) - Live coding environment
- [Strudel Documentation](https://strudel.cc/learn/) - Complete reference

## About

Created as an exploration of algorithmic composition and live coding with Strudel.
