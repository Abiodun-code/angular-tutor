export interface TaskInterface {
  id: number;
  text: string;
  day: string;
  reminder: boolean
}

export const TASKS: TaskInterface[] = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "May 5th at 12:30pm",
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at school",
    day: "May 6th at 1:30pm",
    reminder: true
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "May 7th at 12:30pm",
    reminder: false
  }
]