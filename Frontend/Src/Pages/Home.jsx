import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import { posts } from "../data/posts.js";
import {
  ArrowRightIcon,
  BookIcon,
  HeartIcon,
  PuzzleIcon,
  SparkleIcon,
  SpeechIcon,
  SunriseHero,
} from "../components/icons.jsx";

const serviceVisuals = {
  "aba-therapy": {
    icon: PuzzleIcon,
    className: "service-card-coral",
    number: "01",
  },
  "speech-therapy": {
    icon: SpeechIcon,
    className: "service-card-blue",
    number: "02",
  },
  "special-education": {
    icon: BookIcon,
    className: "service-card-gold",
    number: "03",
  },
};

const steps = [
  {
    number: "01",
    title: "Talk to us",
    text: "Tell us about your child, their strengths, and where you would like support.",
  },
  {
    number: "02",
    title: "Understand",
    text: "We take time to understand your child's individual needs and learning style.",
  },
  {
    number: "03",
    title: "Make a plan",
    text: "Together, we create a practical plan built around meaningful goals.",
  },
  {
    number: "04",
    title: "Grow together",
    text: "We track progress and adapt the approach as your child develops.",
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredPosts = posts.slice(0, 3);

  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero-section">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="site-container hero-container">

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Early support. Meaningful progress.
            </div>

            <h1 className="hero-title">
              Helping little minds
              <span> learn, communicate</span>
              <br className="hidden sm:block" />
              &amp; grow.
            </h1>

            <p className="hero-description">
              Every child has their own way of learning. We provide
              individualized therapy and educational support designed around
              their strengths, needs, and pace.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="button-primary">
                Start a conversation
                <ArrowRightIcon className="button-icon" />
              </Link>

              <Link to="/services" className="button-secondary">
                Explore our support
              </Link>
            </div>

            <div className="hero-trust">

              <div className="hero-trust-item">
                <HeartIcon className="trust-icon" />
                <span>Child-centred</span>
              </div>

              <div className="trust-divider" />

              <div className="hero-trust-item">
                <span>Individualised support</span>
              </div>

              <div className="trust-divider" />

              <div className="hero-trust-item">
                <span>Family focused</span>
              </div>

            </div>
          </div>

          {/* Illustration */}
          <div className="hero-visual">

            <div className="hero-visual-frame">

              <div className="hero-badge hero-badge-one">
                <span>★</span>
                Small steps
              </div>

              <div className="hero-badge hero-badge-two">
                <span>♥</span>
                Big possibilities
              </div>

              <div className="hero-art-wrapper">
                <SunriseHero className="hero-art-svg" />
              </div>

              <div className="hero-floating-icon hero-floating-one">
                <PuzzleIcon />
              </div>

              <div className="hero-floating-icon hero-floating-two">
                <SpeechIcon />
              </div>

              <div className="hero-floating-icon hero-floating-three">
                <BookIcon />
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}
      <section className="section-white">
        <div className="site-container section-padding">

          <div className="section-intro">
            <div className="section-kicker">
              <SparkleIcon />
              OUR APPROACH
            </div>

            <h2 className="section-title">
              Because every child deserves to be understood.
            </h2>

            <p className="section-lead">
              We don't believe in a one-size-fits-all approach. We start with
              your child — their personality, interests, abilities and
              challenges — and build support around them.
            </p>
          </div>

          <div className="approach-grid">

            <article className="approach-item">
              <div className="approach-number">01</div>

              <div>
                <h3>Understand</h3>
                <p>
                  We listen first and take time to understand the whole child,
                  not just a diagnosis or difficulty.
                </p>
              </div>
            </article>

            <article className="approach-item">
              <div className="approach-number">02</div>

              <div>
                <h3>Support</h3>
                <p>
                  Sessions are structured around practical goals while keeping
                  learning comfortable, engaging and encouraging.
                </p>
              </div>
            </article>

            <article className="approach-item">
              <div className="approach-number">03</div>

              <div>
                <h3>Grow</h3>
                <p>
                  Progress is a journey. We review what is working and adjust
                  the plan as your child grows.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="section-soft">
        <div className="site-container section-padding">

          <div className="section-heading-row">

            <div>
              <div className="section-kicker">
                <SparkleIcon />
                HOW WE CAN HELP
              </div>

              <h2 className="section-title section-title-left">
                Support built around your child.
              </h2>

              <p className="section-lead section-lead-left">
                Our services work towards one simple goal: helping children
                develop the skills they need to participate, communicate and
                learn with confidence.
              </p>
            </div>

            <Link to="/services" className="text-link">
              View all services
              <ArrowRightIcon />
            </Link>

          </div>


          <div className="services-grid">

            {featuredServices.map((service) => {

              const visual = serviceVisuals[service.slug];
              const Icon = visual?.icon || BookIcon;

              return (
                <Link
                  key={service.slug}
                  to={`/services#${service.slug}`}
                  className={`new-service-card ${visual?.className || ""}`}
                >

                  <div className="service-number">
                    {visual?.number}
                  </div>

                  <div className="new-service-icon">
                    <Icon />
                  </div>

                  <div className="service-content">

                    <h3>{service.name}</h3>

                    <p className="service-tagline">
                      {service.tagline}
                    </p>

                    <p className="service-summary">
                      {service.summary}
                    </p>

                  </div>

                  <div className="service-arrow">
                    <ArrowRightIcon />
                  </div>

                </Link>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="section-white">
        <div className="site-container section-padding">

          <div className="section-intro process-intro">

            <div className="section-kicker">
              <SparkleIcon />
              A SIMPLE JOURNEY
            </div>

            <h2 className="section-title">
              One step at a time.
            </h2>

            <p className="section-lead">
              Starting support for your child doesn't have to feel
              overwhelming. We'll guide you through the process.
            </p>

          </div>


          <div className="steps-grid">

            {steps.map((step, index) => (

              <article className="step-item" key={step.number}>

                <div className="step-top">

                  <div className="step-number">
                    {step.number}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="step-line" />
                  )}

                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          BLOG
      ====================================================== */}
      <section className="section-soft">
        <div className="site-container section-padding">

          <div className="section-heading-row">

            <div>

              <div className="section-kicker">
                <SparkleIcon />
                FOR FAMILIES
              </div>

              <h2 className="section-title section-title-left">
                Helpful things to know.
              </h2>

              <p className="section-lead section-lead-left">
                Practical information to help parents understand development,
                communication, behaviour and learning.
              </p>

            </div>

            <Link to="/blog" className="text-link">
              Read all articles
              <ArrowRightIcon />
            </Link>

          </div>


          <div className="blog-preview-grid">

            {featuredPosts.map((post) => (

              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="new-blog-card"
              >

                <div className="blog-card-top">

                  <span className={`blog-category blog-${post.accent}`}>
                    {post.icon}
                  </span>

                  <span>
                    {post.readingMinutes} min read
                  </span>

                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <div className="blog-read">
                  Read article
                  <ArrowRightIcon />
                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="final-cta">

        <div className="cta-circle cta-circle-one" />
        <div className="cta-circle cta-circle-two" />

        <div className="site-container cta-content">

          <div className="cta-icon">
            <HeartIcon />
          </div>

          <h2>
            Let's take the next little step together.
          </h2>

          <p>
            If you're wondering whether support could help your child,
            let's have a conversation. No pressure. Just a place to start.
          </p>

          <Link to="/contact" className="button-cta">
            Talk to us
            <ArrowRightIcon />
          </Link>

          <div className="cta-location">
            <span>●</span>
            Naveen Shahdara, Delhi
          </div>

        </div>
      </section>

    </main>
  );
}
