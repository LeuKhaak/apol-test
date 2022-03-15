export const exportData = (usersList) => {
  const data = JSON.stringify(usersList);
  const link = document.createElement("a");
  link.download = "users.json";

  const blob = new Blob([data], { type: "text/plain" });
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
};
