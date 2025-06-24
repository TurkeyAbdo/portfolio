import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const mockBlogs = [
  {
    slug: 'designing-intuitive-dashboards',
    title: 'Designing Intuitive Dashboards for Teams',
    category: 'Product Design',
    date: 'May 30, 2024',
    image: 'https://placehold.co/800x400?text=Dashboard',
    content: `
**Introduction**

Dashboards are powerful tools that help teams visualize, manage, and act on important information. However, when poorly designed, dashboards can overwhelm users, hide critical insights, and decrease productivity.

For a recent project, I was tasked with designing an intuitive dashboard for a project management tool. The easy wins: provide teams with the information they need, at a glance, without unnecessary distraction.

In this blog, I'll share my design process—from research to delivery—and highlight key principles for creating dashboards that are functional, clean, and user-friendly.

### 1. Understanding the Problem

Before diving into design, it's crucial to identify the real problem. I started by understanding the users and their pain points through a combination of:

- **User Interviews**: I spoke to project managers, team leads, and individual contributors to learn what they needed from dashboards.
- **Existing Product Audit**: The current dashboard often caused headaches and areas of friction, such as information overload and lack of visual hierarchy.
- **Competitor Analysis**: I analyzed competitor dashboards to see what worked and where improvements could be made.

Key insight: *Users want a clean, high-level overview of project status, but they also need the option to drill down into specifics when necessary.*

### 2. Structuring the Information

With the research insights in hand, I moved on to organizing the content. A dashboard must balance overview and detail, so the information architecture (IA) is critical.

I broke down the details into:

1. Top-Level Metrics: Highlight key KPIs (e.g., task completion rate, project deadlines) at the top.
2. Drill-Down Filters: Offer interactive elements to view details by team, project, or date.
3. Quick Insights: Add widgets for fast access to recent activity and flagged items.

I sketched wireframes to test different layouts, ensuring the dashboard felt intuitive and aligned with user goals.

### 3. Designing the Interface

Once the layout was finalized, I transitioned to creating high-fidelity designs.

**Design Principles I Followed:**
- Visual Hierarchy: I used size, color, and spacing to highlight the most important information first.
- Clean Aesthetics: I opted for a minimal design with ample white space to reduce cognitive load.
- Accessibility: High contrast, clear typography, and legible data visualizations ensured everyone could use the dashboard effectively.

Tools used: Figma for UI design and Framer for interactive prototyping.

### 4. Testing and Iterating

To validate the design, I conducted usability tests with real users.

- **Task Scenarios**: I asked users to complete common tasks, like identifying overdue projects or team performance bottlenecks.
- **Feedback Loops**: I noted areas where users got stuck or struggled to find information.

Results: Using the dashboard was easy to navigate and praised for its clarity. Minor changes, such as refining filters and button placements, were made based on feedback.

### 5. Final Results

The redesigned dashboard delivered measurable improvements.

- **30% Faster Task Identification**: Teams could now spot critical tasks and overdue items more quickly.
- **Increased Engagement**: Users interacted with the dashboard more frequently due to its simplicity and clarity.

### Conclusion

An intuitive dashboard doesn't just display data—it empowers users to act on it. By focusing on user needs, a clean structure, and tested design, I helped this client achieve a dashboard users love to use.
`,
    related: [
      {
        slug: 'simplifying-checkout-flows',
        title: 'Simplifying Checkout Flows for E-commerce',
        category: 'Product Design',
        image: 'https://placehold.co/400x250?text=Checkout',
      },
      {
        slug: 'top-5-design-trends-2025',
        title: 'Top 5 Design Trends to Watch in 2025',
        category: 'Design Trends',
        image: 'https://placehold.co/400x250?text=Trends',
      },
    ],
  },
  // Add more mock blogs as needed
];

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = mockBlogs.find((b) => b.slug === slug) || mockBlogs[0];

  return (
    <>
      <Head>
        <title>{blog.title} | PORTFLOWX</title>
      </Head>
      <main className="bg-primary min-h-screen">
        <section className="container-custom pt-16 pb-8">
          <div className="mb-4">
            <span className="bg-secondary text-accent px-3 py-1 rounded-full text-xs font-bold uppercase">{blog.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
          <div className="text-gray-400 mb-6">{blog.date}</div>
          <img src={blog.image} alt={blog.title} className="rounded-xl w-full max-w-3xl mb-8 mx-auto" />
          <article className="prose prose-invert max-w-3xl mx-auto text-gray-200">
            {blog.content.split('\n').map((line, i) =>
              line.startsWith('###') ? <h3 key={i}>{line.replace('### ', '')}</h3>
                : line.startsWith('**') ? <strong key={i}>{line.replace(/\*\*/g, '')}</strong>
                : <p key={i}>{line}</p>
            )}
          </article>
        </section>
        {/* Related Blogs */}
        <section className="container-custom mb-16">
          <h2 className="text-xl font-bold mb-4 text-accent">Related Blogs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blog.related.map((rel) => (
              <Link key={rel.slug} href={`/blog/${rel.slug}`} className="bg-secondary rounded-xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] transition">
                <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="text-xs font-bold text-accent mb-1 uppercase">{rel.category}</div>
                  <h3 className="text-lg font-semibold mb-2">{rel.title}</h3>
                  <Link href={`/blog/${rel.slug}`} className="text-accent font-semibold hover:underline">
                    Learn more &rarr;
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-primary border-t border-white/10 py-8 mt-8">
          <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="/" className="hover:underline">Home</a>
              <a href="/work" className="hover:underline">Work</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/store" className="hover:underline">Store</a>
              <a href="/blog" className="hover:underline">Blog</a>
            </div>
            <div className="text-gray-500 text-sm">© 2025 All rights reserved. Made in Framer</div>
          </div>
        </footer>
      </main>
    </>
  );
} 