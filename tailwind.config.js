/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom colors
        snutt: {
          DEFAULT: '#F58D3D',
          foreground: '#FFFFFF',
        },
        assistive: '#C4C4C4',
        lecture: {
          0: 'hsl(0, 84.2%, 60.2%)',
          1: 'hsl(25, 95%, 53.1%)',
          2: 'hsl(48, 95.8%, 53.1%)',
          3: 'hsl(83, 78%, 55.5%)',
          4: 'hsl(142, 70.6%, 45.3%)',
          5: 'hsl(172, 66%, 50.4%)',
          6: 'hsl(217, 91.2%, 59.8%)',
          7: 'hsl(239, 83.5%, 66.7%)',
          8: 'hsl(271, 91%, 65.1%)',
        },
        // Until here
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        SFPro: ['SFPro'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  safelist: [
    {
      pattern: /bg-lecture-(0|1|2|3|4|5|6|7|8)/,
    },
  ],
  plugins: [require('tailwindcss-animate')],
};
