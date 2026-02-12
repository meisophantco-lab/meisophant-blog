const posts = [
  {
    title: "Understanding JavaScript Closures",
    date: "2026-02-12",
    category: "Tutorials",
    link: "post.html?id=0",
    image: "images/js-closures.png",
    content: `
      <p>JavaScript closures are a fundamental concept that every developer should understand. A closure is formed when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.</p>
      <p>Closures allow for powerful patterns like private variables, function factories, and callback functions.</p>
      <h2>Example of a Closure:</h2>
      <pre><code>function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  }
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3</code></pre>
      <p>This example shows how the inner function "remembers" the variable <code>counter</code> even after the outer function has executed.</p>
    `
  },
  {
    title: "Top 10 Tech Trends in 2026",
    date: "2026-02-10",
    category: "News",
    link: "post.html?id=1",
    image: "images/tech-trends-2026.png",
    content: `
      <p>The tech industry is constantly evolving. In 2026, several key trends are shaping the future of software, AI, and digital transformation.</p>
      <ul>
        <li>Artificial Intelligence becoming mainstream in business solutions.</li>
        <li>Web3 and decentralized applications gaining traction.</li>
        <li>Low-code and no-code platforms expanding accessibility.</li>
        <li>Quantum computing breakthroughs in research.</li>
        <li>5G adoption increasing globally.</li>
        <li>Cybersecurity and privacy regulations tightening.</li>
        <li>Augmented Reality (AR) in retail and education.</li>
        <li>Edge computing improving IoT performance.</li>
        <li>Sustainable tech practices reducing energy consumption.</li>
        <li>Advanced analytics for smarter business decisions.</li>
      </ul>
      <p>Keeping up with these trends will help developers, businesses, and tech enthusiasts stay ahead in the competitive landscape.</p>
    `
  },
  {
    title: "Building Responsive Websites",
    date: "2026-02-08",
    category: "Guides",
    link: "post.html?id=2",
    image: "images/responsive-websites.png",
    content: `
      <p>Responsive web design ensures your website looks great on all devices, from desktops to smartphones. Using flexible grids, media queries, and flexible images allows your content to adjust seamlessly.</p>
      <h2>Key Principles:</h2>
      <ol>
        <li>Fluid Grid Layouts</li>
        <li>Flexible Images</li>
        <li>Media Queries</li>
        <li>Mobile-first approach</li>
      </ol>
      <p>By following these principles, you ensure your website is accessible and user-friendly for all visitors.</p>
    `
  },
  {
    title: "AI Tools Every Developer Should Know",
    date: "2026-02-05",
    category: "News",
    link: "post.html?id=3",
    image: "images/ai-tools.png",
    content: `
      <p>AI is transforming development workflows. Here are some tools developers should explore in 2026:</p>
      <ul>
        <li><strong>Copilot:</strong> AI-powered code completion.</li>
        <li><strong>ChatGPT API:</strong> For natural language interactions in apps.</li>
        <li><strong>TensorFlow:</strong> Machine learning framework.</li>
        <li><strong>Hugging Face Transformers:</strong> NLP models for text-based apps.</li>
        <li><strong>MidJourney:</strong> AI-generated images for design prototypes.</li>
      </ul>
      <p>Integrating AI into your projects increases productivity and unlocks new possibilities for innovation.</p>
    `
  },
  {
    title: "Optimizing Website Performance",
    date: "2026-02-01",
    category: "Guides",
    link: "post.html?id=4",
    image: "images/website-performance.png",
    content: `
      <p>Website speed is crucial for user experience and SEO. Optimizing performance includes:</p>
      <ul>
        <li>Minifying CSS, JS, and HTML files.</li>
        <li>Using image compression without losing quality.</li>
        <li>Implementing lazy loading for images and videos.</li>
        <li>Using a Content Delivery Network (CDN) to reduce latency.</li>
        <li>Reducing HTTP requests with bundling techniques.</li>
      </ul>
      <p>Monitoring your site with tools like Google Lighthouse helps identify bottlenecks and improve performance.</p>
    `
  }
];