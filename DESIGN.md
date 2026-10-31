---
name: Studio de Pilates Tatiane Lasneaux
description: A boutique-interior landing page — limewashed plaster, linen, and filtered daylight — built to convert Google Ads search traffic into WhatsApp bookings.
colors:
  terracotta-700: "#6B3A22"
  terracotta-600: "#8A4B2C"
  terracotta-500: "#B5703F"
  terracotta-400: "#C98F62"
  terracotta-300: "#DBAE89"
  terracotta-200: "#ECCFB3"
  terracotta-100: "#F5E3D1"
  paper: "#FBF7F2"
  sand-100: "#F2E9DC"
  sand-200: "#E6D8C3"
  sand-300: "#D8C5A8"
  ink-900: "#2B2420"
  ink-800: "#3C332B"
  ink-700: "#5B5146"
  ink-500: "#70624F"
  ink-300: "#A89480"
  white: "#FFFFFF"
  wa-green: "#0D8247"
typography:
  display:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.4375rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  accent-serif:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.15rem"
    fontWeight: 600
    fontStyle: "italic"
    lineHeight: 1.5
rounded:
  pill: "999px"
  frame-lg: "30% 30% 10px 10px / 22% 22% 10px 10px"
  frame-md: "22% 22% 8px 8px / 16% 16% 8px 8px"
  card-signature: "4px 4px 28px 4px"
spacing:
  section-y: "96px"
  section-x: "24px"
  container-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.wa-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "#0B733F"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
---

# Design System: Studio de Pilates Tatiane Lasneaux

## Overview

**Creative North Star: "The Linen and Lime-Wash Studio" ("Estúdio boutique de linho e cal")**

This world replaces the previous site's civic-monumental Niemeyer-arch language (saturated purple planes, scalloped colonnade dividers, uppercase poster type) with the studio's own physical interior: limewashed plaster, linen, and filtered daylight falling across a reformer floor. Trust is built through restraint, real photography, and whitespace rather than through scale or color spectacle — one warm-white ground, one terracotta accent used sparingly, and a single soft arched photo frame as the quiet, recurring signature. The system is deliberately quiet: it proves calm and quality by refusing to shout.

This remains a Persuade-mode surface for Google Ads traffic — every section still earns its place by moving the visitor toward a WhatsApp click — but the persuasion register shifted from monumental to boutique: a hand-set italic-serif accent still carries tenure facts and quotes, the one place the system allows warmth to interrupt the clean sans grid.

**Confirmed visual rejections:** no saturated purple color planes or purple dark-sections; no scalloped/colonnade divider pattern; no uppercase civic-poster display face; no kicker/eyebrow label above a heading; no hard offset/colored shadows; no full-width bordered "civic plaque" stat band; no floating circular WhatsApp button running alongside the sticky CTA bar; no emoji used as icon substitutes.

**Key Characteristics:**
- Warm-white/chalk ground with a single sand-beige alternate section tone — never cold white, never a purple tint
- Terracotta is the one accent color, used only on text, links, small rules, and icon strokes — never as a full color plane
- A soft, shallow arched-top photo frame (not a monumental parabola) on every real studio photo
- Humanist geometric sans (Manrope display / Inter body) with a warm italic serif (Playfair Display) reserved only for tenure facts and testimonial quotes
- WhatsApp green is a fixed, never-restyled functional color — the one and only CTA color in the system

## Colors

A warm, quiet palette: one neutral "linen and plaster" ground family, one terracotta accent, and one fixed functional green.

### Primary
- **Clay Terracotta** (`#B5703F`, ramp `#6B3A22`–`#F5E3D1`): the system's single accent. `terracotta-700` carries body text links and AA-contrast labels on light ground; `terracotta-500` tints icon strokes, bullet markers, and quote marks; `terracotta-400` is the ink-note underline stroke; `terracotta-300` is reserved for text-on-dark (footer tagline, dark-section icon accents); `terracotta-100`/`200` are the lightest tints for badges and hover backgrounds. Never spans a full section as a color plane.

### Neutral
- **Warm Paper** (`#FBF7F2`): the page ground everywhere outside alternate sections — deliberately warm, never a cold or purple-tinted white.
- **Sand / Linen** (`#F2E9DC` alt-section ground, `#E6D8C3` hairline borders/dividers, `#D8C5A8` photo-frame outline): the secondary neutral family, replacing the old concrete tiers.
- **Warm Charcoal Ink** (`#2B2420` headings/body text and both full-bleed dark sections — `.section-dark` and the footer; `#5B5146` secondary text; `#70624F` tertiary text, tuned to ≥4.5:1 on `--paper`): never pure black, never purple-tinted.

