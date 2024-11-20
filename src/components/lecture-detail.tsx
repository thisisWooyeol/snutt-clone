import { type ReactNode } from 'react';

import { Input } from '@/components/ui/input';

type DetailSectionProps = {
  children: ReactNode;
};

type DetailRowProps = {
  label: string;
  value: ReactNode;
};

type DetailRowFormProps = {
  label: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    <div className="break-all text-sm">{value}</div>
  </div>
);

export const DetailRowForm = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}: DetailRowFormProps) => (
  <div className="flex min-h-12 w-full items-center justify-start px-4 text-sm">
    <div className="flex-none basis-1/4 text-muted-foreground">{label}</div>
    <Input
      className="h-full rounded-none border-none px-0 shadow-none focus-visible:ring-0"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
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

// FIXME: ad-hoc component with minimal implementation, mock data
export const TimePlaceRowForm = () => (
  <div className="border-b">
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex h-8 w-full items-center text-sm">
        <div className="flex-none basis-1/4 text-muted-foreground">시간</div>
        <div className="flex gap-1">
          <Input
            className="h-full rounded-none border-none text-sm shadow-none focus-visible:ring-0"
            name="dayString"
            placeholder="요일"
            value="수"
            readOnly
          />
          <Input
            className="h-full rounded-none border-none text-sm shadow-none focus-visible:ring-0"
            name="start_time"
            placeholder="시작 시간"
            value="19:00"
            readOnly
          />
          <Input
            className="h-full rounded-none border-none text-sm shadow-none focus-visible:ring-0"
            name="end_time"
            placeholder="종료 시간"
            value="20:30"
            readOnly
          />
        </div>
      </div>
    </div>

    <div className="flex h-8 w-full items-center justify-start px-4 py-2">
      <div className="flex-none basis-1/4 text-sm text-muted-foreground">
        장소
      </div>
      <Input
        className="h-full rounded-none border-none text-sm shadow-none focus-visible:ring-0"
        name="place"
        placeholder="장소"
      />
    </div>
  </div>
);
