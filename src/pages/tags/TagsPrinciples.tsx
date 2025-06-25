
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
  {
    title: "Clarity",
    description: "Tags should provide immediate understanding of the status or purpose they represent."
  },
  {
    title: "Consistency",
    description: "All tag variants must maintain consistent use of colors, typography, and design language across the platform."
  },
  {
    title: "Accessibility",
    description: "Tags should adhere to accessibility standards, ensuring legibility and interactiveness for all users."
  },
  {
    title: "Minimalism",
    description: "Tags should be visually simple, avoiding excess decoration, icons, or text that could clutter the UI."
  },
  {
    title: "Actionable Feedback",
    description: "Interactive tags should provide clear visual feedback, such as hover and focus states, to indicate that they can be acted upon."
  }
];

export const TagsPrinciples = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Principles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle) => (
          <Card key={principle.title}>
            <CardHeader>
              <CardTitle className="text-lg text-[#1B489B]">{principle.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {principle.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
