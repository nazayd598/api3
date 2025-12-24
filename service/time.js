export function getServerTime() {
  return {
    time: new Date().toISOString()
  };
}
