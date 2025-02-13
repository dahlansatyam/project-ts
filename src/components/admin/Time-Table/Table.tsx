import React, { useState } from "react";

interface TimetableData {
  day: string;
  date: string;
  timeSlots: string[];
  subjects: string[];
  additionalInfo: string[];
}
const initialTimetableData: TimetableData[] = [
  {
    day: "Mon",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
  {
    day: "Tue",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
  {
    day: "Wed",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
  {
    day: "Thu",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
  {
    day: "Fri",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
  {
    day: "Sat",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
  {
    day: "Sun",
    date: "13 Dec",
    timeSlots: [
      "On Leave?",
      "12:00 AM-12:30 AM",
      "12:30 AM-1:00 AM",
      "1:00 AM-1:30 AM",
      "1:30 AM-2:00 AM",
      "2:00 AM-2:30 AM",
      "2:30 AM-3:00 AM",
      "3:00 AM-3:30 AM",
      "3:30 AM-4:00 AM",
      "4:00 AM-4:30 AM",
      "4:30 AM-5:00 AM",
      "5:00 AM-5:30 AM",
      "5:30 AM-6:00 AM",
      "6:00 AM-6:30 AM",
      "6:30 AM-7:00 AM",
      "7:00 AM-7:30 AM",
      "7:30 AM-8:00 AM",
      "8:00 AM-8:30 AM",
      "8:30 AM-9:00 AM",
      "9:00 AM-9:30 AM",
      "9:30 AM-10:00 AM",
      "10:00 AM-10:30 AM",
      "10:30 AM-11:00 AM",
      "11:00 AM-11:30 AM",
      "11:30 AM-12:00 PM",
      "12:00 PM-12:30 PM",
      "12:30 PM-1:00 PM",
      "1:00 PM-1:30 PM",
      "1:30 PM-2:00 PM",
      "2:00 PM-2:30 PM",
      "2:30 PM-3:00 PM",
      "3:00 PM-3:30 PM",
      "3:30 PM-4:00 PM",
      "4:00 PM-4:30 PM",
      "4:30 PM-5:00 PM",
      "5:00 PM-5:30 PM",
      "5:30 PM-6:00 PM",
      "6:00 PM-6:30 PM",
      "6:30 PM-7:00 PM",
      "7:00 PM-7:30 PM",
      "7:30 PM-8:00 PM",
      "8:00 PM-8:30 PM",
      "8:30 PM-9:00 PM",
      "9:00 PM-9:30 PM",
      "9:30 PM-10:00 PM",
      "10:00 PM-10:30 PM",
      "10:30 PM-11:00 PM",
      "11:00 PM-11:30 PM",
      "11:30 PM-12:00 AM",
    ],
    subjects: [
      "NO",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
      "Available",
    ],
    additionalInfo: ["", "", "", "", "", "", "", ""],
  },
];

const Timetable: React.FC = () => {
  const [timetableData, setTimetableData] =
    useState<TimetableData[]>(initialTimetableData);

  const handleCellClick = (dayIndex: number, timeSlotIndex: number) => {
    const updatedTimetableData = [...timetableData];
    const currentStatus =
      updatedTimetableData[dayIndex].subjects[timeSlotIndex];

    if (currentStatus === "Available") {
      updatedTimetableData[dayIndex].subjects[timeSlotIndex] = "Offline";
      updatedTimetableData[dayIndex].additionalInfo[timeSlotIndex] = "";
    } else if (currentStatus === "Offline") {
      updatedTimetableData[dayIndex].subjects[timeSlotIndex] = "Available";
      updatedTimetableData[dayIndex].additionalInfo[timeSlotIndex] = "";
    } else if (currentStatus === "NO") {
      updatedTimetableData[dayIndex].subjects[timeSlotIndex] = "YES";
      for (
        let i = timeSlotIndex + 1;
        i < updatedTimetableData[dayIndex].subjects.length;
        i++
      ) {
        updatedTimetableData[dayIndex].subjects[i] = "--";
        updatedTimetableData[dayIndex].additionalInfo[i] = "";
      }
    } else if (currentStatus === "YES") {
      updatedTimetableData[dayIndex].subjects[timeSlotIndex] = "NO";
      for (
        let i = timeSlotIndex + 1;
        i < updatedTimetableData[dayIndex].subjects.length;
        i++
      ) {
        if (updatedTimetableData[dayIndex].subjects[i] === "--") {
          updatedTimetableData[dayIndex].subjects[i] = "Available";
          updatedTimetableData[dayIndex].additionalInfo[i] = "";
        }
      }
    }

    setTimetableData(updatedTimetableData);
  };

  return (
    <div className="mx-auto  mt-8 h-screen overflow-y-auto">
      <div className="flex items-center justify-center">
        <p className="mb-4 rounded-[43px] bg-[#DC6563] py-2 px-8 text-center text-[24px] font-bold text-white">
          Edit Time Table
        </p>
      </div>
      <table className="mx-auto border-collapse">
        <thead>
          <tr className="bg-[#D9D9D9]">
            <th className="p-2 text-center"></th>
            {timetableData.map((dayData) => (
              <th key={dayData.day} className="p-2 text-center">
                <p className=""> {dayData.day}</p>
                <p className=""> {dayData.date}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetableData[1].timeSlots.map((timeSlot, index) => (
            <tr key={timeSlot}>
              <td className="border border-black p-2 text-center ">
                {timeSlot}
              </td>
              {timetableData.map((dayData, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`border border-white p-2 text-center ${
                    dayData.subjects[index] === "Available"
                      ? "bg-[#11cc2f]"
                      : dayData.subjects[index] === "NO"
                      ? "bg-[#DC6563] text-white"
                      : ""
                  }`}
                  onClick={() => handleCellClick(dayIndex, index)}
                >
                  {dayData.subjects[index]}
                  {dayData.additionalInfo[index] && <br />}
                  {dayData.additionalInfo[index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
