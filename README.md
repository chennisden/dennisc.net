# Dennis Chen's Website

Thie is the GitHub repository for my website.
All the code that runs my website is here.
Currently, there's no 

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
    I will *not* be calling it by default
    when I return all the pages.
- We take our array of pages
    and render them in
    `[slug].tsx` in the appropriate directory.
    Because the code in the slugs
    will be reused so often,
    it will be abstracted out
    into `api/RenderPages.ts`.
    - For `writing/all`,
        the `AllPages` function will be called
        on `posts/blog`, `posts/essay`, and `posts/tech`.
        The arrays will be joined and sorted by date.
    - To compile the pages in `pages`,
        the `AllPages` function will be called as usual.
        But because the main pages in my website do not have dates,
        and we are not rendering a list of the main pages,
        we do not sort the dates.
- We also render the list of pages
    in `RenderPagesList.ts`.