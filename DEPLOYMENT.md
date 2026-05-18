# 🚀 Deployment Guide

Your birthday website is production-ready and can be deployed to multiple platforms. This guide covers the easiest and most popular options.

## 🥇 Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for Next.js applications.

### Setup (5 minutes)

1. **Push to GitHub** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Birthday website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-website.git
git push -u origin main
```

2. **Connect to Vercel**
```bash
npm install -g vercel
vercel
```

3. **Follow the prompts**
- Link to your GitHub account
- Select your repository
- Vercel auto-configures for Next.js
- Click "Deploy"

### Custom Domain (Optional)
- In Vercel dashboard, go to "Domains"
- Add your custom domain (e.g., birthday.example.com)
- Update DNS settings at your domain provider

### Environment Variables
Usually not needed for this project, but if you add any, set them in:
Vercel Dashboard → Settings → Environment Variables

## 🥈 Option 2: Netlify

Easy deployment with automatic builds on every push.

### Setup (5 minutes)

1. **Push to GitHub** (see above)

2. **Connect to Netlify**
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Select GitHub and authorize
- Choose your repository

3. **Configure**
- Build command: `npm run build`
- Publish directory: `.next`
- Click "Deploy site"

4. **Wait for deployment** (~3-5 minutes)

### Custom Domain
- In Netlify, go to "Domain settings"
- Add your domain
- Update DNS records

## 🥉 Option 3: Railway.app

Very beginner-friendly with minimal configuration.

### Setup (5 minutes)

1. **Push to GitHub**

2. **Deploy on Railway**
- Go to [railway.app](https://railway.app)
- Click "New Project"
- Select "GitHub Repo"
- Select your repository
- Railway auto-detects Next.js
- Click "Deploy"

3. **Link domain** (Optional)
- Go to project settings
- Add your custom domain

## 🎯 Option 4: Self-Hosted

If you have your own server/VPS (DigitalOcean, AWS, Linode, etc.)

### Build Locally
```bash
npm run build
npm run start
```

### Deploy
1. **Upload files** via SFTP or Git
```bash
git clone YOUR_REPO_URL
cd birthday-website
npm install --legacy-peer-deps
npm run build
```

2. **Run with PM2** (process manager)
```bash
npm install -g pm2
pm2 start npm --name "birthday-website" -- start
pm2 save
pm2 startup
```

3. **Setup reverse proxy** (Nginx)
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

4. **Enable HTTPS** with Let's Encrypt
```bash
sudo certbot --nginx -d yourdomain.com
```

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Replaced all emoji placeholders with real images
- [ ] Customized all text content
- [ ] Added `birthday-music.mp3` to `public/` if desired
- [ ] Updated colors in `tailwind.config.ts` if desired
- [ ] Tested on mobile devices
- [ ] Tested in multiple browsers
- [ ] Run `npm run build` locally (no errors)
- [ ] Removed any console.logs or debug code

## Post-Deployment Steps

### 1. Verify Everything Works
- Visit your deployed site
- Test all buttons and interactions
- Check on mobile device
- Test video/music playback (if applicable)

### 2. Set Up Custom Domain
- Register domain on GoDaddy, Namecheap, etc.
- Point DNS to your hosting provider
- Wait for DNS propagation (5-30 minutes)

### 3. Enable HTTPS
- Most platforms (Vercel, Netlify) auto-enable SSL
- Self-hosted: Use Let's Encrypt (see above)

### 4. Performance Optimization
- Check Google Lighthouse score
- Consider image optimization
- Enable caching

### 5. Analytics (Optional)
Add to `src/app/layout.tsx`:
```tsx
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## Troubleshooting Deployment

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Issue: 404 errors
- Make sure `public/` files are uploaded
- Check file paths use correct case
- Verify images exist in `public/`

### Issue: Styles not loading
- Check `tailwind.config.ts` is deployed
- Ensure `globals.css` is imported in layout
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Slow performance
- Optimize images (use JPEG/WebP)
- Enable compression
- Use CDN for images
- Check Lighthouse report

### Issue: Music not playing
- Verify `.mp3` file is in `public/`
- Check file permissions
- Use browser console to check errors

## Post-Launch Maintenance

### Update Content
To update content after deployment:
1. Edit files locally
2. Push to GitHub
3. Vercel/Netlify auto-redeploys
4. Changes live in 1-2 minutes

### Monitor Performance
- Set up monitoring (Vercel has built-in)
- Check error logs
- Monitor load times
- Update dependencies monthly

### Backups
- GitHub automatically backs up your code
- Keep a local backup too
- Export before major changes

## Environment Variables (If Needed)

If you add any secrets/API keys, create `.env.local`:
```env
# Don't commit this file!
NEXT_PUBLIC_API_KEY=your_key_here
```

Add to `.gitignore` (already done).

Set in deployment platform:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Build & deploy → Environment
- **Railway**: Variables → Add Variable

## Custom Domain Setup

### Using Vercel's Nameservers
1. In Vercel, copy your nameservers
2. In your domain provider, update nameservers
3. Wait 24-48 hours for DNS propagation

### Using CNAME Record
1. In Vercel/Netlify, find CNAME value
2. In domain provider, add CNAME record
3. Point to Vercel/Netlify domain
4. Wait for propagation

### Verify Setup
```bash
nslookup yourdomain.com
# Should show your hosting provider's IP
```

## Monitoring & Analytics

### Vercel Analytics (Built-in)
- Dashboard shows Web Vitals
- Performance metrics
- Error rates

### Add Google Analytics
```tsx
// Add to layout.tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');`,
  }}
></script>
```

## Final Tips

✅ **Do's**
- Test thoroughly before deploying
- Keep backups of your code
- Monitor performance after deployment
- Update dependencies regularly
- Use HTTPS always

❌ **Don'ts**
- Commit `.env.local` to Git
- Leave debug code in production
- Use outdated dependencies
- Ignore error logs
- Use HTTP (non-secure)

## Success Checklist

- [ ] Website deployed and live
- [ ] Domain configured and working
- [ ] HTTPS enabled
- [ ] All content displaying correctly
- [ ] Animations smooth on mobile
- [ ] Music playing (if applicable)
- [ ] Secret message working
- [ ] All buttons functional
- [ ] Performance satisfactory
- [ ] Link shared with her! 🎉

## Support

If deployment fails:
1. Check your framework's docs (Next.js)
2. Check your hosting provider's docs
3. Check build logs for specific errors
4. Try deploying to different provider
5. Ask for help on GitHub Discussions

---

**Your website is ready for the world! 🚀**

Good luck with the launch! 🎉💖
