export const practices = [
  { id: 'core', number: '01', title: 'Core delivery', description: 'Useful technology, built around the way your business actually works.', services: ['ai-automation', 'ai-agents', 'custom-software', 'mvp-development'] },
  { id: 'design', number: '02', title: 'Design & product', description: 'Make the right decisions before making more things.', services: ['product-design', 'ux-ui-design', 'product-management', 'project-management'] },
  { id: 'engineering', number: '03', title: 'Engineering & quality', description: 'Thoughtful engineering that works in the real world, not just in a demo.', services: ['frontend-development', 'backend-development', 'qa-testing', 'forward-deploy-engineering'] },
  { id: 'growth', number: '04', title: 'Growth', description: 'Help the right people and systems understand what you do.', services: ['seo', 'geo', 'aeo'] },
];

export const services = [
  {
    slug: 'ai-automation', title: 'AI Automation for Business', short: 'Connect tools and reduce repetitive admin.', practice: 'core', number: '01',
    headline: 'Remove the work your team should not be doing by hand.',
    intro: 'Connect the people, tools and information your business already relies on. We design practical automations around real work—not technology for its own sake.',
    signature: 'Live automation flow', flow: ['Input', 'Automation', 'Human decision', 'Output'],
    section: 'Where the hours disappear', sectionIntro: 'The work that slows a team down is rarely one big task. It is the small handoffs, repeated every day.',
    rows: [['01', 'Inbox to action', 'Turn incoming requests into organised work.'], ['02', 'Documents to data', 'Move information out of files and into the systems that need it.'], ['03', 'Approvals to progress', 'Give the right person a clear decision at the right time.'], ['04', 'Activity to reporting', 'Bring scattered updates together without the weekly chase.']],
    featureTitle: 'Automation with guardrails.', featureText: 'A good workflow knows when to stop. We design permissions, exception handling and human approval into the process from the beginning.',
    related: ['ai-agents', 'custom-software', 'backend-development'], visual: 'automation', layout: 'split'
  },
  {
    slug: 'ai-agents', title: 'AI Agents', short: 'Build tailored agents that can act across your systems.', practice: 'core', number: '02',
    headline: 'Give your workflows an intelligent operator.',
    intro: 'An agent can work through context, use the right tools and bring a person in when a decision matters. We make those boundaries clear.',
    signature: 'Agent decision graph', flow: ['Request', 'Understand', 'Retrieve', 'Reason', 'Act', 'Human approval'],
    section: 'Automation follows rules. Agents handle decisions.', sectionIntro: 'Use agents where the path changes with the context—and keep people in control of the decisions that matter.',
    rows: [['01', 'Permissions', 'Give each agent access only to what it needs.'], ['02', 'Tools & context', 'Connect useful information and actions.'], ['03', 'Audit', 'Make the steps and sources visible.'], ['04', 'Approval', 'Keep important actions with a human.']],
    featureTitle: 'More useful than a chat window.', featureText: 'The goal is not a clever demo. It is a system that can make a real contribution to a real workflow, with the right level of oversight.',
    related: ['ai-automation', 'backend-development', 'qa-testing'], visual: 'agent', layout: 'wide'
  },
  {
    slug: 'custom-software', title: 'Custom Software & Web Apps', short: 'Replace awkward tool stacks with purpose-built software.', practice: 'core', number: '03',
    headline: 'When the tools no longer fit, build the system that does.',
    intro: 'When work is scattered across too many places, the answer is not always another subscription. Sometimes it is one system built around your business.',
    signature: 'Five tools → one platform', flow: ['Interface', 'API', 'Logic', 'Database', 'Integrations'],
    section: 'One joined-up way of working.', sectionIntro: 'We connect the moving parts so your team can see what matters and get on with the work.',
    rows: [['01', 'A clear interface', 'Make everyday work easier to understand.'], ['02', 'Connected information', 'Bring the right data together in one place.'], ['03', 'Useful integrations', 'Keep the tools that already work for you.'], ['04', 'Room to grow', 'Build a foundation that can evolve with the business.']],
    featureTitle: 'Designed around your reality.', featureText: 'From the visible interface to the less visible architecture, every layer should have a reason to be there.',
    related: ['product-design', 'frontend-development', 'backend-development'], visual: 'platform', layout: 'statement'
  },
  {
    slug: 'mvp-development', title: 'MVP Development', short: 'Turn a product idea into a focused first release.', practice: 'core', number: '04',
    headline: 'Build enough to learn what matters.',
    intro: 'Get the essential idea into people’s hands without building every possible feature first. Focus makes better learning possible.',
    signature: 'Prioritise to learn, not to impress', flow: ['Idea', 'Prototype', 'Build', 'Release', 'Learn'],
    section: 'A smaller first step. A stronger next one.', sectionIntro: 'We shape the first release around the questions that will make the biggest difference to what happens next.',
    rows: [['01', 'Now', 'What must be true for the idea to be useful?'], ['02', 'Later', 'What becomes valuable once the essentials work?'], ['03', 'Not yet', 'What can wait until there is evidence?']],
    featureTitle: 'A release is the beginning.', featureText: 'A first product should make it easier to learn from real use, make informed decisions and choose what to build next.',
    related: ['product-management', 'product-design', 'frontend-development'], visual: 'mvp', layout: 'split-reverse'
  },
  {
    slug: 'product-design', title: 'Product Design', short: 'Design user-focused product experiences for web and mobile.', practice: 'design', number: '05',
    headline: 'Turn complex product problems into clear experiences.',
    intro: 'Understand the people, the business and the problem before deciding what the product should look like.',
    signature: 'Research synthesis wall', flow: ['Research', 'Journey', 'Flow', 'Wireframe', 'Prototype', 'Interface'],
    section: 'Make sense before making screens.', sectionIntro: 'Good product design connects the evidence to the experience, with decisions that can be explained and tested.',
    rows: [['01', 'Understand', 'Find the real needs underneath the request.'], ['02', 'Connect', 'Map the moments and decisions that shape the journey.'], ['03', 'Explore', 'Make ideas tangible early enough to change them.'], ['04', 'Refine', 'Turn what we learn into a coherent product.']],
    featureTitle: 'Clarity is a design outcome.', featureText: 'The result is more than a set of screens: it is a clearer direction for the people building and using the product.',
    related: ['ux-ui-design', 'product-management', 'mvp-development'], visual: 'research', layout: 'light'
  },
  {
    slug: 'ux-ui-design', title: 'UX/UI Design', short: 'Create intuitive interfaces and clear user journeys.', practice: 'design', number: '06',
    headline: 'Make the next action obvious.',
    intro: 'Thoughtful interfaces take complexity out of the way. We bring structure, interaction and visual craft together across every screen.',
    signature: 'Interface gallery', flow: ['Desktop', 'Mobile', 'Components', 'Interactions', 'Responsive states'],
    section: 'Friction → clarity.', sectionIntro: 'Every confusing moment is an opportunity to make the whole experience feel more considered.',
    rows: [['01', 'Find the friction', 'See where a journey asks too much of people.'], ['02', 'Clarify the path', 'Give each screen a clear purpose and hierarchy.'], ['03', 'Design the details', 'Consider every state, from first use to the unexpected.'], ['04', 'Make it work everywhere', 'Carry the experience across devices and contexts.']],
    featureTitle: 'Beautiful is a starting point.', featureText: 'An interface also needs to be understandable, accessible and ready to become working software.',
    related: ['product-design', 'frontend-development', 'qa-testing'], visual: 'interface', layout: 'gallery'
  },
  {
    slug: 'product-management', title: 'Product Management', short: 'Turn ideas into clear product priorities and execution plans.', practice: 'design', number: '07',
    headline: 'Build the right thing before building more things.',
    intro: 'Bring customer evidence, business priorities and delivery realities into the same conversation.',
    signature: 'Product decision system', flow: ['Customer evidence', 'Opportunity', 'Impact', 'Priority', 'Roadmap', 'Outcome'],
    section: 'Decisions deserve a system.', sectionIntro: 'A useful roadmap is not a list of requests. It is a set of choices about what matters now and why.',
    rows: [['01', 'Listen', 'Bring the signals and evidence together.'], ['02', 'Frame', 'Define the opportunity before debating solutions.'], ['03', 'Prioritise', 'Make trade-offs visible and intentional.'], ['04', 'Learn', 'Use outcomes to inform the next decision.']],
    featureTitle: 'Choose a priority to explore.', featureText: 'A simple example of how impact and effort can help a team talk through a decision—not an automatic answer.',
    related: ['product-design', 'mvp-development', 'project-management'], visual: 'priority', layout: 'split'
  },
  {
    slug: 'project-management', title: 'Project Management', short: 'Coordinate scope, timelines and delivery across the team.', practice: 'design', number: '08',
    headline: 'Keep important technology work moving.',
    intro: 'Clear ownership, visible decisions and honest communication give good work the space to happen.',
    signature: 'Delivery control room', flow: ['Milestones', 'Owners', 'Risks', 'Dependencies', 'Decisions', 'Status'],
    section: 'Less chasing. More progress.', sectionIntro: 'We give the work a clear rhythm, from the first shared plan to the decisions that keep delivery moving.',
    rows: [['01', 'A shared plan', 'Agree the milestones and the people responsible.'], ['02', 'Visible dependencies', 'Understand what needs to happen before the next step.'], ['03', 'Early risk', 'Surface problems while there is still time to act.'], ['04', 'Clear decisions', 'Keep the team aligned on what has changed and why.']],
    featureTitle: 'A calmer way to deliver.', featureText: 'The best delivery management makes important information easy to find and hard to ignore.',
    related: ['product-management', 'qa-testing', 'mvp-development'], visual: 'control', layout: 'wide'
  },
  {
    slug: 'frontend-development', title: 'Frontend Development', short: 'Build high-quality responsive interfaces with clean implementation.', practice: 'engineering', number: '09',
    headline: 'Turn product design into interfaces that hold up in production.',
    intro: 'We translate design intent into fast, accessible and maintainable experiences for the people who actually use them.',
    signature: 'Design system → production UI', flow: ['Tokens', 'Components', 'States', 'Responsive rules', 'Live interface'],
    section: 'The details are the experience.', sectionIntro: 'From the first tap to the edge cases, we build interfaces that make the product feel considered.',
    rows: [['01', 'A strong foundation', 'Reusable patterns without losing the details.'], ['02', 'Every state', 'Loading, empty, error and success all matter.'], ['03', 'Every screen', 'Responsive behaviour designed, not just squeezed.'], ['04', 'Accessible by design', 'Thoughtful interaction for more people.']],
    featureTitle: 'Explore the component states.', featureText: 'A small example of how the same interface needs to communicate clearly throughout a real interaction.',
    related: ['ux-ui-design', 'backend-development', 'qa-testing'], visual: 'components', layout: 'gallery'
  },
  {
    slug: 'backend-development', title: 'Backend Development', short: 'Develop reliable systems, APIs and scalable application logic.', practice: 'engineering', number: '10',
    headline: 'Build the systems your product can depend on.',
    intro: 'The best experiences are supported by clear, resilient architecture behind the scenes.',
    signature: 'System architecture', flow: ['Frontend', 'API', 'Authentication', 'Logic', 'Database', 'Integration', 'Monitoring'],
    section: 'What happens after the click.', sectionIntro: 'A reliable product is a chain of carefully considered decisions, from a request to a useful response.',
    rows: [['01', 'Authenticate', 'Know who is making the request.'], ['02', 'Process', 'Apply the rules the business can depend on.'], ['03', 'Connect', 'Move information safely between systems.'], ['04', 'Observe', 'Make the health of the system visible.']],
    featureTitle: 'Good foundations stay useful.', featureText: 'We make deliberate choices about data, integrations and operational visibility so the system can be understood and maintained.',
    related: ['custom-software', 'frontend-development', 'qa-testing'], visual: 'architecture', layout: 'wide'
  },
  {
    slug: 'qa-testing', title: 'QA & Testing', short: 'Improve quality with structured testing and release confidence.', practice: 'engineering', number: '11',
    headline: 'Catch problems before your users do.',
    intro: 'Quality is not a final checkbox. It is a shared practice that starts with understanding what needs to work.',
    signature: 'Release pipeline', flow: ['Code', 'Test', 'Review', 'QA', 'Validate', 'Release'],
    section: 'Confidence is built, not assumed.', sectionIntro: 'Test the important paths, explore the unexpected ones and make the state of a release visible.',
    rows: [['01', 'Define', 'Agree what good looks like and what is at risk.'], ['02', 'Test', 'Check the important journeys and the edge cases.'], ['03', 'Review', 'Make issues and decisions easy to understand.'], ['04', 'Release', 'Know what has been checked before going live.']],
    featureTitle: 'A quality matrix in action.', featureText: 'Select a cell to explore how a team can keep track of what needs review. This is an illustrative example, not a live test result.',
    related: ['frontend-development', 'backend-development', 'project-management'], visual: 'quality', layout: 'split-reverse'
  },
  {
    slug: 'forward-deploy-engineering', title: 'Forward Deploy Engineering', short: 'Work closely with clients to implement solutions in real workflows.', practice: 'engineering', number: '12',
    headline: 'Put engineering closer to the problem.',
    intro: 'The quickest way to understand the work is to get closer to it. We bring engineering into the context where a system will actually be used.',
    signature: 'Client ↔ engineer ↔ product team', flow: ['Observe', 'Build', 'Deploy', 'Learn'],
    section: 'Work alongside the work.', sectionIntro: 'Observe what happens, build with the people involved and carry what you learn back into the product.',
    rows: [['01', 'Observe', 'Understand the real workflow and its constraints.'], ['02', 'Build', 'Make a useful change with the people closest to it.'], ['03', 'Deploy', 'Put the solution into its actual environment.'], ['04', 'Learn', 'Use what happens next to shape the next iteration.']],
    featureTitle: 'Closer context. Better decisions.', featureText: 'A bridge between the day-to-day reality of a business and the people shaping its technology.',
    related: ['ai-automation', 'custom-software', 'project-management'], visual: 'deploy', layout: 'photo'
  },
  {
    slug: 'seo', title: 'SEO', short: 'Improve visibility and performance with search-focused optimisation.', practice: 'growth', number: '13',
    headline: 'Make your expertise easier to find.',
    intro: 'Connect useful content, technical foundations and the questions your customers are already asking.',
    signature: 'Search discovery journey', flow: ['Query', 'Intent', 'Content', 'Search result', 'Qualified visit'],
    section: 'Good discovery begins with usefulness.', sectionIntro: 'Search works best when the content is genuinely helpful and the underlying experience is easy to understand.',
    rows: [['01', 'Intent', 'Understand what people are trying to solve.'], ['02', 'Content', 'Create useful information that answers the need.'], ['03', 'Technical health', 'Make important pages accessible and understandable.'], ['04', 'Measurement', 'Learn which content brings the right people closer.']],
    featureTitle: 'Built for the person searching.', featureText: 'Sustainable visibility comes from a useful experience, clear information and careful technical work—not a bag of tricks.',
    related: ['geo', 'aeo', 'frontend-development'], visual: 'search', layout: 'light'
  },
  {
    slug: 'geo', title: 'GEO', short: 'Optimise content for generative search experiences.', practice: 'growth', number: '14',
    headline: 'Make your business understandable to AI search.',
    intro: 'Help generative systems find, interpret and reference clear, credible information about your business.',
    signature: 'AI retrieval graph', flow: ['Content', 'Entities', 'Evidence', 'Retrieval', 'Answer', 'Citation'],
    section: 'From information to understanding.', sectionIntro: 'The goal is not to chase a mysterious algorithm. It is to make your expertise clear, connected and useful.',
    rows: [['01', 'Clarity', 'Explain what you do and who it helps.'], ['02', 'Structure', 'Connect the people, concepts and evidence.'], ['03', 'Credibility', 'Support important statements with useful context.'], ['04', 'Discoverability', 'Make information accessible to the systems that retrieve it.']],
    featureTitle: 'Be the useful source.', featureText: 'Clear evidence and well-structured information give both people and machines a better chance of understanding your expertise.',
    related: ['seo', 'aeo', 'product-design'], visual: 'graph', layout: 'wide'
  },
  {
    slug: 'aeo', title: 'AEO', short: 'Structure content for answer engines and AI-driven discovery.', practice: 'growth', number: '15',
    headline: 'Create answers machines can confidently surface.',
    intro: 'Make the answers your audience needs direct, useful and easy to understand—wherever they encounter them.',
    signature: 'Question → answer system', flow: ['Question', 'Direct answer', 'Context', 'Evidence', 'Next step'],
    section: 'Start with the question.', sectionIntro: 'The clearest answer earns attention by being useful first. Structure helps it travel further.',
    rows: [['01', 'What is…?', 'Define the subject in plain language.'], ['02', 'How does…?', 'Explain the process without unnecessary complexity.'], ['03', 'Which…?', 'Make useful distinctions and trade-offs clear.'], ['04', 'Why…?', 'Give the reasoning and evidence behind the answer.']],
    featureTitle: 'A better answer has layers.', featureText: 'Lead with the answer, add useful context and make the next step clear. Select a question to see an example.',
    related: ['seo', 'geo', 'product-design'], visual: 'answers', layout: 'statement'
  }
];
export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

