'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette, Server, ArrowDown, Terminal, Sparkles } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
          >
            &lt;AM /&gt;
          </motion.div>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white relative group"
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              Hi, I'm <span className="text-gradient">Alex Morgan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              A passionate <span className="text-primary font-semibold">Fullstack Developer</span> crafting beautiful and performant web experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold hover:shadow-lg hover:border-primary/50"
              >
                View Work
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 justify-center"
            >
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Mail, href: '#contact' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-primary/50"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 animate-bounce text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  I'm a fullstack developer with a passion for creating elegant solutions to complex problems. With expertise in modern web technologies, I build scalable applications that deliver exceptional user experiences.
                </p>
                <p>
                  My journey in tech started with curiosity and evolved into a commitment to continuous learning. I thrive in collaborative environments where innovation meets execution.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 space-y-6">
                {[
                  { label: 'Experience', value: '5+ Years' },
                  { label: 'Projects Completed', value: '50+' },
                  { label: 'Technologies Mastered', value: '20+' },
                  { label: 'Coffee Consumed', value: '∞' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                  >
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-2xl font-bold text-gradient">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold text-center mb-16"
            >
              Technical <span className="text-gradient">Arsenal</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  Icon: Code2,
                  title: 'Frontend',
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  Icon: Server,
                  title: 'Backend',
                  skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs'],
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  Icon: Database,
                  title: 'Database',
                  skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  Icon: Terminal,
                  title: 'DevOps',
                  skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux'],
                  color: 'from-orange-500 to-red-500'
                },
              ].map((category, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-8 hover:border-primary/50 group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold text-center mb-16"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'Full-stack e-commerce solution with real-time inventory management and payment processing',
                  tech: ['Next.js', 'Stripe', 'PostgreSQL'],
                  gradient: 'from-blue-500 to-purple-500'
                },
                {
                  title: 'Social Media Dashboard',
                  description: 'Analytics dashboard for social media management with real-time data visualization',
                  tech: ['React', 'D3.js', 'Node.js'],
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'AI Chat Application',
                  description: 'Real-time chat application powered by AI with sentiment analysis and smart replies',
                  tech: ['TypeScript', 'WebSocket', 'OpenAI'],
                  gradient: 'from-cyan-500 to-blue-500'
                },
                {
                  title: 'Task Management System',
                  description: 'Collaborative project management tool with kanban boards and team collaboration features',
                  tech: ['Vue.js', 'Express', 'MongoDB'],
                  gradient: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Fitness Tracking App',
                  description: 'Mobile-first fitness app with workout tracking, progress analytics, and meal planning',
                  tech: ['React Native', 'Firebase', 'Redux'],
                  gradient: 'from-orange-500 to-red-500'
                },
                {
                  title: 'DevOps Monitoring Tool',
                  description: 'Infrastructure monitoring solution with alerting system and performance metrics',
                  tech: ['Python', 'Docker', 'Grafana'],
                  gradient: 'from-indigo-500 to-purple-500'
                },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                      >
                        <ExternalLink className="w-6 h-6 text-dark" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gradient">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold mb-6"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 mb-12"
            >
              Have a project in mind or just want to chat? I'd love to hear from you!
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="glass rounded-2xl p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { Icon: Mail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
                  { Icon: Github, label: 'GitHub', value: '@alexmorgan', href: '#' },
                  { Icon: Linkedin, label: 'LinkedIn', value: 'Alex Morgan', href: '#' },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.href}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-white/10"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <contact.Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-semibold">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Alex Morgan. Crafted with 💜 and lots of coffee</p>
        </div>
      </footer>
    </main>
  )
}
