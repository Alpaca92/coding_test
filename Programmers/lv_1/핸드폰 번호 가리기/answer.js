function solution(phone_number) {
  const phoneLength = phone_number.length;
  const regex = new RegExp(`\\b\\d{${phoneLength - 4}}\\B`, "gi");
  const stars = "*".repeat(phoneLength - 4);

  return phone_number.replace(regex, stars);
}
