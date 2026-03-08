export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export function Stars({ count }: { count: number }) {
  return "★".repeat(Math.floor(count)) + "☆".repeat(5 - Math.floor(count));
}
