# Prova Education Consultancy

Frontend for an education consultancy that helps students secure Under Graduate, Post Graduate and school admissions at universities, colleges and schools in Bangalore.

Built with **React 19**, **Vite**, **React Router** and **SCSS**.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Project structure

```
src/
├── components/
│   ├── common/      # Generic UI building blocks (Button, Card, Badge, IconBox, StatItem, SectionHeading, Alert)
│   ├── form/        # Custom input components (Input, Select, Textarea, Checkbox) sharing a FormField wrapper
│   ├── layout/      # Navbar, Footer, PageHeader and the route Layout shell
│   └── sections/    # Page sections composed from common/form components (Hero, ServiceCard, EnquiryForm, ...)
├── data/            # Static content: site config, services, institutions, testimonials
├── pages/           # Route-level pages (Home, Services, Institutions, About, Contact, NotFound)
├── styles/          # SCSS foundation: _variables.scss, _mixins.scss, global.scss
├── App.jsx          # Router configuration
└── main.jsx         # Entry point
```

Every component lives next to its own `.scss` file and uses BEM-style class names. Shared design tokens (colors, spacing, typography, breakpoints) are in `src/styles/_variables.scss`; reusable mixins (`respond-up`, `respond-down`, `container`, `card`, `focus-ring`, ...) are in `src/styles/_mixins.scss`.

## Reusable form components

All inputs accept the same core props: `name`, `label`, `value`, `onChange`, `required`, `disabled`, `hint`, `error`.

```jsx
import { Input, Select, Textarea, Checkbox } from './components/form';

<Input name="email" label="Email" type="email" value={email} onChange={handleChange} error={errors.email} required />
<Select name="level" label="Level" options={[{ value: 'ug', label: 'Under Graduate' }]} value={level} onChange={handleChange} />
<Textarea name="message" label="Message" rows={4} value={message} onChange={handleChange} hint="Optional" />
<Checkbox name="consent" label="I agree to be contacted" checked={consent} onChange={handleChange} />
```

`Button` renders a `<button>`, a router `<Link>` (when `to` is passed) or an `<a>` (when `href` is passed) with the same styling, and supports `variant` (`primary | secondary | outline | ghost`), `size` (`sm | md | lg`), `fullWidth` and `loading`.

## Updating content

Site name, contact details, navigation links and stats live in `src/data/siteConfig.js`. Services, institutions and testimonials are plain arrays in the other files under `src/data/` so content can be edited without touching components.
