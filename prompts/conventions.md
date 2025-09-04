# Conventions

All listed convention rules must be followed. 

## Rules

### General
- Only write the minimal amount of code needed to fulfill the requirements. This is to ensure that the code changes are simple to follow along with and that any code change will be simple to review.
- Avoid adding extra styling or features beyond what is explicitly requested.

### TypeScript
- Prefer named exports over default exports.
- Prefer `type` over `interface`.
- Write files in `kebab-case`.
- Prefer sending in explicit arguments over default parameters.

### React
- Create one file for each React component.
- Every single React element with a `className` props on them must be extracted as React components.

## React element example

```
// start-page.tsx

function Page() {
  return <Container><TopNav/></Container>;
}

// container.tsx

type Props = {
  children: React.Element
};

function Container({children}: Props) {
  return <div className="container mx-auto px-4">{children}</div>;
}
```

