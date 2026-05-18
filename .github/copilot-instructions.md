<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Birthday Website Project

A premium, cinematic birthday experience website with advanced animations and interactive elements.

### Quick Start

1. **Install dependencies**: `npm install --legacy-peer-deps`
2. **Development**: `npm run dev` (runs on http://localhost:3000)
3. **Build**: `npm run build`
4. **Production**: `npm start`

### Project Structure

- `src/app/` - Next.js App Router pages and layout
- `src/components/sections/` - Main page sections (Loader, Hero, Gallery, etc.)
- `src/components/effects/` - Reusable animation effects
- `tailwind.config.ts` - Tailwind CSS configuration with custom colors and animations
- `src/app/globals.css` - Global styles including glassmorphism and glow effects

### Key Technologies

- **Framework**: Next.js 15 with App Router & TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion + GSAP + Canvas particles
- **3D**: Three.js integration ready
- **Smooth Scroll**: Lenis library

### Sections

1. **Loader** - Cinematic intro with animated text and particles
2. **Hero** - 3D hover effects, mouse-reactive movements, floating butterflies
3. **Gallery** - Draggable memory carousel with animated cards
4. **Why Special** - Scroll-triggered reason cards with animated backgrounds
5. **Music Visualizer** - Animated vinyl disc with waveform visualization
6. **Secret Message** - Interactive heart that reveals emotional message
7. **Celebration** - Fireworks, confetti, balloons, and continuous animations

### Customization Tips

- **Colors**: Edit `tailwind.config.ts` for pink, lavender, peach palette
- **Content**: Update text in each component section
- **Images**: Add to `public/` folder and import
- **Music**: Add `birthday-music.mp3` to `public/`
- **Animations**: Modify Framer Motion and GSAP parameters

### Performance Notes

- Canvas-based particle system for efficiency
- GPU-accelerated transforms
- Lazy loading ready
- Mobile-first responsive design
- 60fps animation target

### Deployment

Ready for deployment to Vercel, Netlify, Railway, or any Node.js hosting.

### Notes

- Uses `--legacy-peer-deps` due to React 19 beta compatibility
- All animations are GPU-accelerated for smooth performance
- Fully responsive from mobile to desktop
