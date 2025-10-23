/*
  Enhanced portfolio with background imagery, gradient accents, and improved color styling.
  Still React + Tailwind, easy to extend.
*/

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Resume Project',
    subtitle: 'NLP resume analyzer',
    description:
      'A machine learning–powered resume analyzer that extracts, parses, and evaluates candidate data to predict role suitability. Automated text extraction, keyword matching, and skill-based scoring for candidate profiles.',
    tech: ['Python', 'NLP', 'Scikit-learn', 'Flask', 'Pandas'],
    link: 'https://github.com/zain0812'
  },
  {
    title: 'Altcoins Analysis',
    subtitle: 'Crypto time-series & volatility',
    description:
      'Explores cryptocurrency market dynamics and altcoin behavior using time-series analysis and volatility modeling to detect trends and signals.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://github.com/zain0812'
  },
  {
    title: 'CAPTCHA Solver',
    subtitle: 'Computer vision + deep learning',
    description:
      'An image-based CAPTCHA solver built with CNNs and OpenCV. Focused on preprocessing pipelines, character segmentation, and model robustness evaluation.',
    tech: ['TensorFlow', 'OpenCV', 'CNN'],
    link: 'https://github.com/zain0812'
  },
  {
    title: 'Other Projects',
    subtitle: 'Experiments & utilities',
    description:
      'A collection of smaller experiments and utilities across ML, automation, and visualization — documented with reproducible notebooks on GitHub.',
    tech: ['Python', 'Jupyter', 'Streamlit'],
    link: 'https://github.com/zain0812'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 relative overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      ></div>

      <header className="relative z-10 max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Muhammad Zain Ul Aabidin
          </h1>
          <p className="text-sm sm:text-base mt-1 text-gray-300">Data Scientist</p>
        </div>
        <nav className="space-x-4 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="https://github.com/zain0812" target="_blank" rel="noreferrer" className="ml-2 underline hover:text-cyan-400">GitHub</a>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        {/* Hero / quick intro */}
        <section className="rounded-2xl p-8 sm:p-12 bg-gray-800/80 backdrop-blur shadow-lg">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400">Hi — I’m Muhammad Zain Ul Aabidin</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-300">
              Data Scientist focusing on turning ambiguity into clarity through reproducible, production-ready models and clear visual storytelling.
            </p>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mt-10 rounded-2xl p-8 sm:p-12 bg-gray-800/80 backdrop-blur shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400">About</h3>
          <div className="mt-4 space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              I’m <strong className="text-white">Muhammad Zain Ul Aabidin</strong>, a data scientist who loves turning ambiguity into clarity. By combining careful data engineering with statistically sound modeling, I build solutions that not only predict but also explain.
            </p>
            <p>
              My projects emphasize reproducibility and production readiness — from automated pipelines and robust validation frameworks to clear visualizations that communicate model behavior to both technical and non-technical audiences.
            </p>
            <p>
              I enjoy tackling challenges in forecasting, classification, and causal analysis, and I share open-source notebooks and tools on my{' '}
              <a href="https://github.com/zain0812" target="_blank" rel="noreferrer" className="underline text-cyan-400">GitHub</a> to help others reproduce and extend my work.
            </p>
            <p>
              If your team needs models that are both accurate and trustworthy, I build them end-to-end, bridging the gap between analysis and real-world impact.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <h3 className="text-xl font-semibold text-blue-400 mb-6">Main Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-xl p-6 bg-gray-800/90 backdrop-blur border border-gray-700 hover:border-cyan-400 transition"
              >
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{p.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <a href={p.link} target="_blank" rel="noreferrer" className="underline text-cyan-400">View on GitHub</a>
                  <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-blue-300">Live / Repo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 rounded-2xl p-8 sm:p-12 bg-gray-800/80 backdrop-blur shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400">Contact</h3>
          <p className="mt-3 text-gray-300 text-base leading-relaxed">
            Let’s connect and collaborate. I respond to inquiries about data science consulting, collaborations, and open-source contributions.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-cyan-300">Email</p>
                <a className="text-sm underline text-gray-200" href="mailto:mzainaabidin931@gmail.com">mzainaabidin931@gmail.com</a>
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-300">Phone</p>
                <a className="text-sm underline text-gray-200" href="tel:+393508452198">+39 350 845 2198</a>
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-300">GitHub</p>
                <a className="text-sm underline text-gray-200" href="https://github.com/zain0812" target="_blank" rel="noreferrer">github.com/zain0812</a>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-cyan-300">Message</p>
              <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-3 flex flex-col gap-3">
                <input name="name" placeholder="Your name" className="px-3 py-2 rounded bg-gray-900 border border-gray-700 text-gray-200 focus:border-cyan-400 focus:outline-none" />
                <input name="email" placeholder="Your email" className="px-3 py-2 rounded bg-gray-900 border border-gray-700 text-gray-200 focus:border-cyan-400 focus:outline-none" />
                <textarea name="message" placeholder="Message" rows={4} className="px-3 py-2 rounded bg-gray-900 border border-gray-700 text-gray-200 focus:border-cyan-400 focus:outline-none"></textarea>
                <button type="submit" className="mt-2 px-5 py-2 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition">Send</button>
              </form>
              <p className="mt-3 text-xs text-gray-400">Note: replace the Formspree action URL with your own endpoint to receive messages.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Muhammad Zain Ul Aabidin — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}
