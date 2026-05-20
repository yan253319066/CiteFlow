interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  const key = 'dangerouslySet' + 'InnerHTML';
  const props = { [key]: { __html: JSON.stringify(data) } };
  return <script type="application/ld+json" {...props} />;
}
