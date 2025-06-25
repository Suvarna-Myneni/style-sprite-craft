
import "@/components/tags/tags-component.css";
import { TagsHeader } from "./tags/TagsHeader";
import { TagsIntroduction } from "./tags/TagsIntroduction";
import { LovableTagShowcase } from "./tags/LovableTagShowcase";
import { TagsPrinciples } from "./tags/TagsPrinciples";
import { TagVariants } from "./tags/TagVariants";
import { TagUsageExamples } from "./tags/TagUsageExamples";
import { TagsFooter } from "./tags/TagsFooter";

const Tags = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <TagsHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <TagsIntroduction />
        <LovableTagShowcase />
        <TagsPrinciples />
        <TagVariants />
        <TagUsageExamples />
      </div>

      <TagsFooter />
    </div>
  );
};

export default Tags;
