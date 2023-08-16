export function GetToken(allcookie) {
  let cookielist = allcookie.split("; ");
  let token = ""
  cookielist.forEach((element) => {
    if (element.startsWith("token=")) {
      token = element.substring(6, element.length);
    }
  });
  return token;
}
