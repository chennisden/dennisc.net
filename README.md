# THIS IS A DEAD MIRROR

Please visit https://gitlab.com/chennisden/dennisc.net instead

# Dennis Chen's Website

Thie is the GitHub repository for my website.
All the code that runs my website is here.
Currently, there's no backend,
so I don't ever deal with that.
(I don't anticipate ever needing a backend.)

My stack is

    React JS + Next JS + Tailwind CSS

I cannot make this clear enough:
**these elements are completely orthogonal**.
There are tools that make them play better together,
but these tools do not serve the same purpose.

In particular, React is the framework,
Next is used for rendering
(it takes a hybrid server-side and client-side rendering approach),
and Tailwind is used for styling the frontend.

This project is using `yarn` as its package manager.

## Running

Clone the repository and run `yarn dev`.

## Structure

Very roughly, this follows
[Tania Rascia's](https://www.taniarascia.com/react-architecture-directory-structure/#utils) guide.

- public: Any files I want the public to be able to view
  (hence the name).
  - resources: PDFs that would be filed under math.
  - reports: PDFs that would be filed under writing.
- styles: Self-explanatory.
- components: Anything that is mostly visual.
  Lines can get a little blurry between components and utils.
- utils: Anything more complicated than a slew of `<div className="...">`
  Currently used for dynamic routing, [comments](https://github.com/maggie-j-liu/reactive), etc.
- posts: Here, all the `.mdx` files for my writing are contained.
  The pages are read via some functions in `utils` and rendered with `[slug].tsx`.
  (The page rendering function called in `[slug].tsx` is also in `utils`.)
- pages: Pages that are not part of the blog; that is, anything in the main website.
- home: Any pages in the index 
directory that I think are easier
  written with Markdown.

## Blog

The blog is compiled and rendered
via the help of Next JS.

Here's how it works.

- An interface called `Page`
  is created in `page.ts`.
- Every `.mdx` file in a particular directory
  (which is passed in, because I have three blog secttions)
  has its filepath read in the `AllPages(dir)` function
  inside of `api/GetPages.ts`.
- Using `graymatter`,
  we strip out the metadata
  so we can display it on the pages.
  This data is placed into an instance
  of the `Page` interface.
  This is also done in `api/GetPages.ts`.
- In `api/GetPages.ts`,
  a sorting function will be created
  based on date.
  Because of a few special circumstances,
  I will _not_ be calling it by default
  when I return all the pages.
- We take our array of pages
  and render them in
  `[slug].tsx` in the appropriate directory.
  Because the code in the slugs
  will be reused so often,
  it will be abstracted out
  into `api/PageRender.ts`.
  - For `writing/all`,
    the `AllPages` function will be called
    on `posts/blog`, `posts/essay`, and `posts/tech`.
    The arrays will be joined and sorted by date.
  - To compile the pages in `pages`,
    the `AllPages` function will be called as usual.
    But because the main pages in my website do not have dates,
    and we are not rendering a list of the main pages,
    we do not sort the dates automatically.
    We also render the pages in `home` in our top-level directory,
    because I like to also write my stuff in markdown.
- We also render the list of pages
  in `RenderPagesList.ts`.
- Finally, we use `mdx-bundler` to convert pages
  into JSX and render them.
