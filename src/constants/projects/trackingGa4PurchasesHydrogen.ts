export const trackingGa4PurchasesHydrogen = {
  meta: {
    title: "Tracking GA4 Purchases on Shopify Hydrogen | The Portfoleyo",
    description:
      "How I implemented purchase tracking on a Shopify Hydrogen storefront using Shopify Custom Pixels, GA4 and Shopify checkout events.",
  },
  twoColumn: {
    title: "GA4 Purchase Tracking",
    href: "/projects/tracking-ga4-purchases-hydrogen",
    image: {
      src: "/projects/case-study-ga4-hydrogen-tracking-purchases.jpg",
      alt: "Case Study: Tracking GA4 Purchases on a Shopify Hydrogen Storefront",
    },
  },
  title: "Tracking GA4 Purchases",
  intro:
    "Shopify's checkout doesn't load Google Tag Manager, which means purchase tracking works differently on a headless setup. This case study walks through how I used Shopify Custom Pixels to send purchase events directly to GA4 and how I verified everything was tracking correctly ->",
  h1: "Tracking GA4 Purchases on a Shopify Hydrogen Storefront",
  subTitle:
    "Using Shopify Custom Pixels to capture checkout events and send data directly to GA.",
  page: [
    `<h2 class="article-heading">Overview</h2>`,

    `<p>A client wanted accurate purchase tracking within Google Analytics for a Shopify Hydrogen storefront. Product views, add to cart events and checkout interactions were already being tracked, but completed purchases weren't making it into GA4 - which was the most important metric!</p>`,

    `<p>I'll cover how I implemented purchase tracking using Shopify's Custom Pixel and validated the setup using GA4's DebugView.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">The Problem</h2>`,

    `<p>Tracking purchases on a headless Shopify storefront works differently to a traditional Shopify theme. Whilst the storefront itself can run Google Analytics and Google Tag Manager as normal, Shopify controls the checkout experience and doesn't load GTM scripts during checkout (unless you're on Shopify Plus).</p>`,

    `<p>This meant we could successfully track:</p>`,

    `<ul class="article-list">
      <li>&check; Product views</li>
      <li>&check; Add to cart events</li>
      <li>&check; Begin checkout events</li>
    </ul>`,

    `<p>But purchase events were missing entirely.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Why It Happens</h2>`,

    `<p>Even on a headless Hydrogen site, Shopify still owns and manages the checkout process. Because Google Tag Manager isn't available during checkout, any purchase tracking configured solely within the storefront stops once the customer leaves the Hydrogen site.</p>`,

    `<p>To capture completed purchases, we needed to use Shopify's native event system instead.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">The Solution</h2>`,

    `<p>Shopify provides a feature called Custom Pixels which allows developers to subscribe to customer events and execute custom JavaScript when those events occur.</p>`,

    `<p>For this implementation I subscribed to Shopify's <code>checkout_completed</code> event and used the data provided by Shopify to send a GA4 purchase event directly via <code>gtag</code>.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Implementation</h2>`,

    `<h3 class="article-subheading">1) Create a Shopify Custom Pixel</h3>`,

    `<p>Within Shopify Admin:</p>`,

    `<ul class="article-list">
      <li>&check; Settings</li>
      <li>&check; Customer Events</li>
      <li>&check; Add Custom Pixel</li>
    </ul>`,

    `<p>I created a dedicated pixel for GA4 purchase tracking.</p>`,

    `<h3 class="article-subheading">2) Subscribe to checkout_completed</h3>`,

    `<p>The pixel listens for Shopify's checkout completion event and extracts the order data needed by GA4.</p>`,

    `<h3 class="article-subheading">3) Format the payload</h3>`,

    `<p>Using Shopify's checkout object I mapped the required GA4 fields including transaction ID, currency, order value and line items.</p>`,

    `<h3 class="article-subheading">4) Send the purchase event</h3>`,

    `<p>Once the payload had been prepared, the event was sent directly to Google Analytics using gtag.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Testing & Validation</h2>`,

    `<p>Before considering the implementation complete, I validated everything using GA4's DebugView.</p>`,

    `<ul class="article-list">
      <li>&check; Enabled Google Analytics Debug Mode</li>
      <li>&check; Completed a test purchase</li>
      <li>&check; Verified transaction values</li>
      <li>&check; Confirmed transaction IDs were present</li>
      <li>&check; Confirmed line items were included</li>
    </ul>`,

    `<p>Once visible in DebugView, I monitored GA4's Events reports to ensure data was flowing through correctly.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Gotchas</h2>`,

    `<ul class="article-list">
      <li>&bull; GA4 reports can take several hours to update</li>
      <li>&bull; DebugView updates much faster than standard reports</li>
      <li>&bull; Ensure the Custom Pixel is published</li>
      <li>&bull; Double check the Measurement ID</li>
      <li>&bull; Purchase events may also need importing into Google Ads</li>
    </ul>`,

    `<p>If DebugView shows purchase events correctly but reports remain empty, it's often just a case of waiting for GA4 to process the data.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Results</h2>`,

    `<ul class="article-list">
      <li>&check; Purchase events successfully captured</li>
      <li>&check; Revenue data flowing into GA4</li>
      <li>&check; Transaction IDs recorded correctly</li>
      <li>&check; Product level purchase data available</li>
      <li>&check; Foundation established for Google Ads conversion tracking</li>
    </ul>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Final Thoughts</h2>`,

    `<p>Purchase tracking on Shopify Hydrogen requires a slightly different approach compared to traditional storefronts, but Shopify's Custom Pixels feature provides a reliable way to bridge the gap between checkout and Google Analytics.</p>`,

    `<p>Once implemented and validated, the result is accurate revenue tracking and a much clearer picture of ecommerce performance.</p>`,
  ],
};
