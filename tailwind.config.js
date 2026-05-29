/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        // Semantic aliases — same values as Tailwind defaults
        // sm: 640px  → phablet
        // md: 768px  → tablet
        // lg: 1024px → laptop
        // xl: 1280px → desktop
        // 2xl: 1536px → wide
        // ── Width breakpoints ───────────────────────────────
        phablet:  '480px',  // Sits between default 'sm' and base
        tablet:   '768px',  // md
        laptop:   '1024px', // lg
        desktop:  '1280px', // xl
        wide:     '1536px', // 2xl

        // ── Landscape breakpoints ────────────────────────────────
        'phone-landscape': {
          raw: '(max-width: 767px) and (orientation: landscape)',
        },
        'tablet-landscape': {
          raw: '(min-width: 768px) and (max-width: 1366px) and (orientation: landscape)',
        },

        // ── Input capability ─────────────────────────────────────
        touch: { raw: '(hover: none) and (pointer: coarse)' },
        mouse: { raw: '(hover: hover) and (pointer: fine)' },

        // ── Motion preference ─────────────────────────────────────
        'motion-safe':   { raw: '(prefers-reduced-motion: no-preference)' },
        'motion-reduce': { raw: '(prefers-reduced-motion: reduce)' },
      },

      // ── Your z-index scale ─────────────────────────────────────
      zIndex: {
        base:     '0',
        raised:   '10',
        dropdown: '20',
        sticky:   '30',
        overlay:  '40',
        modal:    '50',
        toast:    '60',
        tooltip:  '70',
      },

      // ── Transition durations ───────────────────────────────────
      transitionDuration: {
        instant: '80ms',
        fast:    '150ms',
        normal:  '250ms',
        slow:    '400ms',
        xslow:   '700ms',
      },

      // ── Easing curves ──────────────────────────────────────────
      transitionTimingFunction: {
        spring:     'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'out-expo': 'cubic-bezier(0.16,  1,     0.3,  1)',
        'in-expo':  'cubic-bezier(0.7,   0,     0.84, 0)',
      },

      // ── Safe-area spacing ──────────────────────────────────────
      spacing: {
        'safe-top':    'env(safe-area-inset-top)',
        'safe-right':  'env(safe-area-inset-right)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left':   'env(safe-area-inset-left)',
      },
    },
  },

  plugins: [],
}
