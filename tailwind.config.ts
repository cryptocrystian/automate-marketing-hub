
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// PRAVADO BRAND COLORS
				disruptor: {
					DEFAULT: '#ff6b35',
					50: '#fff7f0',
					100: '#ffeee0',
					200: '#ffd9b8',
					300: '#ffbd85',
					400: '#ff9750',
					500: '#ff6b35',
					600: '#f04822',
					700: '#c73418',
					800: '#9e2c18',
					900: '#7f2818',
					950: '#44120a'
				},
				authority: {
					DEFAULT: '#c3073f',
					50: '#fef2f3',
					100: '#fce7e9',
					200: '#f9d3d8',
					300: '#f3b0ba',
					400: '#ec8399',
					500: '#e1577a',
					600: '#cc3861',
					700: '#c3073f',
					800: '#a31e47',
					900: '#8a1e43',
					950: '#4d0a21'
				},
				executive: {
					DEFAULT: '#1e3d59',
					50: '#f0f6ff',
					100: '#e0ecff',
					200: '#c7ddff',
					300: '#a5c9ff',
					400: '#82abff',
					500: '#658cff',
					600: '#4b6ef5',
					700: '#3c56e1',
					800: '#3147b5',
					900: '#2e3f8f',
					950: '#1e3d59'
				},
				visionary: {
					DEFAULT: '#6f2dbd',
					50: '#faf7ff',
					100: '#f2edff',
					200: '#e7ddff',
					300: '#d4c0ff',
					400: '#bb95ff',
					500: '#a365ff',
					600: '#9340ff',
					700: '#822be6',
					800: '#6f2dbd',
					900: '#5b2499',
					950: '#3d1166'
				},

				primary: {
					DEFAULT: '#c3073f',
					50: '#fef2f3',
					100: '#fce7e9',
					200: '#f9d3d8',
					300: '#f3b0ba',
					400: '#ec8399',
					500: '#e1577a',
					600: '#cc3861',
					700: '#c3073f',
					800: '#a31e47',
					900: '#8a1e43',
					950: '#4d0a21',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#f3f4f6',
					foreground: '#4b5563'
				},
				success: {
					DEFAULT: '#10b981',
					50: '#ecfdf5',
					100: '#d1fae5',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					foreground: '#ffffff'
				},
				// OVERRIDE ALL YELLOW WITH DISRUPTOR ORANGE
				yellow: {
					50: '#fff7f0',
					100: '#ffeee0',
					200: '#ffd9b8',
					300: '#ffbd85',
					400: '#ff9750',
					500: '#ff6b35',
					600: '#f04822',
					700: '#c73418',
					800: '#9e2c18',
					900: '#7f2818',
					950: '#44120a'
				},
				amber: {
					50: '#fff7f0',
					100: '#ffeee0',
					200: '#ffd9b8',
					300: '#ffbd85',
					400: '#ff9750',
					500: '#ff6b35',
					600: '#f04822',
					700: '#c73418',
					800: '#9e2c18',
					900: '#7f2818',
					950: '#44120a'
				},
				warning: {
					DEFAULT: '#ff6b35',
					50: '#fff7f0',
					100: '#ffeee0',
					500: '#ff6b35',
					600: '#f04822',
					700: '#c73418',
					foreground: '#ffffff'
				},
				danger: {
					DEFAULT: '#ef4444',
					50: '#fef2f2',
					100: '#fee2e2',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					foreground: '#ffffff'
				},
				gray: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827'
				},
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
