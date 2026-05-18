# Birthday Website - Customization Guide

## 🎨 Quick Customization Guide

This guide will help you personalize the website with your content and make it truly special.

### 1. **Add Your Images**

#### Hero Section Image
Replace the camera emoji placeholder in `src/components/sections/Hero.tsx`:

```tsx
// Find this section:
<div className="w-full h-80 bg-gradient-to-br from-pink-200 via-lavender to-peach rounded-2xl flex items-center justify-center text-6xl">
  📸
</div>

// Replace with an actual image:
import Image from 'next/image';

<div className="w-full h-80 relative rounded-2xl overflow-hidden">
  <Image
    src="/your-photo.jpg"
    alt="Birthday photo"
    fill
    className="object-cover"
  />
</div>
```

#### Gallery Images
In `src/components/sections/Gallery.tsx`, replace the emoji placeholders:

```tsx
// Current memory card content:
<div className="text-8xl mb-4">
  {memory.emoji}
</div>

// Can add a background image instead:
<div 
  className="w-full h-80 rounded-2xl bg-cover bg-center"
  style={{backgroundImage: `url('/memory-${memory.id}.jpg')`}}
/>
```

### 2. **Personalize Text Content**

#### Hero Section
File: `src/components/sections/Hero.tsx`
```tsx
// Change these texts:
<motion.h1 className="...">
  Happy Birthday  // Change name here
</motion.h1>

<motion.p className="...">
  A small digital universe made specially for you ✨
  // Change subtitle here
</motion.p>
```

#### Gallery Captions
File: `src/components/sections/Gallery.tsx`
```tsx
const memories = [
  { id: 1, caption: 'Your Custom Caption', emoji: '🌸' },
  { id: 2, caption: 'Another Memory', emoji: '💕' },
  // Add more memories...
];
```

#### Why She's Special
File: `src/components/sections/WhySpecial.tsx`
```tsx
const reasons = [
  'Your custom reason 1',
  'Your custom reason 2',
  'Your custom reason 3',
  // Add 6 total...
];
```

#### Secret Message
File: `src/components/sections/SecretMessage.tsx`
```tsx
const message = `Your personalized message here.
Can be multiple paragraphs.
Make it emotional and meaningful.`;
```

### 3. **Add Background Music**

1. Add your audio file to `public/birthday-music.mp3`
2. Or change the filename in `src/components/sections/MusicVisualizer.tsx`:

```tsx
<audio
  ref={audioRef}
  src="/your-music-file.mp3"  // Change this
  loop
  preload="auto"
/>
```

### 4. **Customize Colors**

Edit `tailwind.config.ts`:

```ts
colors: {
  'soft-pink': '#FFB6C1',      // Change these hex codes
  'lavender': '#E6D5F5',
  'peach': '#FFDAB9',
  // Add your own colors
},

backgroundImage: {
  'gradient-soft': 'linear-gradient(135deg, #FFB6C1 0%, #E6D5F5 50%, #FFDAB9 100%)',
  // Customize gradient colors
},
```

### 5. **Change the Intro Loader Text**

File: `src/components/sections/Loader.tsx`

```tsx
<h1 className="...">
  A Special Day
  {/* Change this text */}
</h1>

<p className="...">
  For Someone Truly Beautiful
  {/* And this */}
</p>

<h2 className="...">
  ✨ Happy Birthday ✨
  {/* And this */}
</h2>
```

### 6. **Customize Animation Speed**

#### Framer Motion Animations
In any component, adjust the `transition` prop:

```tsx
// Default:
transition={{ duration: 0.8 }}

// Make it faster:
transition={{ duration: 0.3 }}

// Make it slower:
transition={{ duration: 2 }}
```

#### GSAP Animations
In components using GSAP:

```tsx
timeline.to(element, {
  duration: 1.5,  // Change this
  opacity: 1,
});
```

### 7. **Modify Particle Effects**

File: `src/components/effects/ParticleBackground.tsx`

```ts
// Change particle count:
const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
// Lower number = fewer particles, better performance
// Higher number = more particles, more visual impact

// Change particle colors:
const colors = [
  'rgba(255, 182, 193, 0.5)',  // Add your own RGBA colors
  'rgba(230, 213, 245, 0.5)',
];

// Change particle speed:
speedX: (Math.random() - 0.5) * 0.5,  // Adjust multiplier
speedY: (Math.random() - 0.5) * 0.5,
```

### 8. **Customize Button Links**

File: `src/components/sections/Hero.tsx`

```tsx
<motion.button
  onClick={() => {
    // Change these section IDs:
    document.querySelector('#memories')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  💫 Explore Memories
</motion.button>
```

### 9. **Add More Memory Cards**

File: `src/components/sections/Gallery.tsx`

```tsx
const memories = [
  { id: 1, caption: 'Memory 1', emoji: '🌸' },
  { id: 2, caption: 'Memory 2', emoji: '💕' },
  // ... add more:
  { id: 6, caption: 'Memory 6', emoji: '🎀' },
];
```

### 10. **Customize the Final Message**

File: `src/components/sections/Celebration.tsx`

```tsx
<motion.h2>
  Happy Birthday! 🎉
  {/* Change the main heading */}
</motion.h2>

<motion.p>
  Once Again ❤️
  {/* Change the subheading */}
</motion.p>
```

## 🎬 Advanced Customizations

### Change Scroll Animation Trigger
In components like `WhySpecial.tsx`:

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1, duration: 0.6 }}
viewport={{ once: true }}  // Change to false for repeat animation
```

### Adjust 3D Effects
In `Hero.tsx`:

```tsx
style={{
  rotateX: rotateX,
  rotateY: rotateY,
  transformPerspective: 1200,  // Change perspective value
}}
```

### Modify Glassmorphism Effect
In `globals.css`:

```css
.glass {
  background: rgba(255, 255, 255, 0.1);  // Adjust opacity (0-1)
  backdrop-filter: blur(10px);  /* Change blur amount */
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 📱 Responsive Design

The website is mobile-first and responsive. To customize for specific breakpoints:

```tsx
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  {/* Changes size at different breakpoints */}
</h1>
```

## 🚀 Deployment

Once you've customized everything:

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
# Then push the `.next` folder to your hosting provider
```

## ✨ Tips for Best Results

1. **Use high-quality images** - At least 1080px wide for hero image
2. **Keep text concise** - Long text may overflow on mobile
3. **Test in different browsers** - Chrome, Firefox, Safari, Edge
4. **Optimize images** - Use JPG/WebP format for faster loading
5. **Add personal touches** - Custom emojis, colors, animations
6. **Keep animations smooth** - Test on mobile for performance

## 🎯 Common Customizations Checklist

- [ ] Replace all emoji placeholders with real images
- [ ] Add personalized text for all sections
- [ ] Change color palette to match preference
- [ ] Add birthday music file
- [ ] Customize the secret message
- [ ] Update "Why She's Special" reasons
- [ ] Change gallery memory captions
- [ ] Adjust animation speeds if needed
- [ ] Test on mobile devices
- [ ] Deploy to live server

## 📞 Need Help?

If you need to modify something more complex, refer to:
- Framer Motion docs: https://www.framer.com/motion/
- GSAP docs: https://gsap.com/docs/
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

Enjoy creating a magical birthday experience! 🎉✨
