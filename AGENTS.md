<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep hero readability tokens in the global stylesheet and reuse the shared Button component so presentation stays theme-consistent.
- Floating contact actions stay fixed and compact; the hero reserves bottom padding so they never cover its CTAs (no portals — they break SSR hydration).
- Gallery filters use stable photo IDs and filter the same photo list used by lightbox navigation, so category changes cannot show unrelated images.
