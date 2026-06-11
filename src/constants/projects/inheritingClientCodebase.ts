export const inheritingClientCodebase = {
  meta: {
    title: "The First 48 Hours After Inheriting a Codebase | The Portfoleyo",
    description:
      "A look at how I approach a new project when all I have is a ZIP file of code. Covering local setup, deployments, architecture reviews, tech debt & documentation",
  },
  twoColumn: {
    title: "Inheriting a Codebase",
    href: "/projects/inheriting-a-client-codebase",
    image: {
      src: "/projects/case-study-inheriting-a-codebase.jpg",
      alt: "Case Study: The First 48 Hours After Inheriting a Client Codebase",
    },
  },
  title: "Inheriting a Client Codebase",
  intro:
    "Sometimes inheriting a new project means receiving a ZIP file, a few credentials and a message saying the previous agency is no longer involved. This article walks through the process I follow to understand an unfamiliar codebase, identify risks and get up to speed quickly ->",
  h1: "The First 48 Hours After Inheriting a Client's Codebase",
  subTitle: "My process for taking over existing projects.",

  page: [
    `<h2 class="article-heading">Overview</h2>`,

    `<p>Taking over an existing site is very different to starting a greenfield project. The challenge isn't building something new, it's understanding what's already there, how it works and where the risks are before making any changes. Here I'll walk through the process I typically follow during the first 48 hours after inheriting a project from a new client.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">The Starting Point</h2>`,

    `<p>The handover process varies wildly between projects - sometimes I've received super detailed documentation, architecture diagrams and credentials. Whereas, other times it's literally a forwarded email containing a ZIP file and a message saying the previous agency is no longer involved, this actually happens more times than you would think.</p>`,

    `<p>Before touching the code, my goal is to build a high level understanding of the platform and identify any immediate risks.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">1) Can I Get the Project Running Locally?</h2>`,

    `<p>My first priority is getting the project running on my machine. If I can't run the code locally, then I can't investigate issues, safely develop features or understand how the application behaves.</p>`,

    `<ul class="article-list">
  <li>&check; Confirm the Node.js version</li>
  <li>&check; Install dependencies</li>
  <li>&check; Identify required environment variables</li>
  <li>&check; Understand build and startup commands</li>
  <li>&check; Check whether any third-party services are required</li>
</ul>`,

    `<p>This stage often uncovers missing documentation, expired credentials or assumptions that only existed in the previous developer's head.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">2) Understanding The Architecture</h2>`,

    `<p>Once the project is running, I start mapping out how everything fits together.</p>`,

    `<ul class="article-list">
  <li>&bull; Is this headless Shopify, WordPress or a custom build?</li>
  <li>&bull; Is the frontend built using React, Next.js or Remix?</li>
  <li>&bull; Is there a CMS involved?</li>
  <li>&bull; How is content managed?</li>
  <li>&bull; What third-party services does the business rely on?</li>
</ul>`,

    `<p>At this stage I'm not trying to understand every file, I'm trying to understand how the business operates through the technology.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">3) Following The Customer Journey</h2>`,

    `<p>Before reviewing technical debt, I like to understand the experience from a customer's perspective.</p>`,

    `<ul class="article-list">
  <li>&bull; Can customers browse products as expected?</li>
  <li>&bull; Can they complete checkout?</li>
  <li>&bull; Are forms working correctly?</li>
  <li>&bull; Are confirmation emails being sent?</li>
  <li>&bull; Are analytics tracking key events?</li>
</ul>`,

    `<p>This quickly highlights the areas of the platform that are most critical to the business.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">4) Understanding Deployments</h2>`,

    `<p>One of the most important things to establish early is how code reaches production.</p>`,

    `<ul class="article-list">
  <li>&check; Where is the site hosted?</li>
  <li>&check; How are deployments triggered?</li>
  <li>&check; Is there a staging environment?</li>
  <li>&check; What are my rollback options?</li>
  <li>&check; Who currently has access?</li>
</ul>`,

    `<p>If a production issue occurs, understanding the deployment pipeline can save hours of stress and investigation.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">5) Identifying Technical Debt</h2>`,

    `<p>Once I understand the platform, I begin reviewing the overall health of the codebase.</p>`,

    `<ul class="article-list">
  <li>&bull; Outdated dependencies</li>
  <li>&bull; Security vulnerabilities</li>
  <li>&bull; Performance bottlenecks</li>
  <li>&bull; SEO issues</li>
  <li>&bull; Missing tests</li>
  <li>&bull; Inconsistent coding patterns</li>
  <li>&bull; Lack of documentation</li>
</ul>`,

    `<p>The goal isn't to fix everything immediately, but rather identify where effort will have the biggest impact.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">6) Creating Documentation</h2>`,

    `<p>One of the most valuable things I can do early in a project is document what I've learned so far.</p>`,

    `<ul class="article-list">This often includes:
  <li>&check; Environment setup instructions</li>
  <li>&check; Deployment processes</li>
  <li>&check; Architecture diagrams</li>
  <li>&check; Third-party integrations</li>
  <li>&check; Development workflows</li>
</ul>`,

    `<p>Good documentation and solid READMEs makes onboarding future devs significantly easier and reduces reliance on any one individual.</p>`,

    `<hr class="divider" />`,

    `<h2 class="article-heading">Final Thoughts</h2>`,

    `<p>Most clients don't need somebody to immediately start building features, but they need somebody who can quickly understand an unfamiliar platform, identify risks and create a clear plan for moving forward.</p>`,

    `<p>Those first 48 hours are usually less about writing code and more about building understanding. Once you understand the platform, the people using it and the business goals behind it, the technical decisions become much easier.</p>`,
  ],
};
