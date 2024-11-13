import { type ReactNode } from 'react';

type DetailSectionProps = {
  children: ReactNode;
};

type DetailRowProps = {
  label: string;
  value: ReactNode;
};

type TimePlaceRowProps = {
  dayString: string;
  startTime: string;
  endTime: string;
  place: string;
};

export const DetailSection = ({ children }: DetailSectionProps) => (
  <div className="my-2 bg-background">{children}</div>
);

export const DetailRow = ({ label, value }: DetailRowProps) => (
  <div className="flex min-h-12 w-full items-center justify-start px-4 py-2">
    <div className="flex-none basis-1/4 text-sm text-muted-foreground">
      {label}
    </div>
    <div className="text-sm">{value}</div>
  </div>
);

export const TimePlaceRow = ({
  dayString,
  startTime,
  endTime,
  place,
}: TimePlaceRowProps) => (
  <>
    <div className="flex h-8 w-full items-center justify-start px-4 py-2">
      <div className="flex-none basis-1/4 text-sm text-muted-foreground">
        시간
      </div>
      <div className="text-sm"> {`${dayString} ${startTime} ~ ${endTime}`}</div>
    </div>

    <div className="flex h-8 w-full items-center justify-start px-4 py-2">
      <div className="flex-none basis-1/4 text-sm text-muted-foreground">
        장소
      </div>
      <div className="text-sm">{place}</div>
    </div>
  </>
);
