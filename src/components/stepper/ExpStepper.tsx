
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpStepperProps {
  isVertical?: boolean;
  titles: string[];
  subtitles: (string | null)[];
  completedCount: number;
  isDarkMode?: boolean;
  className?: string;
}

const ExpStepper: React.FC<ExpStepperProps> = ({
  isVertical = true,
  titles,
  subtitles,
  completedCount,
  isDarkMode = false,
  className
}) => {
  const iconSize = 28;
  const lineThickness = 4;
  const listVerticalLineHeight = 44;

  // Validate that titles and subtitles have the same length
  if (titles.length !== subtitles.length) {
    throw new Error('Titles and subtitles length must be the same');
  }

  const getColor = () => isDarkMode ? '#FFFFFF' : '#0C0F24';
  const getSecondaryColor = () => '#0C0F24';
  const getSecondaryShade3 = () => '#858791';
  const getSecondaryShade2 = () => '#CECFD3';

  const CompleteStepIcon = () => (
    <div 
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: iconSize,
        height: iconSize,
        backgroundColor: getColor(),
      }}
    >
      <Check 
        size={16} 
        className={isDarkMode ? 'text-[#0C0F24]' : 'text-white'} 
      />
    </div>
  );

  const IncompleteStepIcon = () => (
    <div 
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: iconSize,
        height: iconSize,
        backgroundColor: getSecondaryShade3(),
      }}
    >
      <div 
        className="rounded-full"
        style={{
          width: 18,
          height: 18,
          backgroundColor: isDarkMode ? getSecondaryShade2() : '#FFFFFF',
        }}
      />
    </div>
  );

  const VerticalProgressBar = ({ isComplete }: { isComplete: boolean }) => (
    <div 
      className="flex flex-col rounded-full"
      style={{
        height: listVerticalLineHeight,
        width: lineThickness,
        backgroundColor: isDarkMode ? '#FFFFFF' : getSecondaryShade3(),
      }}
    >
      {isComplete && (
        <div 
          className="rounded-t-full flex-1"
          style={{
            backgroundColor: getColor(),
          }}
        />
      )}
    </div>
  );

  const ListItem = ({ 
    isComplete, 
    title, 
    subtitle, 
    isLastItem 
  }: { 
    isComplete: boolean;
    title: string;
    subtitle: string | null;
    isLastItem: boolean;
  }) => (
    <div className="flex items-start">
      <div className="flex flex-col items-center">
        {isComplete ? <CompleteStepIcon /> : <IncompleteStepIcon />}
        {!isLastItem && <VerticalProgressBar isComplete={isComplete} />}
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <div 
          className="font-bold text-sm"
          style={{ 
            color: getColor(),
            fontFamily: 'var(--14-600-font-family)',
            fontSize: 'var(--14-600-font-size)',
            fontWeight: 'var(--14-600-font-weight)',
            lineHeight: 'var(--14-600-line-height)'
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div 
            className="text-xs mt-0.5"
            style={{ 
              color: getColor(),
              fontFamily: 'var(--12-400-font-family)',
              fontSize: 'var(--12-400-font-size)',
              fontWeight: 'var(--12-400-font-weight)',
              lineHeight: 'var(--12-400-line-height)'
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );

  const VerticalStepper = () => (
    <div className="flex flex-col space-y-0">
      {titles.map((title, index) => (
        <ListItem
          key={index}
          isComplete={index < completedCount}
          isLastItem={index === titles.length - 1}
          title={title}
          subtitle={subtitles[index]}
        />
      ))}
    </div>
  );

  const HorizontalStepper = () => {
    const renderIconViews = () => {
      const elements: React.ReactNode[] = [];
      
      titles.forEach((_, i) => {
        const isStepComplete = completedCount > i;
        const isStepLineComplete = completedCount > i + 1;

        const circleColor = isStepComplete 
          ? (isDarkMode ? getSecondaryShade2() : getSecondaryColor())
          : getSecondaryShade3();
        
        const lineColor = isStepLineComplete
          ? (isDarkMode ? '#FFFFFF' : getSecondaryColor())
          : getSecondaryShade3();

        elements.push(
          <div
            key={`step-${i}`}
            className={cn(
              "flex items-center justify-center rounded-full border-2",
              isStepComplete ? "border-2" : "border-4"
            )}
            style={{
              width: iconSize,
              height: iconSize,
              borderColor: circleColor,
              backgroundColor: isStepComplete 
                ? (isDarkMode ? '#FFFFFF' : getSecondaryColor())
                : (isDarkMode ? getSecondaryShade2() : 'transparent'),
            }}
          >
            {isStepComplete && (
              <Check 
                size={16} 
                className={isDarkMode ? 'text-[#0C0F24]' : 'text-white'} 
              />
            )}
          </div>
        );

        if (i !== titles.length - 1) {
          elements.push(
            <div
              key={`line-${i}`}
              className="flex-1"
              style={{
                height: lineThickness,
                backgroundColor: lineColor,
              }}
            />
          );
        }
      });

      return elements;
    };

    const renderTitleViews = () => {
      return titles.map((title, i) => (
        <div
          key={i}
          className="flex-1 text-center"
          style={{
            color: getColor(),
            fontFamily: 'var(--12-400-font-family)',
            fontSize: 'var(--12-400-font-size)',
            fontWeight: 'var(--12-400-font-weight)',
            lineHeight: 'var(--12-400-line-height)'
          }}
        >
          {title}
        </div>
      ));
    };

    return (
      <div className="flex flex-col">
        <div className="flex items-center">
          {renderIconViews()}
        </div>
        <div className="flex justify-between mt-2">
          {renderTitleViews()}
        </div>
      </div>
    );
  };

  return (
    <div className={cn("p-4", className)}>
      {isVertical ? <VerticalStepper /> : <HorizontalStepper />}
    </div>
  );
};

export { ExpStepper };
export type { ExpStepperProps };