// These are explicitly labelled design concepts, not claims about client work.
export const projects = [
  { slug: 'connected-operations', number: '01', title: 'Operations, connected.', category: 'AI AUTOMATION / OPERATIONS', summary: 'A clearer path from incoming request to completed work.', visual: 'operations', service: 'ai-automation', challenge: 'Important requests arrive in different places. Without a shared process, the next action can disappear between inboxes, documents and people.', approach: 'This concept explores a connected intake and approval flow: collect the request, add context, route the decision and make the outcome visible.', outcome: 'The intended outcome is a more legible workflow, with fewer manual handoffs and a human in control of important decisions.', details: ['Workflow mapping', 'Human approvals', 'System integrations'] },
  { slug: 'agent-with-a-job', number: '02', title: 'An agent with a job.', category: 'AI AGENTS / WORKFLOWS', summary: 'An intelligent assistant with a clear role and clear boundaries.', visual: 'agent', service: 'ai-agents', challenge: 'Teams need help finding and acting on information, but important decisions still need a responsible person.', approach: 'This concept gives an agent a defined job: retrieve context, suggest a next action and ask for approval before doing anything consequential.', outcome: 'The intended outcome is useful assistance that makes its reasoning and boundaries visible.', details: ['Context retrieval', 'Permission design', 'Approval workflow'] },
  { slug: 'one-view-of-the-work', number: '03', title: 'One view of the work.', category: 'CUSTOM SOFTWARE / PRODUCT', summary: 'Turning disconnected tools into one purposeful platform.', visual: 'platform', service: 'custom-software', challenge: 'When information is scattered across tools, people have to do the work of connecting the dots themselves.', approach: 'This concept brings requests, ownership and progress into a single interface designed around everyday operational decisions.', outcome: 'The intended outcome is a shared view of work, without asking a team to adapt to a collection of unrelated tools.', details: ['Product strategy', 'Interface design', 'Application architecture'] },
  { slug: 'first-release', number: '04', title: 'From idea to first release.', category: 'MVP / PRODUCT DESIGN', summary: 'A focused first product designed to make learning possible.', visual: 'mvp', service: 'mvp-development', challenge: 'A promising idea can become harder to test when every possible feature is treated as essential.', approach: 'This concept narrows the first release to a clear core journey, then uses a prototype and a working product to test the most important assumptions.', outcome: 'The intended outcome is a useful first release and a clearer basis for deciding what to build next.', details: ['Prioritisation', 'Prototyping', 'Product development'] },
];

