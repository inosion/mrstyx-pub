# Third-party assets

## Music font: Bravura

- File: `fonts/Bravura.otf`
- Source: https://github.com/steinbergmedia/bravura (`redist/otf/Bravura.otf`, master)
- Licence: SIL Open Font License 1.1, see `fonts/Bravura-OFL.txt`. Reserved Font Name "Bravura"; the font is redistributed unmodified.

## Text font: Atkinson Hyperlegible

- Files: `fonts/AtkinsonHyperlegible-Regular.ttf`, `fonts/AtkinsonHyperlegible-Bold.ttf`
- Source: https://github.com/google/fonts (`ofl/atkinsonhyperlegible/`, main)
- Licence: SIL Open Font License 1.1, see `fonts/AtkinsonHyperlegible-OFL.txt`. No Reserved Font Name.
- Processing: subset with fonttools to Latin-1, typographic punctuation, arrows and a few symbols.

## Display font: Big Shoulders Display

- File: `fonts/BigShouldersDisplay-ExtraBold.ttf`
- Source: https://github.com/google/fonts (`ofl/bigshouldersdisplay/BigShouldersDisplay[wght].ttf`, main)
- Licence: SIL Open Font License 1.1, see `fonts/BigShouldersDisplay-OFL.txt`. No Reserved Font Name.
- Processing: variable font instanced at weight 800 with fonttools, then subset to Latin-1 and typographic punctuation.

## Drum samples: Versilian Community Sample Library (VCSL)

- Source: https://github.com/sgossner/VCSL
- Licence: CC0 1.0 Universal (public domain dedication), https://creativecommons.org/publicdomain/zero/1.0/
- Processing for every file: leading silence trimmed, shortened with a fade-out, loudness-normalised (-14 LUFS), mono 44.1 kHz MP3 128 kbps.

| File | VCSL source path | Extra processing |
|---|---|---|
| `drums/kick.mp3` | `Membranophones/Struck Membranophones/Bass Drum 1/BDrumNew_hit_v5_rr1_Sum.wav` | |
| `drums/snare.mp3` | `Membranophones/Struck Membranophones/Snare Drum, Modern 1/Snare2_HitSN_v6_rr1_Mid.wav` | |
| `drums/hihat.mp3` | `Idiophones/Struck Idiophones/Hi-Hat Cymbal/HiHat_HitC_v3_rr1_Mid.wav` | |
| `drums/hihat_open.mp3` | `Idiophones/Struck Idiophones/Hi-Hat Cymbal/HiHat_HitO_rr1_Mid.wav` | |
| `drums/hihat_foot.mp3` | `Idiophones/Struck Idiophones/Hi-Hat Cymbal/HiHat_Close_rr1_Mid.wav` | |
| `drums/crash.mp3` | `Idiophones/Struck Idiophones/Suspended Cymbal 1/susCymb1_hit_stick_f1.wav` | |
| `drums/ride.mp3` | `Idiophones/Struck Idiophones/Suspended Cymbal 1/susCymb1_hit_bell_mf1.wav` | |
| `drums/tom_high.mp3` | `Membranophones/Struck Membranophones/Tom 1/Stick/TomH_HitS_v3_rr1_Mid.wav` | |
| `drums/tom_mid.mp3` | `Membranophones/Struck Membranophones/Tom 2/Stick/TomL_HitS_v3_rr1_Mid.wav` | pitched up ×1.12 |
| `drums/tom_floor.mp3` | `Membranophones/Struck Membranophones/Tom 2/Stick/TomL_HitS_v3_rr1_Mid.wav` | pitched down ×0.85 |
| `drums/click_accent.mp3` | `Idiophones/Struck Idiophones/Woodblock/wood_click_ff.wav` | |
| `drums/click.mp3` | `Idiophones/Struck Idiophones/Woodblock/wood_click_mp.wav` | |

The kit pieces come from orchestral and percussion recordings rather than one drum kit, so the
set is functional rather than matched. Any CC0 kit can replace them file for file.
