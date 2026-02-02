export const countryBlockingContent = {
  meta: {
    title:
      "Blocking Traffic by Country | The Portfoleyo Development & Solutions",
    description:
      "How I used Cloudflare security rules to block unwanted traffic by country, reduce spam analytics noise, and validate results with events logs and testing.",
  },
  twoColumn: {
    title: "Country Blocking",
    href: "/projects/country-blocking",
    image: {
      src: "/projects/shopify-block-countries.jpg",
      alt: "Case Study: Blocking Requests from Specific Countries",
    },
  },
  title: "Blocking Unwanted Traffic",
  intro:
    "A Shopify client noticed unusual, spammy-looking traffic appearing in their analytics, largely from specific regions that weren’t relevant to their customer base. Their priority was simple: reduce noise, protect the site, and block unwanted requests at the edge (before they ever reached Shopify).",
  h1: "Blocking Traffic From Specific Countries (Cloudflare Security Rules)",
  subTitle:
    "A quick security win to reduce spam traffic and protect site performance.",
  page: [
    `<h2 class="article-heading">Overview</h2>`,

    `<p>A client reached out after noticing a surge of unusual traffic in their analytics, largely from regions that weren’t relevant to their customer base. The goal was simple: reduce noise in reporting and block unwanted requests before they reached the storefront.</p>`,

    `<p>This case study covers how I set up free Cloudflare security rules to block traffic from specific countries, the gotchas I hit while testing (especially with VPNs), and how I verified everything was working properly.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">The Problem</h2>`,

    `<p>The site’s analytics were showing a high volume of traffic that looked spammy and low quality (likely bots). It wasn’t converting, wasn’t useful, and was making it harder to trust reporting.</p><br>`,

    `<p>The client wanted to:</p>`,

    `<ul class="article-list">
        <li>&bull; Reduce irrelevant visits showing up in analytics</li>
        <li>&bull; Improve security posture with minimal disruption</li>
        <li>&bull; Stop suspicious requests before they hit the site</li>
        <li>&bull; Keep the solution easy to maintain over time</li>
      </ul>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">The Solution</h2>`,

    `<p>I implemented Cloudflare (on the free plan) in front of the site and created security rules to block requests from specific countries. Cloudflare was the ideal fit here because it operates at the edge, meaning unwanted traffic can be blocked before it reaches the origin platform which was exactly what we needed in this scenario.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Implementation</h2>`,

    `<h3 class="subheading">1) Created and configured Cloudflare</h3>`,

    `<ul class="article-list">
        <li>&check; Created a Cloudflare account and added the client’s domain</li>
        <li>&check; Updated DNS/nameservers in the registrar</li>
        <li>&check; Confirmed traffic was being proxied through Cloudflare</li>
      </ul>`,

    `<h3 class="subheading">2) Created security rules to block targeted traffic</h3>`,

    `<p>Rather than combining everything into one giant rule, I created separate rules per country. This keeps the setup easy to understand, simpler to maintain and quick to extend later if additional regions need blocking.</p><br>`,

    `<p>Each rule followed this format:</p>`,

    `<ul class="article-list">
        <li>&bull; <strong>Field:</strong> Country</li>
        <li>&bull; <strong>Operator:</strong> equals</li>
        <li>&bull; <strong>Value:</strong> (target country)</li>
        <li>&bull; <strong>Action:</strong> Block</li>
      </ul>`,

    `<h3 class="subheading">3) Verified rules were working</h3>`,

    `<p>To confirm that blocking was working properly, I tested the setup in two reliable ways:</p>`,

    `<ul class="article-list">
    <li>1. Country blocking test (VPN): to simulate traffic from other regions</li>
    <li>2. IP blocking test: to prove the rules were firing instantly and consistently</li>
  </ul>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Testing & Validation</h2>`,

    `<p>Testing is key here, because “saving a rule” doesn’t always tell you whether it’s actually firing correctly in real-world traffic.</p>`,

    `<h3 class="subheading">Cloudflare Security Rules panel</h3>`,

    `<p>I used the Security Rules view to confirm:</p>`,

    `<ul class="article-list">
        <li>&check; The rules were active</li>
        <li>&check; The rules were ordered correctly</li>
        <li>&check; Each rule had the expected action (“Block”)</li>
      </ul>`,

    `<h3 class="subheading">Cloudflare Events log</h3>`,

    `<p>This was the most useful validation tool. It let me see blocked requests in real time, including what triggered them, and which activity was mine during testing. When I blocked my IP address specifically, the events log clearly showed repeated hits being blocked - which confirmed the pipeline was working as expected.</p>`,

    `<h3 class="subheading">Browser DevTools (request headers)</h3>`,

    `<p>I also checked request headers in Chrome DevTools to sanity check what Cloudflare was seeing, including geolocation signals like the detected country.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Key Gotchas/Points to Consider</h2>`,

    `<h3 class="subheading">1) VPN testing can be pretty misleading</h3>`,

    `<p>Even when your VPN says you’re browsing from a specific country, Cloudflare may detect the request differently depending on VPN routing, shared IP pools and geolocation mappings. In my case, NordVPN behaviour was slightly unpredictable e.g. selecting one location sometimes surfaced as a different country when inspecting headers!</p>`,

    `<h3 class="subheading">2) IP blocking is the fastest proof test</h3>`,

    `<p>If you need a quick and reliable confirmation that Cloudflare security rules are being applied correctly, blocking your own IP address is the clearest test. Once confirmed, that IP rule can be removed straight away.</p>`,

    `<h3 class="subheading">3) “equals” vs “is in”</h3>`,

    `<p>Cloudflare’s rule builder provides a few ways to express country matching logic. I initially used “Country is in” but what worked most reliably for me in this case was: <strong>Country equals</strong>. The nuance between operators can be subtle but the key outcome is using a rule format that consistently applies in real traffic.</p>`,

    `<h3 class="subheading">4) DNS changes can feel intimidating</h3>`,

    `<p>It’s completely normal for business owners to feel nervous touching DNS, because the DNS zone may include important records for:</p>`,

    `<ul class="article-list">
        <li>&bull; Email delivery (MX records - which in this case I didn't touch)</li>
        <li>&bull; Platform verification (TXT records)</li>
        <li>&bull; Other third-party services</li>
      </ul>`,

    `<h3 class="subheading">5) Hosted platforms and Cloudflare concerns</h3>`,

    `<p>I’d previously read threads raising concerns about layering Cloudflare in front of hosted ecommerce platforms. In this setup, I didn’t run into any issues once traffic was proxied correctly and rules were configured as expected.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Results</h2>`,

    `<ul class="article-list">
        <li>&check; Country-level blocking rules were successfully applied</li>
        <li>&check; Unwanted traffic could be filtered out before reaching the storefront</li>
        <li>&check; The client gained a simple way to monitor blocked requests via Cloudflare events</li>
        <li>&check; Adding new countries in future is quick and low risk</li>
      </ul>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Final Notes</h2>`,

    `<p>This was a simple but effective security win. It reduced analytics noise, helped protect the site, and gave the client an easy way to extend the setup later if more regions need blocking.</p>`,
  ],
};
