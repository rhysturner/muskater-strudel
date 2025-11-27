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

### 🎛️ Moog Dimensions (`moog_dimensions.js`)

An ambient atmospheric soundscape featuring a rolling Moog-style bass synthesizer:

- **Tempo**: 52 BPM (slow with movement)
- **Key**: C minor
- **Mood**: Deep, warm, analog, hypnotic
- **Elements**:
  - **Rolling Moog bass** - Classic analog-style bassline with movement
  - Moog bass octave layer for extra depth
  - Moog counter melody with sparse phrases
  - Moog bass harmonic (fifth) for richness
  - Deep sub-bass drone foundation
  - Slowly morphing dark pad with filter automation
  - Ethereal high-register pad with reverb
  - Ambient wind and atmospheric noise layers
  - Ghostly high-frequency whisper synth
  - Breathing pad with slow pulsing
  - Distant echo fragments

**Moog Bass Characteristics:**
- Sawtooth and triangle waves for warm analog tone
- Automated filter modulation with `sine.range()` for classic Moog sweep
- Rolling 16th note patterns for hypnotic groove
- Multiple octaves layered for massive sound
- Resonant low-pass filter (lpq 4-12) for that signature Moog character
- Short attack/decay for punchy articulation

**Sound characteristics:**
- Combines ambient atmosphere with rhythmic bass movement
- Filter sweeps create organic, breathing quality
- 11 separate orbits for maximum spatial depth
- Balance between rhythmic drive and ambient space
- Vintage analog synthesizer aesthetic

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `moog_dimensions.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Slower bass: Change the `*2` multiplier to `*1` in the bass patterns
- More aggressive filter: Increase `.lpq()` values to 15-20 for screaming resonance
- Spacier: Increase `.room()` on the Moog bass for more atmosphere
- Isolate the bass: Mute all other `$:` lines to hear just the Moog layers
- Different patterns: Try different note patterns in the bass line
- More movement: Increase filter sweep range in `sine.range()` parameters

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

### 🌀 Dimensional Shift (`dimensional_shift.js`)

A progressive evolution from ambient Moog atmospheres into driving psytrance:

- **Tempo**: 138 BPM (classic psytrance tempo)
- **Key**: C minor
- **Mood**: Hypnotic, psychedelic, progressive, energetic
- **Structure**: Gradually builds from ambient into full psytrance
- **Elements**:
  - **Rolling Moog bass** - Evolves from ambient to psytrance style
  - Progressive kick drum (starts sparse, builds to four-on-the-floor)
  - Psytrance bass with aggressive filter sweeps and distortion
  - Building hi-hat patterns (sparse → dense 16th notes)
  - Off-beat hi-hats (signature psytrance rhythm)
  - Kick drum fills for energy bursts
  - Atmospheric dark pad (continuous throughout)
  - Ethereal high pad for psychedelic atmosphere
  - Acid-style lead with rapid filter modulation
  - Tribal percussion elements
  - Percussive fills and glitch effects
  - Noise riser sweeps for build-ups
  - Deep sub-bass foundation
  - Progressive snare builds
  - Slow evolving atmospheric textures

**Psytrance Characteristics:**
- 138 BPM with driving four-on-the-floor kick
- Rolling basslines with `*4` and `*8` patterns
- Aggressive low-pass filter sweeps using `sine.range()`
- High resonance (lpq 12-20) for screaming acid sounds
- Off-beat hi-hats creating hypnotic groove
- Multiple percussion layers for tribal feel
- Distortion on bass for grit and power
- Fast filter modulation with `.fast(4)` for psychedelic effect
- 16 separate orbits for complex spatial mixing

**Progressive Structure:**
- Uses `<>` (angle brackets) to create evolving patterns
- Elements progressively enter using `~ ~ ~ pattern` structure
- Bass complexity increases over time with `*<2 2 4 8>`
- Drums build from nothing to full psytrance rhythm
- Creates sense of journey from ambient to peak energy

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `dimensional_shift.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Faster tempo: Try `setcpm(145/4)` for full-on psytrance or `setcpm(148/4)` for hi-tech
- More aggressive: Increase `.distort()` and `.lpq()` values
- Slower build: Add more `~` patterns before elements enter
- Remove sections: Mute any `$:` line to hear the mix without that element
- More trippy: Increase filter modulation speed with `.fast(8)` or `.fast(16)`
- Different scales: Try `C:phrygian` for darker or `C:dorian` for different flavor
- More glitchy: Lower `.crush()` values (try 4 or 2) for more lo-fi texture

### 🏙️ Detroit Minimal (`detroit_minimal.js`)

A clean minimal Detroit-style progressive house track with hypnotic rolling bassline:

- **Tempo**: 126 BPM (classic house tempo)
- **Key**: C minor
- **Mood**: Deep, hypnotic, stripped-back, groovy
- **Style**: Detroit techno meets minimal house
- **Elements**:
  - **Tight kick drum** - Clean, punchy four-on-the-floor
  - **Rolling bassline** - Hypnotic 16th note pattern (the centerpiece)
  - Deep sine sub-bass for foundation
  - Crisp minimal hi-hats with velocity variation for swing
  - Sparse open hat accents for groove
  - Minimal clap on beats 2 and 4
  - Atmospheric chord stabs (very sparse)
  - Subtle rim shot percussion for texture
  - Deep atmospheric pad (barely audible)
  - Bass harmonic layer for richness
  - Delayed clicks for spatial interest
  - Subtle ride cymbal for groove

**Detroit/Minimal Aesthetic:**
- Clean, stripped-back arrangement
- Focus on groove and space over complexity
- Rolling bassline is the main melodic element
- Minimal use of effects - dry, tight sound
- Subtle filter modulation with `sine.range()` for organic movement
- Very sparse chord usage - letting the bass breathe
- Swing/groove created through velocity variations
- Deep, warm, analog-inspired sounds

**Production Characteristics:**
- Only 12 orbits - intentionally simple mixing
- Emphasis on rhythm and bass over melody
- Short, tight envelopes for punchy sound
- Minimal reverb/delay - mostly dry
- Low-pass filtering keeps everything warm and deep
- Triangle and sine waves for smooth, deep tones
- Sawtooth bass with gentle filter sweep

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `detroit_minimal.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Different bass pattern: Change the note pattern for new grooves
- More swing: Adjust hi-hat velocity patterns for more/less groove
- Deeper: Lower the `.lpf()` values for darker sound
- More minimal: Mute the pad and chord layers with `_$:`
- Add variation: Use `<>` angle brackets to alternate patterns
- Faster/slower: Try `setcpm(120/4)` for deep house or `setcpm(130/4)` for tech house
- More Detroit: Increase the bass filter sweep range for more movement
- Drier sound: Lower all `.room()` values to 0.2 or less

### 🚀 Left Field Trance (`left_field_trance.js`)

A high-energy Tiesto-style progressive trance track using unconventional leftfield sounds:

- **Tempo**: 138 BPM (trance tempo)
- **Key**: C minor
- **Mood**: Euphoric, anthemic, weird, unexpected
- **Concept**: Classic trance structure with non-traditional sound sources
- **Elements**:
  - **Four-on-the-floor kick** - Driving trance foundation
  - **Insect bass** - Pitched-down insect samples as bass synth
  - Trance bass stabs (traditional sawtooth)
  - **Metal hi-hats** - Metal samples pitched up for off-beat hats
  - **Crow plucks** - Melodic pluck using pitched crow sounds
  - **Space leads** - Soaring anthemic lead from space samples
  - **Jazz percussion** - Rolling percussion from jazz kit samples
  - Classic trance snare on beats 2 and 4
  - **Wind pads** - Wind samples as atmospheric pad
  - **Casio chord stabs** - Retro casio samples for chords
  - **Numbers risers** - Build-ups using numbers sample
  - **East glitch percussion** - Glitchy hits from east samples
  - Deep sine sub-bass foundation
  - **Numbers vocal chops** - Chopped vocal-like sounds
  - **Insect sweeps** - Sweep effects from insect samples
  - Breakdown atmospheric elements
  - **Metal lead stabs** - Lead hits using metal samples
  - Open hi-hat accents

**Leftfield Sound Design:**
- Uses unconventional samples as primary melodic/rhythmic elements
- `insect`, `crow`, `metal`, `space`, `jazz`, `east`, `wind`, `casio`, `numbers`
- Pitched using `.speed()` to create melodic content
- Heavy processing with filters, distortion, and bit crushing
- Creates familiar trance structure with unfamiliar sounds
- Result is both accessible and weird

**Trance Production Techniques:**
- Four-on-the-floor kick with slight distortion for punch
- Snare on 2 and 4 (classic trance)
- Off-beat hi-hats for driving groove
- Anthemic lead melodies with delay/reverb
- Chord stabs for energy
- Riser effects for builds
- Filter sweeps using `sine.range()` for movement
- Multiple delay/reverb layers for space
- 20 separate orbits for complex mixing

**To play:**
1. Go to [https://strudel.cc/](https://strudel.cc/)
2. Copy the contents of `left_field_trance.js`
3. Paste into the editor
4. Press **Ctrl+Enter** to play!
5. Press **Ctrl+.** to stop

**Customization tips:**
- Experiment with different samples: Try `wind`, `jazz`, or any other sample
- Change pitch: Modify `.speed()` values for different tones
- More aggressive: Increase `.distort()` and `.crush()` values
- Different melodies: Change the `n()` patterns for new sequences
- More/less glitchy: Adjust `.crush()` values (lower = more glitchy)
- Swap sound sources: Replace any sample name with another for new textures
- Add randomness: Use `rand` or `irand` for generative elements
- Different trance style: Try 140 BPM for uplifting or 145 BPM for harder trance

## Resources

- [Strudel Workshop](https://strudel.cc/workshop/getting-started/) - Learn the basics
- [Strudel REPL](https://strudel.cc/) - Live coding environment
- [Strudel Documentation](https://strudel.cc/learn/) - Complete reference

## About

Created as an exploration of algorithmic composition and live coding with Strudel.