const articleSections = {
  automation: [
    ['Follow the work, not the tool', 'Start with a task that already happens: what triggers it, who touches it, where the information lives and what a useful outcome looks like. The gaps between these steps are often more important than the steps themselves.'],
    ['Look for repeatable decisions', 'A strong candidate is frequent, reasonably consistent and expensive in attention. That does not mean every part should be automated. Some moments deserve a person, especially where exceptions or judgement matter.'],
    ['Design the exception path', 'Ask what should happen when information is missing, a system is unavailable or the next action is uncertain. A workflow that makes uncertainty visible is more useful than one that quietly moves on.'],
    ['Measure what matters', 'Choose a simple baseline before building. Time spent, rework, waiting and the quality of the handoff can all help a team understand whether the change is genuinely useful.']
  ],
  agents: [
    ['Start with a bounded job', 'An agent is most useful when its responsibility is clear. Define what it can see, what it can suggest and what it is allowed to do before giving it access to tools.'],
    ['Make context visible', 'The quality of a decision depends on the information available. Give the agent relevant context and make the source of that context understandable to the people reviewing its work.'],
    ['Keep a person at the right moment', 'Approval is not a sign of failure. It can be a deliberate part of the workflow, particularly when an action affects customers, money, sensitive data or a lasting record.'],
    ['Plan for uncertainty', 'When an agent cannot confidently continue, it should have a clear way to pause, explain and hand the work back.']
  ],
  product: [
    ['Begin with the decision', 'A first release is a way to learn, not a smaller version of every idea in the backlog. Ask which uncertainty most affects the next investment.'],
    ['Find the essential journey', 'Identify the smallest end-to-end experience that can be useful to someone. Supporting features matter, but they should earn their place in relation to that journey.'],
    ['Separate now from not yet', 'Making a decision not to build something yet is a practical product skill. Write the reasoning down so the team can revisit it as evidence changes.'],
    ['Close the learning loop', 'Plan how feedback will be collected and who will interpret it. A release creates an opportunity to learn; it does not automatically do the learning for you.']
  ],
  engineering: [
    ['The invisible experience', 'A dependable interface depends on work the user may never see: how requests are validated, how information is stored and what happens when another service is unavailable.'],
    ['Design for failure', 'Systems do not operate in perfect conditions. Timeouts, retries, clear errors and sensible fallbacks make unexpected situations easier to handle.'],
    ['Make it observable', 'A team needs enough information to understand the health of a system and investigate a problem. Thoughtful logs and monitoring are part of the product, not an afterthought.'],
    ['Keep the architecture understandable', 'The most impressive architecture is not always the most useful. Choose a level of complexity the product and its team can actually support.']
  ],
  seo: [
    ['Understand the intent', 'A search begins with a need. Consider whether someone is learning, comparing options or looking for a specific next step before deciding what a page needs to do.'],
    ['Make the answer useful', 'Clear writing and a useful structure help people find the information they came for. Avoid adding content simply to repeat a phrase.'],
    ['Support the experience technically', 'A page should be accessible, understandable and easy to use across devices. Technical work supports good content; it cannot replace it.'],
    ['Learn and improve', 'Review the questions that bring people to the site and where the experience can be clearer. Improvement is an ongoing practice rather than a one-time checklist.']
  ],
  geo: [
    ['Make the subject clear', 'Explain the things your organisation knows, offers and does in straightforward language. Ambiguity is difficult for people and retrieval systems alike.'],
    ['Connect claims to evidence', 'Useful detail, original context and appropriate sources help readers understand why an answer deserves attention. Do not make a claim merely because it sounds authoritative.'],
    ['Structure for retrieval', 'Descriptive headings, clear relationships and accessible pages can make content easier to navigate and interpret. They are foundations, not guarantees of inclusion.'],
    ['Keep people in view', 'Generative discovery changes the way information is encountered, but usefulness to the person asking the question remains the point.']
  ],
  aeo: [
    ['Put the answer first', 'A direct answer respects the person’s time. State the useful response plainly, then provide the detail needed to understand it.'],
    ['Add context and limits', 'The best answer is not always the shortest. Explain when the answer applies, what depends on context and where someone should look next.'],
    ['Use structure deliberately', 'Meaningful headings and well-organised supporting content make it easier to navigate a subject without turning the page into a collection of disconnected snippets.'],
    ['Be accurate before being visible', 'No formatting technique can make an unsupported statement reliable. Keep the answer correct, review it over time and make the source clear where appropriate.']
  ],
};
export const articles = [
  {slug:'before-you-automate', category:'AI AUTOMATION', title:'Before you automate, map the handoff.', excerpt:'The most useful automation opportunity is often hiding between two familiar tasks.', read:'6 MIN READ', image:'work', key:'automation'},
  {slug:'agents-and-human-judgement', category:'AI AGENTS', title:'When an AI agent needs a human in the loop.', excerpt:'Give intelligent systems a real job—and clear boundaries.', read:'5 MIN READ', image:'system', key:'agents'},
  {slug:'a-better-mvp-question', category:'PRODUCT', title:'A better question to ask before you build an MVP.', excerpt:'A focused first release starts with a question worth answering.', read:'5 MIN READ', image:'studio', key:'product'},
  {slug:'after-the-click', category:'ENGINEERING', title:'What a dependable backend makes possible.', excerpt:'The product experience continues long after someone clicks.', read:'5 MIN READ', image:'system', key:'engineering'},
  {slug:'useful-search', category:'SEO', title:'Good search starts with a useful answer.', excerpt:'Build for the person behind the query, not just the query.', read:'4 MIN READ', image:'work', key:'seo'},
  {slug:'understandable-to-ai-search', category:'GEO', title:'What it means to be understandable to AI search.', excerpt:'Clarity, context and evidence matter in a changing search landscape.', read:'4 MIN READ', image:'system', key:'geo'},
  {slug:'answer-the-question', category:'AEO', title:'Write for the question, not just the keyword.', excerpt:'Make useful answers easier for people and machines to find.', read:'4 MIN READ', image:'studio', key:'aeo'},
].map(a => ({ ...a, sections: articleSections[a.key] }));