### Named Rules
**The One Accent Rule.** Terracotta is the only expressive accent in the system; it appears on text, links, underlines, icon strokes, and small marks, never as a background color plane or full-bleed section.
**The Functional Green Rule.** WhatsApp green (`#0C7A42`, deepened from the brand's `#25D366` for 4.5:1 contrast with white text) is a fixed conversion-mechanism color, not part of the expressive palette — it is never retitled, retinted, or treated as a design decision to revisit.

## Typography

**Display Font:** Manrope (800), with Inter as fallback
**Body Font:** Inter (300–700)
**Accent Font:** Playfair Display italic (600), reserved only for the `.ink-note` tenure-fact accent and testimonial quote marks/text

**Character:** Manrope's humanist geometric caps-and-lowercase read as quiet, confident studio signage rather than civic-poster lettering; Inter stays a legible workhorse for body copy. Playfair italic is the one warm break in an otherwise clean sans system, reserved strictly for tenure facts ("quase 20 anos") and direct quotes.

### Hierarchy
- **Display / H1** (800, `clamp(2rem, 3.6vw, 3rem)`, 1.1, max 20ch): hero headline only; sentence case, not uppercase.
- **Headline / H2** (800, `clamp(1.75rem, 4vw, 2.5rem)`, 1.1, max 28ch): section headings. No kicker/eyebrow label ever precedes it.
- **Title / H3** (700, `clamp(1.25rem, 2.2vw, 1.4375rem)`, sentence case): service-row titles, diferencial titles.
- **Body** (400, 1rem, 1.6, 65ch measure): all paragraph copy.
- **Ink accent** (Playfair italic 600, `color: terracotta-700` on light ground / `terracotta-300` on dark): tenure facts and testimonial quotes only.

### Named Rules
**The No-Kicker Rule.** No small uppercase label sits above a heading anywhere on the page; the heading itself always carries the section's context.
**The One Serif Moment Rule.** Playfair Display italic appears only on the `.ink-note` tenure-fact span and testimonial quote marks/text — never as a general display or heading face.

## Layout

Single scrolling column of full-width sections (`.section-pad`, 96px block padding) alternating warm-paper and sand-100 alt grounds, with two full-bleed dark (`ink-900`) sections (Diferenciais, Aula Experimental/CTA-final) for rhythm. Content is centered in a 1200px `.container` (24px inline padding). The hero and "Sobre" sections use a two-column CSS Grid above 760px (copy + arch-framed photo, `1.3fr 0.7fr` and `0.85fr 1.15fr` respectively) collapsing to a single stacked column below it; grid items carry `min-width: 0` so long headlines wrap inside their own column. The services section is a vertically stacked list of six alternating photo-left/photo-right rows (never a card grid), flipping order via `nth-child(even)` above 720px. Header nav and the mobile hamburger drawer swap at the 980px breakpoint. A single persistent mobile CTA mechanism (`.sticky-cta-bar`, hidden ≥860px) sits fixed to the viewport bottom; the floating circular WhatsApp button markup still exists but is disabled (`display:none`) — see Do's and Don'ts.

## Elevation & Depth

Flat by default; shadows are neutral (pure black, never color-tinted) and used only for real lift: buttons, photo frames, the sticky CTA bar, and the header once scrolled. No colored or glowing shadows anywhere, on light or dark grounds.

### Shadow Vocabulary
- **sm** (`0 2px 8px rgba(0,0,0,0.10)`): hero badge, scrolled header, testimonial cards, service-row photo frames.
- **md** (`0 10px 30px rgba(0,0,0,0.16)`): primary buttons, the "Sobre" founder photo frame, the map frame.
- **lg** (`0 24px 64px rgba(0,0,0,0.22)`): the hero photo frame, the hovered WhatsApp button.

### Named Rules
**The Neutral Shadow Rule.** Every shadow in the system is black-based regardless of the surface it sits on; colored halos are never used.

## Shapes

A single soft, shallow arched-top silhouette recurs on every real studio photo (hero, founder portrait, each of the six service-row photos): `--frame-radius-lg` (`30% 30% 10px 10px / 22% 22% 10px 10px`) for hero scale and `--frame-radius-md` (`22% 22% 8px 8px / 16% 16% 8px 8px`) elsewhere — a quiet echo of the old monumental-arch motif, never a full parabola. Buttons stay full pill (999px) everywhere, the one deliberate exception to the otherwise-rectangular grid, since the stadium shape is a recognized conversion affordance. The testimonial card keeps one soft corner off-pattern (`4px 4px 28px 4px`) to avoid reading as a generic uniform card grid. Section seams are marked by a single 1px hairline (`.arch-divider`, `background: var(--sand-200)`) — there is exactly one, between hero and "Sobre" — replacing the old tiled scalloped-colonnade pattern entirely.

## Components

### Buttons
- **Shape:** full pill (999px), 700-weight label, 22px inline SVG icon, min-height 54px (62px for `.btn--lg`).
- **Primary (WhatsApp):** solid `#0D8247` / white text / `shadow-md`, darkens to `#0B733F` with `shadow-lg` on hover. This is the only CTA color in the system; the former secondary "gold" CTA color was retired during this build. Lightened from the build's original `#0C7A42` at the client's request; held at the lightest shade that still clears 4.5:1 contrast with white text.
- **Outline (on dark sections only):** transparent background, white text, `2px solid rgba(255,255,255,0.45)` border, filling to `rgba(255,255,255,0.08)` on hover — used for the `.hero__secondary-link`-adjacent contexts and dark-section secondary affordances.
- **Responsive label swap:** below 540px, buttons are full-width and swap to a short label (`.btn__label-short`) so the hero CTA never wraps or clips; above 540px they return to auto-width with the full label.

### Cards
- **Testimonial card:** mostly square corners with one soft corner (`4px 4px 28px 4px`, intentionally asymmetric), large Playfair quote mark in terracotta-500, name set in terracotta-700, star row, `shadow-sm`.
- **Service "row" (not a card):** full-width alternating photo/text module with an arch-framed photo (`frame-md`); explicitly not an icon-plus-heading card grid.

### Navigation
- **Header:** fixed, translucent warm-paper (`rgba(251,247,242,0.92)`) with 14px backdrop blur; border and `shadow-sm` appear only once scrolled. Nav links are pill-hover (terracotta-100 background, terracotta-700 text) on desktop, hamburger + full-height slide-in drawer below 980px.
- **Mobile drawer:** full-height panel sliding in from the right; its WhatsApp link is force-specificity-pinned to white text on green so the drawer's generic link-color rule can never regress it to dark-on-green.

### Signature Component: Arch photo frame
Every real studio photo (never stock) sits inside the soft arched-top frame described in Shapes, bordered with `sand-300` at 1px and lifted with a neutral shadow. The hero frame additionally carries a small pill "plaque" label ("Lago Sul · desde sempre") anchored at its base — the system's one recurring, ownable visual device.

### Signature Component: `.proof-inline`
A quiet text line with a single top hairline (`1px solid sand-200`) and no background or border box, carrying tenure/trust facts inline within body copy (e.g. "20+ anos no Lago Sul · 100% personalizado · referência #1 em Pilates"). It replaced a previous full-width bordered "civic plaque" stat band, retired as redundant with the hero's own proof badge.

## Do's and Don'ts

### Do:
- **Do** frame every real studio photograph in the soft arched-top silhouette (`frame-lg` for hero scale, `frame-md` elsewhere).
- **Do** keep WhatsApp green, its pill shape, and the `.wa-btn` conversion-tracking class exactly as specified; it is the only CTA color and the conversion mechanism.
- **Do** keep headings self-sufficient — never add a kicker/eyebrow label above one.
- **Do** carry inline trust/tenure facts as a quiet `.proof-inline` hairline line or fold them into the hero badge, not a bordered stat band.
- **Do** use hand-authored SVG line/fill icons at a consistent stroke weight for every icon need (stars, WhatsApp glyph, nav/location/clock/phone icons, FAQ chevron).

### Don't:
- **Don't** reintroduce saturated purple color planes, a scalloped colonnade divider, or uppercase civic-poster display type — all three were deliberately retired from this world.
- **Don't** reintroduce a bordered full-width stat band ("civic plaque"); fold proof facts into the hero badge or into body copy as a quiet `.proof-inline` line instead.
- **Don't** run a floating circular WhatsApp button (`.wa-float`) alongside the sticky CTA bar (`.sticky-cta-bar`) — the system picked one persistent mobile CTA mechanism, not both; `.wa-float` exists in markup/CSS but stays `display:none`.
- **Don't** use colored or glowing box-shadows, on light or dark grounds.
- **Don't** use emoji as icon substitutes anywhere in the UI; every icon is a hand-authored inline SVG at a consistent weight.
- **Don't** invent new testimonials, reviews, or statistics; all social proof on this page is real (Google 5.0/77 reviews, named testimonials) and must stay that way.
- **Don't** change the `.wa-btn` class, `data-wa-location` attributes, or the inline Google Ads conversion script at the bottom of `index.html` — they drive live ad-campaign conversion tracking.
