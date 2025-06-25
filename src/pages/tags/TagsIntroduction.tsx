
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TagsIntroduction = () => {
  return (
    <div className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-[#1B489B]">Info</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            Tags are used to categorize, label, or provide contextual information about specific content or user actions. 
            They help in organizing content, notifying users, and drawing attention to important actions or statuses.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};
