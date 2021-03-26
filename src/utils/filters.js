// 全局过滤函数
export function filter_price(val) {
  return "¥" + val;
}
export function filter_device_status(val) {
  const STATUS = { online: "在线", sell: "出售", unline: "离线", stop: "停售" };
  return STATUS[val];
}
