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

## Resources

- [Strudel Workshop](https://strudel.cc/workshop/getting-started/) - Learn the basics
- [Strudel REPL](https://strudel.cc/) - Live coding environment
- [Strudel Documentation](https://strudel.cc/learn/) - Complete reference

## About

Created as an exploration of algorithmic composition and live coding with Strudel.
