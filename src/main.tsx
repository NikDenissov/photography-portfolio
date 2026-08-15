import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider
          router = {
              router
          }
      />
  </StrictMode>,
);

// Setup favicon image
const svgAssets = import.meta.glob('./assets/*.svg', { eager: true, query: "?url", import: "default" });
const faviconHref = svgAssets[`./assets/${import.meta.env.VITE_FAVICON}`];
document.querySelector<HTMLLinkElement>('link[rel="icon"]')!.href = faviconHref;