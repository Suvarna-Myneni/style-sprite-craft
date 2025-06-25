
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LovableTag } from "@/components/tags/LovableTag";

export const TagUsageExamples = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Examples</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Tag Collection</CardTitle>
          <CardDescription>
            Example of how different tag variants work together in a real interface
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <LovableTag label="Category" status="default" mode="light" />
            <LovableTag label="Recently Updated" status="primary" mode="light" />
            <LovableTag label="Approved" status="success" mode="light" />
            <LovableTag label="Pending Review" status="warning" mode="light" />
            <LovableTag label="Action Required" status="warning" mode="light" size="large" />
            <LovableTag label="Documentation" status="default" mode="light" />
            <LovableTag label="Published" status="success" mode="light" />
            <LovableTag label="Draft" status="default" mode="light" size="tiny" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
