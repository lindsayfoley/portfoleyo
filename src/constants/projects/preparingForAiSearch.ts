export const preparingForAiSearch = {
  meta: {
    title: "Preparing Your Website for AI Search | The Portfoleyo",
    description:
      "Practical guide to AI search optimisation for Shopify stores, covering GEO, structured data, crawlable content, Shopify Agentic Storefronts and technical SEO.",
  },
  twoColumn: {
    title: "Preparing for AI Search",
    href: "/projects/preparing-for-ai-search",
    image: {
      src: "/projects/case-study-preparing-for-ai-search.jpg",
      alt: "Preparing Your Website for AI Search",
    },
  },
  title: "Preparing for AI Search",
  intro:
    "AI powered search is rapidly changing how customers discover products online. This article covers what I learned researching GEO, Shopify's Agentic Storefronts and practical ways brands can improve visibility in AI driven search experiences ->",
  h1: "Preparing Your Website for AI Search",
  subTitle:
    "Practical lessons from researching GEO, Shopify and AI-driven discovery.",

  page: [
    `<h2 class="article-heading">Overview</h2>`,

    `<p>AI powered search is changing the way people discover products online. Instead of returning a list of links like a traditional search engine, tools such as ChatGPT, Perplexity and Gemini can summarise information, recommend products and send users directly to specific pages.</p>`,

    `<p>After researching what's being called "GEO", comparing the advice against real ecommerce sites and inspecting the HTML of several Shopify stores, my main takeaway is that SEO and AI search optimisation are very closely linked. GEO doesn't replace SEO, but there are some additional things brands implement to make their content easier for AI systems to understand, interpret and recommend.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">The Starting Point</h2>`,

    `<p>As expected, there's still a lot of uncertainty around exactly how AI tools rank and recommend products. The platforms are evolving quickly and nobody can confidently say there is one fixed formula for appearing in AI generated results!</p>`,

    `<p>However, the same themes kept appearing across the research: strong SEO foundations, clear product information, structured content, brand authority and crawlable data. In other words, most of the recommendations build on things good ecommerce teams should already care about.</p>`,

    `<p>One concept that kept appearing was "query fan-out", so rather than sending a user's question directly to a search engine, AI assistants often break it down into multiple smaller searches before combining the results into a single answer. This means your content needs to answer lots of related questions, not just target one keyword.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">1) Strong SEO Still Comes First</h2>`,

    `<p>The first thing that became obvious is that traditional SEO is still the foundation. If a search engine can't crawl, index or understand your site, AI tools are unlikely to understand it well either.</p>`,

    `<ul class="article-list">
  <li>&check; Clear title tags and headings</li>
  <li>&check; Crawlable page content</li>
  <li>&check; Complete and up to date sitemaps</li>
  <li>&check; Descriptive metadata</li>
  <li>&check; Good internal linking</li>
  <li>&check; Strong Core Web Vitals</li>
</ul>`,

    `<p>For headless builds in particular, server-side rendering is important because it makes key content available immediately, rather than relying on crawlers to wait for JavaScript to load before they can understand the page.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">2) Think Like a Database</h2>`,

    `<p>One of the most useful ways to think about AI search is to move beyond marketing copy and think more like a database. AI systems respond well to clear, factual and specific information.</p>`,

    `<p>For example, a product called "The Everyday Essential" might work as a campaign name, but it doesn't clearly explain what the product is and what it contains. A title such as "Hydrating Liquid Foundation for Dry Skin" gives both customers and machines much more useful context!</p>`,

    `<ul class="article-list">
  <li>&bull; What is the product?</li>
  <li>&bull; Who is it for?</li>
  <li>&bull; What is it made from?</li>
  <li>&bull; What are the key benefits?</li>
  <li>&bull; What options or variants are available?</li>
  <li>&bull; What problem does it solve?</li>
</ul>`,

    `<p>The goal here is really to reduce ambiguity. If an AI system has to guess what a product is, who it is for or how it should be categorised, there is more room for it to misunderstand or ignore the page completely.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">3) Make Products Easy To Cite</h2>`,

    `<p>AI assistants often generate answers by pulling together information from multiple sources. That means product content needs to be easy to understand and easy to reference.</p>`,

    `<p>This is where concise, factual product benefits become super important. Instead of relying only on broad lifestyle copy, product pages should clearly surface the information someone might ask an AI tool before buying.</p>`,

    `<ul class="article-list">
  <li>&check; Key benefits</li>
  <li>&check; Use cases</li>
  <li>&check; Product comparisons</li>
  <li>&check; Ingredients or materials</li>
  <li>&check; Sizing or compatibility information</li>
  <li>&check; Care instructions</li>
  <li>&check; Delivery or guarantee information where relevant</li>
</ul>`,

    `<p>FAQs are especially useful because they create clear question and answer pairs. Questions around suitability, product differences, how something works and what happens after purchase often align closely with the way people search through AI systems.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">4) Structured Data Matters</h2>`,

    `<p>Structured data gives search engines and AI systems extra context about a page. It helps explain what the page contains, what the product is, what reviews belong to it, what questions are being answered and how pages relate to each other.</p>`,

    `<ul class="article-list">
  <li>&check; Product Schema</li>
  <li>&check; FAQ Schema</li>
  <li>&check; Breadcrumb Schema</li>
  <li>&check; Video Schema where relevant</li>
</ul>`,

    `<p>Schema is not a magic fix on its own but it is a strong supporting signal. Rather than forcing machines to infer everything from the visual page, structured data gives them explicit information in a format they are designed to understand.</p>`,

    `<p>Without schema, search engines have to infer that a page is a product, which reviews belong to it and whether a question is an FAQ. Structured data removes much of that guesswork by explicitly describing the page.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">5) Keep Important Content Crawlable</h2>`,

    `<p>Another theme that kept coming up was the importance of making sure key info is actually available to crawlers. Important content shouldn't only exist inside images, client-side JavaScript, modals or interactive elements that require a user action to reveal.</p>`,

    `<ul class="article-list">
  <li>&bull; Comparison tables should be rendered as HTML where possible</li>
    <li>&bull; Product descriptions hidden in accordions should appear in the page source</li>
  <li>&bull; Press mentions should include crawlable text, not just brand logos</li>
  <li>&bull; FAQ content with toggles should be accessible without relying entirely on JavaScript</li>
  <li>&bull; Critical PDP information should be available on initial render</li>
</ul>`,

    `<p>This doesn't mean every visual element needs to become text, it just means that if something is important for customers, search engines or AI tools to understand, it should not be trapped exclusively inside an image or behind an interactive element.</p>`,

    `<p>During my own testing, I found several examples where key product data, comparisons and trust signals only existed inside images. Whilst people can understand these immediately, search engines and AI systems are much more likely to rely on crawlable HTML content when interpreting a page.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">6) Product Relationships Matter</h2>`,

    `<p>AI systems also need to understand how products relate to each other. If the same product exists as several separate products because of colour, finish or size, it may not be obvious that they belong to the same product family.</p>`,

    `<p>Where possible, variants should be grouped together under a single parent product so that machines understand the relationship, that one product has multiple options, rather than treating each option as a completely separate item.</p>`,

    `<ul class="article-list">
  <li>&check; Use specific product categories</li>
  <li>&check; Group variants clearly</li>
  <li>&check; Use descriptive product names</li>
  <li>&check; Avoid relying only on internal naming conventions or internal language</li>
  <li>&check; Make bundles and sets clear about what is included</li>
</ul>`,

    `<p>This is particularly important for ecommerce because AI systems need to classify, compare and recommend products accurately. The clearer the product data, the easier that becomes.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">7) Brand Authority Still Matters</h2>`,

    `<p>GEO isn't only about what exists on your website, AI search also appears to consider broader authority and reputation signals when deciding what to recommend.</p>`,

    `<ul class="article-list">
  <li>&bull; Reviews</li>
  <li>&bull; Press mentions</li>
  <li>&bull; Community discussion</li>
  <li>&bull; Reddit threads</li>
  <li>&bull; User generated content</li>
  <li>&bull; Brand searches</li>
</ul>`,

    `<p>This is where traditional brand building still has a major role to play. If multiple trusted sources are talking about a brand or product, AI systems have more external context to draw from.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">8) Shopify's Agentic Storefronts</h2>`,

    `<p>One of the most interesting things I found during this research was Shopify's Agentic Storefronts section. This appears inside Shopify and shows how products are being surfaced through supported AI and commerce experiences.</p>`,

    `<p>For Shopify merchants, this is worth checking because it can show whether your products are already being synced to channels such as ChatGPT, Microsoft Copilot and more. It can also show visits, attributed revenue and example queries, making AI commerce much more tangible and giving merchants a way to measure whether these channels are already generating traffic and revenue.</p>`,

    `<ul class="article-list">
  <li>&check; Check whether Agentic Storefronts is enabled on your Shopify store</li>
  <li>&check; Confirm products are synced</li>
  <li>&check; Review any policy or compliance warnings</li>
  <li>&check; Monitor revenue attributed to supported channels</li>
  <li>&check; Test queries to see which products are being surfaced</li>
  <li>&check; Review whether the products appearing match your expectations</li>
</ul>`,

    `<p>This is useful because it makes AI commerce feel more tangible rather than only talking about future behaviour. Merchants can start monitoring whether AI driven or AI adjacent channels are already sending traffic and sales their way.</p>`,

    `<p>It's also worth noting that attribution can still be difficult to interpret. ChatGPT and Copilot are clearly AI driven experiences, whereas Shop is also included, and that may include a broader mix of standard Shop App discovery and Shopify's recommendation ecosystems. So I would avoid overclaiming the numbers but still monitor the trend over time.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">9) What About llms.txt?</h2>`,

    `<p>Another topic that came up during the research was the need to create an llms.txt. The idea is to provide a simple file that gives AI systems a structured summary of your site, important pages and useful context.</p>`,

    `<p>At the moment, adoption still seems fairly limited and there is not yet clear evidence that it has a measurable impact on visibility. However, for many sites it would be relatively straightforward to implement, so it may be worth adding and monitoring as the space evolves.</p>`,

    `<p>I wouldn't prioritise llms.txt over strong SEO foundations, structured data or crawlable product content, but it is something worth keeping on the radar.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">10) My AI Search Checklist</h2>`,

    `<p>If I was reviewing an ecommerce site for AI search readiness, these are the core areas I would look at first.</p>`,

    `<ul class="article-list">
  <li>&check; Are key pages crawlable and indexable?</li>
  <li>&check; Is important content server-rendered?</li>
  <li>&check; Are product names descriptive?</li>
  <li>&check; Are product benefits clear and understandable?</li>
  <li>&check; Are FAQs included on PDPs?</li>
  <li>&check; Is structured data implemented?</li>
  <li>&check; Are product variants grouped logically?</li>
  <li>&check; Is important text trapped inside images or dropdowns?</li>
  <li>&check; Is image alt text present and accurate?</li>
  <li>&check; Is the sitemap complete and up to date?</li>
  <li>&check; Are Core Web Vitals being looked at?</li>
  <li>&check; Has Shopify Agentic Storefront data been reviewed?</li>
</ul>`,

    `<p>The key point to illustrate is that most of these recommendations are not separate from SEO. They support things like SEO, accessibility, web performance and customer experience at the same time.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Final Thoughts</h2>`,

    `<p>Before researching GEO, I expected to find a completely new set of optimisation tactics. Instead, I found that most of the useful recommendations build on strong technical SEO, structured content and clear product information.</p>`,

    `<p>The biggest shift is that we are no longer optimising purely for traditional search engines. Increasingly, we are also helping AI systems retrieve, interpret and recommend content on our behalf.</p>`,

    `<p>If your SEO foundations are already strong, you may be closer than you think. The next step is making sure your products, pages and brand signals are clear enough for AI systems to understand without guessing.</p>`,

    `<p>The exciting part is that many of these improvements don't just benefit AI search - better structured content, clearer product information, improved accessibility and stronger SEO all improve the overall customer experience too. Rather than treating GEO as a completely separate discipline, I think the biggest opportunity is to build on solid SEO foundations and make content easier for both people and machines to understand.</p>`,
  ],
};
