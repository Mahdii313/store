export async function authorize() {
  const response = await fetch("/api/me");
  const status = await response.json();
  if (status.authorized) {
    return true;
  } else {
    return false;
  }
}
