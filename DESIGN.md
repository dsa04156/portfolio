# Portfolio design notes

## Reference review — 2026-09-17

- [Brittany Chiang](https://brittanychiang.com/): clear personal identity and role; persistent desktop navigation; experience and projects paired with concise descriptions and technologies.
- [Dennis Snellenberg](https://dennissnellenberg.com/work): large editorial titles, generous spacing, and a project index that supports quickly scanning the work.

These references informed hierarchy and navigation. No source code, copy, photographs, or project artwork was taken from either website.

## Applied to this portfolio

The hero states the owner's engineering focus in Korean. The original interactive Cloud / Edge AI / Kernel canvas remains a visual introduction to that focus.

Five projects share one preview area with a persistent desktop index and a horizontally scrollable mobile selector. Each preview combines an original presentation image, outcome and measurement context, the owner's role, technologies, and access to the detailed case study. The light work section contrasts with the dark hero. Outcomes retain the dark/lime palette without implying live telemetry or production-wide performance guarantees.

The project selector follows the tabs pattern: selected state, roving tab index, orientation-specific arrow keys, Home/End, and labelled panel. Next-project changes are announced through a status region. Reduced-motion preference suppresses preview transitions. Image viewing works directly from the preview and within case-study dialogs.

## Validation

- Browser checks at desktop 1440px and mobile 390px / 320px; no page-level horizontal overflow.
- All five previews checked against their corresponding case-study title and image.
- Desktop keyboard selection, mobile End navigation, next-project wraparound, and automatic tab-rail scrolling checked.
- Direct image enlargement checked for correct image, focus restoration, and body scroll-lock cleanup.
- JavaScript syntax checks and browser error-log inspection passed.
