export function formatDate(date) {
      const [year, month, day] = date.split("T")[0].split("-").map(Number);
      const parsedDate = new Date(year, month - 1, day);
    
      return parsedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
}
    
export function formatTime(startTimeString, endTimeString) {
      if (!startTimeString && !endTimeString) return "Time: TBD";

      const format = (time) => {
            if (!time) return "TBD";
            const [hours, minutes] = time.split(":").map(Number);
            const period = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 || 12;
            return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
      };

      const startFormatted = format(startTimeString);
      const endFormatted = format(endTimeString);

      return `${startFormatted} - ${endFormatted}`;
}