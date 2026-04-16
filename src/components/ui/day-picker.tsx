"use client";

import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type TimeSlot = {
  available: boolean;
  time: string;
};

type DayPickerProps = {
  className?: string;
  disabledDate: (date: Date) => boolean;
  loading?: boolean;
  month: Date;
  onDateSelect: (date: Date | undefined) => void;
  onMonthChange: (month: Date) => void;
  onTimeSelect: (time: string) => void;
  selectedDate?: Date;
  selectedTime: string;
  timeSlots: TimeSlot[];
};

export default function DayPicker({
  className,
  disabledDate,
  loading = false,
  month,
  onDateSelect,
  onMonthChange,
  onTimeSelect,
  selectedDate,
  selectedTime,
  timeSlots,
}: DayPickerProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full rounded-md border">
        <div className="flex w-full max-sm:flex-col">
          <Calendar
            classNames={{
              caption_label: "capitalize",
            }}
            className="w-full p-3 [--cell-size:--spacing(11)] sm:w-fit sm:pe-6 md:[--cell-size:--spacing(12)]"
            disabled={disabledDate}
            locale={es}
            mode="single"
            month={month}
            onMonthChange={onMonthChange}
            onSelect={onDateSelect}
            selected={selectedDate}
          />
          <div className="relative w-full max-sm:h-48 sm:w-48 md:w-52">
            <div className="absolute inset-0 py-4 max-sm:border-t">
              <ScrollArea className="h-full sm:border-s">
                <div className="space-y-3">
                  <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                    {timeSlots.map(({ time: timeSlot, available }) => (
                      <Button
                        className="w-full hover:bg-gray-200/70"
                        disabled={loading || !available}
                        key={timeSlot}
                        onClick={() => onTimeSelect(timeSlot)}
                        size="sm"
                        type="button"
                        variant={
                          selectedTime === timeSlot ? "default" : "outline"
                        }
                      >
                        {timeSlot}
                      </Button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
