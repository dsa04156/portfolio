# Precision Core design QA — 2026-09-17

final result: passed

## Comparison target and evidence

- Source visual truth: the first displayed generated image selected by the user, `C:/Users/jinuk/.codex/generated_images/01a0ae57-3aad-7ec3-a26e-7e922c36c297/exec-3aaad125-be80-4338-a599-4c2cce883747.png`.
- Implementation: `http://127.0.0.1:4173/#top`, rendered in the Codex in-app browser.
- Implementation screenshot path: the browser API returned inline screenshot bytes rather than a filesystem path. Evidence is retained in this task's browser image outputs titled “1번 시안과 구현 화면 함께 비교”, “수정된 데스크톱 구도 비교 검수”, and “배포 전 1번 시안 최종 비교”.
- Source: 1505 × 1045 pixels. CSS viewport: 1505 × 1045; device scale approximately 1. The browser renderer reserves a 15px native scrollbar, unlike the mock. This browser-chrome difference was excluded from findings. Both full-view images were emitted in the same comparison input on each desktop comparison, not reviewed from memory.
- State: dark theme, route #top, no open dialogs, pointer at rest, fonts loaded. Hero fits the target viewport (1045px, subpixel rounding excluded).
- Focused comparison: no separate region capture required; headline, identity, body, CTA and header were readable in the paired full-view input. Small footer copy was also verified through the rendered DOM. No complex icon or dense data surface appears in the reference hero.
- Additional browser screenshots: 390 × 844 mobile, 320 × 780 narrow mobile, 1024 × 900 tablet, including a post-fix tablet capture.

## Findings and comparison history

1. **Resolved P2 — inherited vertical padding changed the composition.** The first implementation had 70px top/bottom padding on the existing hero-copy class. The headline began too low and the hero extended beyond the reference viewport. Explicitly reset that padding, restored the intended headline width, adjusted the headline line-height and copy spacing. The second paired capture showed the title, identity, actions and bottom index within the intended viewport.
2. **Resolved P2 — visible raster boundary.** The initial hero asset ended in a hard floor-reflection edge. The image was regenerated with its bottom reflection fading to the near-black background; compositing moved to the image wrapper. The final paired capture shows a continuous dark background and the intended metal/glass material treatment.
3. **Resolved P2 — excessive tablet crop.** At 1024px the initial responsive rule pushed too much of the sculpture beyond the right edge. Changed the artwork from 67% width/right -14% to 56% width/right -3%. The post-fix screenshot preserves the recognizable interlocking-ring silhouette while keeping the copy clear.

No actionable P0/P1/P2 differences remain in the tested views.

## Required fidelity surfaces

- **Fonts and typography:** Manrope 800 recreates the large two-line headline, with an optical width adjustment for its first line. Pretendard provides readable Korean identity and body text. Text is native/selectable, not baked into the image. White/orange hierarchy and line breaks match the reference. Font rendering differs slightly from the generated mock; accepted P3.
- **Spacing and layout:** approximately 6% side margins, clear left-copy/right-art composition, header navigation and bottom work index. Buttons retain generous hit areas. Mobile intentionally stacks artwork beneath content because the source only specifies a desktop view. No page-level horizontal overflow at 320, 390, 1024 or 1505px.
- **Colors and tokens:** near-black #080808, headline white, primary orange #ff873c, light-gray supporting text. High-contrast copy is separated from the bright artwork. The photographic reflection fades into the page.
- **Image quality:** real generated raster asset, 1122 × 1402, with titanium machining, amber glass and orange core. No procedural/CSS/SVG imitation of the sculpture. No placeholders remain. Exact internal ring details differ from the mock, an expected P3 for standalone asset generation. Engraving is intentionally omitted. Original project screenshots remain unchanged.
- **Copy and content:** headline, identity, supporting statement, skills, CTA, GitHub and footer wording follow the selected option. Existing supported project facts and experimental qualifiers are retained. No invented credentials or awards.

## Interaction and accessibility verification

- Hero project CTA reaches Work; header Contact reaches the contact section; home link returns to top.
- All five project selectors open their matching case-study dialog.
- Desktop Home/ArrowDown selection and mobile End selection work; Next wraps from the fifth project to the first.
- Original presentation image opens, original-size toggle changes its pressed state, and close returns to the page.
- Email copy displays the success message.
- Decorative hero image is hidden from assistive technology; real text and semantic links remain available.
- Pointer motion is bounded and pointer-only; code suppresses it for touch and reduced-motion preferences. Reduced-motion OS emulation was not available in the browser API; this branch was code-reviewed, not claimed as a simulated browser test.
- Browser error log: no errors during the tested interactions.
- JavaScript syntax and Git whitespace checks pass.

## Follow-up polish

- P3: exact typeface outlines and ring geometry naturally differ from an image-generated mockup. Overall composition, palette, hierarchy and material language are preserved.
- Test scope: Chromium in-app browser only; Safari/Firefox and physical devices were not tested.

## Implementation checklist

- [x] Selected visual unambiguously resolved and inspected.
- [x] Individual hero asset generated, inspected and included in assets.
- [x] Responsive hero, navigation and functional project journeys verified.
- [x] P2 issues fixed and captured again.
- [x] Final source/implementation comparison completed with both images together.
- [x] No remaining blocking visual findings.