export const processSteps = [
  {number:'01', title:'Discover', text:'We start with your business, the people involved and the problem worth solving.'},
  {number:'02', title:'Shape', text:'Together, we explore the options and shape a practical direction.'},
  {number:'03', title:'Agree', text:'We make scope, priorities and the way forward clear before development begins.'},
  {number:'04', title:'Build', text:'A senior team designs and builds in visible, useful increments.'},
  {number:'05', title:'QA', text:'We test important journeys, surface issues and build confidence in the release.'},
  {number:'06', title:'Launch', text:'We put the working system into the hands of the people it is for.'},
  {number:'07', title:'Measure', text:'We learn from real use and make the next decision with better information.'},
];

export const faqs = [
  ['Do we need a finished brief to get started?', 'No. A business problem, an idea or a frustrating workflow is enough to begin. We can help you work out what is worth doing next.'],
  ['Who will we work with?', 'You will work with senior people across discovery and delivery, with UK accountability and an international engineering team brought together around the work.'],
  ['Can you work with our existing tools and team?', 'Yes. We begin by understanding what is already in place and look for the most practical way to work with your people and systems.'],
  ['How do you decide what to build?', 'We start with the business outcome, explore the options and make scope and trade-offs clear before development begins.'],
  ['What happens after launch?', 'Launch is an opportunity to learn. We can help you assess what is working, address issues and decide what comes next.'],
];
